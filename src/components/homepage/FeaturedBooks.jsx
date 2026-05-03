import BooksCard from "../shared/BooksCard";


const FeaturedBooks = async () => {

    const res = await fetch('https://a8-online-book-borrowing-platform-p.vercel.app/data.json', { cache: 'no-store' });
    const books = await res.json();


    return (
        <div className="mt-20">
            <h2 className="text-3xl font-bold">Feature Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
                {
                    books.slice(0, 4).map(book => (
                        <div key={book.id}
                            className="animate__animated animate__fadeInUp transition duration-300 hover:scale-100 hover:shadow-xl"
                        >
                            <BooksCard book={book} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default FeaturedBooks;