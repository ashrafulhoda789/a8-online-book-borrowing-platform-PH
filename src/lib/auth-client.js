import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    
    baseURL: "https://a8-online-book-borrowing-platform-p.vercel.app"
})

export const { signIn, signUp, useSession } = createAuthClient()