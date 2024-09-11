import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign } from "lucide-react";

export function MonthlyRevenueCard() {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Total revenue (month)
        </CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-xl font-bold tracking-tight">$45,231.90"</span>
        <p className="text-xs text-muted-foreground">
          <span className="font-semibold text-emerald-500 dark:text-emerald-400">
            +2%
          </span>{" "}
          relative to previous month
        </p>
      </CardContent>
    </Card>
  );
}
