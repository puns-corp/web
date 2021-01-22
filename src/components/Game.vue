<template>
	<div class="container">
		<div class="row">
			<h3>Games:</h3>
			<div class="col-12 px-0">
				<el-table :data="games" empty-text="no games available">
					<el-table-column>
						<template slot-scope="scope">
							{{ scope.row.name }}
						</template>
					</el-table-column>
					<el-table-column align="right">
						<template slot-scope="scope">
							<el-button
								v-if="scope.row.id === user.gameId"
								round
								size="mini"
								type="danger"
								icon="el-icon-close"
								@click="leaveGame(scope.row.id)"
							>
								<strong> LEAVE</strong>
							</el-button>
							<el-button
								v-else
								size="mini"
								round
								icon="el-icon-circle-plus-outline"
								type="success"
								@click="joinGame(scope.row.id)"
							>
								<strong>
									JOIN
								</strong>
							</el-button>
						</template>
					</el-table-column>
				</el-table>
				<el-pagination
					small
					layout="prev, pager, next"
					@current-change="movePage"
					:page-size="5"
					:total="games.length"
				>
				</el-pagination>
			</div>
			<h3 class="mt-3">Create game:</h3>
			<div class="col-12">
				<form @submit.prevent="createGame(gameName)">
					<fieldset class="form-group">
						<input
							class="form-control mt-2"
							type="text"
							v-model="gameName"
							placeholder="Game name"
						/>
					</fieldset>
					<el-button
						round
						block
						type="success"
						icon="el-icon-circle-plus"
						native-type="submit"
					>
						Create
					</el-button>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import {
	FETCH_GAMES,
	FETCH_USER,
	CREATE_GAME,
	FETCH_GAME,
	LEAVE_GAME,
} from "@/store/actions.type";

export default {
	name: "Room",
	data() {
		return {
			roomName: "",
			gameName: "",
			currentPage: 1,
		};
	},
	components: {},
	computed: {
		...mapGetters({
			games: "getGames",
			user: "getUser",
			rooms: "getRooms",
		}),
		roomTable() {
			return this.rooms.slice(
				(this.currentPage === 1 ? 0 : this.currentPage - 1) * 5,
				5,
			);
		},
	},
	created() {
		this.fetchGames();
		this.fetchGame();
	},
	methods: {
		movePage(item) {
			this.currentPage = item;
		},
		leaveGame() {
			this.$gameHub.quitGame(this.user.gameId).then(() => {
				this.$parent.$off("user-joined-to-game");
				this.$gameHub.$off("player-joined");
				this.$gameHub.$off("game-started");
				this.$gameHub.$off("player-quit");
				this.$gameHub.$off("game-ended");
				this.$gameHub.$off("player-guessed");
				this.$gameHub.$off("new-showing-player");
				this.fetchUser();
				this.$store.dispatch(LEAVE_GAME);
			});
		},
		joinGame(gameId) {
			this.$gameHub
				.joinGame(gameId)
				.then(() => this.playerJoinedToGame(gameId))
				.then(() => this.fetchData());
		},
		createGame() {
			this.$store
				.dispatch(CREATE_GAME, this.gameName)
				.then(() => this.fetchUser())
				.then(() => this.fetchGames())
				.then(this.$gameHub.joinGame(this.user.gameId))
				.then(() => this.playerJoinedToGame(this.user.gameId));
		},
		fetchUser() {
			this.$store.dispatch(FETCH_USER);
		},
		fetchGames() {
			this.$store.dispatch(FETCH_GAMES);
		},
		fetchGame() {
			this.$store.dispatch(FETCH_GAME);
		},
		playerJoinedToGame(gameId) {
			this.$gameHub
				.joinGame(gameId)
				.then(() => this.$store.dispatch(FETCH_GAME));

			this.$parent.$emit("user-joined-to-game", gameId);
		},
		fetchData() {
			this.fetchUser();
			this.fetchGames();
		},
	},
};
</script>
