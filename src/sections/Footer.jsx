import { copyrightSign } from "../assets/icons";
import { logo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container p-4 bg-dark-gray text-white text-sm" id="footer">
      <div className="flex flex-col gap-28 md:flex-row md:justify-between">
        {/* Logo and Description */}
        <div className="flex flex-col items-start gap-4 md:w-1/3">
          <a href="/">
            <img
              src={logo}
              alt="logo"
              width={100}
              height={44}
              className="m-0"
            />
          </a>
          <p className="leading-6 text-white-400">
            Get your health essentials ready for the new season at our nearest
            pharmacy. Earn exclusive rewards!
          </p>
          <div className="flex items-center gap-3">
            {socialMedia.map((icon) => (
              <div
                className="flex justify-center items-center w-8 h-8 bg-white rounded-full transition-transform duration-300 hover:scale-90 cursor-pointer"
                key={icon.alt}
              >
                <img src={icon.src} alt={icon.alt} width={16} height={16} />
              </div>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-between gap-6 md:w-2/3">
          {footerLinks.map((section) => (
            <div key={section.title} className="min-w-[120px]">
              <h4 className="font-medium mb-2 text-white">
                {section.title}
              </h4>
              <ul className="space-y-1">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.link}
                      className="text-white-400 hover:text-slate-gray"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-6 border-t border-white-400 pt-4 flex flex-col items-center md:flex-row md:justify-between">
        <div className="flex items-center gap-2">
          <img
            src={copyrightSign}
            alt="copyright sign"
            width={16}
            height={16}
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="hover:underline mt-2 md:mt-0">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;