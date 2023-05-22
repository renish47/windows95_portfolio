import React from "react";

const TaskbarAppBtn = ({
  appName,
  iconSrc,
  isActive,
  activeHandler,
  minimizeApp,
}) => {
  return (
    <button
      className={` w-fit sm:w-[130px] text-[13px] max-w-[130px] h-[30px] sm:h-[26px] mt-[3px] mb-[5px] leading-[14px] overflow-hidden text-black p-[2px] ms-[1px] flex justify-start items-center gap-[10px] border-t-[#dfdfdf]  border-e-[grey]  border-b-[grey] border-s-[#dfdfdf] border-[2px] cursor-default 
              ${isActive && "BtnClicked"}`}
      style={{ boxShadow: "0.5px 0.5px #000" }}
      onClick={() => {
        if (isActive) minimizeApp();
        else activeHandler();
      }}
    >
      <img
        src={iconSrc}
        alt={appName + "Icon"}
        className={`${
          appName === "About" ? "w-[25px] h-[25px]" : "w-[22px] h-[22px]"
        } sm:w-[18px] sm:h-[18px]`}
      />
      <span className=" hidden sm:inline-block">{appName}</span>
    </button>
  );
};

export default TaskbarAppBtn;
