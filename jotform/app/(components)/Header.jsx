import React from "react";
// import { Button } from "@/app/components/ui/button";
const Header = () => {
  return (
    <div className="flex items-center py-3 justify-between shadow-xl bg-orange-200 border-b-2">
      <img className="my-2 mx-3 " width={80} src="/logo.svg" />
      <hr className="border-red-400 my-4" />
      {/* <Button  variant="destructive">
        Get Started
      </Button> */}
      <button className="my-1 mx-2 btn bg-green-950 py-2 px-4 font-bold text-white btn-secondary">
        Get Started
      </button>
    </div>
  );
};

export default Header;
