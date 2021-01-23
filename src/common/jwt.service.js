import VueCookies from "vue-cookies";

const ACCESS_TOKEN_KEY = "access_token";
const REFRESH_TOKEN_KEY = "refresh_token";
const DOMAIN = "puns-corp.github.io";
const PATH = "/web";

const defaultParams = {
	expires: "7h",
};

export const getAccessToken = () => {
	return VueCookies.get(ACCESS_TOKEN_KEY);
};

export const saveAccessToken = (token) => {
	VueCookies.set(
		ACCESS_TOKEN_KEY,
		token,
		defaultParams.expires,
		PATH,
		DOMAIN,
	);
};

export const destroyAccessToken = () => {
	VueCookies.remove(ACCESS_TOKEN_KEY, PATH, DOMAIN);
};

export const getRefreshToken = () => {
	return VueCookies.get(REFRESH_TOKEN_KEY);
};

export const saveRefreshToken = (token) => {
	VueCookies.set(
		REFRESH_TOKEN_KEY,
		token,
		defaultParams.expires,
		PATH,
		DOMAIN,
	);
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
