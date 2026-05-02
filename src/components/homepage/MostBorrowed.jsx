import BooksCard from "../shared/BooksCard";

const MostBorrowed = async() => {
    const res = await fetch('https://a8-online-book-borrowing-platform-p.vercel.app/data.json');
    const books = await res.json();

    const mostBorrowed = [...books].sort((a,b) => b.borrowCount - a.borrowCount).slice(0,3);

    return (
        <div>
            <h2 className="text-3xl font-bold">Most Borrowed Books</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
                {
                    mostBorrowed.map(book => <BooksCard key={book.id} book={book}></BooksCard>)
                }
            </div>
        </div>
    );
};

export default MostBorrowed;