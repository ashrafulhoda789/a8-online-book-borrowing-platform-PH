import Link from 'next/link';


const NotFound = () => {
    return (
        <div className='h-[80vh] flex justify-center items-center flex-col gap-6'>
            <h2 className='font-bold text-5xl text-green-400'>This page is not found.</h2>
            <p className='font-bold text-xl text-green-900'>Back to home page</p>
            <Link href={'/'}>
                <button className='btn btn-success'>Back To Home</button>
            </Link>
        </div>
    );
};

export default NotFound;