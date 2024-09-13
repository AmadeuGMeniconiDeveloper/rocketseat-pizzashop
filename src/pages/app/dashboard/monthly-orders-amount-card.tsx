import { getMonthlyOrdersAmount } from "@/api/get-monthly-orders-amount";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { Utensils } from "lucide-react";

export function MonthlyOrdersAmountCard() {
  const { data: monthlyOrdersAmount } = useQuery({
    queryKey: ["metrics", "monthly-orders-amount"],
    queryFn: getMonthlyOrdersAmount,
  });

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Orders (month)
        </CardTitle>
        <Utensils className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {monthlyOrdersAmount && (
          <>
            <span className="text-xl font-bold tracking-tight">
              {monthlyOrdersAmount.amount.toLocaleString("en-US")}
            </span>
            <p className="text-xs text-muted-foreground">
              {monthlyOrdersAmount.diffFromLastMonth >= 0 ? (
                <span className="font-semibold text-emerald-500 dark:text-emerald-400">
                  +{monthlyOrdersAmount.diffFromLastMonth}%
                </span>
              ) : (
                <span className="font-semibold text-rose-500 dark:text-rose-400">
                  {monthlyOrdersAmount.diffFromLastMonth}%
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
