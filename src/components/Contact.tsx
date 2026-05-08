import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FiMapPin, FiPhone, FiMail, FiSend, FiCheck, FiZap, FiExternalLink } from "react-icons/fi";
import ElectricalBackground from "./ElectricalBackground";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().min(2, "Company name is required"),
  phone: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().optional(),
  botcheck: z.boolean().optional(),
});

type FormData = z.infer<typeof schema>;

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setSubmitStatus("loading");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "b28309d5-0faa-43f9-9739-0c7a81a6e8a0",
          subject: `New Project Inquiry from ${data.name} — ${data.company}`,
          from_name: data.name,
          name: data.name,
          company: data.company,
          phone: data.phone || "Not provided",
          email: data.email,
          message: data.message || "No details provided",
          botcheck: data.botcheck,
        }),
      });
      const result = await response.json();
      if (result.success) {
        setSubmitStatus("success");
        reset();
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus("idle"), 4000);
      }
    } catch {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 4000);
    }
  };

  const contactItems = [
    { icon: FiMapPin, title: "Office Address", content: "Office no. 327, 3rd floor, Bestech Citygate, Sec-81A, Gurugram, Haryana" },
    { icon: FiPhone, title: "Phone", content: "+91 9811617703", href: "tel:+919811617703" },
    { icon: FiMail, title: "Email", content: "sharma.electrricals99@gmail.com", href: "mailto:sharma.electrricals99@gmail.com" },
  ];

  const inputClass = "w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground text-sm focus:outline-none focus:border-primary focus:shadow-[0_0_15px_hsl(207_100%_53%_/_0.15)] transition-all";
  const errorClass = "text-xs text-red-400 mt-1";

  return (
    <section id="contact" ref={ref} className="py-24 bg-card relative overflow-hidden">
      <ElectricalBackground className="opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-section-label mb-4 block">Get In Touch</span>
          <h2 className="text-display text-3xl md:text-4xl text-foreground">
            Let's <span className="text-primary">Connect</span>
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {contactItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ x: 5 }}
                className="flex gap-4 group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors"
                >
                  <item.icon className="text-primary text-lg" />
                </motion.div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                  {item.href ? (
                    <a href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-sm text-muted-foreground whitespace-pre-line">{item.content}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.01 }}
              className="rounded-lg overflow-hidden border border-border mt-4 relative"
            >
              <iframe
                title="Sharma Electricals — Bestech Citygate, Sector 81A, Gurugram"
                src="https://maps.google.com/maps?q=28.3726942,76.9453924&z=18&output=embed"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
              <a
                href="https://www.google.com/maps/place/Bestech+Citygate/@28.3726942,76.9453924,18z/data=!4m7!3m6!1s0x390d3db43d23f34f:0x245f39d482eecb46!4b1!8m2!3d28.3726942!4d76.9453924!16s%2Fg%2F11c3s98xzm"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Sharma Electricals office location in Google Maps"
                className="absolute bottom-3 right-3 inline-flex items-center gap-2 px-3 py-2 rounded-md bg-background/90 backdrop-blur-sm border border-border text-xs font-medium text-foreground shadow-lg hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              >
                <FiExternalLink className="text-sm" />
                Open in Google Maps
              </a>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5 p-8 rounded-lg border border-border bg-background relative overflow-hidden"
          >
            {/* Top glow */}
            <motion.div
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
            />

            {/* Honeypot — invisible to humans, traps bots */}
            <input type="checkbox" {...register("botcheck")} className="hidden" tabIndex={-1} />

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium text-foreground block mb-2">Name *</label>
                <input
                  type="text"
                  {...register("name")}
                  className={inputClass}
                  placeholder="Your name"
                />
                {errors.name && <p className={errorClass}>{errors.name.message}</p>}
              </div>
              <div>
                <label className="text-sm font-medium text-foreground block mb-2">Phone</label>
                <input
                  type="tel"
                  {...register("phone")}
                  className={inputClass}
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground block mb-2">Company Name *</label>
              <input
                type="text"
                {...register("company")}
                className={inputClass}
                placeholder="Your company / developer name"
              />
              {errors.company && <p className={errorClass}>{errors.company.message}</p>}
            </div>

            <div>
              <label className="text-sm font-medium text-foreground block mb-2">Email *</label>
              <input
                type="email"
                {...register("email")}
                className={inputClass}
                placeholder="your@email.com"
              />
              {errors.email && <p className={errorClass}>{errors.email.message}</p>}
            </div>

            <div>
              <label className="text-sm font-medium text-foreground block mb-2">Project Details</label>
              <textarea
                rows={4}
                {...register("message")}
                className={`${inputClass} resize-none`}
                placeholder="Tell us about your project requirements..."
              />
            </div>

            <motion.button
              type="submit"
              disabled={submitStatus === "loading" || submitStatus === "success"}
              whileHover={submitStatus === "idle" ? { scale: 1.02, boxShadow: "0 0 30px hsl(207 100% 53% / 0.3)" } : {}}
              whileTap={submitStatus === "idle" ? { scale: 0.98 } : {}}
              className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 font-semibold rounded-lg transition-colors ${
                submitStatus === "success"
                  ? "bg-green-600 text-white cursor-default"
                  : submitStatus === "error"
                  ? "bg-red-600 text-white"
                  : submitStatus === "loading"
                  ? "bg-primary/70 text-primary-foreground cursor-not-allowed"
                  : "bg-primary text-primary-foreground hover:bg-primary/90"
              }`}
            >
              {submitStatus === "success" && <><FiCheck /> Message Sent!</>}
              {submitStatus === "error" && <>Failed to send — please try again</>}
              {submitStatus === "loading" && <>Sending...</>}
              {submitStatus === "idle" && <><FiZap className="animate-pulse" /> Send Message <FiSend /></>}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
