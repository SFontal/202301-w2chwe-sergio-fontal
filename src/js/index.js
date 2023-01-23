import createGrid from "./modules/createGrid/createGrid.js";
import createCells from "./modules/createCells/createCells.js";
import joinCells from "./modules/joinCells/joinCells.js";

createGrid(joinCells(createCells(1961)));
