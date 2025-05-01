import { useState } from "react";
import Button from "../components/button";

function App() {
  const [color, setColor] = useState("olive");

  const colors = [
    { name: "Red", bg: "red" },
    { name: "Green", bg: "green" },
    { name: "Blue", bg: "blue" },
    { name: "Olive", bg: "olive" },
    { name: "Gray", bg: "gray", font: "black" },
    { name: "Yellow", bg: "yellow", font: "black" },
    { name: "Pink", bg: "pink", font: "black" },
    { name: "Purple", bg: "purple" },
    { name: "Lavender", bg: "lavender", font: "black" },
    { name: "White", bg: "white", font: "black" },
    { name: "Black", bg: "black" },
  ];

  return (
    <div
      className="flex justify-center items-end w-full h-screen"
      style={{ backgroundColor: color }}
    >
      <div className="flex justify-center items-center flex-wrap gap-4 bg-gray-400 w-[85%] p-3 mb-10 rounded-2xl">
        {colors.map((item) => (
          <Button
            onClick={() => setColor(item.bg)}
            bgColor={item.bg}
            fontColor={item.font}
            colorName={item.name}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
