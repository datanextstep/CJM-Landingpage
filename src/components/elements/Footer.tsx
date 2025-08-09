import { Container } from "../shared/Container";
import logo from "/assets/logo.jpg";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="relative pt-24 rounded-t-3xl bg-box-bg border-t border-box-border">
      <Container className="pb-10">
        <div className="flex flex-col gap-10">
          {/* Brand + Intro */}
            <div className="flex items-start gap-4">
              <img src={logo} className="w-21 h-9 object-cover rounded" alt="CJM Ventilation Logo" />
              <div>
                <h2 className="text-heading-1 font-semibold text-xl">CJM Ventilation</h2>
                <p className="mt-2 text-heading-3 text-sm md:text-base max-w-lg">
                  Fondée en 1986, CJM Ventilation offre des solutions professionnelles de ventilation & HVAC :
                  installation, entretien, qualité de l'air, fabrication et optimisation énergétique.
                </p>
              </div>
            </div>

          {/* Link / Info Columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
            <div>
              <h3 className="text-heading-2 font-semibold mb-4 text-sm tracking-wide uppercase">Contact</h3>
              <ul className="space-y-2 text-heading-3 text-sm">
                <li><a href="tel:1234567890" className="hover:text-heading-1">(123) 456-7890</a></li>
                <li><a href="mailto:info@ventilationcjm.ca" className="hover:text-heading-1">info@ventilationcjm.ca</a></li>
                <li><span>Toronto, Ontario</span></li>
              </ul>
            </div>
            <div>
              <h3 className="text-heading-2 font-semibold mb-4 text-sm tracking-wide uppercase">Services</h3>
              <ul className="space-y-2 text-heading-3 text-sm">
                <li>Ventilation Installation</li>
                <li>HVAC Maintenance</li>
                <li>Air Quality Solutions</li>
                <li>Ductwork & Cleaning</li>
                <li>Energy-Efficient Upgrades</li>
              </ul>
            </div>
            <div>
              <h3 className="text-heading-2 font-semibold mb-4 text-sm tracking-wide uppercase">Company</h3>
              <ul className="space-y-2 text-heading-3 text-sm">
                <li><a href="#about-us" className="hover:text-heading-1">About Us</a></li>
                <li><a href="#pricing" className="hover:text-heading-1">Pricing</a></li>
                <li><a href="#cta" className="hover:text-heading-1">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-heading-2 font-semibold mb-4 text-sm tracking-wide uppercase">Follow Us</h3>
              <ul className="space-y-2 text-heading-3 text-sm">
                <li><a href="#" className="hover:text-heading-1">Facebook</a></li>
                <li><a href="#" className="hover:text-heading-1">Twitter</a></li>
                <li><a href="#" className="hover:text-heading-1">LinkedIn</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-box-border flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-heading-3 text-xs md:text-sm">
            <p>© {year} CJM Ventilation. All rights reserved.</p>
            <p className="text-heading-3">Ventilation & Fabrication since 1986.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
