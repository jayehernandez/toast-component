import React from "react";

function useKeydown(key, callback) {
  React.useEffect(() => {
    function handleEscape(e) {
      if (e.code === key) callback(e);
    }

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, [key, callback]);
}

export default useKeydown;
