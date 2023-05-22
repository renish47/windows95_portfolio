import { MAXIMIZE_APP, MINIMIZE_APP, CLOSE_APP, OPEN_APP, ACTIVE_APP } from "./AppAction"

const AppReducer = (state, action) => {
    const appName = action.payload
    let prev = state.previouslyActiveApp

    switch (action.type) {

        case OPEN_APP:
            if (prev === '') {
                return {
                    ...state,
                    taskbarAppStack: [...state.taskbarAppStack, appName],
                    previouslyActiveApp: action.payload,
                    [appName]: {
                        ...state[appName],
                        open: true,
                        top: true,
                        close: false,
                    }
                }
            }
            else {
                return {
                    ...state,
                    [prev]: {
                        ...state[prev],
                        top: false
                    },
                    taskbarAppStack: [...state.taskbarAppStack, appName],
                    previouslyActiveApp: action.payload,
                    [appName]: {
                        ...state[appName],
                        open: true,
                        top: true,
                        close: false,
                    }
                }
            }
        case CLOSE_APP:
            let alteredStack = state.taskbarAppStack.filter(app => app != appName)
            if (!alteredStack.includes(prev))
                prev = alteredStack.slice(-1)
            let topValue;
            if (prev.length > 0)
                topValue = state[prev].minimize === true ? false : true;
            return {
                ...state,
                taskbarAppStack: alteredStack,
                previouslyActiveApp: prev,
                [prev]: {
                    ...state[prev],
                    top: topValue,
                },
                [appName]: {
                    open: false,
                    minimize: false,
                    closed: true,
                    top: false,
                    fullscreen: false,
                }
            }
        case ACTIVE_APP:
            return {
                ...state,
                previouslyActiveApp: appName,
                [prev]: {
                    ...state[prev],
                    top: false
                },
                [appName]: {
                    ...state[appName],
                    top: true,
                    minimize: false
                }

            }

        case MINIMIZE_APP:
            return {
                ...state,
                [prev]: {
                    ...state[prev],
                    top: true
                },
                [appName]: {
                    ...state[appName],
                    top: false,
                    minimize: true
                }
            }
        case MAXIMIZE_APP:
            return {
                ...state,
                [appName]: {
                    ...state[appName],
                    fullscreen: !state[appName].fullscreen
                }
            }
        default:
            return state;
    }
}


export default AppReducer;