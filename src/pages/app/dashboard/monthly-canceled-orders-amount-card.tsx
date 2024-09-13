import { getMonthlyCanceledOrdersAmount } from "@/api/get-montly-canceled-amount";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { Ban } from "lucide-react";

export function MonthlyCanceledOrdersAmountCard() {
  const { data: monthlyCanceledOrdersAmount } = useQuery({
    queryKey: ["metrics", "monthly-canceled-orders-amount"],
    queryFn: getMonthlyCanceledOrdersAmount,
  });

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Cancelations (month)
        </CardTitle>
        <Ban className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {monthlyCanceledOrdersAmount && (
          <>
            <span className="text-xl font-bold tracking-tight">
              {monthlyCanceledOrdersAmount.amount.toLocaleString("en-US")}
            </span>
            <p className="text-xs text-muted-foreground">
              {monthlyCanceledOrdersAmount.diffFromLastMonth >= 0 ? (
                <span className="font-semibold text-rose-500 dark:text-rose-400">
                  +{monthlyCanceledOrdersAmount.diffFromLastMonth}%
                </span>
              ) : (
                <span className="font-semibold text-emerald-500 dark:text-emerald-400">
                  {monthlyCanceledOrdersAmount.diffFromLastMonth}%
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
