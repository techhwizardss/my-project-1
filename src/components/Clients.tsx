import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const clients = [
  "Signature Global",
  "M3M India",
  "Bestech Group",
  "Vatika Group",
  "Raheja Developers",
  "Ashiana Housing",
  "BPTP Ltd",
  "Godrej Properties",
];

const Clients = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="clients" ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-section-label mb-4 block">Trusted By</span>
          <h2 className="text-display text-3xl md:text-4xl text-foreground">
            Our <span className="text-primary">Clients</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
          {clients.map((client, i) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-center justify-center p-6 rounded-lg border border-border bg-card hover:border-primary/30 hover:shadow-[var(--shadow-glow)] transition-all duration-300"
            >
              <span className="text-sm md:text-base font-semibold text-muted-foreground text-center">
                {client}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
