
let details = navigator.userAgent;
let regexp = /android|iphone|kindle|ipad/i;
export const isMobileDevice = regexp.test(details);