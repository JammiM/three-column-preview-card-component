import cardData from "./data.json";

export function addCardsToPage(element) {
  if (!element) return;

  const fragment = document.createDocumentFragment();

  cardData.forEach(({ heading, description }) => {
    const iconUrl = new URL(
      `../assets/icon-${heading.toLowerCase()}.svg`,
      import.meta.url
    ).href;

    const articleElem = document.createElement("article");

    articleElem.className = "card";
    articleElem.dataset.cardColour = heading;

    articleElem.innerHTML = `
      <picture>
        <img src="${iconUrl}" alt="${heading} logo" loading="lazy" />
      </picture>
      <h1 class="card-heading">${heading.toUpperCase()}</h1>
      <p class="card-description">${description}</p>
      <button data-colour="${heading}" class="card-learn-btn" type="button">Learn More</button>
    `;

    fragment.append(articleElem);
  });

  element.replaceChildren(fragment);
}
