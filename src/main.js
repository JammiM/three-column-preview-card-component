import "./style.scss";
import javascriptLogo from "./assets/javascript.svg";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
<section id="center">
dcd
  <button id="counter" type="button" class="counter"></button>
</section>
`;

setupCounter(document.querySelector("#counter"));
