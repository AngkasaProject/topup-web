"use client";

import { paymentMethods } from "@/data/payment-methods";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Props {
  selectedMethod: string;
  onSelect: (method: string) => void;
}

export function PaymentMethods({ selectedMethod, onSelect }: Props) {
  return (
    <div className="rounded-2xl border p-6">
      <h2 className="mb-6 text-xl font-semibold">3. Pilih Pembayaran</h2>

      <Accordion type="single" collapsible className="space-y-3">
        {paymentMethods.map((group) => (
          <AccordionItem
            key={group.group}
            value={group.group}
            className="
              rounded-2xl
              border
              px-4
            "
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
                    className={`
                      w-full
                      rounded-xl
                      border
                      p-4
                      text-left
                      transition

                      ${
                        selectedMethod === method.code
                          ? "border-orange-500 bg-orange-50"
                          : "hover:border-orange-300"
                      }
                    `}
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
