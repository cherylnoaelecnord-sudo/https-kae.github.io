// Fichier: assets/js/affiliate-consent.js
// But : code minimal pour conserver le consentement utilisateur pour l'affiliation.
// Vous pouvez remplacer ou intégrer à votre CMP existant (Cookiebot, etc.)

(function(){
  var key = 'affiliate_consent';
  function hasConsent(){ return localStorage.getItem(key) === 'true'; }
  function setConsent(v){ localStorage.setItem(key, v ? 'true' : 'false'); }

  // Si pas de consentement, afficher un petit bandeau.
  if (!hasConsent()) {
    var banner = document.createElement('div');
    banner.style = 'position:fixed;left:0;right:0;bottom:0;background:#222;color:#fff;padding:12px;z-index:9999;text-align:center;font-size:14px;';
    banner.innerHTML = 'Ce site utilise des liens d\'affiliation et des cookies de suivi. <button id="aff-accept" style="margin-left:12px;padding:6px 10px;">Accepter</button>';
    document.body.appendChild(banner);
    document.getElementById('aff-accept').addEventListener('click', function(){
      setConsent(true);
      banner.remove();
    });
  }
})();