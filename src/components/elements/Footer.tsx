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
                <li>
                  <a
                    href="https://web.facebook.com/people/Ventilation-CJM/61573775603743/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-heading-1"
                    aria-label="Facebook - Ventilation CJM"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.35C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.314h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.675V1.325C24 .593 23.407 0 22.675 0z" />
                    </svg>
                    <span>Facebook</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/ventilation-cjm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-heading-1"
                    aria-label="LinkedIn - Ventilation CJM"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.941v5.665H9.351V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.604 0 4.27 2.373 4.27 5.459v6.282zM5.337 7.433a2.062 2.062 0 110-4.124 2.062 2.062 0 010 4.124zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.728v20.543C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.728C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                </li>
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
