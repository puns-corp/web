<template>
	<div class="container-fluid px-0 game-board">
		<el-menu
			class="el-menu-demo d-flex justify-content-end"
			mode="horizontal"
			background-color="#2F2F2F"
		>
			<el-menu-item>
				<el-button type="danger" @click="logout">Log out</el-button>
			</el-menu-item>
		</el-menu>

		<div class="col-12 d-flex pt-4 d-flex">
			<div class="col-12 col-md-6 col-lg-3" v-if="user !== null">
				<el-card class="mb-3 overflow-auto">
					<Room></Room>
				</el-card>
				<el-card v-if="user.roomId">
					<Game></Game>
				</el-card>
			</div>

			<div class="col-12 col-md-6 d-flex" v-if="game.id">
				<el-card class="w-100">
					<GameBoard></GameBoard>
				</el-card>
			</div>

			<div class="col-6 col-md-3 d-flex" v-if="scores.length > 0">
				<el-card>
					<ScoreBoard></ScoreBoard>
				</el-card>
			</div>
		</div>
	</div>
</template>

<script>
import GameBoard from "@/components/GameBoard";
import Room from "@/components/Room";
import Game from "@/components/Game";

import ScoreBoard from "@/components/ScoreBoard";
import { LOGOUT, FETCH_USER } from "@/store/actions.type";
import { mapGetters } from "vuex";

export default {
	name: "Home",
	components: {
		GameBoard,
		Room,
		ScoreBoard,
		Game,
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
		this.$gameHub.startSignalR();
	},
	beforeDestroy() {
		this.$gameHub.stopSignalR();
	},
};
</script>
<style scoped></style>
