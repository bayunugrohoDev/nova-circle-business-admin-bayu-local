import { cookies } from 'next/headers'

export async function GET(request: Request) {
    const cookieStore = cookies();
    console.log('cookieStore',cookieStore);
}