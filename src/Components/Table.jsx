export default function Table(props) {
  return (
    <table className="table_display">
      <tr>
        <th>Question</th>
        <th>Your Answer</th>
        <th>Correct Answer</th>
      </tr>
      <tbody>
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
      </tbody>
      <tr>
        <th>Result</th>
        <th>{props.scoreResults + "/" + props.data.length}</th>
        <th></th>
      </tr>
    </table>
  );
}
