const joinCells = (arrayCells) => {
  if (!arrayCells) {
    return [
      { row: 1, column: 1, isAlive: false, nextStatus: false },
      { row: 1, column: 2, isAlive: false, nextStatus: false },
      { row: 1, column: 3, isAlive: false, nextStatus: false },
      { row: 2, column: 1, isAlive: false, nextStatus: false },
      { row: 2, column: 2, isAlive: false, nextStatus: false },
      { row: 2, column: 3, isAlive: false, nextStatus: false },
      { row: 3, column: 1, isAlive: false, nextStatus: false },
      { row: 3, column: 2, isAlive: false, nextStatus: false },
      { row: 3, column: 3, isAlive: false, nextStatus: false },
    ];
  }

  const joinedCells = [];
  arrayCells.forEach((cell, index) => {
    let row = 0;
    let column = 1;

    if (index === 3 || index === 6) {
      row++;
    }

    joinedCells.push({
      row,
      column,
      isAlive: arrayCells[index],
      nextStatus: arrayCells[index],
    });

    if (column === 3) {
      column = 1;
    }
  });

  return joinedCells;
};

export default joinCells;
