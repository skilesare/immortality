require(["gitbook"], function(gitbook) {
    var adInsertPoint = '.page-inner section'
    , ad
    ;

  gitbook.events.bind("start", function(e, cnf) {
    var config = cnf.adsense
      , adsByGoogleScript
      ;

    // Use custom insert point if defined
    if (config.element) {
      adInsertPoint = config.element;
    }

    // Inject script to head.
    adsByGoogleScript = document.createElement('script');
    adsByGoogleScript.src = '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
    adsByGoogleScript.setAttribute('async', true);
    document.body.appendChild(adsByGoogleScript);

    // Generate <ins> (ad)
    ad = document.createElement('ins');
    ad.style = 'display: block';
    ad.className = 'adsbygoogle';
    ad.setAttribute('data-ad-client', config.client);
    ad.setAttribute('data-ad-slot', config.slot);
    ad.setAttribute('data-ad-format', config.format);

    // Add the ad to the DOM
    //document.querySelector(adInsertPoint).appendChild(ad);
    //document.querySelector(adInsertPoint).parentNode.appendChild(ad);
    $(adInsertPoint).before(ad);

    (adsbygoogle = window.adsbygoogle || []).push({});
  });

  // I insert ad again when switching pages
  gitbook.events.bind("page.change", function() {
    if (ad) {
      $(adInsertPoint).before(ad);
    }
  });
});
