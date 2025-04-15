// このファイルから "use client" を削除してください

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import yahooFinance from "yahoo-finance2";

export default async function Home() {
  const quote = await yahooFinance.quote('7974.T');

  const junneriki = Number(quote.marketCap) / Number(quote.sharesOutstanding);

  const summary = await yahooFinance.quoteSummary("7974.T", {
    modules: ["summaryDetail", "financialData"],
  });
  
  const dividendRate = summary.summaryDetail?.dividendRate;

  return (
    <main className="p-4">
      <h1 className="text-xl font-bold mb-2">株式情報（7974.T）</h1>
      <Card>
        <CardHeader>
          <CardTitle>株式情報</CardTitle>
          <CardDescription>{quote.longName}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>現在価格: ¥{quote.regularMarketPrice}</p>
          <p>時価総額: ¥{quote.marketCap}</p>
          <p>始値: ¥{quote.regularMarketOpen}</p>
          <p>高値: ¥{quote.regularMarketDayHigh}</p>
          <p>安値: ¥{quote.regularMarketDayLow}</p>
          <p>前日終値: ¥{quote.regularMarketPreviousClose}</p>
          <p>出来高: {quote.regularMarketVolume}</p>
          <p>発行株式数: {quote.sharesOutstanding}</p>
          
          <p>配当: {dividendRate}</p>
          <p>配当利回り: {Number(dividendRate)/Number(quote.regularMarketPrice)*100}%</p>
        </CardContent>
      </Card>
    </main>
  );
}
