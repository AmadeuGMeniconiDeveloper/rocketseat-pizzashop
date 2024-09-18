import { http, HttpResponse } from "msw";
import { GetMonthlyCanceledOrdersAmountResponse } from "../get-montly-canceled-amount";

export const getMonthlyCanceledOrdersAmountMock = http.get<
  never,
  never,
  GetMonthlyCanceledOrdersAmountResponse
>("/metrics/month-canceled-orders-amount", () => {
  return HttpResponse.json({
    amount: 200,
    diffFromLastMonth: -5,
  });
});
