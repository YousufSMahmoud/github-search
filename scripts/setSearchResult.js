import { cardElement } from "./elements";

function setSearchResult(data) {
  let article;
  if (data.length === 0) {
    article = "<p>Results not Found<p>";
  } else if (data === null) {
    article = "";
  } else {
    data.map((item) => {
      article += `
      <article>
      <h2 class="name">${item.login}<h2>
      <img class="img" src="${item.avatar_url}"></img>
      </article>
      `;
    });
  }

  cardElement.innerHTML = article;
}
export default setSearchResult;
