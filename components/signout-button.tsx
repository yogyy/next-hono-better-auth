"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

export function SignoutButton() {
  async function logout() {
    await authClient.signOut({
      fetchOptions: { onSuccess: () => redirect("/auth/login") },
    });
  }
  return (
    <button
      onClick={logout}
      className="rounded-full border hover:cursor-pointer border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto">
      <Image
        className="dark:invert"
        unoptimized
        src="/vercel.svg"
        alt="Vercel logomark"
        width={20}
        height={20}
      />
      Deploy now
    </button>
  );
}
