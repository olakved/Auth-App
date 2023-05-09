export const queryKeyUpdater = (queryName) => [queryName];

export const generateNumbers = () => {
  const seq = Math.floor(1000 + Math.random() * 9000);
  console.log(seq);
  return seq;
};

export const toastObject = () => {
  const toastConfig = {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  };
  return toastConfig;
};

export const initialName = (obj) => {
  const firstString = obj?.firstName.split(" ");
  const secondString = obj?.lastName.split(" ");
  const initialA = firstString[0]?.substring(0, 1)?.toUpperCase();
  const initialB = secondString[0]?.substring(0, 1)?.toUpperCase();
  const profileInitials = `${initialA}${initialB}`;

  return profileInitials;
};
