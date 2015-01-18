(function ($) {

    $.fn.bgRotator = function (options) {


        var settings = $.extend({
            czasWyswietlenia: 10000,
            czasPrzejscia: 50000

        }, options);

        //console.log('this', this);

        var index = 0,
            items = this,
            interval;
            var isPlay = true;

        items.eq(index).fadeIn(settings.czasPrzejscia);

        function go() {
            interval = setInterval(zmien, settings.czasWyswietlenia);
        }

        go()

        function zmien() {

            index++;
            var modulo = index % items.length;
            items.eq(modulo - 1).fadeOut(1000);
            items.eq(modulo).fadeIn(1000);
        }

        return {

            toggle: function () {
              isPlay ?  clearInterval(interval): go();

                isPlay = !isPlay;

                $(document).trigger('toggle', isPlay);

            }

        }


    }


})(jQuery);




