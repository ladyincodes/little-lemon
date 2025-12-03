import Card from "./Card";

export default function Highlights() {
  return (
    <>
      <div className="highlight-heading">
        <h2>This weeks specials</h2>
        <div>
          <button>
            <a role="button">Online Menu</a>
          </button>
        </div>
      </div>
      <div className="highlight-cards">
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}
