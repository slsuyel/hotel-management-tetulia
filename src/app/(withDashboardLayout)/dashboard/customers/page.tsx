"use client";

const CustomersPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 sm:p-10 flex items-center justify-center">
      <div className="max-w-2xl w-full mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-10 text-center transform transition-all duration-300">
        <svg
          className="mx-auto text-6xl text-blue-500 dark:text-blue-400 mb-6 animate-pulse w-60"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
          <path d="M12 9c-2.481 0-4.5 2.019-4.5 4.5S9.519 18 12 18s4.5-2.019 4.5-4.5S14.481 9 12 9zm0 7c-1.379 0-2.5-1.122-2.5-2.5S10.621 11 12 11s2.5 1.122 2.5 2.5S13.379 16 12 16z" />
          <path d="M12 5.5c-1.379 0-2.5 1.122-2.5 2.5S10.621 10.5 12 10.5s2.5-1.122 2.5-2.5S13.379 5.5 12 5.5z" />
        </svg>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
          Customers
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
          The customer management portal is in development.
        </p>
        <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-xl shadow-inner">
          <p className="text-2xl font-bold text-gray-600 dark:text-gray-400 animate-pulse">
            Content Coming Soon
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomersPage;
