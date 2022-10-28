import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import User from "./User";
import SingleUserPage from "./SingleUserPage";
export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/user" element={<User />} />
      <Route path="/user/:user_id" element={<SingleUserPage />}></Route>
    </Routes>
  );
}
