"use client";

export default function Page() {
  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const response = await fetch("/api/sign-in", {
      method: "POST",
      body: JSON.stringify({ email: formData.get("email"), password: formData.get("password") }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    console.log(await response.json());
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