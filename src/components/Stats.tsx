import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiCalendar, FiCheckCircle, FiActivity, FiUsers } from "react-icons/fi";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { number: 23, suffix: "+", label: "Years of Experience", icon: FiCalendar },
  { number: 500, suffix: "+", label: "Projects Completed", icon: FiCheckCircle },
  { number: 50, suffix: "+", label: "Ongoing Projects", icon: FiActivity },
  { number: 100, suffix: "+", label: "Team Members", icon: FiUsers },
];

const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 border-y border-border bg-card relative overflow-hidden">
      {/* Subtle electric line top */}
      <motion.div
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
      />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15, type: "spring", stiffness: 100 }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-12 h-12 mx-auto mb-3 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
              >
                <stat.icon className="text-primary text-xl" />
              </motion.div>
              <div className="text-3xl md:text-5xl font-bold text-primary mb-2">
                <AnimatedCounter target={stat.number} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Subtle electric line bottom */}
      <motion.div
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
      />
    </section>
  );
};

export default Stats;
