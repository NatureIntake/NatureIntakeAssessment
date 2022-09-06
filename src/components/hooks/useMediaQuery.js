import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";


const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);
  const { data: session } = useSession();

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
}

export default useMediaQuery;