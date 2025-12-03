import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  return (
    <div className="testimonials">
      <h1>Testimonials</h1>
      <section className="testimonial-cards">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </section>
    </div>
  );
}
