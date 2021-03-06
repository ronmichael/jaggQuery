
$.fn.sum = function () {
    var sum = 0, idx = 0, last = this.length;
    for(; idx < last; idx++) {
        var v = parseFloat(this[idx].value);
        if(!isNaN(v)) sum += v;
    }
    return sum;
};


$.fn.avg = function () {
    var sum = 0, idx = 0, count = 0, last = this.length;
    for(; idx < last; idx++) {
        var v = parseFloat(this[idx].value);
        if(!isNaN(v)) count++, sum += v;
    }
    if(count==0) return null;
    else return sum/count;
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
    var max = null, idx = 0, last = this.length;
    for (; idx < last; idx++) {
        var v = parseFloat(this[idx].value);
        if(!isNaN(v) && (max===null || v>max)) max = v;
    }
    return max;
};
