export const TraitCard = ({ name }: { name: string }) => {
  return (
    <div className="bg-main-200 rounded-[100px] py-[7px] px-[23px] w-fit">
      <p className="text-[11px] font-extrabold text-white">{name}</p>
    </div>
  );
};
