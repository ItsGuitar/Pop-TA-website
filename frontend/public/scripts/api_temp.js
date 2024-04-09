import { BACKEND_URL } from "./config_temp.js";

export async function getItems() {
  const items = await fetch(`${BACKEND_URL}/items`).then((r) => r.json());

  return items;
}

export async function createItem(item) {
  await fetch(`${BACKEND_URL}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
}

export async function deleteItem(id, item) {
  await fetch(`${BACKEND_URL}/items/${id}`, {
    method: "DELETE",
  });
}

export async function filterItems(filterName, lowerPrice, upperPrice) {
  try {
    const items = await fetch(`${BACKEND_URL}/items`).then((r) => r.json());

    const filteredItems = items.filter(item => {
      const nameMatch = filterName !== "ทั้งหมด" ? item.name.toLowerCase().includes(filterName.toLowerCase()) : true;
      const priceInRange = item.price >= lowerPrice && item.price <= upperPrice;
      return nameMatch && priceInRange;
    });

    return filteredItems;
  } catch (error) {
    console.error("Error filtering items:", error);
    throw error;
  }
}

export async function getMembers() {
  // TODO4: implement this function
  const members = await fetch(`${BACKEND_URL}/members`).then((r) => r.json());
  return members;
}

export async function createMember(member) {
  // TODO4: implement this function
  await fetch(`${BACKEND_URL}/members`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(member),
  });
}

export async function deleteMember(id, item) {
  // TODO4: implement this function
  await fetch(`${BACKEND_URL}/members/${id}`, {
    method: "DELETE",
  });
}