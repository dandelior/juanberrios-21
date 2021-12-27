const Loader = ({ visible }) => {
  return (
    <div
      //   className={`loader visible`}
      className={`loader ${visible ? "visible" : ""}`}
    >
      <h1>Juan Berrios</h1>
    </div>
  );
};

export default Loader;
