import { createRouter } from "./context"

export const userRouter = createRouter().mutation("register-user", {
  async resolve({ ctx }) {
    ctx.prisma
  },
})
