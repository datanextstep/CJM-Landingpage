export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "CJM Ventilation transformed our home's air quality. Professional service and excellent results!",
    author: "Sarah Johnson",
    role: "Homeowner",
  },
  {
    quote:
      "Fast, reliable, and affordable. They installed our office HVAC system perfectly.",
    author: "Mike Chen",
    role: "Business Owner",
  },
  {
    quote:
      "Outstanding maintenance service. Our system has been running flawlessly for years.",
    author: "Lisa Rodriguez",
    role: "Property Manager",
  },
];
