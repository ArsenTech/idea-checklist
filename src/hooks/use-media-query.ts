import { useEffect, useState } from "react";

export function useMediaQuery(query: string){
     const [value, setValue] = useState(false);

     useEffect(()=>{
          const handleChange = (event: MediaQueryListEvent) => {
               setValue(event.matches)
          }
          const result = matchMedia(query);
          result.addEventListener("change",handleChange);
          setValue(result.matches);
          return () => result.removeEventListener("change",handleChange)
     },[query]);

     return value
}