<template>
	<div class="container-fluid px-0">
		<el-menu
			class="el-menu-demo d-flex justify-content-end"
			mode="horizontal"
			background-color="#2F2F2F"
		>
			<el-menu-item>
				<el-button type="danger" @click="logout">Log out</el-button>
			</el-menu-item>
		</el-menu>

		<div class="col-12 d-flex pt-4">
			<div class="col-6 col-md-3" v-if="user !== null">
				<el-card><Room></Room></el-card>
			</div>

			<div class="col-12 col-md-6" v-if="game.id">
				<el-card>
					<GameBoard></GameBoard>
				</el-card>
			</div>

			<div class="col-6 col-md-3" v-if="scores.length > 0">
				<el-card>
					<ScoreBoard></ScoreBoard>
				</el-card>
			</div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import GameBoard from "@/components/GameBoard";
import Room from "@/components/Room";
import ScoreBoard from "@/components/ScoreBoard";
import {
	LOGOUT,
	FETCH_USER,
	FETCH_ROOMS,
	FETCH_GAMES,
} from "@/store/actions.type";
import { mapGetters } from "vuex";

export default {
	name: "Home",
	components: {
		GameBoard,
		Room,
		ScoreBoard,
	},
	methods: {
		logout() {
			this.$store
				.dispatch(LOGOUT)
				.then(() => this.$router.push({ name: "login" }));
		},
	},
	computed: {
		...mapGetters({
			isAuthenticated: "isAuthenticated",
			user: "getUser",
			game: "getGame",
			scores: "getScores",
		}),
	},
	created() {
		if (!this.isAuthenticated) {
			this.$router.push({ name: "login" });
		}
		this.$gameHub.stopSignalR();
		this.$store.dispatch(FETCH_USER);
		this.$store.dispatch(FETCH_ROOMS);
		this.$store.dispatch(FETCH_GAMES);
		this.$gameHub.startSignalR();
	},
	beforeDestroy() {
		this.$gameHub.stopSignalR();
	},
};
</script>
