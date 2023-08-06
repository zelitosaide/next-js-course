import { cookies } from "next/headers";

// Server action defined inside a Server Component
export default function AddToCard({ productId }) {
  async function addItem(data) {
    "use server";

    const cardId = cookies().get("cardId")?.value;
    // await saveToDb({ cardId, data });
    console.log(productId, data);
  }

  async function submitImage(data) {
    "use server";
    console.log(productId, data);
  }

  return (
    <form action={addItem}>
      <input type="text" name="name" />
      <button className="block" type="submit">Add to Card</button>
      <input type="image" formAction={submitImage} />
    </form>
  );
}