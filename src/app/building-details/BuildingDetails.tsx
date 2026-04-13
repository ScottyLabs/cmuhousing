"use client";

import Image from "next/image";
import Link from "next/link";
export default function BuildingDetails() {
    return (
        <div className="space-y-4 overflow-x-auto min-w-[300px] max-w-full pb-3">
            <h2 className="font-bold text-[32px] flex-shrink-0">Donner</h2>
            <div className="relative overflow-hidden rounded-[18px]" style={{ width: 1000, height: 500 }}>
                <Image src="/building-images/donner.jpg" alt="donner" fill style={{ objectFit: "cover" }} priority />
            </div>

            {/* <div className="flex gap-[12px] pt-[10px] pb-[10px] px-4 items-center rounded-2xl bg-brand-menugray border border-black/10:">
                <Image src={"/window.svg"} alt={"info"} width={64} height={64} className="w-[64px] h-[64px]" />

                <div className="h-fit ">
                    <h1 className=" text-[16px] pt-[15px] pb-[15px] flex-shrink-0 px-4 ">
                        We need more information or something ig (I promise we wont harvest it and use it for targetted
                        advertisement)
                    </h1>
                </div>
            </div> */}
            <div className="flex gap-[12px] pt-[10px] pb-[10px] px-4 items-center rounded-2xl">
                <Image src={"/home.svg"} alt={"info"} width={64} height={64} className="w-[32px] h-[32px]" />

                <div className="h-fit ">
                    <h1 className="font-semibold text-[24px] pt-[15px] pb-[15px] flex-shrink-0 px-4 ">Amenities</h1>
                </div>
            </div>
            
            <div className="flex gap-[12px] pt-[5px] pb-[5px] px-4 items-center rounded-2xl">
                <div className="text-[20px] pt-[10px] pb-[10px] px-4 rounded-2xl bg-brand-menugray border border-black/10:">
                    Room Types
                    <div className="flex gap-[12px] pt-[5px] pb-[5px] px-4 items-center rounded-2xl">
                        <Image src={"/home.svg"} alt={"info"} width={32} height={32} className="w-[32px] h-[32px]" />
                        <div className="h-fit ">
                            <h1 className=" text-[16px] pt-[5px] pb-[5px] flex-shrink-0 px-4 ">Single</h1>
                        </div>
                    </div>
                    <div className="flex gap-[12px] pt-[5px] pb-[5px] px-4 items-center rounded-2xl">
                        <Image src={"/home.svg"} alt={"info"} width={32} height={32} className="w-[32px] h-[32px]" />

                        <div className="h-fit ">
                            <h1 className=" text-[16px] pt-[5px] pb-[5px] flex-shrink-0 px-4 ">Double</h1>
                        </div>
                    </div>
                    <div className="flex gap-[12px] pt-[5px] pb-[5px] px-4 items-center rounded-2xl">
                        <Image src={"/home.svg"} alt={"info"} width={32} height={32} className="w-[32px] h-[32px]" />

                        <div className="h-fit ">
                            <h1 className=" text-[16px] pt-[5px] pb-[5px] flex-shrink-0 px-4 ">Triple</h1>
                        </div>
                    </div>
                </div>

                <div className="text-[20px] pt-[10px] pb-[10px] px-4 rounded-2xl bg-brand-menugray border border-black/10:">
                    Bathrooms
                    <div className="flex gap-[12px] pt-[5px] pb-[5px] px-4 items-center rounded-2xl">
                        <Image src={"/home.svg"} alt={"info"} width={32} height={32} className="w-[32px] h-[32px]" />
                        <div className="h-fit ">
                            <h1 className="text-[16px] pt-[5px] pb-[5px] flex-shrink-0 px-4 ">Communal</h1>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
