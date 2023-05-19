import { api } from "@/lib/api";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get('code');

  const registerResponse = await api.post('/register', {
    code,
  });

  const { token } = registerResponse.data;

  const redirect = new URL('/', req.url);
  const cookieExpiresInSeconds = 60 * 60 * 24 * 8;
  return NextResponse.redirect(redirect, {
    headers: {
      'Set-Cookie': `token=${token}; path=/; max-age=${cookieExpiresInSeconds}`
    }
  });
}