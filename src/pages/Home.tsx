// src/pages/Home.tsx
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="max-w-5xl mx-auto py-20 px-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Hi, I'm Sai Tejaswi Chakravaram 👋</h1>
      <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
    I'm a Software Development Engineer with 1+ years of experience building scalable, cloud-native applications using Java, Python, TypeScript, and React. I’ve worked on enterprise systems and research projects across GCP, AWS, and Spring Boot microservices, and I’m passionate about delivering high-quality, user-focused solutions.
      </p>
      <div className="space-x-4">
        <Link to="/projects" className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition">
          View Projects
        </Link>
        <a href="/resume.pdf" target="_blank" className="border border-indigo-600 text-indigo-600 px-5 py-2 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-700 transition">
          Download Resume
        </a>
      </div>
    </section>
    
  );
};

export default Home;
