import { useState } from 'react';
import React from 'react'

const ColorChanger = () => {
    const [backgroundcolor, setBackgroundColor] = useState("gray");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: backgroundcolor }}
    >
      <div
        className="fixed flex flex-wrap justify-center
        bottom-12 inset-x-0 px-2"
      >
        <div
          className="flex flex-wrap justify-center
           ga-3 shadow-lg bg-black px-2 py-2 rounded-2xl "
        >
          <button
            onClick={() => setBackgroundColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          <button
            onClick={() => setBackgroundColor("Yellow")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "Yellow" }}
          >
            Yellow
          </button>

          <button
            onClick={() => setBackgroundColor("Green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Green" }}
          >
            Green
          </button>

          <button
            onClick={() => setBackgroundColor("Blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>

          <button
            onClick={() => setBackgroundColor("brown")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "brown" }}
          >
            brown
          </button>

          <button
            onClick={() => setBackgroundColor("Purple")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Purple" }}
          >
            Purple
          </button>

          <button
            onClick={() => setBackgroundColor("Orange")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Orange" }}
          >
            Orange
          </button>

          <button
            onClick={() => setBackgroundColor("Lime")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Lime" }}
          >
            Lime
          </button>

          <button
            onClick={() => setBackgroundColor(" Magenta")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Magenta" }}
          >
            Magenta
          </button>
          <button
            onClick={() => setBackgroundColor(" White")}
            className="outline-none px-4 py-1 rounded-full text-lack shadow-lg"
            style={{ backgroundColor: "White" }}
          >
            White
          </button>
        </div>
      </div>
    </div>
  );
}

export default ColorChanger
