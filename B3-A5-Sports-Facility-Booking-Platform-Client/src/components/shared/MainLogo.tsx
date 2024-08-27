import logo from "../../assets/icons/logo1.png";

const MainLogo = ({ caller }: { caller: string }) => {
  return (
    <a
      href="/"
      className={`w-fit flex ${
        caller === "d" ? "justify-center" : "justify-start"
      } items-center text-xl ${
        caller === "f" ? "text-white" : "text-[rgba(255,255,255,0.75)]"
      }  font`}
    >
      <img src={logo} alt="" className="w-[30%] sm:w-[15%] mr-1" />
      <span
        className={caller === "d" || caller === "f" ? "flex" : `hidden sm:flex`}
      >
        | Sport Odyssey
      </span>
    </a>
  );
};

export default MainLogo;
