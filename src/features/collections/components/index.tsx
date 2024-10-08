import Header from "../../../components/share/header";
import CardCollection from "./card.collection";
import example from "../../../assets/image/widget5.png"
import { useEffect, useState } from "react";
import { LoggedInUser } from "../../promptpage/types/entity";
import Cookies from "js-cookie";

export default function Collections() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<LoggedInUser | null>(null);
  console.log(user)
  useEffect(() => {
    const token = Cookies.get('token');
    const getUser = JSON.parse(localStorage.getItem('user') as string)
    if (token) {
      setIsAuthenticated(true);
      setUser(getUser)
    } else {
      setIsAuthenticated(false);
      window.location.href = '/login';
    }
  }, []);

  if (!isAuthenticated) return null;

  return (
    <>
      <Header />
      <section className="container mx-auto grid grid-cols-3 py-5 gap-4">
        <CardCollection img={example} />
        <CardCollection img={example} />
        <CardCollection img={example} />
      </section>
    </>
  )
}