'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useSession } from '@/lib/auth-client';

const AuthSession = ({ children }) => {

    const router = useRouter();
    const { data: session, isPending } = useSession();

    useEffect(() => {
        if (!isPending && !session) {
            router.replace('/login');
        }
    }, [session, isPending, router]);

    if (isPending) return null;

    return children;
};

export default AuthSession;