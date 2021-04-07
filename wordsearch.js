const wordSearch = (letters, word) => {
    if (letters.length === 0) {
        return false;
    }
    const reverseWord = word.split("").reverse().join("");
    console.log(reverseWord);
    let isFound = false;
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word) || l.includes(reverseWord)) {
            isFound = true;
        }
    };

    const transpose = function (matrix) {
        let newArr = [];
        for (i = 0; i < matrix[0].length; i++) {
            let arrTwo = []
            for (j = 0; j < matrix.length; j++) {
                arrTwo.push(matrix[j][i]);
            }
            newArr.push(arrTwo);
        }

        return newArr;
    };
    const verticallyArray = transpose(letters);
    const verticallyJoin = verticallyArray.map(ls => ls.join(''))
    for (l of verticallyJoin) {
        if (l.includes(word) || l.includes(reverseWord)) {
            isFound = true;
        }
    };

    return isFound;
}

// 1, 2, 3, 4, 5
// 6, 7, 8, 9, 1,
//     2, 3, 4, 5, 6

// 1
// 2, 6
// 3, 7, 2
// 4, 8, 3


// [5, 9, 4]

// // row(a) index(b)  row(a+1) index(b-1)   row(a+2)(b-2)
// // a= 0    b = 1     a=1   b= 0           a=2  b=-1
// row[0][1], row[1][0], row[2][-1]
// //  2                 6                    null
// row[0][0], row[1][-1]


// module.exports = wordSearch


