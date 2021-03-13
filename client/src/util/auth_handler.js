class AuthHandler {
  constructor() {
    this.isAuthenticated = false;
  }

  login(callback) {
    this.authenticated = true;
  }

  logout(callback) {
    this.authenticated = false;
  }

  isAuthenticated() {
    return this.authenticated;
  }
}

export default new AuthHandler();
