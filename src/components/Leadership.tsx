import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiLinkedin } from "react-icons/fi";

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
    <section id="leadership" ref={ref} className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-section-label mb-4 block">Our Leadership</span>
          <h2 className="text-display text-3xl md:text-4xl text-foreground">
            Meet the <span className="text-primary">Team</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {leaders.map((leader, i) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="rounded-lg border border-border bg-background p-8 hover:border-primary/30 transition-colors"
            >
              {/* Avatar placeholder */}
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-primary">
                  {leader.name.split(" ").map(n => n[0]).join("")}
                </span>
              </div>
              <h3 className="text-xl font-bold text-foreground">{leader.name}</h3>
              <p className="text-primary text-sm font-semibold mb-1">{leader.title}</p>
              <p className="text-xs text-muted-foreground mb-4">{leader.experience}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {leader.bio}
              </p>
              <button className="text-muted-foreground hover:text-primary transition-colors">
                <FiLinkedin className="text-lg" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
