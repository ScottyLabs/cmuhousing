"use client";

// import BuildingFilter from "./BuildingFilter";

export default function Survey() {
  return (
    <div className="flex h-full pl-[24px] mt-[15px]">
      <div className="flex-shrink-0"></div>

      <div className="flex-1 flex flex-col overflow-hidden">
        <h1 className="font-bold text-[32px]  flex-shrink-0">
          Survey
        </h1>
        <h1 className=" text-[16px] pt-[15px] pb-[15px] flex-shrink-0">
          We need more information or something ig (I promise we wont harvest it
          and use it for targetted advertisement)
        </h1>
        <div className="text-[16px] flex-1 overflow-y-auto pb-[60px]">
          <div className="flex flex-col gap-[36px] items-center sm:items-start">
            <label>
              <div className="text-[24px] font-bold flex flex-col w-full gap-[18px]">
                Gender
              </div>
              <div className="text-[12px] flex flex-col w-full gap-[18px] pb-[15px]">
                Some buildings are limited to certain genders
              </div>
              <div>
                <label>
                  <select name="Gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </label>
              </div>
            </label>
            <label>
              <div className="text-[24px] font-bold flex flex-col w-full gap-[18px]">
                Year
              </div>
              <div className="text-[12px] flex flex-col w-full gap-[18px] pb-[15px]">
                The options for first-year and upperclassmen are different
              </div>
              <div>
                <label>
                  <select name="Year">
                    <option value="first-year">First Year</option>
                    <option value="upperclassman">Upperclassmen</option>
                  </select>
                </label>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
