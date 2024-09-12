import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Helmet } from "react-helmet-async";
import { OrderTableRow } from "./order-table-row";
import { OrderTableFilters } from "./order-table-filters";
import { Pagination } from "@/components/pagination";
import { useQuery } from "@tanstack/react-query";
import { getOrders } from "@/api/get-orders";
import { useSearchParams } from "react-router-dom";
import { z } from "zod";

export function Orders() {
  const [searchParams, setSearchParams] = useSearchParams();

  const pageIndex = z.coerce
    .number()
    .transform((page) => page - 1)
    .parse(searchParams.get("pageIndex") ?? "1");

  const { data: response } = useQuery({
    queryKey: ["orders", pageIndex],
    queryFn: () => getOrders({ pageIndex }),
  });

  function handlePageChange(pageIndex: number) {
    setSearchParams((state) => {
      state.set("pageIndex", (pageIndex + 1).toString());

      return state;
    });
  }

  return (
    <>
      <Helmet title="Orders" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Orders</h1>
        <div className="space-y-2">
          <OrderTableFilters />

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[64px]"></TableHead>
                  <TableHead className="w-[140px]">ID</TableHead>
                  <TableHead className="w-[180px]">Date</TableHead>
                  <TableHead className="w-[140px]">Status</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead className="w-[140px] text-right">
                    Order Total
                  </TableHead>
                  <TableHead className="w-[164px]"></TableHead>
                  <TableHead className="w-[132px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {response &&
                  response.orders.map((order) => (
                    <OrderTableRow key={order.orderId} order={order} />
                  ))}
              </TableBody>
            </Table>
          </div>

          {response && (
            <Pagination
              onPageChange={handlePageChange}
              pageIndex={response.meta.pageIndex}
              totalCount={response.meta.totalCount}
              perPage={response.meta.perPage}
            />
          )}
        </div>
      </div>
    </>
  );
}
