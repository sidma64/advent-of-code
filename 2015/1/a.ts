import fs from 'node:fs';

fs.readFile('input.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    const floor = findFloor(data);
    console.log(floor);
});

function findFloor(data: string): number {
    let currentStair = 0;
    for (let char of data) {
        switch (char) {
            case '(':
                currentStair++;
                break;
            case ')':
                currentStair--;
                break;
        }
    }
    return currentStair;
}
