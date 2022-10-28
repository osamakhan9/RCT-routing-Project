import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

function userData({ page }) {
  return fetch(`https://reqres.in/api/users?page=${page}`).then((res) =>
    res.json()
  );
}

function User() {
  const [data, setData] = useState([]); //sir take obj here
  let [searchParams, setSearchParams] = useSearchParams();
  const initialPage = Number(searchParams.get("page")) || 1;
  const [page, setPage] = useState(initialPage);

  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  console.log(searchQuery);
  const handleQuery = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    userData({ page }).then((res) => {
      // console.log(res);
      setData(res.data);
    });
  }, [page]);

  useEffect(() => {
    setSearchParams({ page, q: searchQuery });
  }, [page, searchQuery, setSearchParams]);

  useEffect(() => {
    console.log(searchQuery);
    fetch(`https://reqres.in/api/users?q=${searchQuery}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  }, []);

  // console.log(data);
  return (
    <>
      <input
        onChange={handleQuery}
        value={searchQuery}
        type="text"
        placeholder="search..."
      />

      <button
        disabled={page === 1}
        onClick={() => {
          setPage(page - 1);
        }}
      >
        Prev
      </button>
      <button>{page}</button>
      <button
        disabled={page === 2}
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Next
      </button>

      <div>
        {data.map((elem) => {
          return (
            <div key={elem.id}>
              <Link to={`/user/${elem.id}`}>{elem.first_name}</Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default User;
