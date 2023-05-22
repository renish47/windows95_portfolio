import React, { useContext, useRef } from "react";
import AppContext from "../../context/AppContext";
import { motion, useDragControls } from "framer-motion";

const AppScreenFrame = ({
  children,
  className,
  appInfo,
  isActive,
  isMaximized,
  isMinimized,
}) => {
  const { closeApp, activeApp, minimizeApp, toggleFullScreen } =
    useContext(AppContext);
  const controls = useDragControls();
  const mainDivRef = useRef();

  function startDrag(event) {
    controls.start(event);
  }
  return (
    <motion.div
      className={`absolute bg-[#c0c0c0] border-b-[#5a5a5a] border-b-[1px] border-x-[#5a5a5a] border-x-[1px] border-t-[#fafafa] border-t-[2px] p-[2px] ${
        appInfo.name === "About" && !isMaximized ? "-ms-5 -mt-5" : ""
      } ${appInfo.name === "Mail" && !isMaximized ? "ms-5 mt-5" : ""} ${
        isActive ? "z-50" : isMinimized ? "-z-50" : "z-10"
      } ${
        isMaximized
          ? "appMaximized"
          : "w-[80%] sm:w-[600px] h-[60vh] sm:h-[75vh]"
      }
      `}
      ref={mainDivRef}
      drag
      dragMomentum={false}
      dragElastic={0.1}
      dragListener={false}
      dragControls={controls}
      onPointerDown={() => activeApp(appInfo.name)}
    >
      <div
        className=" flex items-center bg-[#000080] justify-between min-w-[min-content] p-[3px] sm:h-[36px] h-[40px] sm:touch-auto touch-none"
        onPointerDown={startDrag}
        onTouchStart={startDrag}
      >
        <div className="flex justify-start gap-[5px] p-[5px] text-white w-full h-full">
          <img
            src={appInfo.path}
            alt={appInfo.name + "Icon"}
            className={appInfo.headerIconSize}
          />
          <span>{appInfo.name}</span>
        </div>
        <div className="flex">
          <button
            className=" min-h-[14px] min-w-[16px] p-0 cursor-default bg-white border-[#aeaeae] border-[1.5px] rounded-[12%] flex justify-center items-center sm:h-[22px] sm:w-[18px] h-[24px] w-[22px] hover:bg-[#dedddd]"
            style={{ borderStyle: "outset" }}
            onClick={() => {
              minimizeApp(appInfo.name);
            }}
          >
            <img
              src="/assets/minimize.svg"
              alt="minimizeButton"
              className=" sm:w-min w-[10px]"
            />
          </button>
          <button
            className=" min-h-[14px] min-w-[16px] p-0 cursor-default bg-white border-[#aeaeae] border-[1.5px] rounded-[12%] flex justify-center items-center sm:h-[22px] sm:w-[18px] h-[24px] w-[22px] hover:bg-[#dedddd]"
            style={{ borderStyle: "outset" }}
            onClick={() => toggleFullScreen(appInfo.name)}
          >
            <img
              src={isMaximized ? "/assets/restore.svg" : "/assets/maximize.svg"}
              alt="maximizeButton"
              className=" sm:w-min w-[10px]"
            />
          </button>
          <button
            className=" min-h-[14px] min-w-[16px] p-0 cursor-default bg-white border-[#aeaeae] border-[1.5px] rounded-[12%] flex justify-center items-center sm:h-[22px] sm:w-[18px] h-[24px] w-[22px] hover:bg-[#dedddd]"
            style={{ borderStyle: "outset" }}
            onClick={() => {
              closeApp(appInfo.name);
            }}
          >
            <img
              src="/assets/close.svg"
              alt="closeButton"
              className=" sm:w-min w-[10px]"
            />
          </button>
        </div>
      </div>
      <motion.div
        className={
          className +
          `w-full relative  ${
            isMaximized ? " appContentHeightInMax" : "appContentHeightInMin"
          }`
        }
        onDragStart={() => (mainDivRef.current.dragListener = true)}
        onDragEnd={() => (mainDivRef.current.dragListener = false)}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default AppScreenFrame;
