"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";

const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (user.username.length > 0 && user.email.length && user.password.length) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [user]);

  const onSignUp = async () => {};
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1>Sign up</h1>
        <hr />
        <label htmlFor="username">username</label>
        <input
          className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
          id="username"
          value={user.username}
          type="text"
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="username"
        />
        <label htmlFor="email">email</label>
        <input
          className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
          id="email"
          type="text"
          value={user.email}
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
          placeholder="email"
        />
        <label htmlFor="password">password</label>
        <input
          className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
          id="password"
          type="password"
          placeholder="password"
          value={user.password}
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
          }}
        />
        <button
          onClick={onSignUp}
          className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        >
          {disabled ? "No signup" : "signup"}
        </button>
        <Link href="/login">Visit login page</Link>
      </div>
    </>
  );
};

export default Signup;
