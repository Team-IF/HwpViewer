import React from "react";

const App: React.FC = ({ children }) => {
  return (
    <div className="App">
      <div>{children}</div>
    </div>
  );
};

export default App;
