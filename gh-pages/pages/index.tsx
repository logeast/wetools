import type { NextPage } from "next";

import { Header } from "../components";

const Home: NextPage = () => {
  return (
    <div className="font-sans antialiased min-h-screen bg-gray-900">
      <Header />
      <div className="bg-gray-900"></div>
    </div>
  );
};

export default Home;
