// src/components/Footer.tsx
const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-600 dark:text-gray-300">
        <p>© {new Date().getFullYear()} Sai Tejaswi Chakravaram</p>
        <div className="mt-2 space-x-4">
          <a href="mailto:saitejaswi.chakravaram05@gmail.com" className="hover:underline">Email</a>
          <a href="https://github.com/saitejaswi" target="_blank" className="hover:underline">GitHub</a>
          <a href="https://www.linkedin.com/in/saitejaswichakravaram/" target="_blank" className="hover:underline">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
