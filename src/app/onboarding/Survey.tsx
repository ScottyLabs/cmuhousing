"use client";
import Image from "next/image";
// import BuildingFilter from "./BuildingFilter";

export default function Survey() {
  const buttonStyle =
    "font-bold text-[20px] px-4 rounded-2xl bg-brand-buttongray border border-black/10:";
  return (
    <div className="flex h-full pl-[24px] mt-[15px]">
      <div className="flex-shrink-0"></div>

      <div className="flex-1 flex flex-col overflow-hidden ">
        <h1 className="font-bold text-[32px] pb-[15px] flex-shrink-0 ">
          Survey
        </h1>
        <h1 className=" text-[16px] pt-[15px] pb-[15px] flex-shrink-0 px-4 rounded-2xl bg-brand-menugray border border-black/10:">
          We need more information or something ig (I promise we wont harvest it
          and use it for targetted advertisement)
        </h1>
        <div className="pt-[35px]"></div>
        <div className="pb-[20px] rounded-2xl bg-brand-menugray border border-gray/10:">
          <div className="px-4 text-[32px] font-bold pt-[5px] flex-1 overflow-y-auto pb-[20px] ">
            Who are you?
          </div>

          <div className="flex gap-[12px] px-8 items-center">
            <Image
              src={"/person.svg"}
              alt={"person"}
              width={38.4}
              height={38.4}
              className="w-[38.4px] h-[38.4px]"
            />
            <div className="h-fit">
              
             
            </div>
          </div>

          <label>
            <div className="flex flex-col gap-[36px] items-center sm:items-start">
              <div className="px-8">
                <div className="text-[24px] font-bold flex flex-col w-full gap-[18px]">
                  Gender
                </div>
                <div className="text-[16px] flex flex-col w-full gap-[18px] pb-[10px]">
                  Some buildings are limited to certain genders
                </div>
                <div className={buttonStyle}>
                  <label>
                    <select name="Gender">
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </label>
                </div>
              </div>

              <div className="px-8">
                <div className="text-[24px] font-bold flex flex-col w-full gap-[18px]">
                  Year
                </div>
                <div className="text-[16px] flex flex-col w-full gap-[18px] pb-[10px] ">
                  The options for first-year and upperclassmen are different
                </div>
                <div className={buttonStyle}>
                  <label>
                    <select name="Year">
                      <option value="first-year">First Year</option>
                      <option value="upperclassman">Upperclassmen</option>
                    </select>
                  </label>
                </div>
              </div>

              <div className="px-8">
                <div className="text-[24px] font-bold flex flex-col w-full gap-[18px]">
                  Major
                </div>
                <div className="text-[16px] flex flex-col w-full gap-[18px] pb-[10px]">
                  This lets use know where most of your classes will probably be
                </div>
                <div className={buttonStyle}>
                  <label>
                    <select name="Major">
                      <option value="CIT">CIT</option>
                      <option value="CFA">CFA</option>
                      <option value="Dietrich">Dietrich</option>
                      <option value="Tepper">Tepper</option>
                      <option value="SCS">SCS</option>
                      <option value="MCS">MCS</option>
                      <option value="Heinz">Heinz</option>
                    </select>
                  </label>
                </div>
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}
