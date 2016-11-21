var Key = {
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

function keyDown(element, options) {
    var defaultOptions = {
        shiftKey: false,
        ctrlKey: false
    };
    options = $.extend(defaultOptions, options);
    var e = $.Event("keydown", options);
    element.trigger(e);
}

function keyUp(element, options) {
    var defaultOptions = {
        shiftKey: false,
        ctrlKey: false
    };
    options = $.extend(defaultOptions, options);
    var e = $.Event("keyup", options);
    element.trigger(e);
}