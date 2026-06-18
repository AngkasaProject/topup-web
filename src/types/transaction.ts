export interface Transaction {
  invoiceNumber: string;

  serviceName: string;

  target: string;

  serverId?: string;

  productName: string;

  price: number;

  paymentMethod: string;

  email: string;

  whatsapp: string;

  status: "PENDING" | "PAID" | "FAILED";

  createdAt: string;
}
