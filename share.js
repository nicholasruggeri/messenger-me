(function($, exports) {

    'use strict';

    var SHARE_POPUP = (function() {

        var $shCt = $(".sharer-popup"),  // classe dell'elemento trigger
            width,
            height,
            pos,
            url;

        function _openPopup(url, width, height) {

            if (!url) return;
            width = width ? width : 600;
            height = height ? height : 600;
            pos = {
                left: screen.width / 2 - width / 2,
                top: screen.height / 2 - height / 2
            };
            window.open(url, "Share", "width=" + width + ",height=" + height + ",left=" + pos.left + ",top=" + pos.top);
        };

        function _twitterShare(url) {
            _openPopup(url, 690, 300);
        };

        function _facebookShare(url) {
            _openPopup(url, 626, 436);
        };

        function _init() {

            if (!$shCt.length) {
                return false;
            }

            $shCt.on("click", function(evt) {

                var $this = $(this);

                url = $this.attr("href");
                evt.preventDefault();
                evt.stopPropagation();

                switch (true) {
                    case /facebook\.com/g.test(url):
                        _facebookShare(url);
                        break;
                    case /twitter\.com/g.test(url):
                        _twitterShare(url);
                        break;
                    default:
                        return false;

                }
            });
        };

        // esporto i metodi pubblici
        return {
            openPopup: _openPopup,
            twitter: _twitterShare,
            facebook: _facebookShare,
            init: _init
        };
    }());

    // exports.SHARE_POPUP = exports.SHARE_POPUP || SHARE_POPUP;

    SHARE_POPUP.init();

}(jQuery, window));