const getSuperSeriesWinner = (arr) => {
  let canadaWins = 0;
  let ussrWins = 0;
  arr.forEach(item => {
    if(item[0] > item[1]) canadaWins++;
    if(item[0] < item[1]) ussrWins++;
  });
  if (canadaWins > ussrWins) return 'Canada';
  if (ussrWins > canadaWins) return 'USSR';
  return null;
}

// Tests
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

console.log(getSuperSeriesWinner(scores)); // 'canada'
