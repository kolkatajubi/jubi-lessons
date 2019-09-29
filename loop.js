async function loop(i, stop) {
    if (i > stop) {
        console.log('done');
        return;
    }
    else {
        console.log(i);
        await A();
        await B();
        loop(i + 1, stop);
    }
}

function A() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('A');
            return resolve();
        }, 2000);
    });
}

function B() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('B');
            return resolve();
        }, 1000);
    });
}

loop(1, 3);