import "./style.scss";
import javascriptLogo from "./assets/javascript.svg";
import { setupCounter } from "./counter.js";
import { addCardsToPage } from "./js/card-generator.js";

document.querySelector("#app").innerHTML = `
<section id="center">
  <section id="card-holder">
  </section>
  <button id="counter" type="button" class="counter"></button>
</section>
`;

setupCounter(document.querySelector("#counter"));
addCardsToPage(document.querySelector("#card-holder"));
