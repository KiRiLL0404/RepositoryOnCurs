'use strict'

const isNamber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
}

const main = function (numGamer) {
    const randomNum = Math.round(Math.random() * 100);

    const testOnNambers = function () {
        if (!isNamber(numGamer) && numGamer !== null) {
            numGamer = prompt("Введите число!");
            testOnNambers();
        }
        if (numGamer === null) {
            alert("Игра окончена");
        }
    }

    const numberComparison = function () {
        if (numGamer === null) return
        else {

            if (+numGamer > randomNum) {
                numGamer = prompt("Заданное число меньше");
                testOnNambers();
                numberComparison();
            }

            if (+numGamer < randomNum) {
                numGamer = prompt("Заданное число больше");
                testOnNambers();
                numberComparison();
            }
            else {
                alert("Поздравляю вы победили!");
                return
            }
        }
    }

    testOnNambers();
    numberComparison();

}

main(prompt("Угадайте число от 1 до 100"));
