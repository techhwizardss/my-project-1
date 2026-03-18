import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiZap } from "react-icons/fi";
import seLogo from "@/assets/se-logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border relative overflow-hidden">
      {/* Animated glow line at top */}
      <motion.div
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
      />

      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <motion.img
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                src={seLogo}
                alt="Sharma Electricals"
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <span className="font-bold text-foreground block leading-none">Sharma Electricals</span>
                <span className="text-primary text-[10px] tracking-[0.15em] uppercase font-medium">Pvt. Ltd.</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Engineering Electrical Excellence since 2002. Powering India's finest real estate developments.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
              <FiZap className="text-primary text-xs" /> Quick Links
            </h4>
            <div className="space-y-3">
              {["About", "Services", "Projects", "Leadership", "Contact"].map((link) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  whileHover={{ x: 4, color: "hsl(207 100% 53%)" }}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
              <FiZap className="text-primary text-xs" /> Services
            </h4>
            <div className="space-y-3">
              {["HT/LT Works", "Power Distribution", "Solar Energy", "Maintenance", "Automation"].map((s) => (
                <span key={s} className="block text-sm text-muted-foreground">{s}</span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
              <FiZap className="text-primary text-xs" /> Contact
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <FiMapPin className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Gurugram, Haryana, India</span>
              </div>
              <div className="flex items-center gap-2">
                <FiPhone className="text-primary flex-shrink-0" />
                <a href="tel:+919876543210" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FiMail className="text-primary flex-shrink-0" />
                <a href="mailto:info@sharmaelectricals.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  info@sharmaelectricals.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="glow-line mt-12 mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2024 Sharma Electricals Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            Designed & Built with <FiZap className="text-primary" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
