export default function ModalContainer(props, { visible, onClose }) {
  if (!visible) {
    return null;
  }

  const handleOnClose = (e) => {
    if (e.target.id === "container") {
      onClose();
    }
  };
  return (
    <div
      className="flex flex-center fixed inset-0 justify-center items-center p-7 bg-black bg-opacity-30 backdrop-blur-sm"
      onClick={handleOnClose}
      id="container"
    >
      {props.children}
    </div>
  );
}