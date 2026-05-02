import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BooksCard = ({ book }) => {
    // console.log(book);

    return (
        <div className="card bg-base-100 shadow-sm">
            <figure className='relative'>
                <Image src={book.image_url} alt={book.title}
                    width={200} height={200}
                    className="rounded-md w-50 h-70 object-center"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title font-bold flex justify-between">
                    {book.title}
                    <div className={`badge border-green-500 font-bold ${book.category === 'Tech' ? ' text-green-700' : book.category === 'Science' ? 'text-yellow-500' : ' text-green-400'}`}>{book.category}</div>
                </h2>
                <p className='text-[16px] font-medium text-gray-600 line-clamp-1'>{book.description}</p>

                <div className='card-actions justify-end'>
                    <Link href={`/all-books/${book.id}`}>
                        <button className='btn btn-success text-white text-[16px] font-semibold rounded-lg '>View Details</button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default BooksCard;