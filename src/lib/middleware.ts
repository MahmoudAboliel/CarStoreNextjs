// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  response.cookies.set('current-path', request.nextUrl.pathname);
  return response;
}