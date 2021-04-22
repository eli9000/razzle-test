import { UPDATE_CONFIG, CHANGE_TYPE_OF_DEVICE } from "./actions";
import {
  DESKTOP_DEVICE,
  MOBILE_DEVICE,
  DESKTOP_SIZE,
} from "../../Constants/App";
import { getWindow } from "../../Utils/Environment";

const initialState = {
  typeOfDevice:
    getWindow().innerWidth > DESKTOP_SIZE ? DESKTOP_DEVICE : MOBILE_DEVICE,
  cmsBlocks: {
    items: [],
  },
};

function app(state = initialState, action) {
  switch (action.type) {
    case UPDATE_CONFIG:
      return {
        ...state,
        ...action.config,
      };

    case CHANGE_TYPE_OF_DEVICE:
      return {
        ...state,
        typeOfDevice: action.deviceType,
      };

    default:
      return state;
  }
}

export default app;
