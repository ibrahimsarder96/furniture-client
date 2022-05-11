import { useEffect, useState } from "react";

const useInventory = serviceId => {
  const [service, setService] = useState({});

  useEffect( () => {
    const url = `https://serene-sierra-89525.herokuapp.com/product/${serviceId}`;

    fetch(url)
    .then(res => res.json())
    .then(data => setService(data))
  },[serviceId]);
  return [service, setService]
};
export default useInventory;