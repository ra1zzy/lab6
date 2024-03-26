let count = 0;

function cc(card) {
  // Масив карт, які збільшують рахунок на 1
  const increaseCards = [2, 3, 4, 5, 6];
  // Масив карт, які не впливають на рахунок
  const neutralCards = [7, 8, 9];
  // Масив карт, які зменшують рахунок на 1
  const decreaseCards = [10, 'J', 'Q', 'K', 'A'];

  // Перевіряємо, до якої групи належить карта
  if (increaseCards.includes(card)) {
    count++;
  } else if (decreaseCards.includes(card)) {
    count--;
  }

  // Повертаємо рядок з поточним рахунком та рішенням гравця
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}

// Перевірка результатів
console.log(cc(2)); // 1 Bet
console.log(cc(3)); // 2 Bet
console.log(cc(4)); // 3 Bet
console.log(cc(5)); // 4 Bet
console.log(cc(6)); // 5 Bet
console.log(cc(10)); // 4 Hold
console.log(cc('J')); // 3 Hold
console.log(cc('Q')); // 2 Hold
console.log(cc('K')); // 1 Hold
console.log(cc('A')); // 0 Hold
console.log(cc(3)); // 1 Hold
console.log(cc(7)); // 1 Hold
console.log(cc('Q')); // 0 Hold
console.log(cc(8)); // 0 Hold
console.log(cc('A')); // -1 Hold
