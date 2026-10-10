(() => {
  'use strict';

  const config = window.SITE_ANALYTICS || {};
  const configured =
    /^\d+$/.test(String(config.project)) &&
    /^[a-zA-Z0-9]+$/.test(config.security || '');
  const privacySignal =
    navigator.globalPrivacyControl === true ||
    navigator.doNotTrack === '1' ||
    window.doNotTrack === '1';

  if (
    !configured ||
    privacySignal ||
    !/^https?:$/.test(location.protocol) ||
    ['localhost', '127.0.0.1'].includes(location.hostname)
  ) {
    return;
  }

  window.sc_project = Number(config.project);
  window.sc_security = config.security;
  window.sc_invisible = 1;
  window.sc_https = 1;
  window.sc_remove_link = 1;

  const script = document.createElement('script');
  script.src = 'https://www.statcounter.com/counter/counter.js';
  script.async = true;
  script.referrerPolicy = 'strict-origin-when-cross-origin';
  document.head.appendChild(script);
})();
