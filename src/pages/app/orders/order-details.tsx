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

export function OrderDetails() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Order: hgKJSHgkjHGksg677</DialogTitle>
        <DialogDescription>Order details</DialogDescription>
      </DialogHeader>

      <div className="space-y-2">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">Status</TableCell>
              <TableCell className="flex-justify-end">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-red-500" />
                  <span className="font-medium text-muted-foreground">
                    Pending
                  </span>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Client</TableCell>
              <TableCell className="flex-justify-end">
                <span className="font-medium text-muted-foreground">
                  Client Name
                </span>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Phone</TableCell>
              <TableCell className="flex-justify-end">
                <span className="font-medium text-muted-foreground">
                  (99) 99999-9999
                </span>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">E-mail</TableCell>
              <TableCell className="flex-justify-end">
                <span className="font-medium text-muted-foreground">
                  6hLz2@example.com
                </span>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Date</TableCell>
              <TableCell className="flex-justify-end">
                <span className="font-medium text-muted-foreground">
                  5 mins ago
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
            <TableRow>
              <TableCell>Pizza Pepperoni</TableCell>
              <TableCell className="text-right">2</TableCell>
              <TableCell className="text-right">$ 15.00</TableCell>
              <TableCell className="text-right">$ 30.00</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Pizza Mozzarela</TableCell>
              <TableCell className="text-right">1</TableCell>
              <TableCell className="text-right">$ 15.00</TableCell>
              <TableCell className="text-right">$ 15.00</TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableCell colSpan={3}>Order Total</TableCell>
            <TableCell className="text-right font-medium">$ 45.00</TableCell>
          </TableFooter>
        </Table>
      </div>
    </DialogContent>
  );
}
