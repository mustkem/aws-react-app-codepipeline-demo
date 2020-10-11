import React from "react";
import { useEffect } from "react";

function Home({ fetchProducts, productsData }) {
  useEffect(() => {
    fetchProducts({ userId: "222" });
  }, [fetchProducts]);

  return (
    <div className="home-content main-content">
      <div className="container">
        {productsData.loading && <div>loading...</div>}
        {!productsData.loading &&
          productsData.data &&
          productsData.data.map((item) => (
            <div key={item.cell}>
              {item.name.title + " " + item.name.first + " " + item.name.first}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Home;
