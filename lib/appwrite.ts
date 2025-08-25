import { Account, Avatars, Client, OAuthProvider } from "appwrite";
import * as Linking from "expo-linking";

export const config = {
  platform: "com.damith.restate", // Fixed typo: realState → realEstate
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
  projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
};

export const client = new Client();

if (!config.endpoint) {
  throw new Error("EXPO_PUBLIC_APPWRITE_ENDPOINT environment variable is required");
}

if (!config.projectId) {
  throw new Error("EXPO_PUBLIC_APPWRITE_PROJECT_ID environment variable is required");
}


client
    .setEndpoint(config.endpoint)
    .setProject(config.projectId);
   // .setPlatform(config.platform); // Fixed to use config.platform

export const avatars = new Avatars(client); // Standardized to avatars
export const account = new Account(client);

export async function login() {
  try {
    // Create a redirect URL for OAuth callback
    const redirectUrl = Linking.createURL("/");

    // Initiate OAuth2 session with Google
    await account.createOAuth2Session(
      OAuthProvider.Google,
      redirectUrl,
      redirectUrl
    );

    // After redirect, check if the user is logged in
    const user = await account.get();
    if (user.$id) {
      return true; // Login successful
    }

    throw new Error("Login failed");
  } catch (error) {
    console.error("Error logging in:", error);
    return false;
  }
}

export async function logout() {
  try {
    await account.deleteSession("current");
    return true;
  } catch (error) {
    console.error("Error logging out:", error);
    return false;
  }
}

export async function getUser() {
  try {
    const response = await account.get();
    if (response.$id) {
      const userAvatar = avatars.getInitials(response.name); // Fixed to use avatars
      return {
        ...response,
        avatar: userAvatar,
      };
    }
    return null;
  } catch (error) {
    console.error("Error getting user:", error);
    return null;
  }
}