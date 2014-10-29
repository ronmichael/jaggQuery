

$.fn.sum = function () {
    var sum=0, idx=0, last=this.length;
    for(;idx<last;idx++) sum += parseFloat(this[idx].value);
    return sum;
};

