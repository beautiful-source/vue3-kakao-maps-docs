export const useCopyButton = () => {
  const copyButtonElement = ref<HTMLButtonElement>();
  const onMouseEnter = () => {
    copyButtonElement.value?.style.setProperty('opacity', '1');
  };
  const onMouseLeave = () => {
    copyButtonElement.value?.style.setProperty('opacity', '0');
  };
  const onMountedCopyButton = (button: HTMLButtonElement) => {
    button.style.setProperty('opacity', '0');
    button.style.setProperty('transition', 'opacity 0.4s');
    copyButtonElement.value = button;
  };

  return { onMouseEnter, onMouseLeave, onMountedCopyButton };
};
