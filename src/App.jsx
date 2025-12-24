import { useEffect, useState, useCallback } from "react";
import styles from "./App.module.css";

import Header from "./components/Header/Header";
import Norm from "./components/Norm/Norm";
import Meals from "./components/Meals/Meals";
import AddMealButton from "./components/AddMealButton/AddMealButton";
import Modal from "./components/Modal/Modal";

import { getMeals, addMeal } from "./api/mealsApi";

// дефолтные приёмы пищи (fallback)
const DEFAULT_MEALS = [
  { name: "Завтрак", kcal: 0, B: 0, J: 0, U: 0 },
  { name: "Обед", kcal: 0, B: 0, J: 0, U: 0 },
  { name: "Ужин", kcal: 0, B: 0, J: 0, U: 0 },
  { name: "+ Ещё", kcal: 0, B: 0, J: 0, U: 0 },
];

export default function App() {
  const [meals, setMeals] = useState(DEFAULT_MEALS);
  const [percent, setPercent] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // GET — загрузка данных с сервера
  useEffect(() => {
    async function loadMeals() {
      try {
        const data = await getMeals();

        if (Array.isArray(data) && data.length > 0) {
          setMeals(data);
        }
      } catch (e) {
        console.warn(
          "Backend недоступен, используем локальные данные"
        );
        setMeals(DEFAULT_MEALS);
      }
    }

    loadMeals();
  }, []);

  // пересчёт дневной нормы
  useEffect(() => {
    const total = meals.reduce(
      (sum, m) => sum + (Number(m.kcal) || 0),
      0
    );

    setPercent(Math.round((total / 2000) * 100));
  }, [meals]);

  // POST — сохранение нового приёма пищи
  const handleSaveMeal = useCallback(async (meal) => {
    try {
      const saved = await addMeal(meal);
      setMeals((prev) => [...prev, saved]);
      setIsModalOpen(false);
    } catch (e) {
      alert(
        "Backend не запущен. Проверь JSON Server."
      );
    }
  }, []);

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <div className={styles.page}>
      <Header />

      <h2 className={styles.dateTitle}>
        21 марта, пятница
      </h2>

      <Norm percent={percent} />

      <Meals meals={meals} />

      <AddMealButton onClick={openModal} />

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSave={handleSaveMeal}
      />
    </div>
  );
}
