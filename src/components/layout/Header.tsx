
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-[#111416] text-white">

      {/* Top Utility Bar */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">

          {/* Contact Details */}
          <div className="flex items-center gap-6 text-xs text-gray-300">

            <a
              href="mailto:info@varnexinnovations.com"
              className="transition-colors hover:text-primary"
            >
              ✉ info@varnexinnovations.com
            </a>

            <a
              href="tel:+919876543210"
              className="transition-colors hover:text-primary"
            >
              ☎ +91 98765 43210
            </a>

          </div>

          {/* Utility Links */}
          <div className="flex items-center gap-3 text-xs text-gray-400">
            <span>Quality</span>
            <span>|</span>
            <span>Support</span>
            <span>|</span>
            <span>Global</span>
          </div>

        </div>
      </div>

      {/* Main Navigation */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          {/* Company Logo */}
          <Link href="/" className="flex items-center gap-2">

            {/* Varnex Logo Symbol */}
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
                strokeLinecap="square"
              />
              <path
                d="M12 7 L20 20 L28 7"
                stroke="#F47721"
                strokeWidth="3"
                strokeLinecap="square"
              />
            </svg>

            <span className="text-xl font-bold tracking-tight">
              Varnex<span className="text-primary">Innovations</span>
            </span>

          </Link>

          {/* Navigation Links */}
          <nav className="flex items-center gap-9 text-sm font-medium">

            <Link
              href="/"
              className="border-b-2 border-primary py-2 text-primary"
            >
              Home
            </Link>

            {/* Products Dropdown */}
            <div className="group relative">

              <Link
                href="/products"
                className="flex items-center gap-1 py-2 transition-colors hover:text-primary"
              >
                Products
                <span className="text-xs">⌄</span>
              </Link>

              <div className="invisible absolute left-0 top-full z-50 mt-1 w-52 rounded-md border border-white/10 bg-[#202426] py-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100">

                <Link
                  href="/products"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-primary"
                >
                  FPV Motors
                </Link>

                <Link
                  href="/products"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-primary"
                >
                  Fixed-Wing Motors
                </Link>

                <Link
                  href="/products"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-primary"
                >
                  Interceptor Motors
                </Link>

              </div>
            </div>

            <Link
              href="/about"
              className="py-2 transition-colors hover:text-primary"
            >
              About Us
            </Link>

            <Link
              href="/contact"
              className="py-2 transition-colors hover:text-primary"
            >
              Contact Us
            </Link>

          </nav>

          {/* Request a Quote Button */}
          <Link
            href="/contact"
            className="rounded-sm bg-primary px-5 py-3 text-xs font-bold text-white transition-colors hover:bg-orange-600"
          >
            Request a Quote <span className="ml-1">→</span>
          </Link>

        </div>
      </div>

    </header>
  );
}
