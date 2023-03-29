import { PopUpElement } from "./Content/Header/PopUp";

export const INITIAL_POPUP_STATE: PopUpElement = {
  title: "",
  content: "",
};

const HeaderPopupTitle = "This is popup";
const HeaderPopupContent =
  "My main struggle when creating this project was the initial setup and configuration, which rarely goes smoothly on the first try. ;) Additionally, testing was a challenge, but I am trying to improve my testing skills. Throughout the project, I strive to write code that is as DRY as possible. I am open to any suggestions on how I can continue to improve my code. ";

export const HEADER_POPUP: PopUpElement = {
  title: HeaderPopupTitle,
  content: HeaderPopupContent,
};

export const Dictionary: Record<string, string> = {};
