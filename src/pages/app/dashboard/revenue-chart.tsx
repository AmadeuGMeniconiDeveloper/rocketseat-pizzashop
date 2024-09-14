import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import colors from "tailwindcss/colors";

import {
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
} from "recharts";
import { getDailyRevenueInPeriod } from "@/api/get-daily-revenue-in-period";
import { useQuery } from "@tanstack/react-query";
import { Label } from "@/components/ui/label";
import { DatePickerWithRange } from "@/components/ui/date-range-picker";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import { subDays } from "date-fns";
import { Loader2 } from "lucide-react";

export function RevenueChart() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: subDays(new Date(), 7),
    to: new Date(),
  });

  const { data: dailyRevenueInPeriod } = useQuery({
    queryKey: ["metrics", "daily-revenue-in-period", dateRange],
    queryFn: () =>
      getDailyRevenueInPeriod({ from: dateRange?.from, to: dateRange?.to }),
    staleTime: 1000 * 60 * 60,
  });

  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Order's revenue
          </CardTitle>
          <CardDescription>Daily revenue during period</CardDescription>
        </div>
        <div className="flex items-center gap-3">
          <Label>Period: </Label>
          <DatePickerWithRange date={dateRange} onDateChange={setDateRange} />
        </div>
      </CardHeader>
      <CardContent>
        {dailyRevenueInPeriod ? (
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={dailyRevenueInPeriod}>
              <XAxis
                dataKey="date"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                dy={16}
              />
              <YAxis
                fontSize={12}
                axisLine={false}
                tickLine={false}
                width={90}
                dx={-16}
                tickFormatter={(value: number) =>
                  (value / 100).toLocaleString("en", {
                    style: "currency",
                    currency: "USD",
                  })
                }
              />
              <Line
                type="linear"
                strokeWidth={2}
                dataKey="receipt"
                stroke={colors.violet[500]}
              />

              <CartesianGrid
                vertical={false}
                strokeDasharray="3 10"
                className="stroke-muted-foreground/40"
              />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex h-[240px] w-full items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        )}
      </CardContent>
    </Card>
  );
}
