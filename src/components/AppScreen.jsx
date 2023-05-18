import { useContext } from "react";
import AppScreenFrame from "./AppScreenFrame";
import { Menu } from "../content/menu";
import AppContext from "../context/AppContext";
import About from "./Apps/About";

const AppScreen = () => {
  const { state } = useContext(AppContext);

  return (
    <>
      {state.About.open && (
        <AppScreenFrame
          appInfo={Menu[0]}
          className=""
          isActive={state.About.top}
          isMaximized={state.About.fullscreen}
          isMinimized={state.About.minimize}
        >
          <About isMaximized={state.About.fullscreen} />
        </AppScreenFrame>
      )}
      {state.Projects.open && (
        <AppScreenFrame
          appInfo={Menu[1]}
          className=""
          isActive={state.Projects.top}
          isMaximized={state.Projects.fullscreen}
          isMinimized={state.Projects.minimize}
        >
          <h1>Projects Content</h1>
        </AppScreenFrame>
      )}
      {state.Mail.open && (
        <AppScreenFrame
          appInfo={Menu[2]}
          className=""
          isActive={state.Mail.top}
          isMaximized={state.Mail.fullscreen}
          isMinimized={state.Mail.minimize}
        >
          <h1>Mail Content</h1>
        </AppScreenFrame>
      )}
    </>
  );
};

export default AppScreen;
