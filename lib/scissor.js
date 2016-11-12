/**
 * scissor.js
 *
 * @copyright (C) 2012
 * @author Emmanuel Garcia
 * @license MIT Licensed
 *
 * Cuts paper for you! and cardboard too ;)
 */

(function($) {

    'use strict';

    $.extend($.fn, {
        scissor: function() {
            return this.each(function() {

                var $elem = $(this),
                    $elemClone = $elem.clone(true),
                    leftPage = $('<div>'),
                    rightPage = $('<div>');

                $elem.after(leftPage);
                leftPage.after(rightPage);

                $elem.css({
                    marginLeft: 0
                }).appendTo(leftPage);

                $elemClone.css({
                    marginLeft: -pageProperties.width
                }).appendTo(rightPage);

            });
        }
    });

})(window.jQuery);
