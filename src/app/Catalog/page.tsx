import { FiltersInputs, HomeCard, Services } from "@/widgets/Catalog";

function Catalog() {
  return (
    <div className="mb-[130px]">
      <div className=" px-[117px] ">
        <div className="justify-center items-center flex flex-col">
          <h1 className="mt-[75px] text-[32px] font-medium">
            Доставка цветов в Калуге
          </h1>
          <h2 className="text-[20px] mt-[66px] font-normal">Ищу подарок</h2>
        </div>
        <div className="mt-[66px] justify-center items-center flex">
          <HomeCard />
        </div>
        <div className="mt-[64px] ">
          <FiltersInputs />
        </div>
        <div className="mt-[48px] ">
          <Services />
        </div>
      </div>
    </div>
  );
}

export default Catalog;
