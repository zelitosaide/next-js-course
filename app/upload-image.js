export default function UploadImage() {
  async function uploadImage(data) {
    "use server";

    const formData = new FormData();

    formData.append("name", data.get("name"))
    formData.append("file", data.get("file"));

    const res = await fetch("http://localhost:3001/images/upload-file", {
      method: "POST",
      body: formData
    });

    console.log(await res.json());
  }
 
  return (
    <form action={uploadImage}>
      <input type="text" name="name" />
      <input type="file" name="file" />
      <button type="submit">Upload Image</button>
    </form>
  )
}