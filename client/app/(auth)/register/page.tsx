"use client"

import { FaCheck, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { MdOutlineErrorOutline } from "react-icons/md";
import { FormEvent, useState } from "react";
// import axios from "axios";
import Link from "next/link";
import useAuthStore from "@/utils/store/authStore";
import { getAuth } from "firebase/auth";
import api from "@/utils/axiosConfig";

export default function Register() {
    // States
    const [showPass, setShowPass] = useState(false);
    const [successMsg, setSuccessMsg] = useState('');
    const [errMsg, setErrMsg] = useState('');

    // Use Context
    const {signUp} = useAuthStore();

    // Handle Click/change
    const handleSubmit =(e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const name = (e.target as HTMLFormElement).fullName.value;
        const id = (e.target as HTMLFormElement).studentId.value;
        const batch = (e.target as HTMLFormElement).batch.value;
        const department = (e.target as HTMLFormElement).department.value;
        const email = (e.target as HTMLFormElement).email.value;
        const password = (e.target as HTMLFormElement).password.value;
        const checkTerms = (e.target as HTMLFormElement).terms.checked;

        // Always Clear Messages
        setSuccessMsg('');
        setErrMsg('');

        //Check terms and condition
        if(!checkTerms){
            setErrMsg("Please accept our terms and condition");
            return;
        }

        // Create User & wishlist
        signUp(email, password)
        .then(()=>{

          const auth = getAuth();
          const currentUser = auth.currentUser;

          if (!currentUser) {
            alert("User not available in auth");
            return;
          }
          
         const student =   {
            uid: currentUser?.uid,
            name: name,
            id,
            batch,
            department,
          }
          
          api.post('/student', student)
          .then(()=> setSuccessMsg('Student Registration Successfull'))
          .catch((err)=> console.log(err))
        })
        .catch(()=>{
            setErrMsg('Error Happeded here');
        })
    }
    return (
      <>
    
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
              Register an account Its Free
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium leading-6">
                  Your Name
                </label>
                <div className="mt-2">
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    placeholder="Your Full name"
                    className="block px-4 w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
                  />
                </div>
              </div>


              <div>
                <label htmlFor="studentId" className="block text-sm font-medium leading-6">
                  Student Id
                </label>
                <div className="mt-2">
                  <input
                    id="studentId"
                    name="studentId"
                    type="number"
                    required
                    placeholder="Your Student ID (last 2 digit)"
                    className="block px-4 w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="batch" className="block text-sm font-medium leading-6">
                  Batch
                </label>
                <div className="mt-2">
                  <input
                    id="batch"
                    name="batch"
                    type="number"
                    required
                    placeholder="Ex: 30, 31, 32"
                    className="block px-4 w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6">
                  Department
                </label>
                <div className="mt-2">
                  <input
                    id="department"
                    name="department"
                    type="text"
                    required
                    placeholder="Ex: CSE, LAW, BBA"
                    className="block px-4 w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="Inter your email"
                    className="block px-4 w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium leading-6">
                    Password
                  </label>
                </div>
                <div className="mt-2 flex items-center">
                  <input
                    id="password"
                    name="password"
                    type={showPass ? "text" : "password"}
                    required
                    autoComplete="current-password"
                    placeholder="Inter your password"
                    className="block px-4 w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
                  />
                  <div onClick={()=>setShowPass(!showPass)} style={{marginLeft:'-38px', cursor: 'pointer', fontSize: '22px', background: ''}}>
                     {
                        showPass ? 
                        <FaRegEye/>
                        :
                        <FaRegEyeSlash />
                     }
                  </div>
                </div>
              </div>

              {/* terms and condition  */}
              <div style={{marginTop: '15px'}}>
                <input type="checkbox" id="terms" name="terms" className="mr-4" />
                <label htmlFor="terms">
                   I agree with the <Link href={'/tos'} style={{fontWeight: '500'}} className="font- text-indigo-600 hover:text-indigo-500">terms and conditions</Link>
                </label>
              </div>
  
              <div style={{marginTop: '15px'}}>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>

                {/* Success or Error Msg  */}
                {
                    successMsg && 
                    <div style={{fontWeight: '500'}} className="flex items-center gap-2 text-green-600 mt-2">
                        <FaCheck/> <p>{successMsg}</p>
                    </div>
                }
                {
                    errMsg &&
                    <div style={{fontWeight: '500'}} className="flex items-center gap-2 text-red-600 mt-2">
                        <MdOutlineErrorOutline/> <p>{errMsg}</p>
                     </div>
                }
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Already a member?{' '}
              <Link href='/login' className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                  Login Now!
              </Link>
            </p>
          </div>
        </div>
      </>
    )
  }
  