import VueCookies from "vue-cookies";

const ACCESS_TOKEN_KEY = "access_token";
const REFRESH_TOKEN_KEY = "refresh_token";
const DOMAIN = "https://puns-corp.github.io";
const PATH = "/web";

export const getAccessToken = () => {
	return VueCookies.get(ACCESS_TOKEN_KEY);
};

export const saveAccessToken = (token) => {
	let date = new Date();
	date.setMinutes(date.getMinutes() + 10080);
	VueCookies.set(ACCESS_TOKEN_KEY, token, date, PATH, DOMAIN);
};

export const destroyAccessToken = () => {
	VueCookies.remove(ACCESS_TOKEN_KEY, PATH, DOMAIN);
};

export const getRefreshToken = () => {
	return VueCookies.get(REFRESH_TOKEN_KEY);
};

export const saveRefreshToken = (token) => {
	let date = new Date();
	date.setFullYear(date.getFullYear() + 1);
	VueCookies.set(REFRESH_TOKEN_KEY, token, date, PATH, DOMAIN);
	VueCookies.set(REFRESH_TOKEN_KEY, token, "", PATH, DOMAIN);
};

export const destroyRefreshToken = () => {
	VueCookies.remove(REFRESH_TOKEN_KEY, PATH, DOMAIN);
};

export default {
	getAccessToken,
	saveAccessToken,
	destroyAccessToken,
	getRefreshToken,
	saveRefreshToken,
	destroyRefreshToken,
};
