import service from "../utils/request";

export const nonce = (data) => {
  return service({
    url: `/user/metamask/nonce`,
    method: "POST",
    data,
  });
};

export const login = (data) => {
  return service({
    url: `/user/metamask/login`,
    method: "POST",
    data,
  });
};

export const open = (data) => {
  return service({
    url: `/user/purchase/open`,
    method: "POST",
    data,
  });
};

export const drawLots = (data) => {
  return service({
    url: `/user/purchase/drawLots`,
    method: "POST",
    data,
  });
};
