import { FiltersInputs } from "./FiltersInputs";
import { HomeCard } from "./HomeCard";
import { HomeCardMobile } from "./HomeCardMobile";
import { Services } from "./Services";

export const CatalogPage = () => {
  return (
    <div className="mb-[130px]">
      <div className="px-[15px] lg:px-[117px] ">
        <div className="justify-center items-center flex flex-col">
          <h1 className="mt-[75px] text-center px-[15px] lg:px-[0px] text-[24px] font-bold lg:mt-[75px] lg:text-[32px] lg:font-medium">
            Доставка цветов в Калуге
          </h1>
          <h2 className="text-[20px] mt-[75px] text-center px-[15px] lg:px-[0px] lg:mt-[66px] font-normal">
            Ищу подарок
          </h2>
        </div>
        <div className="mt-[16px] lg:mt-[66px] justify-center items-center flex -mx-[15px] md:mx-0">
          <div className="hidden md:block">
            <HomeCard />
          </div>
          <div className="md:hidden w-full">
            <HomeCardMobile />
          </div>
        </div>
        <div className="mt-[11px] lg:mt-[64px] ">
          <FiltersInputs />
        </div>
        <div className=" mt-[11px] lg:mt-[48px] ">
          <Services />
        </div>
      </div>
    </div>
  );
};
