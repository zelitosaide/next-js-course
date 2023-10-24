import decode from "jwt-decode";

export async function POST(request) {
  const { email, password } = await request.json();

  const res = await fetch("http://localhost:3001/authentication/sign-in", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();

  const { sub: id, email: mail, role } = decode(data.accessToken);

  return Response.json({ id, email: mail, role });
}