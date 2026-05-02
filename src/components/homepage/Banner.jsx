import Link from "next/link";

const Banner = () => {

    return (
        <div
            className="hero h-100 my-10 rounded-2xl"
            style={{ backgroundImage: "url('/hero-banner.png')" }}
        >
            <div className="hero-overlay rounded-2xl"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Find Your Next Read</h1>
                    <p className="mb-5">
                        Discover amazing books easily
                    </p>
                    <Link href={'/all-books'}>
                        <button className="btn text-green-800">Browse Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;