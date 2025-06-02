"use client";

import { FaCheck, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { MdOutlineErrorOutline } from "react-icons/md";
import { useState } from "react";
import Link from "next/link";
import useAuthStore from "@/utils/store/authStore";
import { useRouter } from "next/navigation";

export default function Login() {
  const { signInUser } = useAuthStore();
  const router = useRouter();

  // States
  const [showPass, setShowPass] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");

  // Handle Click/change
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.email.value;
    const password = form.password.value;

    // Always Clear Messages
    setSuccessMsg("");
    setErrMsg("");

    // Check User Login
    signInUser(email, password)
      .then(() => {
        setSuccessMsg("SuccessFully Login");
        setTimeout(() => {
          router.push('/scan')
        }, 1500);
      })
      .catch((err) => {
        setErrMsg(err.message);
      });
  };

  const handleForgetPass = () => {
    // const email = emailRef.current.value;

    //Reset Messages
    setErrMsg("");
    setSuccessMsg("");

    // if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
    //     setErrMsg("Inter a Valid Eamil to reset Password");
    // }else{
    //     sendPasswordResetEmail(auth, email)
    //     .then(()=>{
    //         setSuccessMsg("Password reset. Check your email")
    //     })
    //     .catch(err=>{
    //         console.log(err.message);
    //     })
    // }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight ">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  // ref={emailRef}
                  placeholder="Inter your email address"
                  required
                  autoComplete="email"
                  className="block px-4 w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    onClick={handleForgetPass}
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
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
                <div
                  onClick={() => setShowPass(!showPass)}
                  style={{
                    marginLeft: "-38px",
                    cursor: "pointer",
                    fontSize: "22px",
                    background: "",
                  }}
                >
                  {showPass ? <FaRegEye /> : <FaRegEyeSlash />}
                </div>
              </div>
            </div>

            <div style={{ marginTop: "15px" }}>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>

              {/* Success or Error Msg  */}
              {successMsg && (
                <div
                  style={{ fontWeight: "500" }}
                  className="flex items-center gap-2 text-green-600 mt-2"
                >
                  <FaCheck /> <p>{successMsg}</p>
                </div>
              )}
              {errMsg && (
                <div
                  style={{ fontWeight: "500" }}
                  className="flex items-center gap-2 text-red-600 mt-2"
                >
                  <MdOutlineErrorOutline /> <p>{errMsg}</p>
                </div>
              )}
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a register Student?{" "}
            <Link
              href="/register"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Register Now
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}