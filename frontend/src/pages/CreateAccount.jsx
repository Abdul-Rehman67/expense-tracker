import React from 'react'

const CreateAccount = () => {
  return (
    <>
    <div class="bg-gray-200 min-h-screen flex flex-col">
            <div class="container w-5/12 mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 class="mb-8 text-3xl text-center">Sign up</h1>
                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="firstname"
                        placeholder="First Name" />
                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="lastname"
                        placeholder="Last Name" />

                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />

                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />
                  

                    <button
                        type="submit"
                        class="w-full text-center py-3 rounded bg-blue-500 text-white hover:bg-blue-600 focus:outline-none my-1"
                    >Create Account</button>

                   
                <div class="text-grey-dark mt-6">
                    Already have an account? 
                    <a class="text-blue-500 no-underline border-b border-blue-500 text-blue">
                        Log in
                    </a>
                </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default CreateAccount