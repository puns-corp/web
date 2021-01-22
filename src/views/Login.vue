<template>
	<div class="auth-page vw-100 vh-100">
		<div class="container page ">
			<div class="row">
				<div
					class="col-12 vh-100 d-flex justify-content-center align-items-center"
				>
					<el-card class="px-3">
						<template #header>
							<h4 class="mb-0">Sign in</h4>
						</template>

						<form @submit.prevent="onSubmit(email, password)">
							<fieldset class="form-group">
								<input
									class="form-control "
									type="text"
									v-model="email"
									placeholder="Email"
								/>
							</fieldset>
							<fieldset class="form-group">
								<input
									class="form-control "
									type="password"
									v-model="password"
									placeholder="Password"
								/>
							</fieldset>
							<el-button
								round
								type="primary"
								class="my-3"
								native-type="submit"
							>
								Sign in
							</el-button>
							<p class="text-xs-center">
								<router-link :to="{ name: 'register' }">
									Need an account?
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
import { LOGIN } from "@/store/actions.type";
import { mapState, mapActions, mapGetters } from "vuex";
import JwtService from "@/common/jwt.service";

export default {
	name: "Login",
	data() {
		return {
			email: null,
			password: null,
		};
	},
	methods: {
		...mapActions([LOGIN]),
		async onSubmit(email, password) {
			await this[LOGIN]({ email, password });
		},
	},
	computed: {
		...mapGetters(["isAuthenticated"]),
		...mapState({
			errors: (state) => state.auth.errors,
		}),
	},
	created() {
		JwtService.destroyAccessToken();
		JwtService.destroyRefreshToken();
	},
	watch: {
		isAuthenticated(newVal) {
			if (newVal) {
				this.$router.push({ name: "Home" });
			}
		},
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
