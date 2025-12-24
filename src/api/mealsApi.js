const API_URL = "http://localhost:3001/meals";

export async function getMeals() {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("GET failed");
  return res.json();
}

export async function addMeal(meal) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(meal),
  });

  if (!res.ok) throw new Error("POST failed");
  return res.json();
}
