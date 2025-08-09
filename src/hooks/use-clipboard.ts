const useClipboard = () => {
  const copyToClipboard = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  return { copyToClipboard };
};

export default useClipboard;
