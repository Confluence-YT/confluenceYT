import dotEnv from "dotenv"
dotEnv.config();

export const GOOGLE_CLIENT_ID = process.env.CLIENT_ID as string;
export const GOOGLE_CLIENT_SECRET = process.env.CLIENT_SECRET as string;
export const CLIENT_URL = process.env.CLIENT_URL as string;
