
$.fn.sum = function () {
    var sum = 0, idx = 0, last = this.length;
    for(; idx < last; idx++) {
        var v = parseFloat(this[idx].value);
        if(!isNaN(v)) sum += v;
    }
    return sum;
};


$.fn.min = function () {
    var min = null, idx = 0, last = this.length;
    for (; idx < last; idx++) {
        var v = parseFloat(this[idx].value);
        if(!isNaN(v) && (min===null || v<min)) min = v;
    }
    return min;
};


$.fn.max = function () {
    var min = null, idx = 0, last = this.length;
    for (; idx < last; idx++) {
        var v = parseFloat(this[idx].value);
        if(!isNaN(v) && (min===null || v>min)) min = v;
    }
    return min;
};
