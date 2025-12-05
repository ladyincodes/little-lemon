export default function HeroSection() {
  return (
    <>
      <div className="hero">
        <article className="hero-intro">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean Restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button>
            <a href="/booking">Reserve a Table</a>
          </button>
        </article>
        <aside className="hero-image">
          <img src="/src/assets/restauranfood.jpg" alt="food" />
        </aside>
      </div>
    </>
  );
}
