import dns from 'node:dns';
dns.setServers(['8.8.8.8', '8.8.4.4']);

import { NextResponse } from 'next/server'
import { auth } from './lib/auth'
import { headers } from 'next/headers'
 

export async function proxy(request) {

    const session = await auth.api.getSession({
        headers: await headers()
    });

    const isLoggedIn = !!session?.user;

    const protectedRoutes = ['/profile', '/all-books/:path*'];

    const isProtected = protectedRoutes.some(route => request.nextUrl.pathname.startsWith(route));

    if(isProtected && !isLoggedIn){
        return NextResponse.redirect(new URL('/login', request.url))
        
    }

    return NextResponse.next();
}
 
 
export const config = {
  matcher: ['/profile','/all-books/:path*'],
}