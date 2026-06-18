interface Props {
  email: string;
  whatsapp: string;

  setEmail: (value: string) => void;

  setWhatsapp: (value: string) => void;
}

export function ContactForm({ email, whatsapp, setEmail, setWhatsapp }: Props) {
  return (
    <div className="rounded-2xl border p-6">
      <h2 className="mb-4 text-xl font-semibold">4. Informasi Kontak</h2>

      <div className="grid gap-4 md:grid-cols-2">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="
            rounded-xl
            border
            p-3
          "
        />

        <input
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          placeholder="WhatsApp"
          className="
            rounded-xl
            border
            p-3
          "
        />
      </div>
    </div>
  );
}
