import React from "react";
import Image from "next/image";
import { Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import HovearableItem from "./HoverableItem";
import "swiper/css";

export default function SwiperHome({ images }) {
    return (
        <Swiper
            modules={[Autoplay, EffectFade]}
            spaceBetween={50}
            slidesPerView={1}
            loop
            autoplay={{
                delay: 1000 + Math.random() * (2000 - 500),
            }}
        >
            {images.map((e, i) => (
                <SwiperSlide key={i}>
                    <HovearableItem>
                        <Image layout="fill" src={e.src} alt={e.alt} />
                    </HovearableItem>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
