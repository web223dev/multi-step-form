import { StepItem } from "@/components/step-item";

const stepData = [
  { num: 1, title: "Step 1", description: "Identity Details" },
  { num: 2, title: "Step 2", description: "Address Details" },
  { num: 3, title: "Step 3", description: "File Upload" },
  { num: 4, title: "Step 4", description: "Summary" },
];
export function Steps() {
  return (
    <header className="lg:p-4 lg:pr-0">
      <div className="absolute lg:relative top-0 left-0 -z-10 lg:z-0 w-full bg-sidebarMobile lg:bg-sidebarDesktop lg:rounded-lg lg:bg-bottom bg-no-repeat bg-cover h-[190px] lg:h-full">
        <ul className="flex gap-4 text-white justify-center pt-8 lg:flex-col lg:gap-8 lg:py-10 lg:px-[41px]">
          {stepData.map((info, index) => {
            return <StepItem key={index} infos={info} />;
          })}
        </ul>
      </div>
    </header>
  );
}
