import React, { useContext } from "react";
import { motion } from "framer-motion";
import AppContext from "../../context/AppContext";

const Icon = ({ menu, setAppSelected }) => {
  const { state, openApp } = useContext(AppContext);
  return (
    <motion.div
      aria-label={menu.name}
      tabIndex="-1"
      className={`flex flex-col items-center z-10  focus-within:bg-[rgba(50,94,160,0.56)]
                ${menu.name === "Projects" && "gap-[10px]"}`}
      drag
      dragMomentum={false}
      dragElastic={0.1}
      //   onContextMenu={(event) => {
      //     let res = event.target.getBoundingClientRect();
      //     console.log(res.left);
      //     setLeftVal(res.left);
      //     setTopVal(res.top);
      //   }}
      onDoubleClick={(e) => {
        if (state[menu.name].open !== true) openApp(menu.name);
      }}
      onTouchStart={(e) => {
        if (state[menu.name].open !== true) openApp(menu.name);
      }}
    >
      <img
        src={menu.path}
        alt={menu.name + "Icon"}
        className={menu.deskIconSize}
        draggable="false"
      />
      <span className="text-[13px] text-white">{menu.name}</span>
    </motion.div>
  );
};

export default Icon;
