import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    title: "Building Scalable React Applications",
    excerpt:
      "Learn the best practices for structuring your React projects for maintainability and scale. Covers component architecture, state management, and performance optimization.",
    date: "Dec 1, 2024",
    readTime: "8 min read",
    category: "React",
  },
  {
    title: "The Future of Web Development in 2025",
    excerpt:
      "Exploring upcoming trends in web development including AI integration, edge computing, and new frameworks that are shaping the industry.",
    date: "Nov 25, 2024",
    readTime: "6 min read",
    category: "Trends",
  },
  {
    title: "TypeScript Tips for Better Code",
    excerpt:
      "Advanced TypeScript techniques that will help you write safer, more maintainable code. From utility types to generic patterns.",
    date: "Nov 18, 2024",
    readTime: "10 min read",
    category: "TypeScript",
  },
];

export const BlogSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="section-padding" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Latest <span className="text-primary">Blog Posts</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about web development and
            technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl shadow-md overflow-hidden card-hover group"
            >
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium mb-4">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {post.readTime}
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="group/btn p-0 h-auto text-primary"
                >
                  Read More
                  <ArrowRight
                    size={16}
                    className="ml-1 transition-transform group-hover/btn:translate-x-1"
                  />
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
