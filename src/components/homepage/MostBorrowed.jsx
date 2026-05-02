import BooksCard from "../shared/BooksCard";

const MostBorrowed = async() => {
    const res = await fetch('https://a8-online-book-borrowing-platform-p.vercel.app/data.json');
    const books = await res.json();

    const mostBorrowed = [...books].sort((a,b) => b.borrowCount - a.borrowCount).slice(0,3);

    return (
        <div className="my-30">
            <h2 className="text-3xl font-bold">Most Borrowed Books</h2>
            
            <div className="flex flex-col md:flex-row gap-5 my-10 justify-center items-center ">
                {
                    mostBorrowed.map(book => <BooksCard key={book.id} book={book}></BooksCard>)
                }
            </div>
        </div>
    );
};

export default MostBorrowed;