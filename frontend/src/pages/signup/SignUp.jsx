import React from 'react'
import GenderCheckBox from './GenderCheckBox'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import useSignup from '../../hooks/useSignup'  

const SignUp = () => {
  const[inputs,setInputs] = useState({
    fullName:'',
    username:'',
    password:'',
    confirmPassword:'',
    gender : ''
  })

  const {loading,signup}= useSignup()


  const handleCheckboxChange = (gender)=>{
    setInputs({...inputs,gender})
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
   try{
    await signup(inputs)
   }
    catch(error){
      console.log(error);
    }
  }


  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding background-filter backdrop-blur-lg bg-opacity-0'>
      <h1 className='text-3xl font-semibold text-center text-gray-300'>Sign Up <span className='text-pink-900'>ChatMaadi</span></h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label className='label p-2'>
            <span className='text-base label-text text-pink-900 font-semibold'>Full Name</span>
          </label>
          <input type='text' placeholder='Namratha' className='w-full input input-bordered h-10' 
          value={inputs.fullName}
          onChange={(e)=> setInputs({...inputs,fullName: e.target.value})}></input>
        </div>
        <div>
        <label className='label p-2'>
            <span className='text-base label-text text-pink-900 font-semibold'>Username</span>
          </label>
          <input type='text' placeholder='Namratha' className='w-full input input-bordered h-10'
          value={inputs.username}
          onChange={(e)=> setInputs({...inputs,username:e.target.value})}></input>
        </div>
        <div>
        <label className='label'>
              <span className='text-base label-text text-pink-900 font-semibold'>Password</span>
            </label>
            <input type='password' placeholder='Enter Password' className='w-full input input-bordered h-10'
            value={inputs.password}
            onChange={(e)=> setInputs({...inputs,password:e.target.value})}></input>
        </div>
        <div>
        <label className='label'>
              <span className='text-base label-text text-pink-900 font-semibold'>Confirm Password</span>
            </label>
            <input type='password' placeholder='Confirm Password' className='w-full input input-bordered h-10'
            value={inputs.confirmPassword}
            onChange={(e)=> setInputs({...inputs,confirmPassword:e.target.value})}></input>
        </div>
        <GenderCheckBox onCheckboxChange={handleCheckboxChange} selectedGender = {inputs.gender}/>

        <Link to={'/login'} className='text-sm hover:underline hover:text-pink-700 mt-2 inline-block' href='#'>Already have an Account?</Link>
        <div>
        <button className='btn btn-block btn-sm mt-2 border border-slate-700' 
        disabled={loading}>
          {loading ? <span className='loading loading-spinner'></span>: "Sign Up"}
        </button>
        </div>
      
      </form>

      </div>
    </div>
  )
}

export default SignUp









// const SignUp = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//       <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding background-filter backdrop-blur-lg bg-opacity-0'>
//       <h1 className='text-3xl font-semibold text-center text-gray-300'>Sign Up <span className='text-pink-900'>ChatMaadi</span></h1>
//       <form>
//         <div>
//           <label className='label p-2'>
//             <span className='text-base label-text text-pink-900 font-semibold'>Full Name</span>
//           </label>
//           <input type='text' placeholder='Namratha' className='w-full input input-bordered h-10'></input>
//         </div>
//         <div>
//         <label className='label p-2'>
//             <span className='text-base label-text text-pink-900 font-semibold'>Username</span>
//           </label>
//           <input type='text' placeholder='Namratha' className='w-full input input-bordered h-10'></input>
//         </div>
//         <div>
//         <label className='label'>
//               <span className='text-base label-text text-pink-900 font-semibold'>Password</span>
//             </label>
//             <input type='password' placeholder='Enter Password' className='w-full input input-bordered h-10'></input>
//         </div>
//         <div>
//         <label className='label'>
//               <span className='text-base label-text text-pink-900 font-semibold'>Confirm Password</span>
//             </label>
//             <input type='password' placeholder='Confirm Password' className='w-full input input-bordered h-10'></input>
//         </div>
//         <GenderCheckBox/>

//         <a href='a' className='text-sm hover:underline hover:text-pink-700 mt-2 inline-block'>Already have an Account?</a>
//         <div>
//         <button className='btn btn-block btn-sm mt-2 border border-slate-700'>SignUp</button>
//         </div>
      
//       </form>

//       </div>
//     </div>
//   )
// }

// export default SignUp