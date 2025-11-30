import { platform } from "os";

export const appwriteConfig = {
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
    platform: "com.alx.nexus",
    databaseId: "692b310f0026cff2ba70",
    usertableId: "692b31102f5c4d6b1f10",
}

