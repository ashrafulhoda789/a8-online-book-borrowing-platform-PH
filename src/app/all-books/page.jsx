import BooksCard from "@/components/shared/BooksCard";


const AllBooksPage = async() => {
    const res = await fetch('https://a8-online-book-borrowing-platform-p.vercel.app/data.json');
    const books = await res.json();

    return (
        
        <div className="my-10">
            <h2 className="text-3xl font-bold">All Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
                {
                    books.map(book => <BooksCard key={book.id} book={book}></BooksCard>)
                }
            </div>
        </div>
    );
};

export default AllBooksPage;