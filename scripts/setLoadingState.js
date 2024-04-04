import { loaderElement } from "./elements";
import setSearchResult from "./setSearchResult";

export default function (loadingState) {
  if (loadingState === true) {
    loaderElement.classList.add("hidden");
  } else {
    loaderElement.classList.remove("hidden");
  }
}
