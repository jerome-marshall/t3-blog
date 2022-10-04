import { userRouter } from "./user"
// src/server/router/index.ts
import { createRouter } from "./context"

export const appRouter = createRouter().merge("users.", userRouter)

// export type definition of API
export type AppRouter = typeof appRouter
