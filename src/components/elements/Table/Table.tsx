import React, { Dispatch, Fragment } from "react";
import { Pagination } from "./Pagination";

type TableProps = {
  columns: Array<{
    header: React.ReactNode;
    accessor: string;
    thClassName?: string;
    tdClassName?: string;
    width: string;
  }>;
  rows: Array<any>;
  setDataStart: Dispatch<any>;
  totalData?: number;
};
const Table = (props: TableProps) => {
  return (
    <>
      <table className={`h-auto w-full bg-white`}>
        <thead className="bg-gray-2 text-greyDarkest font-semibold p-2 text-lg">
          <tr key="1">
            {props.columns.map((col, idx) => {
              return (
                <th
                  key={idx.toString()}
                  className={` ${
                    col.thClassName !== undefined ? col.thClassName : ""
                  } py-4 px-6 text-left ${
                    col.width !== undefined ? col.width : ""
                  }
                 `}
                >
                  {col.header}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="rounded-b-[4px] border-grey overflow-y-auto">
          {props?.rows?.length > 0 &&
            props.rows.map((row, idx) => {
              return (
                <Fragment key={idx}>
                  <tr
                    key={idx}
                    className={`${
                      (row as any)?.["extended"]
                        ? "border-none"
                        : "border-b-2 border-greyLightest"
                    } `}
                  >
                    {props.columns.map((col, didx) => {
                      return (
                        <td
                          key={`${col.accessor}-${didx}`}
                          className={`py-4 px-6 ${col.tdClassName} `}
                        >
                          {(row as any)?.[col.accessor]}
                        </td>
                      );
                    })}
                  </tr>
                  {(row as any)?.["extended"] && (
                    <tr>
                      <td
                        className={`py-4 px-6`}
                        colSpan={props.columns.length}
                      >
                        {(row as any)?.["extended"]}
                      </td>
                    </tr>
                  )}
                </Fragment>
              );
            })}
        </tbody>
      </table>
      <div className="grid grid-cols-1 divide-y divide-gray-100 md:grid-cols-2 lg:hidden">
        {props?.rows?.length > 0 &&
          props?.rows?.map((row: any, idx: any) => {
            return (
              <div key={idx} className="py-4 flex flex-col">
                {props.columns.map((col, didx) => {
                  return (
                    <>
                      <div className="px-3 text-sm text-grayDarker mt-4">
                        {col.header}
                      </div>
                      <div
                        key={`${col.accessor}-${didx}`}
                        className={`px-3 py-2 text-greyDarkest ${col.tdClassName} `}
                      >
                        {(row as any)?.[col.accessor]}
                      </div>
                    </>
                  );
                })}
              </div>
            );
          })}
      </div>
      <div className="py-[30px]">
        <Pagination
          defaultPage={1}
          pageSize={10}
          total={
            props.totalData == undefined ? props.rows.length : props.totalData
          }
          showTotal={(total, range: any) => (
            <p className="text-md text-greyDarkest">
              Showing results
              <span className="font-bold text-greyDarkest">
                {" "}
                {range[0]} -{range[1] > props.rows ? props.rows : range[1]}
              </span>{" "}
              of {total}
            </p>
          )}
          onChange={(cp) => {
            const start = cp * 10 - 10;
            const end = cp * 10 - 1;

            props.setDataStart(start);
          }}
        />
      </div>
    </>
  );
};

export default Table;
