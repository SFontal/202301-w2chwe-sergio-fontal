const createGrid = (objectCells) => {
  objectCells.forEach((cell) => {
    const cellOwnContainer = document.createElement("div");

    cellOwnContainer.setAttribute(
      "class",
      `grid__cell-row-${cell.row} grid__cell-column-${cell.column} grid__cell-status-${cell.isAlive}`
    );

    cellOwnContainer.innerHTML = cell.isAlive ? 1 : 0;

    document.body.appendChild(cellOwnContainer);
  });
};

export default createGrid;
