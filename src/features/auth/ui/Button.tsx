interface ButtonProps {
  isActive?: boolean;
  text: string;
}

export const Button = ({ isActive = false, text }: ButtonProps) => {
  return (
    <button
      className={`lg:w-[345px] w-full py-[18px] rounded-[60px] text-[16px] font-semibold transition-colors ${
        isActive ? "bg-main-100 text-white" : "bg-[#D3D3D3] text-[#919191]"
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
