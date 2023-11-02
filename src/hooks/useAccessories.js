import { useEffect } from "react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

// useAccessories hook
const useAccessories = () => {
  const [accessories, setAccessories] = useState([]);

  //   useEffect(() => {

  //     fetch("https://camspice-server.vercel.app/accessories")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setAccessories(data);
  //       });
  //   }, [accessories]);

  //   return [accessories, setAccessories];

  useEffect(() => {
    const dataFetch = async () => {
      const data = await (
        await fetch("https://camspice-server.vercel.app/accessories")
      ).json();
      setAccessories(data);
    };
    dataFetch();
  }, []);

  return [accessories, setAccessories];

  //   const {
  //     data: accessories = [],
  //     isLoading: loading,
  //     refetch,
  //   } = useQuery({
  //     queryKey: ["accessories"],
  //     queryFn: async () => {
  //       const res = await fetch("https://camspice-server.vercel.app/accessories");
  //       return res.json();
  //     },
  //   });

  //   return [accessories, loading, refetch];
};

export default useAccessories;
