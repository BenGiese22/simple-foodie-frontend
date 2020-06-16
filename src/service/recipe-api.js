const API_SERVER_URL = "https://simple-foodie-api.herokuapp.com";

class RecipeApi {
	getAllRecipes() {
		const url = "/recipes-api/";
		return this._makeRequest(url, {
			method: "GET",
		});

		// .then(({ data }) => {
		//     console.log(data)
		//     return data
		// })
	}

	getRecipe(id) {
		const url = "/recipes-api/" + id + "/";
		return this._makeRequest(url, {
			method: "GET",
		});
	}

	getQuery(field, query) {
		const url = "/recipes-api/" + field + "/" + query;
		return this._makeRequest(url, {
			method: "GET",
		});
	}

	_makeRequest(url, options) {
		options.headers = {
			Accept: "application/json",
			"Content-Type": "application/json",
		};

		if (options.body) {
			options.body = JSON.stringify(options.body);
		}

		return fetch(API_SERVER_URL + url, options).then((response) => {
			if (response.ok) {
				return response.json();
			} else {
				return response.json().then(({ errors }) => {
					const error = new Error(response.statusText);
					response.errorMessages = errors;
					throw error;
				});
			}
		});
	}
}

export default RecipeApi;
