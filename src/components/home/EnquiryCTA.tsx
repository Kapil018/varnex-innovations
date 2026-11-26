
import Link from "next/link";

export default function EnquiryCTA() {
    return (
        <section className="bg-charcoal px-4 py-16 text-white sm:px-6 sm:py-20 lg:py-24">
            <div className="mx-auto max-w-4xl text-center">

                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:text-sm">
                    Let's Work Together
                </p>

                <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
                    Looking for the Right{" "}
                    <span className="text-primary">Motor Solution?</span>
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:mt-6 sm:text-base sm:leading-8">
                    Let's discuss your application requirements and explore
                    the right motor solution for your needs. Get in touch
                    with VarnexInnovations to start the conversation.
                </p>

                <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
                    >
                        Request a Quote
                        <span aria-hidden="true">→</span>
                    </Link>

                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-sm border border-white/30 px-7 py-3 text-sm font-semibold text-white transition-colors hover:border-primary hover:text-primary"
                    >
                        Contact Us
                    </Link>

                </div>
            </div>
        </section>
    );
}
