import { NextResponse } from "next/server";

export async function POST(request) {
  const { email, password } = await request.json();
  const response = await fetch("http://localhost:3001/authentication/sign-in", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  // const data = await response.json();
  return NextResponse.json({ data: await response.json() });
}