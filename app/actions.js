"use server";

import { cookies } from "next/headers";

export async function addItem(data) {
  const cardId = cookies().get("cardId")?.value;
  await saveToDb({ cardId, data });
}