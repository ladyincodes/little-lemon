export default function Card() {
  return (
    <div className="highlight-card">
      <img src="/src/assets/greek salad.jpg" alt="food1" />
      <div className="highligh-description">
        <div className="highlight-name-price">
          <h4>food name</h4>
          <p>
            <span>$price</span>
          </p>
        </div>
        <p>food description</p>
        <a href="#">
          Order a delivery
          <img src="/src/assets/delivery.jpg" style={{ width: "20px" }} />
        </a>
      </div>
    </div>
  );
}
