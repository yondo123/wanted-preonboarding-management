import { NextResponse, NextRequest } from 'next/server';
import { Page } from './types';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  if (request.nextUrl.pathname === '/') {
    url.pathname = Page.ACCOUNT;
    return NextResponse.redirect(url);
  }
}
