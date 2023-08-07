import fs from 'node:fs';

fs.readFile('input.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    const floor = findFloor(data);
    console.log(floor);
});

function findFloor(data: string): number {
    let currentStair = 0;
    for (let i = 0; i < data.length; i++) {
        switch (data[i]) {
            case '(':
                currentStair++;
                break;
            case ')':
                currentStair--;
                break;
        }
        if (currentStair < 0) return i+1;
    }
    return 0;
}
