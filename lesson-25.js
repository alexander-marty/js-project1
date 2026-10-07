// Методом prompt получите ответ пользователя на вопрос 
// Сколько будет 7 + или - 15.
// Если ответ верен - вывести в консоль слово Успех, если нет - Вы робот.
// Если ввести Я не робот - успех

const answer = prompt(`What is 7 plus or minus 15?`);
//const answer1 = prompt(`Are you a robot?`);

switch (answer) {
    case `23`:
    case `-8`:
    case `I'm not a robot`:
        console.log(`Success`);
        break;
    default:
        console.log(`You are a robot`);
}