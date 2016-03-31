function binaryGap(N) {
    var bin = N.toString(2);
    bin = bin.replace(/^0+|0+$/g, "");
    var matches = bin.match(/([^1]{1,}){1,}/g) || [];
    var gap = 0;
    for(var i = 0 ; i < matches.length ; i++){
        gap = Math.max(gap, matches[i].length);
    }
    
    return gap;
}