import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiLinkedin, FiMail } from "react-icons/fi";

const leaders = [
  {
    name: "PD Sharma",
    title: "Founder & Managing Director",
    experience: "23+ years in electrical engineering & contracting",
    bio: "A visionary leader who founded Sharma Electricals and built it into one of Gurugram's most trusted electrical contracting firms. His deep expertise in large-scale electrical infrastructure has powered some of NCR's most prestigious developments.",
  },
  {
    name: "Harshit Sharma",
    title: "Director, Electrical Engineering",
    experience: "Leading next-generation project execution",
    bio: "Bringing modern engineering practices and a fresh perspective to the company's operations. Harshit oversees project planning, client relations, and the company's expansion into new-age electrical solutions including solar and automation.",
  },
];

const Leadership = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="leadership" ref={ref} className="py-24 bg-card relative overflow-hidden">
      {/* Subtle background glow */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]"
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-section-label mb-4 block">Our Leadership</span>
          <h2 className="text-display text-3xl md:text-4xl text-foreground">
            Meet the <span className="text-primary">Team</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {leaders.map((leader, i) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 40, rotateY: 10 }}
              animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.25, type: "spring" }}
              whileHover={{ y: -8, boxShadow: "0 0 50px hsl(207 100% 53% / 0.12)" }}
              className="rounded-lg border border-border bg-background p-8 hover:border-primary/30 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Top glow line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/0 group-hover:via-primary/60 to-transparent transition-all duration-500" />

              {/* Avatar with electric ring */}
              <div className="relative w-20 h-20 mb-6">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "conic-gradient(from 0deg, transparent, hsl(207 100% 53% / 0.3), transparent, hsl(207 100% 53% / 0.3), transparent)",
                  }}
                />
                <div className="absolute inset-[2px] rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">
                    {leader.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{leader.name}</h3>
              <p className="text-primary text-sm font-semibold mb-1">{leader.title}</p>
              <p className="text-xs text-muted-foreground mb-4">{leader.experience}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {leader.bio}
              </p>
              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.15, color: "hsl(207 100% 53%)" }}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <FiLinkedin className="text-lg" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.15, color: "hsl(207 100% 53%)" }}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <FiMail className="text-lg" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
