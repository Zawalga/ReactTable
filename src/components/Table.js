import React, { useEffect, useState } from "react";
import _ from "lodash";
function Table({ data }) {
  const [paginatedPost, setPaginatedPost] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currendItemId, setCurrendItemId] = useState(null);
  useEffect(() => {
    setPaginatedPost(_(data).slice(0).take(pageSize).value());
  }, []);

  const pageSize = 10;
  const pageCount = data ? Math.ceil(data.length / pageSize) : 0;
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);

  const pagination = (pageNo) => {
    setCurrentPage(pageNo);
    const startIndex = (pageNo - 1) * pageSize;
    const paginatedPost = _(data).slice(startIndex).take(pageSize).value();
    setPaginatedPost(paginatedPost);
  };
  return (
    <>
      <div>{currendItemId}</div>
      <table className=" ">
        <tbody>
          <tr className=" border-b">
            <th>No</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>email</th>
            <th>gender</th>
            <th>status</th>
            <th>created</th>
            <th>button</th>
            <th>button1</th>
            <th>close</th>
            <th>button</th>
          </tr>
          {paginatedPost.map((item, index) => (
            <tr key={item.id} className=" border-b">
              <td>{index + 1}</td>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
              <td>{item.gender}</td>
              <td>{item.status}</td>
              <td>{item.created}</td>
              <td>{item.button}</td>
              <td>{item.button1}</td>
              <td>{item.close}</td>
              <td
                className=" cursor-pointer"
                onClick={() => setCurrendItemId(item.id)}
              >
                click me
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav className=" ">
        <ul className=" flex">
          {pages.map((page) => (
            <div
              className={`border p-2 m-2 cursor-pointer ${
                page == currentPage ? "bg-red-400" : null
              }`}
              onClick={() => pagination(page)}
            >
              <li>{page}</li>
            </div>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Table;
