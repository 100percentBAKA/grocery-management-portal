const Highlighter = ({ text }) => {
  return (
    <span
      style={{
        background: "#ff7800",
        color: "#fff",
        display: "inline-block",
        padding: "0.5rem 3rem",
        clipPath: "polygon(100% 0, 93% 50%, 100% 99%, 0 100%, 7% 50%, 0 0)",
      }}
    >
      {text}
    </span>
  );
};

export default Highlighter;
