export function buildPaginateScript(pageHMm, padMm) {
  const contentHMm = pageHMm - (2 * padMm);
  return `
(() => {
  const MM_TO_PX = 3.7795275591;
  const CONTENT_H = ${contentHMm} * MM_TO_PX;
  const MIN_AFTER_HEADING = CONTENT_H * 0.20;

  const source = document.querySelector('#pdf-source');
  if (!source) return;
  const children = Array.from(source.children);

  function getHeight(el) {
    const rect = el.getBoundingClientRect();
    const style = getComputedStyle(el);
    const mt = parseFloat(style.marginTop) || 0;
    const mb = parseFloat(style.marginBottom) || 0;
    return rect.height + mt + mb;
  }

  function isMajorSectionStart(el) {
    return el.tagName === 'DIV' && el.classList.contains('eyebrow');
  }

  function isAnyHeading(el) {
    return /^H[2-6]$/.test(el.tagName) || isMajorSectionStart(el);
  }

  // Build atomic groups that must stay together
  let groups = [];
  let i = 0;
  while (i < children.length) {
    const el = children[i];

    if (isMajorSectionStart(el)) {
      // eyebrow + h2 + first content element = new page trigger
      let grp = [el];
      if (i + 1 < children.length) grp.push(children[i + 1]);
      if (i + 2 < children.length && !isMajorSectionStart(children[i + 2])) {
        grp.push(children[i + 2]);
      }
      groups.push({ els: grp, newPage: true });
      i += grp.length;
    } else if (/^H[3-6]$/.test(el.tagName)) {
      // Subheading: keep with next two siblings
      let grp = [el];
      if (i + 1 < children.length) grp.push(children[i + 1]);
      if (i + 2 < children.length && !isAnyHeading(children[i + 2])
          && !isMajorSectionStart(children[i + 2])) {
        grp.push(children[i + 2]);
      }
      groups.push({ els: grp, newPage: false });
      i += grp.length;
    } else if (el.tagName === 'DIV' && /box|highlight|meltdown/.test(el.className)) {
      // Callout boxes: attach to preceding group if possible
      if (groups.length > 0 && !groups[groups.length - 1].newPage) {
        groups[groups.length - 1].els.push(el);
      } else {
        groups.push({ els: [el], newPage: false });
      }
      i++;
    } else {
      groups.push({ els: [el], newPage: false });
      i++;
    }
  }

  // Paginate with section gaps and smart page breaks
  const SECTION_GAP = 24 * MM_TO_PX;
  const SUB_GAP = 14 * MM_TO_PX;
  let pages = [];
  let currentPage = [];
  let currentHeight = 0;

  function commitPage() {
    if (currentPage.length > 0) {
      pages.push(currentPage);
      currentPage = [];
      currentHeight = 0;
    }
  }

  for (let g = 0; g < groups.length; g++) {
    const group = groups[g];
    let groupH = 0;
    for (const el of group.els) groupH += getHeight(el);

    if (group.newPage && currentPage.length > 0) {
      // If page is thin (<30% full) and the section would fit with a gap, keep on same page
      if (currentHeight < CONTENT_H * 0.30 && currentHeight + SECTION_GAP + groupH <= CONTENT_H) {
        group.els[0].style.marginTop = SECTION_GAP + 'px';
        currentHeight += SECTION_GAP;
      } else {
        commitPage();
      }
      for (const el of group.els) currentPage.push(el);
      currentHeight += groupH;
      continue;
    }

    // Subheading gap
    const isSubhead = /^H[3-6]$/.test(group.els[0].tagName);
    const gap = (isSubhead && currentPage.length > 0) ? SUB_GAP : 0;

    if (currentHeight + gap + groupH <= CONTENT_H) {
      if (gap > 0) group.els[0].style.marginTop = gap + 'px';
      for (const el of group.els) currentPage.push(el);
      currentHeight += gap + groupH;
      continue;
    }

    // Doesn't fit — new page
    commitPage();
    for (const el of group.els) currentPage.push(el);
    currentHeight = groupH;
  }
  commitPage();

  // Post-pass: merge thin trailing pages into the next page
  // Only merge if the next page does NOT start with a major section (eyebrow)
  const MIN_PAGE_FILL = CONTENT_H * 0.30;
  for (let p = 0; p < pages.length - 1; p++) {
    let pageH = 0;
    for (const el of pages[p]) pageH += getHeight(el);
    const nextStart = pages[p + 1][0];
    if (pageH < MIN_PAGE_FILL && !isMajorSectionStart(nextStart)) {
      pages[p + 1] = pages[p].concat(pages[p + 1]);
      pages.splice(p, 1);
      p--;
    }
  }

  // Render page frames
  source.remove();
  document.body.innerHTML = '';

  for (const pageEls of pages) {
    const frame = document.createElement('div');
    frame.style.cssText = [
      'width: 210mm',
      'height: ${pageHMm}mm',
      'padding: ${padMm}mm',
      'box-sizing: border-box',
      'overflow: hidden',
      'page-break-after: always',
    ].join(';');
    for (const el of pageEls) frame.appendChild(el);
    document.body.appendChild(frame);
  }
})();
`;
}
