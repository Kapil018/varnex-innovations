
const features = [
    {
        number: "01",
        title: "Precision Engineering",
        description:
            "A focus on engineering accuracy and thoughtful motor design for demanding applications.",
    },
    {
        number: "02",
        title: "High-Speed Performance",
        description:
            "Motor solutions designed with high-speed applications and performance requirements in mind.",
    },
    {
        number: "03",
        title: "Quality Manufacturing",
        description:
            "An emphasis on manufacturing quality, consistency and dependable motor solutions.",
    },
    {
        number: "04",
        title: "Customer-Focused Solutions",
        description:
            "Solutions shaped around customer requirements, application needs and project objectives.",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
            <div className="mx-auto max-w-7xl">
                {/* Section heading */}
                <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:text-sm">
                        Why Choose Us
                    </p>

                    <h2 className="text-2xl font-bold tracking-tight text-charcoal sm:text-3xl md:text-4xl lg:text-5xl">
                        Engineering That Drives{" "}
                        <span className="text-primary">Performance</span>
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted sm:mt-5 sm:text-base">
                        We focus on engineering, performance and quality to develop motor
                        solutions for demanding applications.
                    </p>
                </div>

                {/* Feature cards */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                    {features.map((feature) => (
                        <div
                            key={feature.number}
                            className="group rounded-lg border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg sm:p-7"
                        >
                            <div className="mb-7 flex items-center justify-between">
                                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-orange-50 text-primary">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.7"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        aria-hidden="true"
                                    >
                                        {feature.number === "01" && (
                                            <>
                                                <circle cx="12" cy="12" r="9" />
                                                <path d="M12 7v5l3 2" />
                                                <path d="M8 3.5 6.5 5" />
                                                <path d="m16 3.5 1.5 1.5" />
                                            </>
                                        )}

                                        {feature.number === "02" && (
                                            <>
                                                <path d="M13 2 3 14h8l-1 8 11-13h-8l0-7Z" />
                                            </>
                                        )}

                                        {feature.number === "03" && (
                                            <>
                                                <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
                                                <path d="m9 12 2 2 4-4" />
                                            </>
                                        )}

                                        {feature.number === "04" && (
                                            <>
                                                <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                                <circle cx="10" cy="7" r="4" />
                                                <path d="M20 8v6" />
                                                <path d="M23 11h-6" />
                                            </>
                                        )}
                                    </svg>
                                </div>

                                <span className="text-sm font-bold tracking-wider text-gray-300 transition-colors group-hover:text-primary">
                                    {feature.number}
                                </span>
                            </div>

                            <h3 className="text-lg font-semibold text-charcoal transition-colors group-hover:text-primary sm:text-xl">
                                {feature.title}
                            </h3>

                            <p className="mt-3 text-sm leading-7 text-muted">
                                {feature.description}
                            </p>

                            <div className="mt-6 h-1 w-10 rounded-full bg-primary transition-all duration-300 group-hover:w-16" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
