import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiBattery, FiZap, FiSun, FiSettings, FiShield, FiCpu } from "react-icons/fi";

const services = [
  { icon: FiZap, title: "HT/LT Electrical Works", desc: "Complete high tension and low tension electrical installations for large-scale developments." },
  { icon: FiBattery, title: "Power Distribution", desc: "Substation design, panel manufacturing, and distribution network engineering." },
  { icon: FiSun, title: "Solar & Renewable Energy", desc: "Rooftop solar installations and hybrid energy solutions for sustainable developments." },
  { icon: FiSettings, title: "Electrical Maintenance", desc: "Annual maintenance contracts and 24/7 breakdown support for electrical infrastructure." },
  { icon: FiShield, title: "Safety & Compliance", desc: "Electrical safety audits, earthing systems, and lightning protection solutions." },
  { icon: FiCpu, title: "Automation & Controls", desc: "Building management systems, SCADA integration, and smart electrical controls." },
];

const Services = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="py-24 bg-card relative overflow-hidden">
      {/* Background circuit pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `
          linear-gradient(90deg, hsl(207 100% 53%) 1px, transparent 1px),
          linear-gradient(hsl(207 100% 53%) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }} />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-section-label mb-4 block">Our Services</span>
          <h2 className="text-display text-3xl md:text-4xl text-foreground">
            Comprehensive <span className="text-primary">Electrical Solutions</span>
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40, rotateX: 10 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, type: "spring", stiffness: 80 }}
              whileHover={{
                y: -8,
                boxShadow: "0 0 40px hsl(207 100% 53% / 0.15)",
                borderColor: "hsl(207 100% 53% / 0.4)",
              }}
              className="group p-6 rounded-lg border border-border bg-background transition-all duration-300 cursor-pointer relative overflow-hidden"
            >
              {/* Hover electric glow top line */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />

              <motion.div
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors"
              >
                <service.icon className="text-primary text-xl" />
              </motion.div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.desc}
              </p>

              {/* Corner accent */}
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-primary/0 group-hover:border-primary/30 transition-colors rounded-br-lg" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
