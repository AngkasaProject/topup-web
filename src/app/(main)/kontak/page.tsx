import { PageLayout } from "@/components/layout/page-layout";

export default function ContactPage() {
  return (
    <PageLayout>
      <div className="mx-auto max-w-5xl px-4 py-10">
        <h1 className="text-4xl font-bold">Kontak</h1>

        <div className="mt-6 space-y-3">
          <p>Email: support@domainanda.my.id</p>
          <p>WhatsApp: 08xxxxxxxxxx</p>
        </div>
      </div>
    </PageLayout>
  );
}
