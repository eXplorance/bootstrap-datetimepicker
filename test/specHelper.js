(function () {
    'use strict';

    var dpHelper = window.dpHelper = window.dpHelper || {};

    dpHelper.Key = {
        escape: 27,
        up: 38,
        down: 40,
        pageUp: 33,
        pageDown: 34,
        enter: 13,
        tab: 9,
        t: 84,
        'delete': 46,
        left: 37,
        right: 39,
        shift: 16,
        control: 17,
        home: 36,
        end: 35
    };

    dpHelper.keyDown = function ($element, options) {
        var defaultOptions = { shiftKey: false, ctrlKey: false },
            e;

        options = $.extend(defaultOptions, options);
        e = $.Event('keydown', options);
        $element.trigger(e);
    };

    dpHelper.keyUp = function ($element, options) {
        var defaultOptions = { shiftKey: false, ctrlKey: false },
            e;

        options = $.extend(defaultOptions, options);
        e = $.Event('keyup', options);
        $element.trigger(e);
    };
}());
