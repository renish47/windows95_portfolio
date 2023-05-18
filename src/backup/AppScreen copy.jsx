import { useState, useEffect } from "react";
import AppScreenFrame from "../components/AppScreenFrame";
import { Menu } from "../content/menu";

const AppScreen = ({ appSelected, setAppSelected }) => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isMailOpen, setIsMailOpen] = useState(false);
  useEffect(() => {
    if (appSelected === "About") setIsAboutOpen(true);
    if (appSelected === "Projects") setIsProjectsOpen(true);
    if (appSelected === "Mail") setIsMailOpen(true);
  }, [appSelected]);

  return (
    <>
      {isAboutOpen && (
        <AppScreenFrame
          appInfo={Menu[0]}
          className=""
          isAppOpen={setIsAboutOpen}
          setAppSelected={setAppSelected}
        >
          <h1>About Content</h1>
        </AppScreenFrame>
      )}
      {isProjectsOpen && (
        <AppScreenFrame
          appInfo={Menu[1]}
          className=""
          isAppOpen={setIsProjectsOpen}
          setAppSelected={setAppSelected}
        >
          <h1>Mail Content</h1>
        </AppScreenFrame>
      )}
      {isMailOpen && (
        <AppScreenFrame
          appInfo={Menu[2]}
          className=""
          isAppOpen={setIsMailOpen}
          setAppSelected={setAppSelected}
        >
          <h1>Mail Content</h1>
        </AppScreenFrame>
      )}
    </>
  );
};

export default AppScreen;
