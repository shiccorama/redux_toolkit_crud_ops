import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const { userData } = useSelector((state) => (state.user));
  // console.log(userData);
  // you can destructure the userData like this :
  // const {name} = useSelector((state) => state.user.userData);

  return (
    <div>
      <p> Hello {userData.name} </p>
      <p> Your age is {userData.age} </p>
    </div>
  );
};

export default Header;
