import { useState, createContext } from "react";
import "./App.css";
import Setup from "./Components/Setup.jsx";
import Play from "./Components/Play.jsx";

export const DataContext = createContext([]);

export default function App() {
  /* ------------  STATE  ------------*/
  const [showResult, setShowResult] = useState(false);
  const [count, setCount] = useState(0);
  const [data, setData] = useState([
    {
      category: "",
      correct_answer: "",
      difficulty: "",
      id: "",
      possible_answers: ["", "", "", ""],
      possible_answer_1: "",
      possible_answer_2: "",
      possible_answer_3: "",
      possible_answer_4: "",
      incorrect_answers: ["", "", ""],
      question: "",
      type: "",
      user_answer: "",
    },
  ]);

  const [quantity, setQuantity] = useState(0);
  const [difficulty, setDifficulty] = useState("");
  const [category, setCategory] = useState(0);
  const [quantitySelected, setQuantitySelected] = useState(false);
  const [difficultySelected, setDifficultySelected] = useState(false);
  const [categorySelected, setCategorySelected] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  function startQuiz(bool) {
    setShowResult(bool);
  }

  return (
    <DataContext.Provider
      value={{
        count,
        setCount,
        data,
        setData,
        showResult,
        setShowResult,
        quantity,
        setQuantity,
        difficulty,
        setDifficulty,
        category,
        setCategory,
        quantitySelected,
        setQuantitySelected,
        difficultySelected,
        setDifficultySelected,
        categorySelected,
        setCategorySelected,
        isFinished,
        setIsFinished,
        isLoading,
        setIsLoading,
        error,
        setError,
      }}
    >
      <div>{!showResult ? <Setup function={startQuiz} /> : <Play />}</div>
    </DataContext.Provider>
  );
}
