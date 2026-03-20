"use client";

import Image from "next/image";

export default function SurveyHeader({
  name,
  desc,
  icon,
  options,
}: {
  name: string;
  desc: string;
  icon: string;
  options: string[];
}) {
  const buttonStyle =
    "font-bold text-[20px] px-4 rounded-2xl bg-brand-buttongray border border-black/10:";
  return (
    <div className="flex gap-[12px] px-4 items-center">
      <Image
        src={icon}
        alt={name}
        width={64}
        height={64}
        className="w-[64px] h-[64px]"
      />
      <div className="h-fit">
        <div className="text-[24px] font-bold flex flex-col w-full gap-[18px]">
          {name}
        </div>
        <div className="text-[16px] flex flex-col w-full gap-[18px] pb-[10px]">
          {desc}
        </div>
        <div className={buttonStyle}>
          <label>
            <select name="Gender">
              {options.map((i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>
    </div>
  );
}
