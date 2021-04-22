export const selectState = (state) => state.AppReducers;

export const selectTypeOfDevice = (state) => selectState(state).typeOfDevice;

export const selectCmsBlocks = (state) => selectState(state).cmsBlocks;
