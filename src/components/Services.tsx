import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiBattery, FiZap, FiSun, FiSettings, FiShield, FiCpu } from "react-icons/fi";

const services = [
  {
    icon: FiZap,
    title: "HT/LT Electrical Works",
    desc: "Complete high tension and low tension electrical installations for large-scale developments.",
  },
  {
    icon: FiBattery,
    title: "Power Distribution",
    desc: "Substation design, panel manufacturing, and distribution network engineering.",
  },
  {
    icon: FiSun,
    title: "Solar & Renewable Energy",
    desc: "Rooftop solar installations and hybrid energy solutions for sustainable developments.",
  },
  {
    icon: FiSettings,
    title: "Electrical Maintenance",
    desc: "Annual maintenance contracts and 24/7 breakdown support for electrical infrastructure.",
  },
  {
    icon: FiShield,
    title: "Safety & Compliance",
    desc: "Electrical safety audits, earthing systems, and lightning protection solutions.",
  },
  {
    icon: FiCpu,
    title: "Automation & Controls",
    desc: "Building management systems, SCADA integration, and smart electrical controls.",
  },
];

const Services = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-section-label mb-4 block">Our Services</span>
          <h2 className="text-display text-3xl md:text-4xl text-foreground">
            Comprehensive <span className="text-primary">Electrical Solutions</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-6 rounded-lg border border-border bg-background hover:border-primary/40 transition-all duration-300 hover:shadow-[var(--shadow-glow)]"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="text-primary text-xl" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
