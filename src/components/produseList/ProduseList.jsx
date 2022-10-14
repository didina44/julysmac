import "./produseList.scss";
import { Link, NavLink } from "react-router-dom";

export default function ProduseList({ id, title, active, setSelected }) {
  return (
    <li
      className={active ? "produseList active" : "produseList"}
      onClick={() => setSelected(id)}
    > 
      {title}
    </li>
  );
}