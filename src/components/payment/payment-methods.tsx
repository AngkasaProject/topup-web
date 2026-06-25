"use client";

import type { PaymentMethod } from "@/types/database";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Props {
  paymentMethods: PaymentMethod[];
  selectedMethod: string;
  onSelect: (method: string) => void;
}

export function PaymentMethods({
  paymentMethods,
  selectedMethod,
  onSelect,
}: Props) {
  const groups = Object.values(
    paymentMethods.reduce(
      (acc, method) => {
        if (!acc[method.group_name]) {
          acc[method.group_name] = {
            group: method.group_name,
            methods: [],
          };
        }

        acc[method.group_name].methods.push(method);

        return acc;
      },
      {} as Record<
        string,
        {
          group: string;
          methods: PaymentMethod[];
        }
      >,
    ),
  );

  return (
    <div className="rounded-2xl border p-6">
      <h2 className="mb-6 text-xl font-semibold">3. Pilih Pembayaran</h2>

      <Accordion type="single" collapsible className="space-y-3">
        {groups.map((group) => (
          <AccordionItem
            key={group.group}
            value={group.group}
            className="rounded-2xl border px-4"
          >
            <AccordionTrigger>
              <div className="text-left">
                <div className="font-semibold">{group.group}</div>

                <div className="text-sm text-muted-foreground">
                  {group.methods.length} metode tersedia
                </div>
              </div>
            </AccordionTrigger>

            <AccordionContent>
              <div className="space-y-2 pb-2">
                {group.methods.map((method) => (
                  <button
                    key={method.code}
                    onClick={() => onSelect(method.code)}
                    className={`w-full rounded-xl border p-4 text-left transition ${
                      selectedMethod === method.code
                        ? "border-orange-500 bg-orange-50"
                        : "hover:border-orange-300"
                    }`}
                  >
                    <div className="font-medium">{method.name}</div>
                  </button>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
