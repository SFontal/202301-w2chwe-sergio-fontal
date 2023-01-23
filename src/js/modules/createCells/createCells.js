const createCells = (totalCells) => {
  if (!totalCells) {
    return [false, false, false, false, false, false, false, false, false];
  }

  const cellRandomStatus = () => {
    for (let i = 0; i < totalCells; i++) {
      const randomStatus = Math.floor(Math.random() * 2);
      const cellStatus = randomStatus === 1;
      arrayCells.push(cellStatus);
    }
  };

  const arrayCells = [];
  cellRandomStatus();

  return arrayCells;
};

export default createCells;
