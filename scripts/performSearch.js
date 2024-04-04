import setLoadingState from "./setLoadingState";
import setSearchResult from "./setSearchResult";
const USERS_API = "https://api.github.com/search/users?q=";

function performSearch(searchTerm, condition) {
  let type = "+type:org";
  if (condition === true) {
    type = "+type:user";
  }
  setLoadingState(false);

  fetch(`${USERS_API}${searchTerm}${type}`)
    .then((result) => result.json())
    .then((response) => setSearchResult(response.items))
    .finally(() => setLoadingState(true));
}

export default performSearch;
