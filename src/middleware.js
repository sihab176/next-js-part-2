import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';
import React from 'react';

const middleware =async (req) => {
 const token= await getToken({req})
 const isToken= Boolean(token)
 const isAdminUser= token?.role == 'admin'
 const isAdminSpecificRoute= req.nextUrl.pathname.startsWith('/dashboard')

 if(isAdminSpecificRoute && !isToken){
   const callbackUrl= encodeURIComponent(req.nextUrl.pathname)
    return NextResponse.redirect(new URL(`/api/auth/signin?callbackUrl${callbackUrl}`,req.url))
 }
 return NextResponse.next()
};

export default middleware;