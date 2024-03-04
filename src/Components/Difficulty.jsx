import { useContext, useState } from "react";
import { DataContext } from "../App";
import Button from "./Button";

export default function Difficulty() {
  const { difficulty, setDifficulty, setDifficultySelected } =
    useContext(DataContext);

  function handleDifficulty(e) {
    setDifficulty(e.target.value);
    setDifficultySelected(true);
    console.log(e.target.value);
  }

  return (
    <div>
      <h2>
        {" "}
        Please select difficulty. <br />
        <span className="down_emoji"></span>{" "}
      </h2>

      <div className="button_display">
        <Button
          className={"button_circle"}
          btnText="Any"
          id="any"
          name="difficulty"
          value="any"
          onClick={handleDifficulty}
          type="button"
          style={difficulty == "any" ? styles.buttonActive : null}
        />

        <Button
          className={"button_circle"}
          btnText="Easy"
          id="easy"
          name="difficulty"
          value="easy"
          onClick={handleDifficulty}
          type="button"
          style={difficulty == "easy" ? styles.buttonActive : null}
        />

        <Button
          className={"button_circle"}
          btnText="Fair"
          id="medium"
          name="difficulty"
          value="medium"
          onClick={handleDifficulty}
          type="button"
          style={difficulty == "medium" ? styles.buttonActive : null}
        />

        <Button
          className={"button_circle"}
          btnText="Hard"
          id="hard"
          name="difficulty"
          value="hard"
          onClick={handleDifficulty}
          type="button"
          style={difficulty == "hard" ? styles.buttonActive : null}
        />
      </div>
    </div>
  );
}

const styles = {
  buttonActive: {
    border: "2px solid #112a46",
    backgroundColor: "#f16873",
    color: "#112a46",
    cursor: "not-allowed",
    borderRadius: "50%",
    boxShadow: "0px 0px 10px 0px grey",
  },
};

/*

 <ul className="choices" onChange={handleDifficulty}>
        <li>
          <input
            type="radio"
            id="any"
            name="difficulty"
            value="any"
            className="difficulty"
            defaultChecked={difficulty == "any" ? true : false}
          />
          <label htmlFor="any"> Any </label>
        </li>
        <li>
          <input
            type="radio"
            id="easy"
            name="difficulty"
            value="easy"
            className="difficulty"
            defaultChecked={difficulty == "easy" ? true : false}
          />
          <label htmlFor="easy"> Easy </label>
        </li>
        <li>
          <input
            type="radio"
            id="medium"
            name="difficulty"
            value="medium"
            className="difficulty"
            defaultChecked={difficulty == "medium" ? true : false}
          />
          <label htmlFor="medium"> Medium </label>
        </li>
        <li>
          <input
            type="radio"
            id="hard"
            name="difficulty"
            value="hard"
            className="difficulty"
            defaultChecked={difficulty == "hard" ? true : false}
          />
          <label htmlFor="hard"> Hard </label>
        </li>
      </ul>


*/
