import Header from "../../../components/share/header";
import CardCollection from "./card.collection";
import { useEffect, useState } from "react";
import { LoggedInUser } from "../../promptpage/types/entity";
import { useQuery } from "@tanstack/react-query";
import { IDataCollections } from "../types/entity";

export default function Collections() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<LoggedInUser | null>(null);
  
  useEffect(() => {
    // const accessToken = Cookies.get('accessToken');
    const getUser = JSON.parse(localStorage.getItem('user') as string);
    
    if (getUser) {
        setUser(getUser);
        setIsAuthenticated(true);
        setUser(getUser);
    } else {
        setIsAuthenticated(false);
        window.location.href = '/login';
    }
  }, []);
  const user_id = user?.id
  console.log(user_id)
  const { data: dataCollections, isLoading, isError } = useQuery<IDataCollections[]>({
    queryKey: ['collections', user_id],
    queryFn: async () => {
      if (!user_id) return [];
      const res = await fetch (`http://108.136.163.215:8000/outfitmatcher/api/v1/outfit/collections/${user_id}`, {
        method: 'GET',
        credentials: 'include'
      })
      const data = await res.json()
      console.log(data)
      return data.data
    },
    enabled: !!user?.id
  })

  if (!isAuthenticated) return null;

  console.log(dataCollections)

  return (
    <>
      <Header />
      <section className="container mx-auto grid grid-cols-3 py-5 gap-4">
      {isLoading && <div>
        <h3>Loading...</h3>
      </div>}
      {isError && <div>
        <h3>Cannot Load Data</h3>  
      </div>}
      { dataCollections && dataCollections?.length > 0 ? (
          dataCollections?.map((collection: IDataCollections) => (
            <CardCollection key={collection._id} dataImage={collection} />
          ))
        ) : (
          <div>
            <h3>Collections empty</h3>
          </div>
        )}
      </section>
    </>
  )
}