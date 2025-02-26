import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: 'Ov23liDI3ICVx0jmXNBS',
            clientSecret: '12a36ed32675b3c035c0b9cf641039956eb1d5ef',
        }),
    ],
}

export default NextAuth(authOptions);