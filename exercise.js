function printRange (start, end, skip) {
    if (!skip) {
        skip = 1;
    }
    if (!end) {
        end = start;
        start = 0;
    }
    for (var i = start; i < end; i += skip) {
        console.log(i);
    }
}

printRange(4);