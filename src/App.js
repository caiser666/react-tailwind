import React from "react";

function App() {
  return (
    <div className="relative flex h-screen w-screen justify-center items-center">
      <p className="font-mono text-center text-2xl m-8 sm:text-4xl sm:m-12 md:text-5xl md:m-24 lg:text-6xl lg:m-20 xl:text-7xl xl:md-16 transition-all duration-300 ease-in-out">
        HELLO, REACT x TAILWIND + JIT
      </p>
      <footer className="absolute bottom-0 mb-8">
        <p className="text-gray-500 text-sm font-semibold">
          by caiser666 @ {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}

export default App;
