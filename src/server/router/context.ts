import superjson from "superjson"
// src/server/router/context.ts
import * as trpc from "@trpc/server"
import * as trpcNext from "@trpc/server/adapters/next"
import { prisma } from "../db/client"

/**
 * Replace this with an object if you want to pass things to createContextInner
 */
type CreateContextOptions = Record<string, never>

/** Use this helper for:
 * - testing, where we dont have to Mock Next.js' req/res
 * - trpc's `createSSGHelpers` where we don't have req/res
 **/
export const createContextInner = async (opts: CreateContextOptions) => {
  return {
    prisma,
  }
}

/**
 * This is the actual context you'll use in your router
 * @link https://trpc.io/docs/context
 **/
export const createContext = (opts: trpcNext.CreateNextContextOptions) => {
  return { ...opts, prisma }
}

type Context = ReturnType<typeof createContext>

export const createRouter = () => trpc.router<Context>().transformer(superjson)
