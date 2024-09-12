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

const data = [
  { date: "10/12", revenue: 1000 },
  { date: "11/12", revenue: 900 },
  { date: "12/12", revenue: 2000 },
  { date: "13/12", revenue: 3000 },
  { date: "14/12", revenue: 800 },
  { date: "15/12", revenue: 100 },
  { date: "16/12", revenue: 1000 },
];

export function RevenueChart() {
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Order's revenue
          </CardTitle>
          <CardDescription>Daily revenue during period</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={data}>
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
                value.toLocaleString("en", {
                  style: "currency",
                  currency: "USD",
                })
              }
            />
            <Line
              type="linear"
              strokeWidth={2}
              dataKey="revenue"
              stroke={colors.violet[500]}
            />

            <CartesianGrid
              vertical={false}
              strokeDasharray="3 10"
              className="stroke-muted-foreground/40"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
