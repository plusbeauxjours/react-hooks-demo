const useConfirm = (message: string, callback: any, rejecting: any) => {
  const confirmAction = () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm(message)) {
      callback();
    } else {
      rejecting();
    }
  };
  return confirmAction;
};

export default useConfirm;
