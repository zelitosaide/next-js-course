import { cookies } from "next/headers";

// Server action defined inside a Server Component
export default function AddToCard({ productId }) {
  async function addItem(data) {
    "use server";

    const cardId = cookies().get("cardId")?.value;
    // await saveToDb({ cardId, data });
    console.log(productId, "Zelito");
  }

  return (
    <form action={addItem}>
      <button type="submit">Add to Card</button>
    </form>
  );
}