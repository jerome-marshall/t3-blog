import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"
import { useForm } from "react-hook-form"
import { CreateUserInput } from "../schema/user.schema"
import { trpc } from "../utils/trpc"

const LoginPage = () => {
  const { handleSubmit, register } = useForm<CreateUserInput>()

  const router = useRouter()

  // const { mutate, error } = trpc.useMutation(["users.register-user"], {
  //   onSuccess: () => {
  //     router.push("/login")
  //   },
  // })

  const onSubmit = (values: CreateUserInput) => {
    // mutate(values)
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* {error?.message} */}
        <h1>Login</h1>

        <input type="email" placeholder="jane.doe@example.com" {...register("email")} />
        <button type="submit">Login</button>
      </form>
      <Link href={"/register"}>Register</Link>
    </>
  )
}

export default LoginPage
