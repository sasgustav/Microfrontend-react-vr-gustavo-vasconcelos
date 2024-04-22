import React, { Suspense } from "react";
import './App.css';

const RemoteAppHeader = React.lazy(() => import("appHeader/App"));
const RemoteAppFooter = React.lazy(() => import("appFooter/App"));
const RemoteAppCards = React.lazy(() => import("appCards/App"));

const App = () => {
  return (
    <div className="app-container">
      <Suspense fallback={"Carregando..."}>
        <RemoteAppHeader />
        <main className="content">
          <RemoteAppCards />
        </main>
        <RemoteAppFooter />
      </Suspense>
    </div>
  );
};

export default App;
