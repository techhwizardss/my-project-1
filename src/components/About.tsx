import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-section-label mb-4 block">Who We Are</span>
            <h2 className="text-display text-3xl md:text-4xl text-foreground mb-6">
              Building India's Electrical{" "}
              <span className="text-primary">Infrastructure</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Sharma Electricals Pvt. Ltd. is a leading B2B electrical engineering 
              and contracting company headquartered in Gurugram, Haryana. With over 
              23 years of trusted experience, we specialize in large-scale electrical 
              infrastructure for residential and commercial developments.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We partner with India's top real estate developers including 
              Signature Global, Bestech, M3M India, and Vatika Group to deliver 
              world class electrical systems that power modern living and commercial spaces.
            </p>
          </motion.div>

          {/* Right — Key Points */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            {[
              {
                title: "Turnkey Solutions",
                desc: "End-to-end electrical engineering from design to commissioning.",
              },
              {
                title: "Large-Scale Projects",
                desc: "Expertise in township-level and commercial complex electrical networks.",
              },
              {
                title: "Quality & Safety",
                desc: "Strict adherence to IS standards and safety protocols across every project.",
              },
              {
                title: "Trusted Partnerships",
                desc: "Long-term relationships with India's leading real estate developers.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-4 p-5 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <div className="mt-1 glow-dot flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
