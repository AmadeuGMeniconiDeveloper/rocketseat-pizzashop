import { getDailyOrdersAmount } from "@/api/get-daily-orders-amount";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { Utensils } from "lucide-react";

export function DailyOrdersAmountCard() {
  const { data: dailyOrdersAmount } = useQuery({
    queryKey: ["metrics", "daily-orders-amount"],
    queryFn: getDailyOrdersAmount,
  });

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">Orders (day)</CardTitle>
        <Utensils className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {dailyOrdersAmount && (
          <>
            <span className="text-xl font-bold tracking-tight">
              {dailyOrdersAmount.amount.toLocaleString("en-US")}
            </span>
            <p className="text-xs text-muted-foreground">
              {dailyOrdersAmount.diffFromYesterday >= 0 ? (
                <span className="font-semibold text-emerald-500 dark:text-emerald-400">
                  +{dailyOrdersAmount.diffFromYesterday}%
                </span>
              ) : (
                <span className="font-semibold text-rose-500 dark:text-rose-400">
                  {dailyOrdersAmount.diffFromYesterday}%
                </span>
              )}{" "}
              relative to previous month
            </p>
          </>
        )}
      </CardContent>
    </Card>
  );
}
