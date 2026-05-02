import Marquee from 'react-fast-marquee';

const NewArrivalBooks = async() => {

    const res = await fetch('https://a8-online-book-borrowing-platform-p.vercel.app/data.json', {cache: 'no-store'});
    const books = await res.json();

    return (
        <div className="flex justify-between gap-4 items-center bg-gray-200">
            <button className="btn bg-green-500 text-white">New Arrival</button>
            <Marquee pauseOnHover={true}>
                {
                    books.slice(0,3).map(n => {
                        return <span key={n.id} className="mr-10"> <span className='font-bold'>{n.title} </span>| Special Discount on Memberships...</span>
                    })
                }
            </Marquee>
        </div>
    );
};

export default NewArrivalBooks;