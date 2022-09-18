export const stopMove = () => {
  document.querySelector("html,body").style.overflow = "hidden";
};

export const beginMove = () => {
  document.querySelector("html,body").style.overflow = "auto";
};
