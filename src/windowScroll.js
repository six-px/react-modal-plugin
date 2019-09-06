/* eslint-disable */
export default function windowScroll() {
  const top = window.pageYOffset
  || document.documentElement.scrollTop
  || document.body.scrollTop
  || 0

  const left = window.pageXOffset
    || document.documentElement.scrollLeft
    || document.body.scrollLeft
    || 0

  return {top, left}
}