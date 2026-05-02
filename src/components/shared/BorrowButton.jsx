'use client'
import { toast } from "react-toastify";


const BorrowButton = ({book}) => {
    const handleBorrowBook = () => {
        toast.success(`${book.title} Book is Borrowed successfully!`, {position: 'top-center'});
    }
    return (
        <div>
            <button className="btn btn-success w-full text-white text-lg rounded-xl" onClick={handleBorrowBook}>
                Borrow This Book
            </button>
        </div>
    );
};

export default BorrowButton;