"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function BannerSlider() {
  const banners = [
    {
      title: "Topup Game Murah",
      desc: "Proses otomatis 24 jam",
    },
    {
      title: "Promo Diamond ML",
      desc: "Harga spesial hari ini",
    },
    {
      title: "Flash Sale Free Fire",
      desc: "Stok terbatas",
    },
  ];

  return (
    <Carousel>
      <CarouselContent>
        {banners.map((banner, index) => (
          <CarouselItem key={index}>
            <div className="rounded-3xl bg-orange-500 p-10 text-white">
              <h2 className="text-3xl font-bold">{banner.title}</h2>

              <p className="mt-3">{banner.desc}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
