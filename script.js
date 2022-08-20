'use strict'

const isNamber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
}

const main = function (randomNum, counter) {
    let numGamer = prompt("Угадайте число от 1 до 100");

    const testOnNambers = function () {
        if (!isNamber(numGamer) && numGamer !== null) {
            numGamer = prompt("Введите число!");
            testOnNambers();
        }
        if (numGamer === null) {
            alert("Игра окончена");
            return
        }

        if (counter === 0) {
            if (confirm("попытки закончились, хотите сыграть ещё?")) main(Math.round(Math.random() * 100), 10);
            return
        }
    }

    const numberComparison = function () {
        if (numGamer === null || counter === 0) return
        else {

            if (+numGamer > randomNum) {
                counter--;
                numGamer = prompt("Заданное число меньше, осталось попыток " + counter);
                testOnNambers();
                numberComparison();
            }

            else if (+numGamer < randomNum) {
                counter--;
                numGamer = prompt("Заданное число больше, осталось попыток " + counter);
                testOnNambers();
                numberComparison();
            }

            else if (+numGamer === randomNum) {
                if (confirm("Поздравляю вы победили! Хотели бы сыграть ещё?")) {
                    main(Math.round(Math.random() * 100), 10);
                } else return
            }
        }
    }

    testOnNambers();
    numberComparison();


}
main(Math.round(Math.random() * 100), 10);
