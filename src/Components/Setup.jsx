import { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { DataContext } from "../App";
import Button from "./Button";
import Quantity from "./Quantity";
import Difficulty from "./Difficulty";
import Category from "./Category";

export default function Setup(props) {
  const {
    data,
    setData,
    quantity,
    difficulty,
    category,
    quantitySelected,
    difficultySelected,
    categorySelected,
    isLoading,
    setIsLoading,
    error,
    setError,
  } = useContext(DataContext);

  const [currentOption, setCurrentOption] = useState([0, 1, 2, 3]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPrevButtonDisabled, setPrevButtonDisabled] = useState(true);
  const [isNextButtonDisabled, setNextButtonDisabled] = useState(false);

  function getUrl() {
    let url = "";
    return (url =
      !difficulty === "any"
        ? `https://opentdb.com/api.php?amount=${quantity}&category=${category}&difficulty=${difficulty}&type=multiple`
        : `https://opentdb.com/api.php?amount=${quantity}&category=${category}&type=multiple`);
  }

  function startQuiz() {
    fetchData();
    props.function(true);
  }

  const fetchData = async () => {
    setIsLoading(true);
    fetch(getUrl())
      .then((res) => {
        if (!res.ok) {
          // error coming back from server
          throw Error("could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data.results);
        setError(null);
        setUpData(data.results);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setError(err.message);
      });
  };

  // Adds additional keys and values to each object of the fetched data array.
  function setUpData(data) {
    const dataArray = data.map((element) => ({
      ...element,
      id: addId(),
      user_answer: userAnswerParam(),
      question: removeQuotes(element.question),
      correct_answer: removeQuotes(element.correct_answer),
      incorrect_answers: element.incorrect_answers.map((item) => {
        return removeQuotes(item);
      }),
      possible_answers: randomiseOptions(element),
      possible_answer_1: addAnswerParam(0),
      possible_answer_2: addAnswerParam(1),
      possible_answer_3: addAnswerParam(2),
      possible_answer_4: addAnswerParam(3),
    }));
    setData(dataArray);
    console.log(dataArray);
    setIsLoading(false);
  }

  function addId() {
    const uuid = uuidv4();
    return uuid;
  }

  function userAnswerParam() {
    return "";
  }

  function removeQuotes(text) {
    return (text = text
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'")
      .replace(/&amp;/g, "&")
      .replace(/&eacute;/g, "é"))
      .replace(/&ntilde;/g, "ñ")
      .replace(/&aacute;/g, "á")
      .replace(/&rsquo;/g, "’")
      .replace(/&Delta;/g, "Δ")
      .replace(/&Eacute;/g, "é")
      .replace(/&euml;/g, "ë")
      .replace(/&iacute;/g, "í")
      .replace(/&ouml;/g, "ö")
      .replace(/&aring;/g, "å")
      .replace(/&auml;/g, "ä");
  }

  function addAnswerParam() {
    return "";
  }

  function randomiseOptions(element) {
    let answerOptions = [];
    answerOptions.push(removeQuotes(element.correct_answer));
    answerOptions.push(removeQuotes(element.incorrect_answers[0]));
    answerOptions.push(removeQuotes(element.incorrect_answers[1]));
    answerOptions.push(removeQuotes(element.incorrect_answers[2]));

    return shuffle(answerOptions);
  }

  function shuffle(array) {
    const shuffled = array.slice();
    let currentIndex = shuffled.length;
    let temporaryValue, randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = shuffled[currentIndex];
      shuffled[currentIndex] = shuffled[randomIndex];
      shuffled[randomIndex] = temporaryValue;
    }

    const newDataArray = data.map((previousData) => ({
      ...previousData,
      possible_answer_1: removeQuotes(shuffled[0]),
      possible_answer_2: removeQuotes(shuffled[1]),
      possible_answer_3: removeQuotes(shuffled[2]),
      possible_answer_4: removeQuotes(shuffled[3]),
    }));
    setData(newDataArray);
    return shuffled;
  }

  const handlePrevClick = () => {
    /*
    if (currentIndex > 0) {
      //setCurrentIndex(currentIndex - 1);
      setCurrentIndex((prevIndex) => prevIndex - 1);
      setPrevButtonDisabled(false);
    }*/

    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }

    if (currentIndex <= currentOption.length) {
      //setPrevButtonDisabled(false);
      setNextButtonDisabled(false);
    }

    if (currentIndex == 1) {
      setPrevButtonDisabled(true);
    }
  };

  const handleNextClick = () => {
    /*
    if (currentIndex < currentOption.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }*/

    if (currentIndex < currentOption.length) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }

    if (currentIndex == 0) {
      setPrevButtonDisabled(false);
    }

    if (currentIndex == currentOption.length - 2) {
      setNextButtonDisabled(true);
    }
  };

  function switchComponents() {
    if (currentIndex == 0 || !quantitySelected) {
      return <Quantity />;
    } else if (currentIndex == 1 && quantitySelected) {
      return <Difficulty />;
    } else if (currentIndex == 2 && difficultySelected) {
      return <Category />;
    } else if (currentIndex == 3 && categorySelected) {
      return (
        <>
          <div className="grid_centre">
            <h2> Are you ready to play?</h2>
            <Button
              btnText={"Start Quiz"}
              className={"start_Q_btn control_btn"}
              onClick={startQuiz}
              type={"submit"}
            />
          </div>
        </>
      );
    }
  }

  return (
    <>
      <div className="quiz-container">
        <div>
          <h1 className="header_font">
            Welcome to<br></br> <span>Quizical!</span>
          </h1>

          <div className="seperator"></div>

          <div className="selection-grid">{switchComponents()}</div>

          <div className="seperator"></div>
          <div className="control_panel">
            <Button
              className="prev_Q_btn control_btn"
              type="submit"
              btnText="Prev"
              value="minus"
              onClick={handlePrevClick}
              style={
                isPrevButtonDisabled
                  ? styles.disabledButton
                  : styles.enabledButton
              }
              disabled={isPrevButtonDisabled}
            />

            <Button
              className="next_Q_btn control_btn"
              type="submit"
              btnText="Next"
              value="plus"
              onClick={handleNextClick}
              style={
                isNextButtonDisabled
                  ? styles.disabledButton
                  : styles.enabledButton
              }
              disabled={isNextButtonDisabled}
            />
          </div>
        </div>
      </div>
    </>
  );
}

const styles = {
  disabledButton: {
    backgroundColor: "gray",
    color: "white",
    cursor: "not-allowed",
    margin: 10,
    padding: 15,
    borderRadius: "8px",
    border: "none",
    boxShadow: "0px 0px 10px 0px grey",
  },
};

//export { DataContext };

/*
<>
{!quantitySelected && <Quantity />}

{quantitySelected && !difficultySelected && <Difficulty />}

{quantitySelected && difficultySelected && !categorySelected && (
  <Category />
)}
{categorySelected && (
  <Button
    btnText={"Start Quiz"}
    className={"start_Q_btn"}
    onClick={startQuiz}
    type={"submit"}
  />
)}
</>
*/
