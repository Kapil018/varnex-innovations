
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#171A1C] text-white">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Column 1: Company Information */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2">

              <svg
                width="38"
                height="38"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 7 L20 34 L37 7"
                  stroke="#F47721"
                  strokeWidth="4"
                />
                <path
                  d="M12 7 L20 20 L28 7"
                  stroke="#F47721"
                  strokeWidth="3"
                />
              </svg>

              <span className="text-lg font-bold">
                Varnex<span className="text-primary">Innovations</span>
              </span>

            </Link>

            <p className="mt-3 text-xs text-gray-400">
              Innovating Motion. Empowering Ideas.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-bold">
              Quick Links
            </h3>

            <ul className="space-y-2 text-sm text-gray-400">

              <li>
                <Link href="/" className="transition-colors hover:text-primary">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/products" className="transition-colors hover:text-primary">
                  Products
                </Link>
              </li>

              <li>
                <Link href="/about" className="transition-colors hover:text-primary">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/contact" className="transition-colors hover:text-primary">
                  Contact Us
                </Link>
              </li>

            </ul>
          </div>

          {/* Column 3: Products */}
          <div>
            <h3 className="mb-4 text-sm font-bold">
              Our Products
            </h3>

            <ul className="space-y-2 text-sm text-gray-400">

              <li>
                <Link href="/products" className="transition-colors hover:text-primary">
                  FPV Motors
                </Link>
              </li>

              <li>
                <Link href="/products" className="transition-colors hover:text-primary">
                  Fixed-Wing Motors
                </Link>
              </li>

              <li>
                <Link href="/products" className="transition-colors hover:text-primary">
                  Interceptor Motors
                </Link>
              </li>

            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="mb-4 text-sm font-bold">
              Stay Connected
            </h3>

            <p className="mb-4 text-xs leading-6 text-gray-400">
              Subscribe to our newsletter for the latest updates,
              product announcements and company news.
            </p>

            {/* Newsletter UI - Backend integration will come later */}
            <div className="flex w-full">

              <input
                type="email"
                placeholder="Your email address"
                disabled
                className="min-w-0 flex-1 bg-white px-3 py-3 text-xs text-gray-800 outline-none placeholder:text-gray-500 disabled:cursor-not-allowed"
              />

              <button
                type="button"
                disabled
                aria-label="Newsletter subscription coming soon"
                className="bg-primary px-4 text-white opacity-70"
              >
                →
              </button>

            </div>

          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-5 md:flex-row">

          {/* Copyright */}
          <p className="text-xs text-gray-500">
            © 2026 VarnexInnovations. All rights reserved.
          </p>

          {/* Legal Links */}
          <div className="flex items-center gap-5 text-xs text-gray-400">

            <Link href="/privacy-policy" className="transition-colors hover:text-primary">
              Privacy Policy
            </Link>

            <Link href="/terms-of-service" className="transition-colors hover:text-primary">
              Terms of Service
            </Link>

          </div>

          {/* Social Media */}
          <div className="flex items-center gap-4 text-xs font-bold text-gray-400">

            <a href="#" aria-label="LinkedIn" className="hover:text-primary">
              in
            </a>

            <a href="#" aria-label="YouTube" className="hover:text-primary">
              ▶
            </a>

            <a href="#" aria-label="Facebook" className="hover:text-primary">
              f
            </a>

          </div>

        </div>
      </div>

    </footer>
  );
}
