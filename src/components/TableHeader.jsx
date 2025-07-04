import Logo from "../assets/logo.svg";

const TableHeader = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px",
      }}
    >
      <img src={Logo} alt="wobot-logo" />
    </div>
  );
};

export default TableHeader;
