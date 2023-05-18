import AppScreen from "../components/AppScreen";
import Icon from "../components/Icon";
import { Menu } from "../content/menu";
import { useState } from "react";
import Taskbar from "../components/Taskbar";

const Desktop = () => {
  const [appSelected, setAppSelected] = useState("");

  return (
    <>
      <div className=" w-screen h-screen bg-transparent">
        <div className="w-screen h-screen flex justify-center items-center -z-10 flex-col bg-[#008080]">
          <div className="flex flex-col gap-6 absolute justify-start z-10 top-[3%] left-[2%]">
            {Menu.map((menu, i) => {
              return (
                <Icon key={i} menu={menu} setAppSelected={setAppSelected} />
              );
            })}
          </div>
          <AppScreen
            appSelected={appSelected}
            setAppSelected={setAppSelected}
          />
          <h1 className=" text-5xl cursor-default selection:bg-current selection:text-current">
            Renishkar
          </h1>
          <h2 className=" text-3xl text-white cursor-default selection:bg-current selection:text-current">
            Full Stack Developer
          </h2>
        </div>
      </div>
      <Taskbar setAppSelected={setAppSelected} appSelected={appSelected} />
    </>
  );
};

export default Desktop;
