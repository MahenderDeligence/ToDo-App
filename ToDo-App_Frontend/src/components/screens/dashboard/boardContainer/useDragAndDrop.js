export const useDragAndDrop = (actionDrop) => {
    const onDragStart = (evt) => {
      const element = evt.currentTarget;
      element.classList.add("dragged");
      evt.dataTransfer.setData("text/plain", evt.currentTarget.id);
      evt.dataTransfer.effectAllowed = "move";
    };
    const onDragEnd = (evt) => {
      evt.currentTarget.classList.remove("dragged");
    };
    const onDragEnter = (evt) => {
      evt.preventDefault();
      const element = evt.currentTarget;
      element.classList.add("dragged-over");
      evt.dataTransfer.dropEffect = "move";
    };
    const onDragLeave = (evt) => {
      const currentTarget = evt.currentTarget;
      const newTarget = evt.relatedTarget;
      if (newTarget.parentNode === currentTarget || newTarget === currentTarget)
        return;
      evt.preventDefault();
      const element = evt.currentTarget;
      element.classList.remove("dragged-over");
    };
    const onDragOver = (evt) => {
      evt.preventDefault();
      evt.dataTransfer.dropEffect = "move";
    };
    const onDrop = (evt, value, status) => {
      evt.preventDefault();
      evt.currentTarget.classList.remove("dragged-over");
      const data = evt.dataTransfer.getData("text/plain");
      actionDrop(evt, value, status, data);
    };
    return {
      onDragEnd,
      onDragEnter,
      onDragLeave,
      onDragOver,
      onDragStart,
      onDrop
    };
  };
  