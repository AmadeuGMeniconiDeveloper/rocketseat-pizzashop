import { http, HttpResponse } from "msw";
import { GetMonthlyRevenueResponse } from "../get-monthly-revenue";

export const getMonthlyRevenueMock = http.get<
  never,
  never,
  GetMonthlyRevenueResponse
>("/metrics/month-receipt", () => {
  return HttpResponse.json({
    receipt: 20000,
    diffFromLastMonth: -5,
  });
});
