// "use client";

export default function Page() {
  function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    console.log(formData);
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="name" />
      <button type="submit">Submit</button>
    </form>
  );
}