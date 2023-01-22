import createCells from "./modules/createCells/createCells.js";
import joinCells from "./modules/joinCells/joinCells.js";

console.table(joinCells(createCells(1)));
