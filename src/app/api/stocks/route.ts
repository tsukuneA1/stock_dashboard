// app/api/stocks/route.ts
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const url = new URL(request.url);
    const symbol = url.searchParams.get('symbol') ?? 'AAPL';
  
    try {
      const res = await fetch(
        `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${process.env.FINNHUB_API_KEY}`
      );
  
      if (!res.ok) {
        console.error("Finnhub API error:", res.status, await res.text());
        return NextResponse.json({ error: 'Failed to fetch data from Finnhub' }, { status: 500 });
      }
  
      const data = await res.json();
      return NextResponse.json(data);
    } catch (err) {
      console.error("API fetch exception:", err);
      return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
  }
  