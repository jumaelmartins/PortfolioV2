import React from "react";

const maxVisibleButtons = 4;
const maxLeftButtons = maxVisibleButtons / 2;

interface paginationTypes {
  total: number | undefined;
  limit: number;
  offset: number;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination = ({ total, limit, offset, setOffset }: paginationTypes) => {
  const currentPage = offset ? offset / limit + 1 : 1;
  const pages = typeof total === "number" ? Math.ceil(total / limit) : 1;
  const maxFirst = Math.max(pages - (maxVisibleButtons - 1), 1);
  const firstPage = Math.min(
    Math.max(currentPage - maxLeftButtons, 1),
    maxFirst
  );

  const handleClick = (event) => {
    setOffset((event.target.value - 1) * limit);
    console.log(currentPage);
  };
  return (
    <ul>
      {Array.from({ length: Math.min(maxVisibleButtons, pages) })
        .map((_, index) => index + firstPage)
        .map((page) => (
          <li key={page}>
            <button value={page} onClick={handleClick}>
              {page}
            </button>
          </li>
        ))}
    </ul>
  );
};

export default Pagination;
