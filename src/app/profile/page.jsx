'use client'
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import userAvatar from '../../assets/user.png';
import Link from "next/link";
import UpdateUserModal from "@/components/shared/UpdateUserModal";
import AuthSession from "@/components/shared/AuthSession";
import { redirect } from "next/navigation";

const ProfilePage = () => {

    const userData = authClient.useSession();
    const user = userData.data?.user;
    // console.log(user);

    if (!user) {
        redirect('/login');
    }

    return (
        <div className="min-h-screen bg-base-100 flex items-center justify-center p-6">
            <div className="card w-full max-w-md bg-base-100 shadow-xl p-5">
                <h2 className="text-2xl font-bold text-center mb-5">My Profile</h2>
                <figure className='relative'>
                    <Image src={user?.image || userAvatar} alt={userAvatar}
                        width={200} height={200}
                        className="rounded-full w-40 h-40 object-center"
                    />
                </figure>
                <div className="card-body flex flex-col items-center">
                    <h2 className="card-title font-bold flex justify-between items-start gap-2">
                        {user?.name}
                    </h2>
                    <p className='line-clamp-1 text-[16px] font-medium text-gray-600 '>{user?.email}</p>

                    <div className='card-actions justify-center mt-5'>
                        <UpdateUserModal></UpdateUserModal>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default ProfilePage;