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

  return Response.json(data);
}