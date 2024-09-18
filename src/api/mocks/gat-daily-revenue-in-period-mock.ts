import { http, HttpResponse } from "msw";
import { GetDailyOrdersAmountResponse } from "../get-daily-orders-amount";

export const getDailyOrdersAmountMock = http.get<
  never,
  never,
  GetDailyOrdersAmountResponse
>("/metrics/daily-receipt-in-period", () => {
  return HttpResponse.json({
    amount: 5,
    diffFromYesterday: -5,
  });
});
