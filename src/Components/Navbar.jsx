import { NavLink } from "react-router-dom";

const linksFormMap = [
  {
    path: "/",
    title: "Home"
  },
  {
    path: "/about",
    title: "about"
  },
  {
    path: "/contact",
    title: "Contact"
  },
  {
    path: "/user",
    title: "Users"
  }
];

function Navbar() {
  let activeStyle = {
    textDecoration: "none"
  };

  let defaultStyle = {
    color: "black",
    textDecoration: "none"
  };

  return (
    <div
      style={{ display: "flex", gap: "1rem", justifyContent: "space-around" }}
    >
      {linksFormMap.map((item) => (
        <NavLink
          to={item.path}
          key={item.path}
          style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}
        >
          {" "}
          {item.title}{" "}
        </NavLink>
      ))}
    </div>
  );
}

export default Navbar;

//https://reqres.in/api/users/id

//https://reqres.in/api/users/1

// commen way to create links or treditional way

// function Navbar() {
//   return (
//     <>
//       <div style={{ display: "flex", padding: "1rem", gap: "1rem" }}>
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//         <Link to="/contact">Contact</Link>
//         <Link to="/user">user</Link>
//       </div>
//     </>
//   );
// }

// export default Navbar;
