"use client";
import Image from "next/image";
// import BuildingFilter from "./BuildingFilter";
import SurveyHeader from "./SurveyHeader";
import GenericButton from "@/components/GenericButton";
import { ButtonVariants } from "@/components/GenericButton";

export default function Survey() {
  return (
    <div className="flex h-full pl-[24px] mt-[15px]">
      <div className="flex-shrink-0"></div>

      <div className="flex-1 flex flex-col overflow-hidden ">
        {" "}
        <h1 className="font-bold text-[32px] pb-[15px] flex-shrink-0 ">
          Survey
        </h1>
        <div className="flex gap-[12px] pt-[10px] pb-[10px] px-4 items-center rounded-2xl bg-brand-menugray border border-black/10:">
          <Image
            src={"/info.svg"}
            alt={"info"}
            width={64}
            height={64}
            className="w-[64px] h-[64px]"
          />

          <div className="h-fit ">
            <h1 className=" text-[16px] pt-[15px] pb-[15px] flex-shrink-0 px-4 ">
              We need more information or something ig (I promise we wont
              harvest it and use it for targetted advertisement)
            </h1>
          </div>
        </div>
        <div className="pt-[35px]"></div>
        <div className="pb-[20px] rounded-2xl bg-brand-menugray border border-gray/10:">
          <div className="px-4 text-[32px] font-bold pt-[5px] flex-1 overflow-y-auto pb-[20px] ">
            Who are you?
          </div>

          <label>
            <div className="flex flex-col gap-[36px] items-center sm:items-start">
              <SurveyHeader
                name="Gender"
                desc="Some buildings are limited to certain genders"
                icon="/person2.svg"
                options={["Male", "Female", "Other"]}
              />
              <SurveyHeader
                name="Year"
                desc="The options for first-year and upperclassmen are different"
                icon="/calendar.svg"
                options={["First Year", "Upperclassman"]}
              />
              <SurveyHeader
                name="Major"
                desc="This lets use know where most of your classes will probably be"
                icon="/hat.svg"
                options={[
                  "CIT",
                  "CFA",
                  "Dietrick",
                  "Tepper",
                  "SCS",
                  "MCS",
                  "Heinz",
                ]}
              />
            </div>
          </label>
        </div>
        <div className="text-[18px] pt-8 flex gap-[12px] px-4 items-center w-full">
          Part 1 of 3
          <div className="flex flex-col h-[23px] justify-center">
            <div className="relative flex flex-col justify-center">
             
            </div>
          </div>
          <GenericButton
            name="Next"
            nameSize={18}
            icon=""
            style={ButtonVariants.Orange}
          />
          <GenericButton
            name="Skip"
            nameSize={18}
            icon=""
            style={ButtonVariants.Gray}
          />
        </div>
      </div>
    </div>
  );
}
