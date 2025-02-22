"use client"

import React, { FormEvent } from 'react'
import { signIn } from "@/auth"
import { useRouter } from "next/navigation";

const handleLogin = async (formData: FormData) => {
    const router = useRouter();
        await signIn("credentials", formData)
        router.push("/")
}

function Signin() {

    return (
        <form
        className='startup-form'
          action={handleLogin}
        >
          <label className='startup-form_label'>
            Email
            <input name="email" type="email" className='startup-form_input' />
          </label>
          <br />
          <label className='startup-form_label'>
            Password
            <input name="password" type="password" className='startup-form_input' />
          </label>
          <button className='startup-form_btn' type='submit'>Sign In</button>
        </form>
      )
}

export default Signin