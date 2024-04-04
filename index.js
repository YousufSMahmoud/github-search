import {
  searchInput,
  searchUserElement,
  messageElement,
  buttonElement,
} from "./scripts/elements";
import performSearch from "./scripts/performSearch";
import setLoadingState from "./scripts/setLoadingState";
import setMessage from "./scripts/setMessage";
import setSearchResult from "./scripts/setSearchResult";

buttonElement.addEventListener("click", (event) => {
  event.preventDefault();
  setMessage("");
  let searchTerm = searchInput.value;
  if (searchTerm.trim() == "") {
    setMessage("Please write correct name");
    setSearchResult(null);
    return;
  }

  performSearch(searchTerm, searchUserElement.checked);
});
