import { useEffect, useState } from 'react'

const useMedia = (query) => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches)

  useEffect(()=>{
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    media.addEventListener(listener);

    return () => media.removeEventListener(listener);
   }, [query]);
  
  return matches
}

export default useMedia