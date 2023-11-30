// import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import React from "react";
import ArrowLeft from "../Icon/ArrowLeft";

type PaginationProps = {
  total: number;
  showTotal?: (total: number, range: Array<number>) => string | React.ReactNode;
  pageSize: number;
  defaultPage: number;
  onChange?: (currentPage: number) => void;
};

export const Pagination: React.FC<PaginationProps> = (props) => {
  const [totalData, setTotalData] = React.useState<number>(props.total);
  const [totalPage, setTotalPage] = React.useState<number>(
    Math.floor(props.total / props.pageSize) + 1
  );
  const [page, setPage] = React.useState<Array<number>>([]);
  const [size] = React.useState<number>(props.pageSize);
  const [currentPage, setCurrentPage] = React.useState<number>(
    props.defaultPage
  );
  const [totalText, setTotalText] = React.useState<string | React.ReactNode>(
    ""
  );

  const next = () => {
    const cp = currentPage + 1;
    createPage(cp);
    setCurrentPage(cp);
    if (props.onChange !== undefined) props.onChange(cp);
    if (props.showTotal !== undefined) {
      const text = props.showTotal(props.total, [
        cp * size - size + 1,
        cp * size,
      ]);
      setTotalText(text);
    }
  };

  const prev = () => {
    const cp = currentPage - 1;
    createPage(cp);
    setCurrentPage(cp);
    if (props.onChange !== undefined) props.onChange(cp);
    if (props.showTotal !== undefined) {
      const text = props.showTotal(props.total, [
        cp * size - size + 1,
        cp * size,
      ]);
      setTotalText(text);
    }
  };

  const changePage = (d: number) => {
    createPage(d);
    setCurrentPage(d);
    if (props.onChange !== undefined) props.onChange(d);
    if (props.showTotal !== undefined) {
      const text = props.showTotal(props.total, [
        d * size - size + 1,
        d * size,
      ]);
      setTotalText(text);
    }
  };

  const createPage = (d: number) => {
    setPage([]);
    let start = d - 2;
    let end = start + 4;
    if (start < 3) {
      setPage([]);
      start = 0;
      if (totalPage >= 5) end = 5;
      else end = totalPage;
    }
    if (end <= totalPage) {
      for (let i = start; i < end; i++) {
        setPage((old) => [...old, i + 1]);
      }
    } else {
      start = totalPage - 4;
      for (let i = start; i < totalPage; i++) {
        setPage((old) => [...old, i + 1]);
      }
    }
  };

  React.useEffect(() => {
    if (totalPage > 0) {
      setPage([]);
      for (let i = 0; i < totalPage; i++) {
        if (i === 5) break;
        else setPage((old) => [...old, i + 1]);
      }
    }

    if (props.showTotal !== undefined) {
      const text = props.showTotal(props.total, [
        currentPage * size - size + 1,
        currentPage * size,
      ]);
      setTotalText(text);
    }

    if (props.total !== totalData) {
      setTotalData(props.total);
      setTotalPage(Math.floor(props.total / props.pageSize) + 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalPage, props.total]);

  return (
    <div className="w-full flex items-center justify-between mb-2">
      {props.showTotal !== undefined && typeof totalText === "string" && (
        <p className="">{totalText}</p>
      )}
      {props.showTotal !== undefined &&
        typeof totalText !== "string" &&
        totalText}

      <nav className="block overflow-hidden w-max">
        <ul className="flex items-center select-none gap-[8px]">
          {props.total > 0 && (
            <>
              <li
                className="px-2 py-1.5 rounded-[3px] bg-white cursor-pointer border border-grey"
                tabIndex={0}
                aria-label="Previous"
                onClick={() => {
                  if (currentPage !== 1) prev();
                }}
                onKeyDown={(e) => {
                  if (e.code === "Enter" && currentPage !== 1) prev();
                }}
              >
                <ArrowLeft
                  className={`p-1 w-5 ${
                    currentPage > 1 ? "stroke-primary" : "stroke-grey"
                  }`}
                />
              </li>

              {page.map((d) => {
                return (
                  <li
                    key={`page-${d}`}
                    className={` ${
                      currentPage === d
                        ? "bg-primary text-white font-medium"
                        : "bg-white text-grey"
                    }
                  hover:bg-primarySunset hover:text-gray-400
                  px-4 py-1.5 cursor-pointer
                  focus:outline-none focus:bg-primary
                   rounded-[3px] items-center flex`}
                    tabIndex={0}
                    onClick={() => changePage(d)}
                    onKeyDown={(e) => {
                      if (e.code === "Enter") changePage(d);
                    }}
                  >
                    {d}
                  </li>
                );
              })}

              <li
                className="px-2 py-1.5 rounded-[3px] cursor-pointer bg-white border border-grey"
                tabIndex={0}
                aria-label="Next"
                onClick={() => {
                  if (currentPage !== page[page.length - 1]) next();
                }}
                onKeyDown={(e) => {
                  if (
                    e.code === "Enter" &&
                    currentPage !== page[page.length - 1]
                  )
                    next();
                }}
              >
                <ArrowLeft
                  className={`w-5 p-1 rotate-180 ${
                    currentPage !== page[page.length - 1]
                      ? "stroke-primary"
                      : "stroke-grey"
                  }`}
                />
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};
