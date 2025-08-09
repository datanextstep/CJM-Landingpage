import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
// import { Numbers } from "./Numbers"; // Deactivated stats section

export const Hero = () => {
  return (
    <section className="relative pt-32 lg:pt-36">
      {" "}
      <Container className="flex flex-col lg:flex-row gap-10 lg:gap-12">
        <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0">
          <span
            className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 
                        skew-x-12 rounded-3xl bg-gradient-to-r from-blue-600 to-violet-600
                        blur-xl opacity-60 lg:opacity-95 lg:block hidden"
          ></span>
          <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-primary blur-xl opacity-80"></span>
        </div>

        <div
          className="relative flex flex-col items-center text-center lg:text-left lg:py-8 lg:items-start
                        lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2"
        >
          <h1 className="text-heading-1 text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold">
            Clean Air & Comfort
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-600 ml-2">
              For Your Space
            </span>
          </h1>
          <Paragraph className="mt-8">
            Professional ventilation & HVAC solutions in Toronto. Installation, maintenance,
            indoor air quality, ductwork & energy‑efficient upgrades that keep your home or business
            healthy and efficient.
          </Paragraph>
          {/**
           * Email capture form temporarily deactivated.
           * Original code preserved below for future reactivation.
           *
           * <div className="mt-10 w-full flex max-w-md mx-auto lg:mx-0">
           *  <div className="flex sm:flex-row flex-col gap-5 w-full">
           *    <form ...> ... </form>
           *  </div>
           * </div>
           */}
        </div>

        <div className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-non lg:mx-0 mx-auto max-w-3xl">
          <img
            src="https://images.pexels.com/photos/7773731/pexels-photo-7773731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Hero image"
            width={2350}
            height={2359}
            className="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-non max-h-96"
          />
        </div>
      </Container>
  {/** <Numbers /> Deactivated: metrics section hidden */}
    </section>
  );
};
