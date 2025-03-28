import "../styles/header.css";

function Header({ focus }) {
  return (
    <div className="header-container">
      {focus ? (
        <h2 className="fade-in-out-slow">Focus</h2>
      ) : (
        <h2 className="fade-in-out-slow">Break</h2>
      )}
    </div>
  );
}

export default Header;
