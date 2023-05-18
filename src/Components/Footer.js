import { useContext } from "react";
import UserContext from "../../Utils/UserContext";
const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="bg-slate-800 flex h-14 leading-[3.5rem] fixed z-[9999] w-full bottom-0 justify-around text-center m-0">
      
      <h4 className=" text-white">
        This site is developed by {user.name} - {user.email}
      </h4>
      <div className="flex ">
        <span className="text-white">
          Thanks for using{" "}
          <a href="/" className="hover:underline">
          Bon Appétit
          </a>
          
        </span>
      </div>
    </div>
  );
};
export default Footer;
