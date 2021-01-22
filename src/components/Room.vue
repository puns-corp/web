<template>
	<div class="container">
		<div class="row">
			<h3>Rooms:</h3>
			<div class="col-12 px-0">
				<el-table :data="roomTable" empty-text="no rooms available">
					<el-table-column>
						<template slot-scope="scope">
							{{ scope.row.roomName }}
						</template>
					</el-table-column>
					<el-table-column align="right">
						<template slot-scope="scope">
							<i
								class="el-icon-check"
								v-if="scope.row.id === user.roomId"
							></i>
							<el-button
								v-else
								size="mini"
								round
								icon="el-icon-circle-plus-outline"
								type="success"
								@click="joinRoom(scope.row.id)"
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
					:total="rooms.length"
				>
				</el-pagination>
			</div>
			<h3 class="mt-3">Create room:</h3>
			<div class="col-12">
				<form @submit.prevent="createRoom(roomName)">
					<fieldset class="form-group">
						<input
							class="form-control mt-2"
							type="text"
							v-model="roomName"
							placeholder="Room name"
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
	CREATE_ROOM,
	FETCH_USER,
	FETCH_ROOMS,
	FETCH_GAMES,
	JOIN_ROOM,
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
		this.fetchRooms();
	},
	methods: {
		movePage(item) {
			this.currentPage = item;
		},
		joinRoom(roomId) {
			this.$store
				.dispatch(JOIN_ROOM, roomId)
				.then(() => this.fetchData());
		},
		createRoom(roomName) {
			this.$store
				.dispatch(CREATE_ROOM, roomName)
				.then(() => this.fetchData());
		},
		fetchUser() {
			this.$store.dispatch(FETCH_USER);
		},
		fetchRooms() {
			this.$store.dispatch(FETCH_ROOMS);
		},
		fetchGames() {
			this.$gameHub.quitGame(this.user.gameId).then(() => {
				this.fetchUser();
			});
			this.$store.dispatch(LEAVE_GAME);
			this.$store.dispatch(FETCH_GAMES);
		},
		fetchData() {
			this.fetchUser();
			this.fetchRooms();
			this.fetchGames();
		},
	},
};
</script>
