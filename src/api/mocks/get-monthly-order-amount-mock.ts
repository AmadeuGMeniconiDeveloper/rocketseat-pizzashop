import { http, HttpResponse } from "msw";
import { GetMonthlyOrdersAmountResponse } from "../get-monthly-orders-amount";

export const getMonthlyOrdersAmountMock = http.get<
  never,
  never,
  GetMonthlyOrdersAmountResponse
>("/metrics/month-orders-amount", () => {
  return HttpResponse.json({
    amount: 20,
    diffFromLastMonth: -5,
  });
});
