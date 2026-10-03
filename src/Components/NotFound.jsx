import NotFoundImg from "../assets/Error404.png";
import { Link } from "react-router";
export default function NotFound() {
  return (
    <div className="d-flex flex-column gap-4 align-items-center">
      <img src={NotFoundImg} alt="NotFoundImg" className="rounded-3" />
      <Link
        to={"/"}
        className="bg-success py-2 px-4 text-white fw-bold rounded-3 ">
        Back Home
      </Link>
    </div>
  );
}
