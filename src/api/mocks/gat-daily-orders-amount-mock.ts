import { http, HttpResponse } from "msw";
import {
  GetDailyRevenueInPeriodParams,
  GetDailyRevenueInPeriodResponse,
} from "../get-daily-revenue-in-period";

export const getDailyRevenueInPeriodMock = http.get<
  never,
  GetDailyRevenueInPeriodParams,
  GetDailyRevenueInPeriodResponse
>("/metrics/day-orders-amount", () => {
  return HttpResponse.json([
    { date: "01/01/2024", receipt: 2000 },
    { date: "02/01/2024", receipt: 800 },
    { date: "03/01/2024", receipt: 100 },
    { date: "04/01/2024", receipt: 2000 },
    { date: "05/01/2024", receipt: 1600 },
    { date: "06/01/2024", receipt: 2000 },
    { date: "07/01/2024", receipt: 2800 },
  ]);
});
