const links = {
  about: "https://github.com/diomazing", // Add the actual link here
  privacy: "https://github.com/diomazing", // Add the actual link here
  licensing: "https://github.com/diomazing", // Add the actual link here
  contact: "https://github.com/diomazing", // Add the actual link here
  store: "https://github.com/diomazing", // Add the actual link here
};

const StoreFooter = () => {
  return (
    <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800">
      <div className="sm:flex sm:items-center sm:justify-between">
        <a href={links.store} className="flex items-center mb-4 sm:mb-0">
          <img src="/apple-logo.png" className="mr-3 h-8" alt="FlowBite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            iStore
          </span>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <a href={links.about} className="mr-4 hover:underline md:mr-6">
              About
            </a>
          </li>
          <li>
            <a href={links.privacy} className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href={links.licensing} className="mr-4 hover:underline md:mr-6">
              Licensing
            </a>
          </li>
          <li>
            <a href={links.contact} className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2024{" "}
        <a href={links.store} className="hover:underline">
          iStore
        </a>
        . All Rights Reserved to Apple.
      </span>
    </footer>
  );
};

export default StoreFooter;
