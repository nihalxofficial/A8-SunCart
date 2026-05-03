import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    baseURL: process.env.SUNCART_MONGO_URI
})

export const { signIn, signUp, signOut, useSession, deleteUser } = createAuthClient()
