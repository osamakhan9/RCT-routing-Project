import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

// function singleUserData() {
//   return fetch(`https://reqres.in/api/users/id`).then((res) => res.json());
// }

function SingleUserPage() {
  const params = useParams();
  console.log(params);

  const [dataOfSingleuser, setDataOfSingleuser] = useState({});

  useEffect(() => {
    fetch(`https://reqres.in/api/users/${params.user_id}`)
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        setDataOfSingleuser(res.data);
        console.log(dataOfSingleuser);
      });
  }, []);

  //console.log(dataOfSingleuser);

  return (
    <div>
      <h1>Single user page</h1>

      <div>
        <h3>
          {" "}
          Name : {dataOfSingleuser.first_name} {dataOfSingleuser.last_name}{" "}
        </h3>
      </div>
      <dir>
        <img src={dataOfSingleuser.avatar}></img>
      </dir>
      <Link to="/user">Go back</Link>
    </div>
  );
}

export default SingleUserPage;
