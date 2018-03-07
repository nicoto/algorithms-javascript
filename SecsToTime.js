function formatDuration(seconds) {
    if (seconds === 0) return 'now';
    return [
        { name: 'year', secs: 60 * 60 * 24 * 365 },
        { name: 'day', secs: 60 * 60 * 24 },
        { name: 'hour', secs: 60 * 60 },
        { name: 'minute', secs: 60 },
        { name: 'second', secs: 1 }
    ]
    .map(time => {
        if (seconds < time.secs) return;
        let amt = Math.floor(seconds / time.secs);
        seconds -= amt * time.secs;
        return amt + ' ' + time.name + (amt > 1 ? 's' : '');
    })
    .filter(v => v)
    .reduce((str, v, i, arr) => {
        return str += ((i !== arr.length - 1) ? ', ' : ' and ') + v;
    });
}
const result = formatDuration(3662);
console.log(result)