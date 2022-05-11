import { useEffect, useState } from "react";

const useServices = () => {
  const [services, setServices] = useState([]);

  useEffect( () =>{
    fetch('https://serene-sierra-89525.herokuapp.com/product')
    .then(res => res.json())
    .then(data => setServices(data)) 
  },[])
  return [services, setServices]
}

export default useServices;