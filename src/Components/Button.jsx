export default function Button(props) {
  const { btnText, className, id, value, onClick, type, style } = props;

  return (
    <button
      className={className}
      id={id}
      value={value}
      onClick={onClick}
      type={type}
      style={style}
    >
      {" "}
      {btnText}{" "}
    </button>
  );
}
