'use client'
import React, { useState } from 'react';
import BooksCard from './BooksCard';

const BooksPage = ({ books }) => {
    const [search, setSearch] = useState("");

    const filteredBooks = search.trim() === ""
            ? books : books.filter((book) =>
                book.title.toLowerCase().includes(search.toLowerCase())
            );

    return (
        <div>

            <div className="my-5">
                <input
                    type="text"
                    placeholder="Search books here"
                    className="input input-bordered "
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
                {filteredBooks.map((book) => (
                    <BooksCard key={book.id} book={book} />
                ))}
            </div>

        </div>

    );
};

export default BooksPage;