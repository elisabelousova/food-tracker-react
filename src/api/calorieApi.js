const API_URL = "https://api.calorieninjas.com/v1/nutrition";
const API_KEY = "xRT+rEwv58sPvc/rpjviTA==TxBGup8so2O3QSQ1"; 
export async function getNutrition(query) {
  const res = await fetch(`${API_URL}?query=${encodeURIComponent(query)}`, {
    headers: {
      "X-Api-Key": API_KEY,
    },
  });

  if (!res.ok) {
    throw new Error("CalorieNinjas error");
  }

  const data = await res.json();

  if (!data.items || data.items.length === 0) {
    return null;
  }

  const item = data.items[0];

  return {
    name: item.name,
    kcal: Math.round(item.calories),
    protein: Math.round(item.protein_g),
    fat: Math.round(item.fat_total_g),
    carbs: Math.round(item.carbohydrates_total_g),
  };
}
