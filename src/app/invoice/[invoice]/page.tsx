import InvoiceClient from "./invoice-client";

export default async function InvoicePage({
  params,
}: {
  params: Promise<{
    invoice: string;
  }>;
}) {
  const { invoice } = await params;

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <InvoiceClient invoice={invoice} />
    </main>
  );
}
