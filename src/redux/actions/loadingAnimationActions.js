import {LOADING_END, LOADING_START} from "../constants/loadingAnimationTypes";

export const loadingAnimationStartAction = () => ({
    type: LOADING_START
});

export const loadingAnimationEndAction = () => ({
    type: LOADING_END
});