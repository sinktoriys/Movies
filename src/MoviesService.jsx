import axios from "axios";
export default class MoviesService {
	static async getAll() {
		const responce = await axios.get(
			"https://imdb-api.com/en/API/Top250Movies/k_r66ege2y"
		);

		return responce;
	}
}
