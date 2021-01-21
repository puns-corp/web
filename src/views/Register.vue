<template>
	<div class="auth-page vw-100 vh-100">
		<div class="container page ">
			<div class="row">
				<div
					class="col-12 vh-100 d-flex justify-content-center align-items-center"
				>
					<el-card class="px-3">
						<template #header>
							<h4 class="mb-0">Sign up</h4>
						</template>

						<form @submit.prevent="onSubmit(nick, email, password)">
							<fieldset class="form-group">
								<input
									class="form-control form-control-lg"
									type="text"
									v-model="nick"
									placeholder="Username"
								/>
							</fieldset>
							<fieldset class="form-group">
								<input
									class="form-control form-control-lg"
									type="text"
									v-model="email"
									placeholder="Email"
								/>
							</fieldset>
							<fieldset class="form-group">
								<input
									class="form-control form-control-lg"
									type="password"
									v-model="password"
									placeholder="Password"
								/>
							</fieldset>
							<el-button
								type="primary"
								native-type="submit"
								round
								class="my-3"
							>
								Sign up
							</el-button>
							<p class="text-xs-center">
								<router-link :to="{ name: 'login' }">
									Have an account?
								</router-link>
							</p>
						</form>
					</el-card>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { REGISTER } from "@/store/actions.type";
import { mapState } from "vuex";

export default {
	name: "Register",
	data() {
		return {
			nick: "",
			email: "",
			password: "",
		};
	},
	methods: {
		onSubmit(nick, email, password) {
			this.$store
				.dispatch(REGISTER, { nick, email, password })
				.then(() => this.$router.push({ name: "Home" }));
		},
	},
	computed: {
		...mapState({
			errors: (state) => state.auth.errors,
		}),
	},
	watch: {
		errors(newVal) {
			if (newVal !== null) {
				this.$notify.error({
					title: newVal,
					duration: 3000,
				});
			}
		},
	},
};
</script>

<style scoped></style>
