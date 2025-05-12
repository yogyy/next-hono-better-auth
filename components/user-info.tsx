"use client";
import { authClient } from "@/lib/auth-client";

export function UserInfo() {
  const { data } = authClient.useSession();

  return (
    <div>
      <p>Hello {data?.user.name}</p>
    </div>
  );
}
