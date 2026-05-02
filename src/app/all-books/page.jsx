import BooksCard from "@/components/shared/BooksCard";
import CategorySideBar from "@/components/shared/CategorySideBar";
import SearchBar from "@/components/shared/SearchBar";


const AllBooksPage = async ({ searchParams }) => {

    const { category, q } = await searchParams;
    // console.log(q, 'search');

    const res = await fetch('https://a8-online-book-borrowing-platform-p.vercel.app/data.json', {cache: 'no-store'});
    const books = await res.json();

    // const filteredBooks = books?.filter(book => book?.category === category);
    const filteredBooks = books.filter((book) => {
        const filterCategory = category
            ? book?.category?.toLowerCase() === category.toLowerCase()
            : true;

        const filterSearch = q 
            ? book?.title?.toLowerCase().includes(q.toLowerCase())
            : true;

        return filterCategory && filterSearch;
    })

    return (

        <div className="my-10">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-7">
                <div className="col-span-2">
                    <CategorySideBar ></CategorySideBar>
                </div>
                <div className="col-span-10">
                    <h2 className="text-3xl font-bold">All Books</h2>
                    <SearchBar></SearchBar>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
                        {filteredBooks.map((book) => (
                            <BooksCard key={book.id} book={book} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllBooksPage;