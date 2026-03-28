// import { GlobeLockIcon, RssIcon } from 'lucide-react';
import Logo from "./Logo"

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white px-6 py-10 md:px-10 lg:px-40 dark:border-gray-800">
      <div className="layout-content-container mx-auto flex max-w-240 flex-col items-center justify-center gap-8 text-center">
        <Logo />
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          <a
            className="text-sm font-medium text-gray-600 transition-colors hover:text-primary dark:text-gray-400 dark:hover:text-primary"
            href="#"
          >
            Privacy Policy
          </a>
          <a
            className="text-sm font-medium text-gray-600 transition-colors hover:text-primary dark:text-gray-400 dark:hover:text-primary"
            href="#"
          >
            Terms of Service
          </a>
          <a
            className="text-sm font-medium text-gray-600 transition-colors hover:text-primary dark:text-gray-400 dark:hover:text-primary"
            href="#"
          >
            Contact
          </a>
        </div>
        <div className="flex justify-center gap-6">
          <a
            className="text-gray-400 transition-colors hover:text-primary"
            href="#"
          >
            {/* <GlobeLockIcon /> */}
          </a>
          <a
            className="text-gray-400 transition-colors hover:text-primary"
            href="#"
          >
            {/* <RssIcon /> */}
          </a>
        </div>
        <p className="text-sm font-normal text-gray-500 dark:text-gray-600">
          © {new Date().getFullYear()} legalops. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
