import { useContext, useState } from "react";
import { DataContext } from "../App";

export default function Results(props) {
  return (
    <div className="quiz-container">
      <h1 className="results_fonts">Quizical Results! </h1>

      <table className="table_display">
        <tbody>
          <tr>
            <th>Question</th>
            <th>Your Answer</th>
            <th>Correct Answer</th>
          </tr>

          {props.data.map((value, id) => {
            return (
              <tr key={id}>
                <td>{value.question}</td>
                <td>
                  {value.user_answer === value.correct_answer ? "✅ " : "❌ "}
                  {value.user_answer}
                </td>
                <td>{value.correct_answer}</td>
              </tr>
            );
          })}

          <tr>
            <th>Result</th>
            <th>{props.scoreResults + "/" + props.data.length}</th>
            <th></th>
          </tr>
        </tbody>
      </table>

      <h2 className="text_center">Would you like to play again?</h2>
    </div>
  );
}
