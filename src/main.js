import { createApp } from "vue";
import App from "./App.vue";

import "@fontsource/koho/200.css";
import "@fontsource/koho/300.css";
import "@fontsource/koho/400.css";
import "@fontsource/koho/500.css";
import "@fontsource/koho/600.css";
import "@fontsource/koho/700.css";
import "./assets/global.css";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faCartShopping,
  faSearch,
  faUser,
  faUserSecret,
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faUserSecret, faUser, faCartShopping, faSearch);

const app = createApp(App);

app.directive("focus", {
  mounted: (el) => el.focus(),
});

app.directive("big", {
  mounted: (el) => (el.style.fontSize = "100px"),
});

app.component("font-awesome-icon", FontAwesomeIcon).mount("#app");
