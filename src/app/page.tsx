import React from "react";

function Home() {
  return (
    <div className="flex justify-between items-center gap-10 px-10 py-5">
      {/* right seection */}
      <div>
        <h1 className="text-2xl mr-4 m-2">Welcome To Our Website</h1>
        <p className="mr-4 px-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard
        </p>
        <button className="bg-black text-white px-3 mr-4 m-2">Contact US</button>
      </div>
      {/* left seection */}
      <div>
        <img src="/img.png" alt="Home" width={502} height={465} />
      </div>
    </div>
  );
}

export default Home;
