const useConfirm = (message: string, onConfirm: any, onCancel: any) => {
  const confirmAction = () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
  return confirmAction;
};

export default useConfirm;
