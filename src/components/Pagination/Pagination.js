import PaginationItem from "../PaginationItem";
import "./Pagination.scss";

const Pagination = () => {
  return (
    <div className="Pagination">
      <PaginationItem className={"PaginationItem--previous"} />
      <PaginationItem text={"1"} />
      <PaginationItem text={"2"} />
      <PaginationItem text={"3"} />
      <PaginationItem text={"4"} />
      <PaginationItem text={"5"} />
      <PaginationItem className={"PaginationItem--next"} />
    </div>
  );
};

export default Pagination;
