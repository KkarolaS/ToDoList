const InputArea = ({ item, handleChange, handleClick, handleKeyDown }) => {
  const saveValueOnKeyDown = (e) => {
    if (e.key === "Enter") {
      handleChange(e);
      handleKeyDown(e);
    }
  };

  return (
    <div className="form">
      <input
        onChange={(e) => {
          handleChange(e);
        }}
        onKeyDown={(e) => saveValueOnKeyDown(e)}
        type="text"
        value={item}
      />
      <button
        className="btn"
        onClick={() => {
          handleClick();
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
};

export default InputArea;
