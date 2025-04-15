// このファイルから "use client" を削除してください

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import yahooFinance from "yahoo-finance2";

export default async function Home() {
  const quote = await yahooFinance.quote('7974.T');

  return (
    <main className="p-4">
      <h1 className="text-xl font-bold mb-2">株価情報（7974.T）</h1>
      <Card>
        <CardHeader>
          <CardTitle>株価情報</CardTitle>
          <CardDescription>{quote.longName}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>現在価格: ¥{quote.regularMarketPrice}</p>
          <p>始値: ¥{quote.regularMarketOpen}</p>
          <p>高値: ¥{quote.regularMarketDayHigh}</p>
          <p>安値: ¥{quote.regularMarketDayLow}</p>
          <p>前日終値: ¥{quote.regularMarketPreviousClose}</p>
          <p>出来高: {quote.regularMarketVolume}</p>
        </CardContent>
      </Card>
    </main>
  );
}
