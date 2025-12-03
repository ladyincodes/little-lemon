export default function About() {
  return (
    <section className="about">
      <article className="about-restaurant">
        <h1 style={{ color: "#c3a510" }}>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis
          pretium ex. Morbi consequat, mi non venenatis accumsan, augue neque
          porta nulla, ac mattis ex erat ac est. Ut sodales convallis feugiat.
          Sed consectetur, odio eu vulputate maximus, purus nibh semper eros, et
          rhoncus dolor augue quis justo. Sed vulputate.
        </p>
      </article>
      <div className="about-images">
        <img src="/src/assets/Mario and Adrian A.jpg" alt="image1" />
        <img src="/src/assets/Mario and Adrian b.jpg" alt="image2" />
      </div>
    </section>
  );
}
