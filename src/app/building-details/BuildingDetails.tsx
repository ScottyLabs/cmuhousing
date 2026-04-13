"use client";

import Image from "next/image";
import Link from "next/link";
export default function BuildingDetails() {
    return (
        <div className="space-y-4 overflow-x-auto min-w-[300px] max-w-full pb-3">
            <h2 className="font-bold text-[32px] flex-shrink-0">Donner</h2>
            <div className="relative w-full h-[500px] overflow-hidden rounded-[18px]">
                <Image src="/building-images/donner.jpg" alt="donner" fill className="object-cover" priority />
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
            <div className="flex gap-[12px] pt-[10px]  px-4 items-center rounded-2xl">
                <Image src={"/amenities.svg"} alt={"amenities"} width={48} height={48} className="w-[48px] h-[48px]" />

                <div className="h-fit ">
                    <h1 className="font-semibold text-[24px] pt-[15px] pb-[10px] flex-shrink-0 px-4 ">Amenities</h1>
                </div>
            </div>
            
            <div className="font-semibold flex gap-[20px] pb-[5px] px-4 items-center rounded-2xl items-stretch h-full">
                <div className="flex-1 text-[20px] pt-[10px] pb-[10px] px-4 rounded-2xl bg-brand-menugray border border-black/10:">
                    Room Types
                    <div className="flex gap-[12px] pt-[10px] pb-[5px] px-4 items-center rounded-2xl">
                        <Image
                            src={"/unsorted-icons/room type/trad single.svg"}
                            alt={"info"}
                            width={48}
                            height={48}
                            className="w-[48px] h-[48px]"
                        />
                        <div className="h-fit ">
                            <h1 className=" text-[16px] pt-[5px] pb-[5px] flex-shrink-0 px-4 "><span className="font-normal">Traditional</span> Single</h1>
                        </div>
                    </div>
                    <div className="flex gap-[12px] pt-[5px] pb-[5px] px-4 items-center rounded-2xl">
                        <Image
                            src={"/unsorted-icons/room type/trad double.svg"}
                            alt={"info"}
                            width={48}
                            height={48}
                            className="w-[48px] h-[48px]"
                        />

                        <div className="h-fit ">
                            <h1 className=" text-[16px] pt-[5px] pb-[5px] flex-shrink-0 px-4 "><span className="font-normal">Traditional</span> Double</h1>
                        </div>
                    </div>
                    <div className="flex gap-[12px] pt-[5px] pb-[5px] px-4 items-center rounded-2xl">
                        <Image
                            src={"/unsorted-icons/room type/trad triple.svg"}
                            alt={"info"}
                            width={48}
                            height={48}
                            className="w-[48px] h-[48px]"
                        />

                        <div className="h-fit ">
                            <h1 className=" text-[16px] pt-[5px] pb-[5px] flex-shrink-0 px-4 "><span className="font-normal">Traditional</span> Triple</h1>
                        </div>
                    </div>
                </div>

                <div className="flex-1 text-[20px] pt-[10px] pb-[10px] px-4 rounded-2xl bg-brand-menugray border border-black/10:">
                    Bathrooms
                    <div className="flex gap-[12px] pt-[5px] pb-[5px] px-4 items-center rounded-2xl">
                        <Image
                            src={"/unsorted-icons/toilet.svg"}
                            alt={"info"}
                            width={48}
                            height={48}
                            className="w-[48px] h-[48px]"
                        />
                        <div className="h-fit ">
                            <h1 className="text-[16px] pt-[5px] font-semibold  flex-shrink-0 px-4 ">Communal</h1>
                            <div className="font-normal text-[16px]  pb-[5px] flex-shrink-0 px-4 ">
                                Shower and bathrooms shared per floor
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 text-[20px] pt-[10px] pb-[10px] px-4 rounded-2xl bg-brand-menugray border border-black/10:">
                    Closest Buildings
                    <div className="flex gap-[12px] pt-[5px] pb-[5px] px-4 items-center rounded-2xl">
                        <Image
                            src={"/distance.svg"}
                            alt={"info"}
                            width={48}
                            height={48}
                            className="w-[48px] h-[48px]"
                        />
                        <div className="h-fit ">
                            <h1 className="text-[16px] pt-[5px] pb-[5px] flex-shrink-0 px-4 ">
                                Donner is 0.2 miles away from margaret morrison, posner hall, and the uc
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="font-semibold flex gap-[20px] pb-[5px] px-4 items-center rounded-2xl items-stretch h-full">
                <div className="flex-1 text-[20px] pt-[10px] pb-[10px] px-4 rounded-2xl bg-brand-menugray border border-black/10:">
                    Air Conditioning
                    <div className="flex gap-[12px] pt-[10px] pb-[5px] px-4 items-center rounded-2xl">
                        <Image
                            src={"/unsorted-icons/ac/none.svg"}
                            alt={"info"}
                            width={48}
                            height={48}
                            className="w-[48px] h-[48px]"
                        />
                        <div className="h-fit ">
                            <h1 className=" text-[16px] pt-[5px] pb-[5px] flex-shrink-0 px-4 ">No, limited window units available for medical accomodations</h1>
                        </div>
                    </div>
                </div>

                <div className="flex-1 text-[20px] pt-[10px] pb-[10px] px-4 rounded-2xl bg-brand-menugray border border-black/10:">
                    Kitchen
                    <div className="flex gap-[12px] pt-[5px] pb-[5px] px-4 items-center rounded-2xl">
                        <Image
                            src={"/unsorted-icons/stove.svg"}
                            alt={"info"}
                            width={48}
                            height={48}
                            className="w-[48px] h-[48px]"
                        />
                        <div className="h-fit ">
                            <div className="text-[16px]  pb-[5px] flex-shrink-0 px-4 ">
                                Basement only
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 text-[20px] pt-[10px] pb-[10px] px-4 rounded-2xl bg-brand-menugray border border-black/10:">
                    Common Areas
                    <div className="flex gap-[12px] pt-[5px] pb-[5px] px-4 items-center rounded-2xl">
                        <Image
                            src={"/unsorted-icons/work with others.svg"}
                            alt={"info"}
                            width={48}
                            height={48}
                            className="w-[48px] h-[48px]"
                        />
                        <div className="h-fit ">
                            <h1 className="text-[16px] pt-[5px] pb-[5px] flex-shrink-0 px-4 ">
                                First floor, and games room in the basement
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
