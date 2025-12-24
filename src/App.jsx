import { useEffect, useState } from "react";
import styles from "./App.module.css";

import Header from "./components/Header/Header";
import Norm from "./components/Norm/Norm";
import Meals from "./components/Meals/Meals";
import AddMealButton from "./components/AddMealButton/AddMealButton";
import Modal from "./components/Modal/Modal";

import { getMeals, addMeal } from "./api/mealsApi";

export default function App() {
  const [meals, setMeals] = useState([]);
  const [percent, setPercent] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // GET — загрузка данных с сервера
  useEffect(() => {
    async function loadMeals() {
      try {
        const data = await getMeals();
        setMeals(data);
      } catch (e) {
        console.error(e);
      }
    }
    loadMeals();
  }, []);

  // пересчёт нормы
  useEffect(() => {
    const total = meals.reduce((sum, m) => sum + (m.kcal || 0), 0);
    setPercent(Math.round((total / 2000) * 100));
  }, [meals]);

  // POST — сохранение нового приёма пищи
  async function handleSaveMeal(meal) {
    try {
      const saved = await addMeal(meal);
      setMeals((prev) => [...prev, saved]);
      setIsModalOpen(false);
    } catch (e) {
      alert("Сервер не запущен");
    }
  }

  return (
    <div className={styles.page}>
      <Header />
      <h2 className={styles.dateTitle}>21 марта, пятница</h2>

      <Norm percent={percent} />
      <Meals meals={meals} />

      <AddMealButton onClick={() => setIsModalOpen(true)} />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveMeal}
      />
    </div>
  );
}
