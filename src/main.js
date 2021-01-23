import ApiService from "@/common/api.service";
import GameHub from "@/hubs/gameHub";
import "@/plugins/veeValidate";
import Vue from "vue";
import VueCookies from "vue-cookies";
import App from "./App.vue";
import elementUi from "./plugins/elementUi";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
Vue.use(elementUi);
Vue.use(GameHub);
Vue.use(VueCookies);

ApiService.init();

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");
