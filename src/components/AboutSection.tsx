import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "5+ Years Experience",
    description: "Building web applications",
  },
  {
    icon: Rocket,
    title: "50+ Projects",
    description: "Successfully delivered",
  },
  {
    icon: Users,
    title: "30+ Clients",
    description: "Satisfied worldwide",
  },
  {
    icon: Lightbulb,
    title: "Innovative",
    description: "Problem solver",
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-muted/50" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              A passionate developer crafting digital experiences
            </h3>
            <p className="text-muted-foreground mb-4">
              I'm a full-stack developer based in San Francisco, specializing in
              building exceptional digital experiences. With over 5 years of
              experience in web development, I've had the privilege of working
              with startups and established companies alike.
            </p>
            <p className="text-muted-foreground mb-4">
              My journey in tech started with a curiosity for how things work on
              the internet. Today, I focus on creating responsive, accessible,
              and performant web applications using modern technologies like
              React, TypeScript, Node.js, and cloud services.
            </p>
            <p className="text-muted-foreground mb-6">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge through
              my blog posts. I believe in continuous learning and staying
              updated with the latest trends in web development.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-muted-foreground">Based in San Francisco</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-muted-foreground">Available for freelance</span>
              </div>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-card p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <item.icon className="w-10 h-10 text-primary mb-4" />
                <h4 className="text-xl font-bold text-foreground mb-1">
                  {item.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
