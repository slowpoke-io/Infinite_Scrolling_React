import { useCallback, useState } from "react";
import "./App.css";
import Box from "./Box";

function App() {
  const LIMIT = 4;
  const [boxes, setBoxes] = useState(Array.from({ length: 10 }));
  const [isLoading, setIsLoading] = useState(false);
  const fetchSTH = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setBoxes((boxes) => boxes.concat(Array.from({ length: LIMIT })));
    setIsLoading(false);
  };
  const intersect = useCallback((node) => {
    if (node == null) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        fetchSTH();
        observer.unobserve(node);
      }
    });

    observer.observe(node);
  }, []);
  return (
    <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5 p-4">
      {boxes.map((box, i) => (
        <Box key={i} ref={i === boxes.length - 1 ? intersect : null} />
      ))}

      {isLoading &&
        Array.from({ length: LIMIT }).map((d, i) => (
          <Box key={i} className="bg-blue-200" />
        ))}
    </div>
  );
}

export default App;
