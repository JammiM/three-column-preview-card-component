import "./scss/reset.scss";
import "./style.scss";
import "./scss/card.scss";

import "./js/axeTestingHandler.js";

import { addCardsToPage } from "./js/card-generator.js";

document.querySelector("#app").innerHTML = `
<main>
  <section class="card-holder">
  </section>
</main>
`;

addCardsToPage(document.querySelector(".card-holder"));
