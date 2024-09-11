import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Utensils } from "lucide-react";

export function DailyOrdersAmountCard() {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">Orders (day)</CardTitle>
        <Utensils className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-xl font-bold tracking-tight">12</span>
        <p className="text-xs text-muted-foreground">
          <span className="font-semibold text-rose-500 dark:text-rose-400">
            -3%
          </span>{" "}
          relative to previous month
        </p>
      </CardContent>
    </Card>
  );
}
