Суперсерия Канада-СССР – это 8 товарищеских хоккейных матчей, проводившихся между командами СССР и Канады в 72 (первая суперсерия) и в 74 годах (вторая суперсерия). В этом задании вам предстоит написать функцию, которая вычисляет команду, выигравшую суперсерию.

superseries.js
Реализуйте функцию, которая находит команду победителя для конкретной суперсерии. Победитель определяется как команда, у которой больше побед (не количество забитых шайб) в конкретной серии. Функция принимает на вход массив, в котором каждый элемент — это массив, описывающий счет в конкретной игре (сколько шайб забила Канада и СССР). Результат функции – название страны: 'canada', 'ussr'. Если суперсерия закончилась в ничью, то нужно вернуть null.

// Первое число – сколько забила Канада
// Второе число – сколько забила СССР
```bash
const scores = [
  [3, 7], // Первая игра
  [4, 1], // Вторая игра
  [4, 4],
  [3, 5],
  [4, 5],
  [3, 2],
  [4, 3],
  [6, 5],
];

getSuperSeriesWinner(scores); // 'canada'
```
