const test1 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('1');
            resolve();
        }, 200);
    });
};
const test2 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('2');
            resolve();
        }, 200);
    });
};
const test3 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('3');
            resolve();
        }, 200);
    });
};


const runTest = async () => {
    console.log('Start');
    await test1();
    console.log('1/2');
    await test2();
    console.log('1/4');
    await test3();
    console.log('End');
};

// Start > 1 > 1/2 > 2 > 1/4 > End
