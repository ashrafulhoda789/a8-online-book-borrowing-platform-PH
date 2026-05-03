
import AuthSession from "@/components/shared/AuthSession";
import BorrowButton from "@/components/shared/BorrowButton";
import Image from "next/image";
import { toast } from "react-toastify";

export const generateMetadata = async ({ params }) => {
    const { id } = await params;

    const res = await fetch('https://a8-online-book-borrowing-platform-p.vercel.app/data.json', { cache: 'no-store' });
    const books = await res.json();

    const book = books.find(b => b.id == id);

    return {
        title: book?.title || "Not Found",
        description: book?.description,
    }
}


const BookDetailPage = async ({ params }) => {
    const { id } = await params;

    const res = await fetch('https://a8-online-book-borrowing-platform-p.vercel.app/data.json', { cache: 'no-store' });
    const books = await res.json();

    const book = books.find(b => b.id == id);
    // console.log(book);


    return (

        <AuthSession>
            <div className="min-h-screen flex items-center justify-center bg-base-100 p-4">
                <div className="max-w-5xl w-full bg-base-100 shadow-xl rounded-2xl overflow-hidden grid md:grid-cols-2 gap-6">

                    <div className="bg-base-200 flex items-center justify-center p-6">
                        <Image
                            src={book.image_url}
                            alt={book.title}
                            width={400}
                            height={500}
                            className="rounded-xl object-cover w-full max-w-sm shadow-md"
                        />
                    </div>
                    <div className="p-6 flex flex-col gap-4">
                        <div className="flex items-start justify-between gap-3">
                            <h1 className="text-2xl md:text-3xl font-bold leading-snug">
                                {book.title}
                            </h1>

                            <span
                                className={`px-3 py-1 text-sm rounded-full font-semibold whitespace-nowrap ${book.category === "Tech"
                                    ? "bg-green-100 text-green-700"
                                    : book.category === "Science"
                                        ? "bg-yellow-100 text-yellow-700"
                                        : "bg-blue-100 text-blue-600"
                                    }`}
                            >
                                {book.category}
                            </span>
                        </div>

                        <p className="text-gray-600 leading-relaxed">
                            {book.description}
                        </p>

                        <div className="divider my-1"></div>

                        <div className="space-y-1">
                            <p className="text-gray-500">
                                Author
                            </p>
                            <h3 className="text-lg font-semibold">{book.author}</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-2">
                            <div className="p-4 bg-base-200 rounded-xl text-center">
                                <p className="text-xl font-bold text-green-600">
                                    {book.available_quantity}
                                </p>
                                <p className="text-sm text-gray-500">Copies Left</p>
                            </div>

                            <div className="p-4 bg-base-200 rounded-xl text-center">
                                <p className="text-xl font-bold text-blue-600">
                                    {book.borrowCount}
                                </p>
                                <p className="text-sm text-gray-500">Borrowed</p>
                            </div>
                        </div>

                        <div className="mt-auto pt-4">
                            <BorrowButton book={book}></BorrowButton>
                        </div>

                    </div>
                </div>
            </div>
        </AuthSession>

    );
};

export default BookDetailPage;