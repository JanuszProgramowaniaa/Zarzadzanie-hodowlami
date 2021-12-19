import React, { useMemo, useEffect } from "react";
import { useTable, useGlobalFilter, usePagination } from "react-table";
import "./Desc.scss";
import { useState } from "react";
import { GlobalFilter } from "./GlobalFilter";
import axios from "axios";
import { useParams } from "react-router-dom";

const COLUMNS = [
  {
    Header: "Identyfikator",
    Footer: "Identyfikator",
    accessor: "_id",
  },
  {
    Header: "Matka",
    Footer: "Matka",
    accessor: "Matka",
  },
  {
    Header: "Ojciec",
    Footer: "Ojciec",
    accessor: "Ojciec",
  },

  {
    Header: "Wiek",
    Footer: "Wiek",
    accessor: "Wiek",
  },
  {
    Header: "Data Urodzenia",
    Footer: "Data Urodzenia",
    accessor: "Data_Urodzenia",
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
  const x = useParams();
  const id = x.id;
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
  const [isData, setData] = useState([]);
  const data = isData;

  const fetchUnits = async () => {
    const res = await axios.get("http://localhost:5000/api/unit/" + id);
    const units = res.data;
    setData(units);
  };

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
  useEffect(() => {
    // Zaktualizuj tytuł dokumentu korzystając z interfejsu API przeglądarki
    fetchUnits();
  }, []);

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
