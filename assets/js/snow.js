/* Snow theme behaviour. Requires jQuery + Foundation 5 (loaded before this file). */
(function ($) {
  'use strict';

  var SCROLL_DURATION_MS = 500;
  var OPEN_GALLERY_HASH = '#photo';

  $(document).foundation();

  // Visiting a post with #photo opens its first gallery image in the lightbox.
  $(function () {
    if (window.location.hash === OPEN_GALLERY_HASH) {
      $('ul[data-clearing] li a').first().trigger('click');
    }
  });

  // Inside the lightbox on tag pages, clicking a thumbnail goes to its post.
  $(document).on('click', '.clearing-blackout .link-to-post', function () {
    var postUrl = $(this).data('post-url');
    if (postUrl) {
      window.location.href = postUrl;
    }
  });

  // Smooth-scroll same-page anchor links.
  $(document).on('click', 'a[href*="#"]:not([href="#"])', function (event) {
    var samePage = location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') &&
      location.hostname === this.hostname;
    if (!samePage || !this.hash) {
      return;
    }
    // getElementById avoids jQuery selector errors on hashes like "#1-intro".
    var targetId = decodeURIComponent(this.hash.slice(1));
    var target = document.getElementById(targetId) || document.getElementsByName(targetId)[0];
    if (target) {
      var $target = $(target);
      event.preventDefault();
      $('html, body').animate({ scrollTop: $target.offset().top }, SCROLL_DURATION_MS);
    }
  });
})(jQuery);
