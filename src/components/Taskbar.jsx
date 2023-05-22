import { useState, useContext } from "react";
import StartMenu from "./StartMenu";
import { Menu } from "../content/menu";
import TaskbarAppBtn from "./UI/TaskbarAppBtn";
import AppContext from "../context/AppContext";
import Clock from "./UI/Clock";

const Taskbar = () => {
  const { state, activeApp, minimizeApp } = useContext(AppContext);
  const [isStartClicked, setIsStartClicked] = useState(false);

  const taskbarAppStack = [];

  state.About.open &&
    taskbarAppStack.push(
      <TaskbarAppBtn
        key={taskbarAppStack.length}
        appName={Menu[0].name}
        iconSrc={Menu[0].path}
        isActive={state.About.top && !state.About.minimize}
        activeHandler={() => activeApp(Menu[0].name)}
        minimizeApp={() => minimizeApp(Menu[0].name)}
      />
    );
  state.Projects.open &&
    taskbarAppStack.push(
      <TaskbarAppBtn
        key={taskbarAppStack.length}
        appName={Menu[1].name}
        iconSrc={Menu[1].path}
        isActive={state.Projects.top && !state.Projects.minimize}
        activeHandler={() => activeApp(Menu[1].name)}
        minimizeApp={() => minimizeApp(Menu[1].name)}
      />
    );
  state.Mail.open &&
    taskbarAppStack.push(
      <TaskbarAppBtn
        key={taskbarAppStack.length}
        appName={Menu[2].name}
        iconSrc={Menu[2].path}
        isActive={state.Mail.top && !state.Mail.minimize}
        activeHandler={() => activeApp(Menu[2].name)}
        minimizeApp={() => minimizeApp(Menu[2].name)}
      />
    );
  return (
    <>
      {isStartClicked && <StartMenu setCloseStartMenu={setIsStartClicked} />}
      <div className="fixed bottom-0 left-0 w-screen h-[40px] sm:h-[35px] bg-[#c0c0c0] border-t-2 border-[#fafafa] border-solid p-[5px] z-[100] flex justify-between items-center overflow-hidden">
        <div className="flex items-center justify-center gap-[5px] p-1">
          <button
            className={`flex items-center justify-center bg-inherit border-t-[#dfdfdf]  border-e-[grey]  border-b-[grey] border-s-[#dfdfdf] border-[2px] w-[80px] text-[15px] sm:text-[13px] p-1 gap-1  h-[32px] sm:h-[28px] cursor-default
            ${isStartClicked && "BtnClicked"}`}
            style={{ boxShadow: "0.5px 0.5px #000" }}
            onClick={() => {
              setIsStartClicked((prev) => !prev);
            }}
          >
            <img
              src="/assets/start.ico"
              alt="start button"
              className="h[20px] w-[20px]"
            />
            Start
          </button>
          <div className=" border-s-[1px] border-s-[grey] border-s-[solid]  border-e-[1px] border-e-[white] border--[solid] h-[25px] my-[2px] " />
          {taskbarAppStack}
        </div>
        <div
          className="flex items-center justify-center border-t-[#5a5a5a] border-e-[#fafafa] border-b-[#fafafa] border-s-[#5a5a5a] border-[1.5px] gap-[5px]
       sm:h-[25px] h-[28px] m-[1px] w-[80px] cursor-default"
        >
          <img
            src="/assets/speakers.png"
            alt="speaker icon"
            className="w-[15px] h-[15px] "
          />
          <Clock />
        </div>
      </div>
    </>
  );
};

export default Taskbar;
