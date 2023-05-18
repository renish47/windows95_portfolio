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
      className={`w-[130px] text-[13px] max-w-[130px] h-[26px] mt-[3px] mb-[5px] leading-[14px] overflow-hidden text-black p-[2px] ms-[1px] flex justify-start items-center gap-[10px] border-t-[#dfdfdf]  border-e-[grey]  border-b-[grey] border-s-[#dfdfdf] border-[2px] cursor-default 
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
        className=" w-[18px] h-[18px]"
      />
      <span>{appName}</span>
    </button>
  );
};

export default TaskbarAppBtn;
