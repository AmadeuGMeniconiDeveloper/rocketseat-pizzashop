import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { PieChart, ResponsiveContainer, Pie, Cell } from "recharts";
import { BarChart } from "lucide-react";
import colors from "tailwindcss/colors";

const data = [
  { name: "Naponitana", amount: 35 },
  { name: "Diavola", amount: 23 },
  { name: "Pepperoni", amount: 65 },
  { name: "Quattro Formaggi", amount: 12 },
  { name: "Hortolana", amount: 4 },
];

const CHART_COLORS = [
  colors.sky[500],
  colors.rose[500],
  colors.violet[500],
  colors.fuchsia[500],
  colors.emerald[500],
];

export function PopularProductsChart() {
  return (
    <Card className="col-span-3">
      <CardHeader className="pb-8">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium">
            Order's revenue
          </CardTitle>
          <BarChart className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent className="flex items-center justify-center">
        <ResponsiveContainer width="100%" height={240}>
          <PieChart>
            <Pie
              data={data}
              dataKey="amount"
              nameKey="product"
              cx="50%"
              cy="50%"
              outerRadius={86}
              innerRadius={64}
              strokeWidth={4}
              label={({ name, amount }) =>
                `${name.length > 12 ? name.substring(0, 12).concat("...") : name} (${amount})`
              }
              fontSize={12}
              labelLine={false}
            >
              {data.map((_, index) => {
                return (
                  <Cell
                    key={`cell-${index}`}
                    fill={CHART_COLORS[index]}
                    className="stroke-background outline-none hover:opacity-60"
                  />
                );
              })}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
