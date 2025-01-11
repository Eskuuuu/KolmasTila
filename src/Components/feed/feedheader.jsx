import "./feed.css";

function Header({ text, textColor }) {
  return (
    <div className="headerdiv">
      <h1 id="igheader" style={{ color: textColor }}>
        {text}
      </h1>
    </div>
  );
}

export default Header;
