import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function RevenueChart() {
  return (
    <div className="col-span-6">
      <Card>
        <CardHeader className="flex-row items-center justify-between pb-8">
          <div className="space-y-1">
            <CardTitle className="text-base font-medium">
              Order's revenue
            </CardTitle>
            <CardDescription>Daily revenue during period</CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
}
