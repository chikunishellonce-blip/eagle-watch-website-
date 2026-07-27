import { companyInfo } from "@/lib/data/content";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-ink text-steel-light border-t border-line">
      <div className="wrap py-14 grid sm:grid-cols-3 gap-10">
        <div>
          <div className="font-display font-semibold text-white text-[15px]">{companyInfo.name}</div>
          <p className="mt-2 text-sm max-w-xs leading-relaxed">{companyInfo.tagline}</p>
        </div>

        <div>
          <div className="text-xs uppercase tracking-wide text-steel mb-3">Contact</div>
          <ul className="flex flex-col gap-2 text-sm">
            <li>{companyInfo.addressLine}</li>
            <li>
              <a href={`mailto:${companyInfo.email}`} className="hover:text-white transition-colors">
                {companyInfo.email}
              </a>
            </li>
            <li>{companyInfo.phones[0]}</li>
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-wide text-steel mb-3">Quick links</div>
          <ul className="flex flex-col gap-2 text-sm">
            <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
            <li><a href="#industries" className="hover:text-white transition-colors">Industries</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Request a quote</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line py-6">
        <div className="wrap text-xs text-steel">
          © {year} {companyInfo.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
