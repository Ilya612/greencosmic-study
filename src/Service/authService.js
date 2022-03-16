import $api from "../Http/index.js";

class AuthService {
  async checkAuth() {
    try {
      $api.get("/refresh").then((response) => {
        console.log(response);
        return response;
      });
    } catch (error) {
      console.log(error);
    }
  }
}
export default new AuthService();
