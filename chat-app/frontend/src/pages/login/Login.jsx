import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin'
const Login = () => {
  const [username,setUsername]= useState("")
  const [password,setPassword]= useState("")

  const {loading,login} = useLogin()

  const handleSubmit = async(e) => {
    e.preventDefault();
    await login(username,password)
  }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding background-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>Login <span className='text-pink-900'>ChatMaadi</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-pink-900 font-semibold'>Username</span>
            </label>
            <input type='text' placeholder='Enter Username' className='w-full input input-bordered h-10'
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            ></input>
          </div>
          <div>
            <label className='label'>
              <span className='text-base label-text text-pink-900 font-semibold'>Password</span>
            </label>
            <input type='password' placeholder='Enter Password' className='w-full input input-bordered h-10'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}></input>
          </div>
          <Link to='/signup'className='text-sm hover:underline hover:text-pink-700 mt-2 inline-block'>Don't have an Account?</Link>
          <button className='btn btn-block btn-sm mt-2'
          disabled={loading}>
            {loading ? <span className='loading loading-spinner'></span>: "Login"}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login






// const Login = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//       <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding background-filter backdrop-blur-lg bg-opacity-0'>
//         <h2 className='text-3xl font-semibold text-center text-gray-300'>Login
//           <span className='text-pink-900'>ChatMaadi</span>
//         </h2>
//         <form>
//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-text text-pink-900 font-semibold'>Username</span>
//             </label>
//             <input type='text' placeholder='Enter Username' className='w-full input input-bordered h-10'></input>
//           </div>
//           <div>
//             <label className='label'>
//               <span className='text-base label-text text-pink-900 font-semibold'>Password</span>
//             </label>
//             <input type='password' placeholder='Enter Password' className='w-full input input-bordered h-10'></input>
//           </div>
//           <a href='a' className='text-sm hover:underline hover:text-pink-700 mt-2 inline-block'>Don't have an Account?</a>
//           <button className='btn btn-block btn-sm mt-2'>Login</button>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default Login
