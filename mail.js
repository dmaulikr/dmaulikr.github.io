// The email address is put together here, in the browser, so it never sits in a page's
// source, where bots that collect addresses would find it. It is stored reversed, in two halves.
(function () {
  var address = ['rkiluamd', 'moc.liamg'].map(function (half) {
    return half.split('').reverse().join('');
  }).join('@');

  document.querySelectorAll('[data-mail]').forEach(function (link) {
    link.setAttribute('aria-live', 'polite');
    link.addEventListener('click', function (event) {
      var subject = link.getAttribute('data-subject');
      if (subject) {
        // A button that writes straight away: the click opens the mail app.
        link.href = 'mailto:' + address + '?subject=' + encodeURIComponent(subject);
        return;
      }
      if (link.hasAttribute('data-shown')) {
        return; // Shown already: this click opens the mail app.
      }
      // The first click shows the address and makes the link write to it.
      event.preventDefault();
      link.href = 'mailto:' + address;
      link.textContent = address;
      link.setAttribute('data-shown', '');
    });
  });
})();
