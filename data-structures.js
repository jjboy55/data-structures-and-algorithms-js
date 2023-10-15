// ----------------------------------------BIG 0 NOTATION--------------------------------------------//
//EXAMPLES O(n) time complexities

function logAtleast5(n) {
    for (let index = 0; index <= Math.max(5,n); index++) {
        console.log(index);
    }
}

logAtleast5(10);

