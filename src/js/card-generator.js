import cardData from "./data.json";

export function addCardsToPage(element) {
  let htmlTemplate = "";

  cardData.map((card) => {
    const { heading, description, colour } = card;

    const iconUrl = new URL(
      `../assets/icon-${heading.toLowerCase()}.svg`,
      import.meta.url
    ).href;

    const singleCardTemplate = `
    <article class="card" data-card-colour=${heading} > 
        <picture>
            <img src=${iconUrl} alt="${heading} Logo"/>
        </picture>
        <h1 class="card-heading">${heading.toLocaleUpperCase()}</h1>
        <p class="card-description">${description}</p>
        <button data-colour=${heading} class="card-learn-btn" type="button">Learn More</button>
    </article>`;
    htmlTemplate += singleCardTemplate;
  });

  element.innerHTML = htmlTemplate;
}
