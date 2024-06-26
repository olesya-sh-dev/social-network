import s from "./Paginator.module.css";


type PaginatorPropsType = {
    totalUsersCount: number;
    pageSize: number;
    currentPage: number;
    onPageChanged: (pageNumber: number) => void;
  };
export const Paginator = (props: PaginatorPropsType) =>
    {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    return (
    <div className={s.pages}>
    {pages.map((p) => {
      return (
        <span
          className={props.currentPage === p ? s.selectedPage : ""}
          onClick={(e) => {
            props.onPageChanged(p);
          }}
          key={p}
        >
          {p}
        </span>
      );
    })}
  </div>
    );
}
