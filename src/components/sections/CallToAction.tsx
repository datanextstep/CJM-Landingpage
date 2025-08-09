import { Button } from "../shared/Button";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";

export const CTA = () => {
  return (
    <section className="pb-20 relative">
      {" "}
      <Container>
        <div className="relative rounded-2xl overflow-hidden">
          <div className="relative z-10 mx-auto text-center max-w-xl md:max-w-2xl py-8 md:py-10 px-6 md:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-heading-1">
              Ready to Improve Your Air Quality?
            </h1>
            <Paragraph className="pt-10">
              Contact us today for a free consultation and quote. Expert installation,
              maintenance & optimization for healthier, more efficient spaces.
            </Paragraph>
            <div className="mx-auto max-w-md sm:max-w-xl pt-10 dark:text-white">
              <Button>Get Started Now</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
