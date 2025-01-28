import { useState, useEffect } from "react";

const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        const listener = () => setMatches(media.matches);

        setMatches(media.matches); // Set initial value
        media.addEventListener("change", listener); // Listen for changes

        return () => media.removeEventListener("change", listener); // Cleanup
    }, [query]);

    return matches;
};

export default useMediaQuery;