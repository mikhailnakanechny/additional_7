module.exports = function solveSudoku(matrix) {

    function findEmptyCell(matrix, r) {
        for (let i = r; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (matrix[i][j] === 0) {
                    return {r: i, c: j}
                }
            }
        }
        return false;
    }

    function checkRow(matrix, r, num) {
        for (let i = 0; i < 9; i++) {
            if (matrix[r][i] === num) {
                return false;
            }
        }
        return true;
    }

    function checkColumn(matrix, c, num) {
        for (let i = 0; i < 9; i++) {
            if (matrix[i][c] === num) {
                return false;
            }
        }
        return true;
    }

    function checkSquare(matrix, r, c, num) {
        r = Math.floor(r / 3) * 3;
        c = Math.floor(c / 3) * 3;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (matrix[r + i][c + j] === num) {
                    return false;
                }
            }
        }
        return true;
    }

    function checkAll(matrix, r, c, num) {
        return checkRow(matrix, r, num) && checkColumn(matrix, c, num) && checkSquare(matrix, r, c, num);
    }

    function solve(matrix, r, c) {
        let cell = findEmptyCell(matrix, r);
        r = cell.r;
        c = cell.c;
        if (cell === false) {
            return true;
        }
        for (let num = 1; num < 10; num++) {
            if (checkAll(matrix, r, c, num)) {
                matrix[r][c] = num;
                if (solve(matrix, r, c)) {
                    return true
                }
                matrix[r][c] = 0;
            }
        }
        return false;
    }

        solve(matrix, 0, 0);
        return matrix;

    };