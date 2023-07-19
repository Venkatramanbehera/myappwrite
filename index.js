import { ID, Account, Client } from "appwrite";

const appwriteClient = new Client();

class AppwriteService {
  account;
  constructor(endpoint, projectId) {
    appwriteClient.setEndpoint(endpoint).setProject(projectId);
    this.account = new Account(appwriteClient);
  }

  // creating account through email
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        return userAccount;
      } else {
        return { error: true, message: "Unable to create the user" };
      }
    } catch (error) {
      return {
        error: true,
        message: error,
      };
    }
  }

  // login through email
  async login({ email, password }) {
    try {
      const emailSession = await this.account.createEmailSession(
        email,
        password
      );
      if (emailSession) {
        return emailSession;
      } else {
        return { error: true, message: "Invalid User" };
      }
    } catch (error) {
      return { error: true, message: error };
    }
  }

  // getting the current user
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      return {
        error: true,
        message: error,
      };
    }
  }

  // deleting the current user
  async logout() {
    try {
      return await this.account.deleteSession("current");
    } catch (error) {
      return {
        error: true,
        message: error,
      };
    }
  }
}

export default AppwriteService;
