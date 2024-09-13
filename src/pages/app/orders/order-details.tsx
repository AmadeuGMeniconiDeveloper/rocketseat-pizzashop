import { useQuery } from "@tanstack/react-query";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../../../components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import { getOrderDetails } from "@/api/get-order-details";
import { OrderStatus } from "@/components/order-status";
import { formatDistanceToNow } from "date-fns";
import { enUS } from "date-fns/locale";

export interface OrderDetailsProps {
  orderId: string;
  open: boolean;
}

export function OrderDetails({ orderId, open }: OrderDetailsProps) {
  const { data: order } = useQuery({
    queryKey: ["order", orderId],
    queryFn: () => getOrderDetails({ orderId }),
    enabled: open,
  });

  if (!order) {
    return null;
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Order: {orderId}</DialogTitle>
        <DialogDescription>{order?.createdAt}</DialogDescription>
      </DialogHeader>

      {order && (
        <div className="space-y-2">
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="text-muted-foreground">Status</TableCell>
                <TableCell className="flex-justify-end">
                  <OrderStatus status={order.status} />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="text-muted-foreground">Client</TableCell>
                <TableCell className="flex-justify-end">
                  <span className="font-medium text-muted-foreground">
                    {order.customer.name}
                  </span>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="text-muted-foreground">Phone</TableCell>
                <TableCell className="flex-justify-end">
                  <span className="font-medium text-muted-foreground">
                    {order.customer.phone ?? "Not provided"}
                  </span>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="text-muted-foreground">E-mail</TableCell>
                <TableCell className="flex-justify-end">
                  <span className="font-medium text-muted-foreground">
                    {order.customer.email}
                  </span>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="text-muted-foreground">Date</TableCell>
                <TableCell className="flex-justify-end">
                  <span className="font-medium text-muted-foreground">
                    {formatDistanceToNow(order.createdAt!, {
                      locale: enUS,
                      addSuffix: true,
                    })}
                  </span>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead className="text-right">Qnt.</TableHead>
                <TableHead className="text-right">Price</TableHead>
                <TableHead className="text-right">Subtotal</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {order.orderItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.product.name}</TableCell>
                  <TableCell className="text-right">{item.quantity}</TableCell>
                  <TableCell className="text-right">
                    {(item.priceInCents / 100).toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </TableCell>
                  <TableCell className="text-right">
                    {((item.priceInCents * item.quantity) / 100).toLocaleString(
                      "en-US",
                      {
                        style: "currency",
                        currency: "USD",
                      },
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableCell colSpan={3}>Order Total</TableCell>
              <TableCell className="text-right font-medium">
                {(order.totalInCents / 100).toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </TableCell>
            </TableFooter>
          </Table>
        </div>
      )}
    </DialogContent>
  );
}
