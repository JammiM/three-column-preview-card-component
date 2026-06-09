import "./scss/reset.scss";
import "./style.scss";
import "./scss/card.scss";

import "./js/axeTestingHandler.js";

import javascriptLogo from "./assets/javascript.svg";
import { addCardsToPage } from "./js/card-generator.js";

document.querySelector("#app").innerHTML = `
<section id="center">
  <section id="card-holder">
  </section>
</section>
`;

addCardsToPage(document.querySelector("#card-holder"));
