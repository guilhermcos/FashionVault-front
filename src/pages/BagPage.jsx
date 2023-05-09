import { useContext, useEffect } from "react";
import { HeaderDataContext } from "../App";
import { useNavigate } from "react-router-dom";

export default function BagPage() {
  const { setSelecionado } = useContext(HeaderDataContext);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setSelecionado("Bag");

    if (!token) return navigate("/");

  }, []);

  return <div></div>
}
