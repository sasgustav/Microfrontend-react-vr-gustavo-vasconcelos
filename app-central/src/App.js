import React, { Suspense } from "react";
import './App.css';
import Spinner from './components/Spinner/Spinner';
import BackToTop from "./components/BackToTop/BackToTop";

const RemoteAppHeader = React.lazy(() => import("appHeader/App"));
const RemoteAppFooter = React.lazy(() => import("appFooter/App"));
const RemoteAppCards = React.lazy(() => import("appCards/App"));

const App = () => {
  return (
    <div className="app-container">
      <Suspense fallback={<Spinner />}>
        <RemoteAppHeader />
        <main className="content">
          <RemoteAppCards />
          <BackToTop/>
        </main>
        <RemoteAppFooter />
      </Suspense>
    </div>
  );
};

export default App;
