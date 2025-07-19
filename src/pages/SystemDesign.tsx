import { useState } from "react";

const tabs = [
  {
    name: "Real-Time Financial System",
    description: `High-throughput system processing 1M+ events/hour using Kafka and Python. 
Deployed with GCP Cloud Run, Cloud SQL, Prometheus, Grafana.`,
    image: "/images/realtime-diagram.png", // you can replace with your diagram
  },
  {
    name: "E-Commerce Microservices",
    description: `Microservices architecture using Spring Boot and Kubernetes. 
API Gateway with rate limiting, CI/CD with Jenkins, and Docker-based deployment.`,
    image: "/images/microservices-diagram.png",
  },
];

const SystemDesign = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">System Design</h1>
      <div className="flex justify-center space-x-4 mb-8">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition ${
              activeTab === idx
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      <div className="text-center mb-6 text-gray-700 dark:text-gray-300">
        <p className="max-w-3xl mx-auto whitespace-pre-line">{tabs[activeTab].description}</p>
      </div>

      <div className="flex justify-center">
        <img
          src={tabs[activeTab].image}
          alt={tabs[activeTab].name}
          className="max-w-full h-auto rounded-lg shadow-md border dark:border-gray-700"
        />
      </div>
    </section>
  );
};

export default SystemDesign;
