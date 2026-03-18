import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiZap } from "react-icons/fi";

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
    <section id="clients" ref={ref} className="py-24 bg-background relative overflow-hidden">
      {/* Animated horizontal electric lines */}
      {[0, 1].map((i) => (
        <motion.div
          key={i}
          className="absolute h-px bg-gradient-to-r from-transparent via-primary to-transparent"
          style={{ top: i === 0 ? "15%" : "85%", left: 0, right: 0 }}
          animate={{ opacity: [0, 0.3, 0], scaleX: [0.3, 1, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, delay: i * 2 }}
        />
      ))}

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-section-label mb-4 block">Trusted By</span>
          <h2 className="text-display text-3xl md:text-4xl text-foreground">
            Our <span className="text-primary">Clients</span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
          {clients.map((client, i) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07, type: "spring", stiffness: 100 }}
              whileHover={{
                scale: 1.05,
                y: -4,
                boxShadow: "0 0 30px hsl(207 100% 53% / 0.15)",
                borderColor: "hsl(207 100% 53% / 0.4)",
              }}
              className="flex flex-col items-center justify-center p-6 rounded-lg border border-border bg-card hover:border-primary/30 transition-all duration-300 cursor-pointer group relative overflow-hidden"
            >
              {/* Electric shimmer */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <FiZap className="text-primary text-lg mb-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="text-sm md:text-base font-semibold text-muted-foreground text-center group-hover:text-foreground transition-colors relative z-10">
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
