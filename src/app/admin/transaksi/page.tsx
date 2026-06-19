export default function TransaksiPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Transaksi</h1>

      <div className="border rounded-xl">
        <table className="w-full">
          <thead>
            <tr>
              <th className="p-3 text-left">Invoice</th>

              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="p-3">INV-0001</td>

              <td className="p-3">PAID</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
