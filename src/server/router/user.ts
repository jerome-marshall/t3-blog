import { PrismaClientKnownRequestError } from "@prisma/client/runtime"
import * as trpc from "@trpc/server"
import { createUserSchema } from "./../../schema/user.schema"
import { createRouter } from "./context"

export const userRouter = createRouter().mutation("register-user", {
  input: createUserSchema,
  async resolve({ ctx, input }) {
    const { name, email } = input

    try {
      const user = await ctx.prisma.user.create({
        data: {
          name: name,
          email: email,
        },
      })

      return user
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === "P2002")
          throw new trpc.TRPCError({
            code: "CONFLICT",
            message: "user already exists",
          })
      }

      throw new trpc.TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "something went wrong",
      })
    }
  },
})
