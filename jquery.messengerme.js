(function($, exports) {

    'use strict';

    $.fn.messengerme = function(options) {

        var defaults = {
                width: 470,
                height: 640
            },
            settings = $.extend({}, defaults, options);

        return this.each(function() {

            var $this = $(this);

            $this.on("click", function(e) {

                var url = $this.attr("href");
                e.preventDefault();
                e.stopPropagation();

                _openPopup(url);

            });

            function _openPopup(url) {

                if (!url) return;

                var width = settings.width,
                    height = settings.height,
                    pos = {
                        left: screen.width / 2 - width / 2,
                        top: screen.height / 2 - height / 2
                    };

                window.open(
                    url,
                    "_blank",
                    "width=" + width + ",height=" + height + ",left=" + pos.left + ",top=" + pos.top
                );

            };

        });
    };


}(jQuery, window));