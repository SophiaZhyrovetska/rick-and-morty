import { PropTypes } from "prop-types";
import _ from "lodash";
import { ReactComponent as Arrow } from "../../assets/icons/left-arrow.svg";
import "./Pagination.scss";

const Pagination = ({ className, pages, currentPage, setCurrentPage }) => {
  const getDisplayedPages = () => {
    if (currentPage - 2 <= 0) return _.range(0, Math.min(5, pages));
    if (currentPage + 2 >= pages) return _.range(Math.max(pages - 5, 0), pages);
    const minPage = Math.max(currentPage - 2, 0);
    const maxPage = Math.min(minPage + 4, pages);
    return _.range(minPage, maxPage + 1);
  };

  const handleClick = (page, isClickable = true) => () => {
    if (!isClickable) return;
    setCurrentPage(page);
  };

  const renderPaginationPage = (page) => {
    const isActive = page === currentPage;
    return (
      <div
        onClick={handleClick(page)}
        className={`Pagination__item ${
          isActive ? "Pagination__item_active" : ""
        }`}
        key={page}
      >
        {page + 1}
      </div>
    );
  };

  const renderPaginationArrow = (isNext) => {
    const nextPage = isNext ? currentPage + 1 : currentPage - 1;
    const isArrowClickable =
      (!isNext && nextPage >= 0) || (isNext && nextPage < pages);
    return (
      <div
        className="Pagination__item"
        onClick={handleClick(nextPage, isArrowClickable)}
      >
        <Arrow
          className={`Pagination__arrow ${
            isNext ? "Pagination__arrow_next" : ""
          } ${isArrowClickable ? "Pagination__arrow_active" : ""}`}
        />
      </div>
    );
  };
  return (
    <div className={`Pagination ${className}`}>
      {renderPaginationArrow(false)}
      {_.map(getDisplayedPages(), renderPaginationPage)}
      {renderPaginationArrow(true)}
    </div>
  );
};

Pagination.propTypes = {
  className: PropTypes.string.isRequired,
  pages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default Pagination;
