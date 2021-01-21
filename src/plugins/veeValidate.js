import { extend } from "vee-validate";
import {
	confirmed,
	email,
	max,
	max_value,
	min,
	min_value,
	numeric,
	required,
} from "vee-validate/dist/rules";

extend("required", required);
extend("email", email);
extend("confirmed", confirmed);
extend("min", min);
extend("max", max);
extend("min_value", min_value);
extend("max_value", max_value);
extend("numeric", numeric);
