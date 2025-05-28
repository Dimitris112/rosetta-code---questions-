function getFinalOpenedDoors(numDoors) {
    const result = [];

    for (let i = 1; i * i <= numDoors; i++) {
        result.push(i * i);
    }
    return result;
}

getFinalOpenedDoors(100);
console.log(getFinalOpenedDoors(100));