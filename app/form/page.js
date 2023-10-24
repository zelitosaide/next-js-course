"use client";

export default function Page() {
  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    await fetch("/api/sign-in", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ email, password }),
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        email: <input className="text-black" name="email" type="email" />
      </p>
      <p>
        password: <input className="text-black" name="password" type="password" />
      </p>
      <button type="submit">Submit</button>
    </form>
  );
}