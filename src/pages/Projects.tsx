// src/pages/Projects.tsx
import { Github } from "lucide-react";

const projects = [
  {
    title: "Real-Time Financial Data Processing System",
    tech: ["Python", "Apache Kafka", "GCP", "PostgreSQL"],
    description:
      "High-throughput system processing 1M+ events/hour with sub-second latency. Real-time analytics dashboard for financial analysts with auto-scaling and monitoring.",
    github: "https://github.com/05saitejaswi", // update with exact repo if available
  },
  {
    title: "Microservices E-Commerce Platform",
    tech: ["Java", "Spring Boot", "Docker", "Kubernetes"],
    description:
      "Fault-tolerant architecture with 99.9% uptime. CI/CD pipeline, API Gateway with rate limiting, and scalable infrastructure on K8s.",
    github: "https://github.com/05saitejaswi", // update with exact repo if available
  },
];

const Projects = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">
              {project.title}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              {project.tech.join(" • ")}
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              <Github size={18} className="mr-2" />
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
