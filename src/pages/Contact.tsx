const Contact = () => {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold mb-6">Let’s Connect</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-8">
        Whether you’re looking to collaborate on a project, hire a full-stack developer, or just say hello —
        feel free to reach out!
      </p>

      <div className="space-y-4 text-lg">
        <p>
          📧{" "}
          <a
            href="mailto:saitejaswi.chakravaram@gmail.com"
            className="text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            saitejaswi.chakravaram@gmail.com
          </a>
        </p>
        <p>📞 (404) 512-4053</p>
        <p>
          💼{" "}
          <a
            href="https://www.linkedin.com/in/saitejaswichakravaram"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            linkedin.com/in/saitejaswichakravaram
          </a>
        </p>
        <p>
          💻{" "}
          <a
            href="https://github.com/05saitejaswi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            github.com/05saitejaswi
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
