import { useEffect, useState } from "react";

const useInventory = serviceId => {
  const [service, setService] = useState({});

  useEffect( () => {
    const url = `http://localhost:5000/product/${serviceId}`;

    fetch(url)
    .then(res => res.json())
    .then(data => setService(data))
  },[serviceId]);
  return [service]
};
export default useInventory;