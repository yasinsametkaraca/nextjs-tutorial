import {NextResponse} from "next/server";

export function middleware(req) {  // middleware fonksiyonu sayesinde isteklerin yönlendirilmesi sağlanır.
    console.log(NextResponse, 'NextResponse')
    return NextResponse.rewrite(new URL('/about-2', req.url)) // /about-2 sayfasına yönlendirir. Bu sayede mesela /about sayfasına giriş yapıldığında /about-2 sayfasına yönlendirilir.
}

export const config = {
    matcher: ['/about/:path*', '/dashboard/:path*'], // hangi sayfalarda çalışacağını belirtir.
}


