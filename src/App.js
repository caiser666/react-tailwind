import React from 'react'


function App() {
  return (
    <div className="relative flex h-screen w-screen justify-center items-center">
      <p className="text-7xl font-mono ">HELLO, REACT x TAILWIND + JIT</p>
      <footer className="absolute bottom-0 mb-8">
        <p className="text-gray-500 text-sm font-semibold">by caiser666 @ {(new Date().getFullYear())}</p>
      </footer>
    </div>
  );
}

export default App;
