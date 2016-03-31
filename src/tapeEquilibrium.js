function tapeEquilibrium(A) {
    var N = A.length;
    var left = 0;
    var right = 0;
    var min = Number.POSITIVE_INFINITY;
    var abs;
    for(var i = 0 ; i < N ; i++){
        right += A[i];
    }
    for(var P = 1 ; P < N ; P++){
        left += A[P-1];
        right -= A[P-1];
        abs = Math.abs(left - right);
        min = abs < min ? abs : min;
    }

    return min;
}
