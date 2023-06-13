import getMovimientos from "./services/getMovimientos.js";
import printMovimientos from "./modules/printMovimientos.js";
import { URL_API } from "./services/data.js";
import deletePrintedMovimientos from "./modules/deletePrintedMovimientos.js";
import submitMovimiento from "./modules/submitMovimientos.js";

const tbody = document.getElementById("tablebody");
const form = document.getElementById("form");

document.addEventListener("DOMContentLoaded", async () => {
  const movimientos = await getMovimientos(URL_API);
  printMovimientos(movimientos, tbody);

  //---PETICIÓN DELETE
  const deleteButtons = document.querySelectorAll(".button--delete");
  deletePrintedMovimientos(deleteButtons, URL_API);

});

//--PETICION POST
form.addEventListener("submit", (e) => {
  e.preventDefault();
  submitMovimiento(form);
 })
