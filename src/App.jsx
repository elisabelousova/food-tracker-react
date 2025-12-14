import { useState } from "react";
import styles from "./App.module.css";

import Header from "./components/Header/Header";
import Norm from "./components/Norm/Norm";
import Meals from "./components/Meals/Meals";
import AddMealButton from "./components/AddMealButton/AddMealButton";
import Modal from "./components/Modal/Modal";

export default function App() {
  const [meals] = useState([
    { name: "Завтрак" },
    { name: "Обед" },
    { name: "Ужин" },
    { name: "+ Ещё" },
  ]);

  const [percent] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      />
    </div>
  );
}