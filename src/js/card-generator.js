import cardData from "./data.json";

export function addCardsToPage(element) {
  let htmlTemplate = "";

  cardData.map((card) => {
    const { heading, description, colour } = card;
    const singleCardTemplate = `
    <article class="card" style="background-color: ${colour};" >
        <picture>
            <img src=${
              new URL("../assets/icon-" + heading + ".svg", import.meta.url)
                .href
            } alt="${heading} Logo"/>
        </picture>
        <h1>${heading}</h1>
        <p>${description}</p>
        <button type="button">Learn More</button>
    </article>`;
    htmlTemplate += singleCardTemplate;
  });

  element.innerHTML = htmlTemplate;
}
