import Contact from "./Container/Contact";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserEdit,
  faUserMinus,
  faPlusSquare,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

library.add(faUserEdit, faUserMinus, faPlusSquare, faSearch, faUser);
function App() {
  return <Contact></Contact>;
}

export default App;
