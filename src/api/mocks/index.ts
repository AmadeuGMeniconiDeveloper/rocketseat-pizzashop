import { env } from "@/env";
import { setupWorker } from "msw/browser";

import { signInMock } from "./sign-in-mock";
import { registerRestaurandMock } from "./register-restaurant-mock";
import { getDailyRevenueInPeriodMock } from "./gat-daily-orders-amount-mock";
import { getMonthlyOrdersAmountMock } from "./get-monthly-order-amount-mock";
import { getMonthlyCanceledOrdersAmountMock } from "./get-monthly-canceled-amount-mock";
import { getMonthlyRevenueMock } from "./get-monthly-revenue-mock.";
import { getDailyOrdersAmountMock } from "./gat-daily-revenue-in-period-mock";

export const worker = setupWorker(
  signInMock,
  registerRestaurandMock,
  getDailyOrdersAmountMock,
  getMonthlyOrdersAmountMock,
  getMonthlyCanceledOrdersAmountMock,
  getMonthlyRevenueMock,
  getDailyRevenueInPeriodMock,
);

export async function enableMSW() {
  if (env.MODE !== "test") {
    return;
  }

  await worker.start();
}
