import Link from "next/link";

const CategorySideBar = async() => {
    const res = await fetch('https://a8-online-book-borrowing-platform-p.vercel.app/category.json', {cache: 'no-store'});
    const categories = await res.json();
    // console.log(categories);
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Categories</h2>
            <div className="flex flex-row lg:flex-col gap-5">
                {
                    categories.map(category => <div key={category.id}>
                        <Link href={`?category=${category.name.toLowerCase()}`}><p className="btn w-full">{category.name}</p></Link>
                    </div> )
                }
            </div>
        </div>
    );
};

export default CategorySideBar;