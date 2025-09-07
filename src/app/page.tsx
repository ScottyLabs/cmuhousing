import BuildingPanelDemo from "./BuildingPanelDemo";

export default function Home() {
  return (
    <div className="flex h-full justify-center mt-[26px]">
      <div className='flex flex-col px-5 overflow-hidden'>
        <h1 className="font-bold text-[32px] py-3 flex-shrink-0">
          Home
        </h1>
        <div className="overflow-y-auto">
          <div className='flex flex-col gap-[16px] items-center sm:items-start pb-2'>
            <BuildingPanelDemo />
          </div>
        </div>
      </div>
    </div>
  );
}
