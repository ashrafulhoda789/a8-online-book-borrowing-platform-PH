import BooksCard from "@/components/shared/BooksCard";
import BooksPage from "@/components/shared/BooksPage";


const AllBooksPage = async() => {
    const res = await fetch('https://a8-online-book-borrowing-platform-p.vercel.app/data.json');
    const books = await res.json();

    return (
        
        <div className="my-10">
            
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-2">
                    Category
                </div>
                <div className="col-span-10">
                    <h2 className="text-3xl font-bold">All Books</h2>
                    <BooksPage books={books}></BooksPage>
                </div>
            </div>
        </div>
    );
};

export default AllBooksPage;