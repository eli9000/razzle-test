export const CHANGE_TYPE_OF_DEVICE = "CHANGE_TYPE_OF_DEVICE";
export const UPDATE_CONFIG = "UPDATE_CONFIG";

export function changeTypeOfDevice(deviceType) {
  return {
    type: CHANGE_TYPE_OF_DEVICE,
    deviceType,
  };
}

export function updateConfig(config) {
  return {
    type: UPDATE_CONFIG,
    config,
  };
}
