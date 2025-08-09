import { testimonials } from "../../utils/testimonials-data";
import { Container } from "../shared/Container";
import { Title } from "../shared/Title";
import { Paragraph } from "../shared/Paragraph";

export const Testimonials = () => {
  return (
    <section className="py-5">
      <Container className="space-y-10 md:space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Title>What Our Customers Say</Title>
          <Paragraph>
            Real feedback from clients who trust CJM Ventilation for healthier, more efficient indoor air.
          </Paragraph>
        </div>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, idx) => (
            <figure
              key={idx}
              className="p-6 rounded-3xl border border-box-border bg-box-bg shadow-lg shadow-box-shadow flex flex-col"
            >
              <blockquote className="text-heading-3 italic">“{t.quote}”</blockquote>
              <figcaption className="mt-6 pt-4 border-t border-box-border text-heading-2 text-sm">
                <span className="font-semibold">{t.author}</span>
                <span className="text-heading-3 ml-1">— {t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
};
