import Image from "next/image";


const BookDetailPage = async ({ params }) => {
    const { id } = await params;

    const res = await fetch('https://a8-online-book-borrowing-platform-p.vercel.app/data.json');
    const books = await res.json();

    const book = books.find(b => b.id == id);
    // console.log(book);
    return (
        <div className="my-10 flex  gap-7 p-5 shadow-md rounded-2xl">
            <figure className="rounded-md border border-gray-300">
                <Image
                    src={book.image_url}
                    alt="Album"
                    width={350}
                    height={400}
                    className="w-80" />
            </figure>
            <div className="p-5">
                <h2 className="text-2xl font-bold">{book.title}</h2>
                <p className="text-md font-medium text-gray-500">{book.description}</p>
                <div className="divider"></div>
                <div>
                    <h2 className="font-medium ">Author: <span className=" text-lg font-semibold">{book.author}</span></h2>
                    <h3 className="font-medium text-gray-600">Category: {book.category}</h3>
                </div>
                <div className="divider"></div>
                <div className="flex justify-between items-center">
                    <p className="font-medium"><span className="text-lg font-bold">{book.available_quantity}</span> Copies left</p>
                    <p className="font-medium"><span className="text-lg font-bold">{book.borrowCount}</span> copies borrowed</p>
                </div>
                <div className="justify-end">
                    <button className="btn btn-primary">Listen</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetailPage;