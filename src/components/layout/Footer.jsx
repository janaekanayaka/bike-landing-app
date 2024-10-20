const Footer = () => (
  <footer className="bg-gray-900 text-white py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">BikeElite</h3>
          <p className="text-gray-400">Premium bikes for the modern cyclist.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#welcome" className="text-gray-400 hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-gray-400 hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#products" className="text-gray-400 hover:text-white">
                Products
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2">
            <li>
              <a href="#contact" className="text-gray-400 hover:text-white">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Shipping
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <svg
                className="w-6 h-6 text-blue-600 hover:text-blue-400"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M22 12C22 6.477 17.523 2 12 2S2 6.477 2 12c0 4.991 3.657 9.128 8.437 9.878v-6.988h-2.54v-2.89h2.54v-2.207c0-2.5 1.492-3.89 3.77-3.89 1.094 0 2.238.196 2.238.196v2.463h-1.26c-1.243 0-1.63.772-1.63 1.562v1.876h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <svg
                className="w-6 h-6 text-blue-400 hover:text-blue-200"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.155 11.675-11.486 0-.175-.004-.349-.012-.523A8.348 8.348 0 0 0 22 5.92a8.32 8.32 0 0 1-2.357.64A4.1 4.1 0 0 0 21.447 4.2a8.286 8.286 0 0 1-2.605.977A4.109 4.109 0 0 0 11.89 9.03a11.66 11.66 0 0 1-8.475-4.2 4.11 4.11 0 0 0 1.27 5.482A4.066 4.066 0 0 1 2.8 9.713v.052a4.108 4.108 0 0 0 3.292 4.02 4.094 4.094 0 0 1-1.852.07 4.108 4.108 0 0 0 3.834 2.844A8.245 8.245 0 0 1 2 18.407 11.63 11.63 0 0 0 8.29 20.25" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg
                className="w-6 h-6 text-pink-500 hover:text-pink-300"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.36 3.608 1.335.975.975 1.272 2.242 1.335 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.36 2.633-1.335 3.608-.975.975-2.242 1.272-3.608 1.335-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.36-3.608-1.335-.975-.975-1.272-2.242-1.335-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.36-2.633 1.335-3.608.975-.975 2.242-1.272 3.608-1.335C8.416 2.175 8.796 2.163 12 2.163M12 0C8.741 0 8.332.012 7.052.072c-1.74.081-3.31.497-4.516 1.703C.497 3.31.081 4.88.072 6.62.012 7.9 0 8.309 0 12s.012 4.1.072 5.38c.081 1.74.497 3.31 1.703 4.516 1.206 1.206 2.776 1.622 4.516 1.703C8.332 23.988 8.741 24 12 24s3.668-.012 5.38-.072c1.74-.081 3.31-.497 4.516-1.703 1.206-1.206 1.622-2.776 1.703-4.516.06-1.28.072-1.689.072-5.38s-.012-4.1-.072-5.38c-.081-1.74-.497-3.31-1.703-4.516C20.29.497 18.72.081 16.98.072 15.7.012 15.291 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324A6.162 6.162 0 0 0 12 5.838zm0 10.162a3.998 3.998 0 1 1 0-7.996 3.998 3.998 0 0 1 0 7.996zm6.406-10.845a1.44 1.44 0 1 1 0-2.88 1.44 1.44 0 0 1 0 2.88z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg
                className="w-6 h-6 text-blue-700 hover:text-blue-500"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.35c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.35h-3v-5.615c0-1.343-.027-3.073-1.875-3.073-1.875 0-2.164 1.462-2.164 2.971v5.717h-3v-10h2.875v1.367h.041c.4-.76 1.374-1.561 2.832-1.561 3.028 0 3.586 1.994 3.586 4.583v5.611z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
        <p>&copy; 2024 BikeElite. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
