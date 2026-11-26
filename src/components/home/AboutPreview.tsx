
import Image from "next/image";
import Link from "next/link";

export default function AboutPreview() {
    return (
        <section className="bg-[#f8f8f8] px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">

                {/* Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                    <Image
                        src="/images/banners/varnex-hero-motor.png"
                        alt="VarnexInnovations motor engineering"
                        fill
                        sizes="(max-width: 1023px) 100vw, 50vw"
                        className="object-cover"
                    />
                </div>

                {/* Company introduction */}
                <div>
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:text-sm">
                        About VarnexInnovations
                    </p>

                    <h2 className="text-2xl font-bold leading-tight tracking-tight text-charcoal sm:text-3xl md:text-4xl">
                        Driving Innovation Through{" "}
                        <span className="text-primary">
                            Motor Engineering
                        </span>
                    </h2>

                    <p className="mt-6 text-sm leading-7 text-muted sm:text-base sm:leading-8">
                        VarnexInnovations is focused on motor solutions designed for
                        demanding applications where performance, precision and
                        reliability matter.
                    </p>

                    <p className="mt-4 text-sm leading-7 text-muted sm:text-base sm:leading-8">
                        Our aim is to bring thoughtful engineering and
                        application-focused solutions together to address evolving
                        customer requirements.
                    </p>

                    <Link
                        href="/about"
                        className="mt-8 inline-flex items-center gap-3 rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
                    >
                        Explore About Us
                        <span aria-hidden="true">→</span>
                    </Link>
                </div>

            </div>
        </section>
    );
}
