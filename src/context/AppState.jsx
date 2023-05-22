import React, { useReducer } from "react";
import AppContext from "./AppContext";
import AppReducer from "./AppReducer";
import {
  MAXIMIZE_APP,
  MINIMIZE_APP,
  CLOSE_APP,
  OPEN_APP,
  ACTIVE_APP,
} from "./AppAction";

const initialState = {
  Mail: {
    open: false,
    minimize: false,
    closed: true,
    top: false,
    fullscreen: false,
  },
  About: {
    open: false,
    minimize: false,
    closed: true,
    top: false,
    fullscreen: false,
  },
  Projects: {
    open: false,
    minimize: false,
    closed: true,
    top: false,
    fullscreen: false,
  },
  previouslyActiveApp: "",
  taskbarAppStack: [],
};

const AppState = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const openApp = (appName) =>
    dispatch({
      type: OPEN_APP,
      payload: appName,
    });

  const closeApp = (appName) =>
    dispatch({
      type: CLOSE_APP,
      payload: appName,
    });
  const activeApp = (appName) =>
    dispatch({
      type: ACTIVE_APP,
      payload: appName,
    });

  const minimizeApp = (appName) => {
    dispatch({
      type: MINIMIZE_APP,
      payload: appName,
    });
  };
  const toggleFullScreen = (appName) => {
    dispatch({
      type: MAXIMIZE_APP,
      payload: appName,
    });
  };

  return (
    <AppContext.Provider
      value={{
        state,
        openApp,
        closeApp,
        activeApp,
        minimizeApp,
        toggleFullScreen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppState;
