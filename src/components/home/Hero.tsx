
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-[#111416] text-white">

            <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-12 lg:py-28">

                {/* Left: Hero Content */}
                <div className="flex flex-col items-start">

                    <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:mb-6 sm:text-sm">
                        Engineering Excellence
                    </p>

                    <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                        High-Performance Motors.
                        <span className="mt-2 block text-primary">
                            Engineered for Speed.
                        </span>
                    </h1>

                    <p className="mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:mt-6 sm:text-base sm:leading-8">
                        Precision-engineered motor solutions designed for demanding
                        high-speed applications. Discover reliable performance,
                        innovative engineering and quality manufacturing from
                        VarnexInnovations.
                    </p>

                    {/* Call to Action Buttons */}
                    <div className="mt-7 flex flex-wrap gap-3 sm:mt-9 sm:gap-4">

                        <Link
                            href="/contact"
                            className="rounded-sm bg-primary px-5 py-3 text-xs font-semibold text-white transition-colors hover:bg-orange-600 sm:px-6 sm:text-sm"
                        >
                            Request a Quote →
                        </Link>

                        <Link
                            href="/products"
                            className="rounded-sm border border-white/30 px-5 py-3 text-xs font-semibold text-white transition-colors hover:border-primary hover:text-primary sm:px-6 sm:text-sm"
                        >
                            Explore Products →
                        </Link>

                    </div>

                </div>

                {/* Right: Hero Image */}
                <div className="relative flex items-center justify-center">
                    <div className="relative aspect-square w-full max-w-[420px] overflow-hidden rounded-lg border border-white/10">
                        <Image
                            src="/images/banners/varnex-hero-motor.png"
                            alt="VarnexInnovations high-performance brushless motor"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 1023px) 100vw, 50vw"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
