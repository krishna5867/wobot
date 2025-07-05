import Dropdown from "./common/Dropdown";
import ArrowLeft from "../assets/arrow-left.svg?react";
import ArrowRight from "../assets/arrow-right.svg?react";
import ArrowLeftLeft from "../assets/arrow-left-left.svg?react";
import ArrowRightRight from "../assets/arrow-right-right.svg?react";

const Pagination = ({
  total,
  limit,
  setLimit,
  currentPage,
  setCurrentPage,
}) => {
  const totalPages = Math.ceil(total / limit);
  const start = (currentPage - 1) * limit + 1;
  const end = Math.min(start + limit - 1, total);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
        gap: "16px",
      }}
    >
      <Dropdown
        label=""
        options={["10", "20", "30", "40", "50"]}
        selected={limit.toString()}
        openUpward={true}
        onSelect={(value) => {
          setLimit(Number(value));
          setCurrentPage(1);
        }}
        style={{
          maxWidth: "10px",
        }}
      />

      <span style={{ fontSize: "14px", color: "#555" }}>
        {start}–{end} of {totalPages}
      </span>

      <div style={{ display: "flex", gap: "8px", cursor: "pointer" }}>
        <span onClick={() => goToPage(1)} disabled={currentPage === 1}>
          <ArrowLeftLeft />
        </span>
        <span
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ArrowLeft />
        </span>
        <span
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <ArrowRight />
        </span>
        <span
          onClick={() => goToPage(totalPages)}
          disabled={currentPage === totalPages}
        >
          <ArrowRightRight />
        </span>
      </div>
    </div>
  );
};

export default Pagination;
