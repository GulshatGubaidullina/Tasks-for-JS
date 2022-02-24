/* Напишите однострочное решение, которое вычисляет сумму квадратных 
корней для всех чётных чисел целочисленного массива. */
console.log("---1---");
console.log(
    [11, 8, 9, 2, 0, 5, 17]
        .filter(element => !(element % 2))
        .reduceRight((sum, element) => sum + Math.sqrt(element), 0));

/* Яблоко стоит 1.15, апельсин стоит 2.30.Сколько они стоят вместе – 
чему равна сумма 1.15 + 2.30 с точки зрения JavaScript ? */
console.log("---2---");
let applePrice = 1.15;
let orangePrice = 2.30;
console.log(applePrice + orangePrice);

/* Треугольник.Напишите цикл, выводит такой треугольник:
*
**
***
****
*****
****** */
console.log("---3---");
const count = 6;
for (let i = 0; i < count; i++) {
    for (let j = 0; j <= i; j++) {
        console.log("*");
    }
    console.log("\n");
}

/* Напишите программу, которая выводит через console.log 
все числа от 1 до 100, с двумя исключениями.Для чисел,
нацело делящихся на 3, она должна выводить ‘Fizz’, а для чисел,
делящихся на 5(но не на 3) – ‘Buzz’.Когда сумеете – исправьте её так,
чтобы она выводила «FizzBuzz» для всех чисел, которые делятся и на 3 и на 5. */
console.log("---4---");
for (let i = 1; i < 100; i++) {
    if (i % 3 == 0 & i % 5 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}

// Напишите скрипт, который считает количество секунд в часе.
console.log("---5--- ");
console.log(`Количество секунд в часе ${60 * 60}`);

/* Спросите имя пользователя с помощью методы prompt.
Выведите с помощью alert сообщение 'Ваше имя %имя%'. */
console.log("---6---");
const name = prompt('Пожалуйста, введите имя');
if (name) {
    alert(`Ваше имя ${name}`);
} else alert("Ошибка!");

/* Создайте переменную str и присвойте ей значение 'abcde'.
Обращаясь к отдельным символам этой строки выведите 
на экран символ 'a', символ 'c', символ 'e'. */
console.log("---7---");

let str = "abcde";
console.log(str[0]);
console.log(str[2]);
console.log(str[4]);

/* Создайте ассоциативный массив(объект) заработных плат obj.
Выведите на экран зарплату Пети и Коли. */
console.log("---8---");

let obj = {
    "Коля": "1000",
    "Вася": "500",
    "Петя": "200",
}
console.log(obj["Петя"]);
console.log(obj["Коля"]);

/* Создайте массив arr с элементами 2, 5, 3, 9. 
Умножьте первый элемент массива на второй,
а третий элемент на четвертый.Результаты сложите,
присвойте переменной result.Выведите на экран значение этой переменной. */
console.log("---9---");

let arr = [2, 5, 3, 9];
let result = arr[0] * arr[1] + arr[2] * arr[3];
console.log(result);

/* Дан массив[[1, 2, 3], [4, 5, 6], [7, 8, 9]].
Выведите на экран цифру 4из этого массива. */
console.log("---10---");

let arr1 = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9]];
console.log(arr1[1][0]);

/* В переменной min лежит число от 0 до 59. 
Определите в какую четверть часа попадает это число
    (в первую, вторую, третью или четвертую). */
console.log("---11---");

let min = Math.floor(Math.random() * 60);
if (min <= 15) console.log("1 четверть часа");
else if (min <= 30) console.log("2 четверть часа");
else if (min <= 45) console.log("3 четверть часа");
else if (min <= 59) console.log("4 четверть часа");

/* Если переменная a меньше нуля, то выведите 'Верно', иначе выведите 'Неверно'.
Проверьте работу скрипта при  a, равном 1, 0, -3. */
console.log("---12---");

let arrA = [1, 0, -3];
for (let i = 0; i < arrA.length; i++) {
    let a = arrA[i];
    if (a < 0) console.log("Верно");
    else console.log("Неверно");
}

/* Если переменная test равна true, то выведите 'Верно',
иначе выведите 'Неверно'.Проверьте работу скрипта при  test,
равном true, false.Напишите два варианта скрипта -
с короткой записью и с длинной. */
console.log("---13---");

let arrTest = [true, false];
for (let i = 0; i < arrTest.length; i++) {
    let test = arrTest[i];
    if (test === true) console.log("Верно");
    else console.log("Неверно");
}

let arrTest2 = [true, false];
for (const val of arrTest2) val === true ? console.log("Верно") : console.log("Неверно");

/* Переменная num может принимать 4 значения: 1, 2, 3 или 4. 
Если она имеет значение '1', то в переменную result запишем 'зима',
если имеет значение '2' – 'весна' и так далее.Решите задачу через
switch-case. */
console.log("---14---");

let num = Math.floor(Math.random() * 4) + 1;
console.log(num);
switch (num) {
    case 1:
        console.log("Зима");
        break;
    case 2:
        console.log("Весна");
        break;
    case 3:
        console.log("Лето");
        break;
    case 4:
        console.log("Осень");
        break;
}

/* Дан массив с элементами[1, 2, 3, 4, 5].
С помощью цикла for выведите все эти элементы на экран. */
console.log("---15---");

let arrElement = [1, 2, 3, 4, 5];
for (let i = 0; i < arrElement.length; i++) console.log(arrElement[i]);

// Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b.
console.log("---16---");

let [a, b] = [10, 3];
console.log(a % b);

// Возведите 2 в 10 степень.Результат запишите в переменную st.
console.log("---17---");

let st = Math.pow(2, 10);
console.log(st);

/* Найдите квадратный корень из 379. 
Результат округлите до целых, до десятых, до сотых. */
console.log("---18---");

let sqrtNumber = Math.sqrt(379);
console.log(Math.ceil(sqrtNumber), sqrtNumber.toFixed(1), sqrtNumber.toFixed(2));

/* Даны числа 4, -2, 5, 19, -130, 0, 10. 
Найдите минимальное и максимальное число. */
console.log("---19---");

let arrNumbers = [4, -2, 5, 19, -130, 0, 10];
console.log(`Минимальное число в массиве ${Math.min(...arrNumbers)}`);
console.log(`Максимальное число в массиве ${Math.max(...arrNumbers)}`);

//  Выведите на экран случайное целое число от 1 до 100.
console.log("---20---");

console.log(Math.floor(Math.random() * 100) + 1);

/*  Дана строка 'aaa bbb ccc'.Вырежите из нее слово 'bbb' тремя разными
способами(через substr, substring, slice). */
console.log("---21---");

let strABC = "aaa bbb ccc";
console.log(strABC.substr(4, 3));
console.log(strABC.substring(4, 7));
console.log(strABC.slice(4, 7));

// Дана строка 'js'.Сделайте из нее строку 'JS'.
console.log("---22---");

let strJs = "js";
console.log(strJs.toUpperCase());

// Дана строка 'я учу javascript!'.Найдите количество символов в этой строке.
console.log("---23---");

let strLearnJs = 'я учу javascript!';
console.log(strLearnJs.length);

// Дана строка 'я учу javascript!'.Найдите позицию подстроки 'учу'.
console.log("---24---");

console.log(strLearnJs.indexOf('учу'));

/* Дана строка 'Я-учу-javascript!'.Замените все дефисы 
на '!' с помощью глобального поиска и замены. */
console.log("---25---");

let strLearnJsR = 'Я-учу-javascript!';
console.log(strLearnJsR.replace(/-/g, '!'));

/* Дана строка 'я учу javascript!'.С помощью метода split запишите 
каждое слово этой строки в отдельный элемент массива. */
console.log("---26---");

let arrSplit = strLearnJs.split(' ');
console.log(arrSplit);

/* Дан массив['я', 'учу', 'javascript', '!'].
С помощью метода join преобразуйте массив в строку 'я+учу+javascript+!'. */
console.log("---27---");

let arrLearnJs = ['я', 'учу', 'javascript', '!'];
console.log(arrLearnJs.join('+'));

// Преобразуйте первую букву строки в верхний регистр.
console.log("---28---");

console.log(strLearnJs[0].toUpperCase());