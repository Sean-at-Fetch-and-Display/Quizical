import { useContext, useState } from "react";
import { DataContext } from "../App";
import Results from "./Results";
import Button from "./Button";

export default function Play() {
  const { count, setCount, data, setData, isFinished, setIsFinished } =
    useContext(DataContext);
  const [isPrevButtonDisabled, setPrevButtonDisabled] = useState(true);
  const [isNextButtonDisabled, setNextButtonDisabled] = useState(false);

  function prevQuestion() {
    if (count > 0) {
      upDateCount("-");
    }

    if (count <= data.length) {
      //setPrevButtonDisabled(false);
      setNextButtonDisabled(false);
    }

    if (count == 1) {
      setPrevButtonDisabled(true);
    }
  }

  function nextQuestion() {
    if (count < data.length) {
      upDateCount("+");
    }

    if (count == 0) {
      setPrevButtonDisabled(false);
    }

    if (count == data.length - 2) {
      setNextButtonDisabled(true);
    }
  }

  function upDateCount(val) {
    val === "+"
      ? setCount((prevCount) => prevCount + 1)
      : setCount((prevCount) => prevCount - 1);
  }

  function userAnswer(e) {
    const userResponse = e.target.value;
    setUserResponse(userResponse);
  }

  function setUserResponse(userResponse) {
    const dataArray = data.map((obj) => ({
      ...obj,
      user_answer: obj === data[count] ? checkAnswer(obj) : obj.user_answer,
    }));

    function checkAnswer(element) {
      for (let i = 0; i < data.length; i++) {
        if (
          element.correct_answer === userResponse ||
          element.incorrect_answers[i] === userResponse
        ) {
          return userResponse;
        }
      }
    }
    setData(dataArray);
  }

  function finishBtn() {
    console.log(data.length);
    console.log(count);
    console.log("Would you like to finish quiz?");

    setIsFinished(true);
  }

  function scoreResults() {
    let score = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i].user_answer == data[i].correct_answer) {
        score++;
      }
    }
    return score;
  }

  function refreshPage() {
    window.location.reload(false);
  }

  return !isFinished ? (
    <>
      <div className="quiz-container">
        <div>
          <h1 className="header_font">
            {" "}
            Let&apos;s play <br></br> <span>Quizical!</span>
          </h1>
        </div>

        <div></div>

        <div className="seperator"></div>
        <div className="selection-grid">
          <div key={data[count]?.id}>
            <h2>
              Question {count + 1} / {data.length} : {data[count]?.question}
            </h2>
            <div className="options_grid">
              <Button
                className="options_button"
                btnText={data[count]?.possible_answers[0]}
                id={data[count]?.possible_answers[0]}
                name="q-choice"
                value={data[count]?.possible_answers[0]}
                onClick={userAnswer}
                type="button"
                style={
                  data[count]?.possible_answers[0] == data[count]?.user_answer
                    ? styles.buttonActive
                    : null
                }
              />

              <Button
                className="options_button"
                btnText={data[count]?.possible_answers[1]}
                id={data[count]?.possible_answers[1]}
                name="q-choice"
                value={data[count]?.possible_answers[1]}
                onClick={userAnswer}
                type="button"
                style={
                  data[count]?.possible_answers[1] == data[count]?.user_answer
                    ? styles.buttonActive
                    : null
                }
              />

              <Button
                className="options_button"
                btnText={data[count]?.possible_answers[2]}
                id={data[count]?.possible_answers[2]}
                name="q-choice"
                value={data[count]?.possible_answers[2]}
                onClick={userAnswer}
                type="button"
                style={
                  data[count]?.possible_answers[2] == data[count]?.user_answer
                    ? styles.buttonActive
                    : null
                }
              />

              <Button
                className="options_button"
                btnText={data[count]?.possible_answers[3]}
                id={data[count]?.possible_answers[3]}
                name="q-choice"
                value={data[count]?.possible_answers[3]}
                onClick={userAnswer}
                type="button"
                style={
                  data[count]?.possible_answers[3] == data[count]?.user_answer
                    ? styles.buttonActive
                    : null
                }
              />
            </div>
          </div>
        </div>
        <div className="seperator"></div>
        <div className="control_panel ">
          <button
            className="prev_Q_btn control_btn"
            type="submit"
            onClick={prevQuestion}
            style={
              isPrevButtonDisabled
                ? styles.disabledButton
                : styles.enabledButton
            }
            disabled={isPrevButtonDisabled}
          >
            Prev
          </button>

          <button
            className="next_Q_btn control_btn"
            type="submit"
            onClick={nextQuestion}
            style={
              isNextButtonDisabled
                ? styles.disabledButton
                : styles.enabledButton
            }
            disabled={isNextButtonDisabled}
          >
            Next
          </button>

          <button
            className="finish_btn control_btn"
            type="submit"
            onClick={finishBtn}
          >
            Finish
          </button>
        </div>
      </div>
    </>
  ) : (
    <>
      <Results scoreResults={scoreResults()} data={data} />
      <Button
        className="prev_Q_btn control_btn refresh_btn"
        type="submit"
        btnText="Refresh"
        onClick={refreshPage}
      />
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
  buttonActive: {
    border: "2px solid #112a46",
    backgroundColor: "#f16873",
    color: "#112a46",
    cursor: "not-allowed",
    boxShadow: "0px 0px 10px 0px grey",
  },
};
