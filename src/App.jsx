import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");

  const colors = [
    { name: "red", bgColor: "bg-red-600" },
    { name: "blue", bgColor: "bg-blue-500" },
    { name: "green", bgColor: "bg-green-500" },
    { name: "yellow", bgColor: "bg-yellow-500" },
    { name: "orange", bgColor: "bg-orange-500" },
    { name: "cyan", bgColor: "bg-cyan-500" },
    { name: "violet", bgColor: "bg-violet-500" },
    { name: "pink", bgColor: "bg-pink-500" },
    { name: "gray", bgColor: "bg-gray-500" },
    { name: "emerald", bgColor: "bg-emerald-500", hex: "#50C878" },
    { name: "rose", bgColor: "bg-rose-500", hex: "#FF007F" },
  ];

  return (
    <div
      className=" w-full h-screen flex justify-center items-end"
      style={{ backgroundColor: color }}
    >
      <div className=" bg-white rounded-lg flex justify-center items-center flex-wrap gap-1 py-3 px-3 mb-5 max-sm:mb-0">
        {colors.map(({ name, bgColor, hex }) => (
          <button
            key={name}
            onClick={() => setColor(hex || name)}
            className={`${bgColor} outline-none py-2 px-4 text-lg max-md:px-3 max-md:text-base max-sm:text-sm capitalize text-white rounded-md`}
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
