
import Link from "next/link";
import Image from "next/image";

export default function ProductCategories() {
    const categories = [
        {
            id: 1,
            name: "FPV Drone Motors",
            description:
                "High-performance motors designed for racing, freestyle and precision FPV drone applications.",
            slug: "fpv-drone-motors",
            image: "/images/products/fpv-drone-motor.jpeg",
        },
        {
            id: 2,
            name: "Long-Range Motors",
            description:
                "Efficient motor solutions designed for extended flight duration and reliable performance.",
            slug: "long-range-motors",
            image: "/images/products/long-range-motor.jpeg",
        },
        {
            id: 3,
            name: "Heavy-Lift Motors",
            description:
                "Powerful motor solutions designed for demanding payload and industrial drone applications.",
            slug: "heavy-lift-motors",
            image: "/images/products/heavy-lift-motor.jpeg",
        },
    ];

    return (
        <section className="bg-charcoal px-4 py-14 text-white sm:px-6 sm:py-20 lg:py-28">
            <div className="mx-auto max-w-7xl">

                {/* Section Heading */}
                <div className="mb-10 text-center sm:mb-14">

                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:text-sm">
                        Our Product Range
                    </p>

                    <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
                        Engineered for Every
                        <span className="text-primary"> Application</span>
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:mt-5 sm:text-base">
                        Explore our range of precision-engineered motor solutions,
                        developed to deliver reliable performance across demanding
                        applications.
                    </p>

                </div>

                {/* Product Category Cards */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">

                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="group overflow-hidden rounded-lg border border-white/10 bg-[#303030] transition-all duration-300 hover:-translate-y-2 hover:border-primary/50"
                        >

                            {/* Product Image */}
                            <div className="relative h-52 overflow-hidden sm:h-56">
                                <Image
                                    src={category.image}
                                    alt={category.name}
                                    fill
                                    sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1023px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Card Content */}
                            <div className="p-5 sm:p-7">

                                <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-primary sm:text-xl">
                                    {category.name}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-gray-400 sm:mt-4">
                                    {category.description}
                                </p>

                                <Link
                                    href={`/products?category=${category.slug}`}
                                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all group-hover:gap-3 sm:mt-7"
                                >
                                    Explore Category
                                    <span aria-hidden="true">→</span>
                                </Link>

                            </div>
                        </div>
                    ))}

                </div>

                {/* View All Products */}
                <div className="mt-10 text-center sm:mt-14">
                    <Link
                        href="/products"
                        className="inline-block rounded-sm border border-white/30 px-7 py-3 text-sm font-semibold text-white transition-colors hover:border-primary hover:text-primary sm:px-8"
                    >
                        View All Products
                    </Link>
                </div>

            </div>
        </section>
    );
}
