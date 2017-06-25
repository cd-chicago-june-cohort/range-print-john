function printRange (start, end, skip) {
    if (! skip && !end) {
        end = start;
        start = 0;
        skip = 1;
    } else if (!skip) {
        skip = 1;
    }
    for (var i = start; i < end; i += skip) {
        console.log(i);
    }
}

printRange(4);