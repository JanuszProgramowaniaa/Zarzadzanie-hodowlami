import React, { useMemo } from "react";
import { useTable, useGlobalFilter, usePagination } from "react-table";
import "./Desc.scss";
import { useState } from "react";
import { GlobalFilter } from "./GlobalFilter";

const DATA = [
  {
    id: 1,
    Father: "Damian",
    Date: "1998-01-01",
    Mother: "Matula",
    Age: 25,
  },
  {
    id: 2,
    Mother: "Vasquez",
    Date: "2012-01-01",
    Father: "Byku",
    Age: 30,
  },
  {
    id: 3,
    Father: "Damian",
    Date: "1998-01-01",
    Mother: "Matula",
    Age: 25,
  },
  {
    id: 4,
    Mother: "Vasquez",
    Date: "2012-01-01",
    Father: "Byku",
    Age: 30,
  },
  {
    id: 5,
    Father: "Damian",
    Date: "1998-01-01",
    Mother: "Matula",
    Age: 25,
  },
  {
    id: 6,
    Mother: "Vasq",
    Date: "2012-01-01",
    Father: "Byku",
    Age: 30,
  },
  {
    id: 7,
    Father: "Da",
    Date: "1998-01-01",
    Mother: "Matula",
    Age: 25,
  },
  {
    id: 8,
    Mother: "Vasqu",
    Date: "2012-01-01",
    Father: "Byku",
    Age: 30,
  },
  {
    id: 9,
    Father: "Dami",
    Date: "1998-01-01",
    Mother: "Matula",
    Age: 25,
  },
  {
    id: 10,
    Mother: "Vasquezz",
    Date: "2012-01-01",
    Father: "Byku",
    Age: 30,
  },
  {
    id: 11,
    Father: "Damiann",
    Date: "1998-01-01",
    Mother: "Matula",
    Age: 25,
  },
  {
    id: 12,
    Father: "Damian",
    Date: "1998-01-01",
    Mother: "Matula",
    Age: 25,
  },
  {
    id: 13,
    Mother: "Vasquez",
    Date: "2012-01-01",
    Father: "Byku",
    Age: 30,
  },
  {
    id: 14,
    Father: "Damian",
    Date: "1998-01-01",
    Mother: "Matula",
    Age: 25,
  },
  {
    id: 15,
    Mother: "Vasquez",
    Date: "2012-01-01",
    Father: "Byku",
    Age: 30,
  },
  {
    id: 16,
    Father: "Damian",
    Date: "1998-01-01",
    Mother: "Matula",
    Age: 25,
  },
  {
    id: 17,
    Mother: "Vasq",
    Date: "2012-01-01",
    Father: "Byku",
    Age: 30,
  },
  {
    id: 18,
    Father: "Da",
    Date: "1998-01-01",
    Mother: "Matula",
    Age: 25,
  },
  {
    id: 19,
    Mother: "Vasqu",
    Date: "2012-01-01",
    Father: "Byku",
    Age: 30,
  },
  {
    id: 20,
    Father: "Dami",
    Date: "1998-01-01",
    Mother: "Matula",
    Age: 25,
  },
  {
    id: 21,
    Mother: "Vasquezz",
    Date: "2012-01-01",
    Father: "Byku",
    Age: 30,
  },
  {
    id: 22,
    Father: "Damiann",
    Date: "1998-01-01",
    Mother: "Matula",
    Age: 25,
  },
  {
    id: 23,
    Father: "Damian",
    Date: "1998-01-01",
    Mother: "Matula",
    Age: 25,
  },
  {
    id: 24,
    Mother: "Vasquez",
    Date: "2012-01-01",
    Father: "Byku",
    Age: 30,
  },
  {
    id: 25,
    Father: "Damian",
    Date: "1998-01-01",
    Mother: "Matula",
    Age: 25,
  },
  {
    id: 26,
    Mother: "Vasquez",
    Date: "2012-01-01",
    Father: "Byku",
    Age: 30,
  },
  {
    id: 27,
    Father: "Damian",
    Date: "1998-01-01",
    Mother: "Matula",
    Age: 25,
  },
  {
    id: 28,
    Mother: "Vasq",
    Date: "2012-01-01",
    Father: "Byku",
    Age: 30,
  },
  {
    id: 29,
    Father: "Da",
    Date: "1998-01-01",
    Mother: "Matula",
    Age: 25,
  },
  {
    id: 30,
    Mother: "Vasqu",
    Date: "2012-01-01",
    Father: "Byku",
    Age: 30,
  },
  {
    id: 31,
    Father: "Dami",
    Date: "1998-01-01",
    Mother: "Matula",
    Age: 25,
  },
  {
    id: 32,
    Mother: "Vasquezz",
    Date: "2012-01-01",
    Father: "Byku",
    Age: 30,
  },
  {
    id: 33,
    Father: "Damiann",
    Date: "1998-01-01",
    Mother: "Matula",
    Age: 25,
  },
];

const COLUMNS = [
  {
    Header: "Identyfikator",
    Footer: "Identyfikator",
    accessor: "id",
  },
  {
    Header: "Matka",
    Footer: "Matka",
    accessor: "Mother",
  },
  {
    Header: "Ojciec",
    Footer: "Ojciec",
    accessor: "Father",
  },

  {
    Header: "Wiek",
    Footer: "Wiek",
    accessor: "Age",
  },
  {
    Header: "Data Urodzenia",
    Footer: "Data Urodzenia",
    accessor: "Date",
  },

  {
    Header: "Podgląd",
    Footer: "View",
    accessor: "View",
    Cell: (props) => (
      <button
        onClick={() => {
          alert("Podgląd dostępny w przyszłości");
        }}
      >
        {" "}
        Podgląd
      </button>
    ),
  },
];

const Desc = (props) => {
  const ContainerStyle = {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    flexWrap: "wrap",
  };

  const [Footer, setFooter] = useState(false);

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => DATA, []);

  const tableInstance = useTable(
    {
      columns: columns,
      data: data,
    },
    useGlobalFilter,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    prepareRow,
    canNextPage,
    canPreviousPage,
    pageOptions,
    footerGroups,
    state,
    setGlobalFilter,
  } = tableInstance;
  const { globalFilter } = state;

  const { pageIndex } = state;
  return (
    <div style={ContainerStyle} id="Desc-Container">
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />

      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
          <tr></tr>
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>

        {Footer ? (
          <tfoot>
            {footerGroups.map((footerGroup) => (
              <tr {...footerGroup.getFooterGroupProps()}>
                {footerGroup.headers.map((column) => (
                  <td {...column.getFooterProps}>{column.render("Footer")}</td>
                ))}
              </tr>
            ))}
          </tfoot>
        ) : null}
      </table>
      <div>
        <span>
          Strona{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Poprzednia
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Następna
        </button>
      </div>
    </div>
  );
};

export default Desc;
