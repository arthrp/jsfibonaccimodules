export function getFibonacci(n) {
    if(n === 1)
        return 0;
    if(n === 2)
        return 1;

    let prev = 0;
    let current = 1;
    let i = 2;

    while(i < n) {
        let tmpCurr = current;
        current = current + prev;
        prev = tmpCurr;
        i++;
    }

    return current;
}