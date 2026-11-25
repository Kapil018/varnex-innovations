
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-[#111416] text-white">

            <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">

                {/* Left: Hero Content */}
                <div className="flex flex-col items-start">

                    <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                        Engineering Excellence
                    </p>

                    <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                        High-Performance Motors.
                        <span className="mt-2 block text-primary">
                            Engineered for Speed.
                        </span>
                    </h1>

                    <p className="mt-6 max-w-xl text-base leading-8 text-gray-400">
                        Precision-engineered motor solutions designed for demanding
                        high-speed applications. Discover reliable performance,
                        innovative engineering and quality manufacturing from
                        VarnexInnovations.
                    </p>

                    {/* Call to Action Buttons */}
                    <div className="mt-9 flex flex-wrap gap-4">

                        <Link
                            href="/contact"
                            className="rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
                        >
                            Request a Quote →
                        </Link>

                        <Link
                            href="/products"
                            className="rounded-sm border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-primary hover:text-primary"
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
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
