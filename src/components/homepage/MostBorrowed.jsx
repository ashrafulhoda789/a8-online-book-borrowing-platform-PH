'use client'

import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from "swiper/react";
import {  Pagination } from "swiper/modules";
import BooksCard from "../shared/BooksCard";
import { useEffect, useState } from 'react';

const MostBorrowed = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('https://a8-online-book-borrowing-platform-p.vercel.app/data.json')
            .then(res => res.json())
            .then(data => {
                const mostBorrowed = [...data]
                    .sort((a, b) => b.borrowCount - a.borrowCount)
                    .slice(0, 4);

                setBooks(mostBorrowed);
            });
    }, []);

    return (
        <div className="my-30">
            <h2 className="text-3xl font-bold mb-5">Most Borrowed Books</h2>

            
                <Swiper
                    pagination={true}
                    modules={[Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        320: {slidesPerView: 1},
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className='mySwiper'
                >
                    {
                        books.map(book => (
                            <SwiperSlide key={book.id}>
                                <BooksCard book={book}></BooksCard>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            
        </div>
    );
};

export default MostBorrowed;