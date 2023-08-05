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

  const handleClick = (event: any) => {
    const value = event.target.value
    setOffset((value - 1) * limit);
  };
  return (
    <ul className="pagination">
      {Array.from({ length: Math.min(maxVisibleButtons, pages) })
        .map((_, index) => index + firstPage)
        .map((page) => (
          <li key={page}>
            <button
              className={
                page === currentPage
                  ? "pagination__item--active "
                  : "" + "pagination__item"
              }
              value={page}
              onClick={handleClick}
            >
              {page}
            </button>
          </li>
        ))}
    </ul>
  );
};

export default Pagination;
