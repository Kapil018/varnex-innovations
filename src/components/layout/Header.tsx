
import Link from "next/link";

export default function Header() {
    return (
        <header className="w-full bg-[#111416] text-white">

            {/* Top Utility Bar */}
            <div className="border-b border-white/10">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6">

                    {/* Contact Details */}
                    <div className="flex items-center gap-4 text-[10px] text-gray-300 sm:gap-6 sm:text-xs">
                        <a
                            href="mailto:info@varnexinnovations.com"
                            className="transition-colors hover:text-primary"
                        >
                            ✉ info@varnexinnovations.com
                        </a>

                        <a
                            href="tel:+919876543210"
                            className="hidden transition-colors hover:text-primary sm:block"
                        >
                            ☎ +91 98765 43210
                        </a>
                    </div>

                    {/* Utility Links */}
                    <div className="hidden items-center gap-3 text-xs text-gray-400 md:flex">
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
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">

                    {/* Company Logo */}
                    <Link href="/" className="flex shrink-0 items-center gap-2">

                        <svg
                            width="34"
                            height="34"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="sm:h-[38px] sm:w-[38px]"
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

                        <span className="text-base font-bold tracking-tight sm:text-xl">
                            Varnex<span className="text-primary">Innovations</span>
                        </span>

                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden items-center gap-6 text-sm font-medium lg:flex xl:gap-9">

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

                            <div className="invisible absolute left-0 top-full z-50 mt-1 w-52 rounded-md border border-white/10 bg-[#202426] py-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">

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

                    {/* Desktop Request a Quote Button */}
                    <Link
                        href="/contact"
                        className="hidden rounded-sm bg-primary px-5 py-3 text-xs font-bold text-white transition-colors hover:bg-orange-600 lg:inline-block"
                    >
                        Request a Quote <span className="ml-1">→</span>
                    </Link>

                    {/* Mobile Menu */}
                    <details className="group relative lg:hidden">

                        <summary
                            aria-label="Open navigation menu"
                            className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-sm border border-white/20 text-2xl text-white transition-colors hover:border-primary hover:text-primary [&::-webkit-details-marker]:hidden"
                        >
                            <span className="group-open:hidden">☰</span>
                            <span className="hidden group-open:inline">✕</span>
                        </summary>

                        <nav className="absolute right-0 top-full z-50 mt-3 w-[min(90vw,320px)] rounded-md border border-white/10 bg-[#202426] p-4 shadow-xl">

                            <Link
                                href="/"
                                className="block border-b border-white/10 py-3 text-sm font-medium text-primary"
                            >
                                Home
                            </Link>

                            {/* Mobile Products Submenu */}
                            <details className="border-b border-white/10">
                                <summary className="flex cursor-pointer list-none items-center justify-between py-3 text-sm font-medium hover:text-primary [&::-webkit-details-marker]:hidden">
                                    Products
                                    <span className="text-xs">⌄</span>
                                </summary>

                                <div className="pb-2 pl-4">
                                    <Link
                                        href="/products"
                                        className="block py-2 text-sm text-gray-400 hover:text-primary"
                                    >
                                        FPV Motors
                                    </Link>

                                    <Link
                                        href="/products"
                                        className="block py-2 text-sm text-gray-400 hover:text-primary"
                                    >
                                        Fixed-Wing Motors
                                    </Link>

                                    <Link
                                        href="/products"
                                        className="block py-2 text-sm text-gray-400 hover:text-primary"
                                    >
                                        Interceptor Motors
                                    </Link>
                                </div>
                            </details>

                            <Link
                                href="/about"
                                className="block border-b border-white/10 py-3 text-sm font-medium hover:text-primary"
                            >
                                About Us
                            </Link>

                            <Link
                                href="/contact"
                                className="block border-b border-white/10 py-3 text-sm font-medium hover:text-primary"
                            >
                                Contact Us
                            </Link>

                            <Link
                                href="/contact"
                                className="mt-4 block rounded-sm bg-primary px-4 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-orange-600"
                            >
                                Request a Quote →
                            </Link>

                        </nav>
                    </details>

                </div>
            </div>

        </header>
    );
}
