import { PageLayout } from "@/components/layout/page-layout";

export default function AboutPage() {
  return (
    <PageLayout>
      <div className="mx-auto max-w-5xl px-4 py-10">
        <h1 className="text-4xl font-bold">Tentang Kami</h1>

        <p className="mt-6 leading-8">
          TOPUPKU adalah platform top up game digital yang menyediakan layanan
          cepat, aman dan otomatis selama 24 jam.
        </p>
      </div>
    </PageLayout>
  );
}
