import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: 'Ov23liDI3ICVx0jmXNBS',
            clientSecret: '05ac53283667d288f6a4e2a86c0582b9d3156bc6',
        }),
    ],
}

export default NextAuth(authOptions);