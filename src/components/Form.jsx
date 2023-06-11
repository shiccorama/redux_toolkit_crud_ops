import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import {
//   addUser,
//   addAge,
//   startUser,
//   successUser,
//   errorUser,
// } from "../redux/userSlice";
import { postUser } from "../api/api.js";

const Form = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const dispatch = useDispatch();

  const { userData, error, loading } = useSelector((state) => state.user);
  console.log(userData, error, loading);

  const handleSubmit = (e) => {
    e.preventDefault();
    // this method will update userSlice without api:
    // dispatch(addUser({name, age}));
    // this method will update api and api will update userSlice:
    // console.log(`${name} & ${age}`);
    postUser({ userData, error, loading }, dispatch);
    // dispatch(addUser({name, age}));
  };

  return (
    <div>
      <form  onSubmit={handleSubmit}>
        <div>
          <input type="text" onChange={(e) => setName(e.target.value)} value={name}  placeholder="enter name"/>
        </div>
        <div>
          <input type="number" onChange={(e) => setAge(e.target.value)} value={age} placeholder="enter age" />
        </div>

        {loading ? (
          "Loading ..........."
        ) : (
          <div>
            <button> Add User </button>
          </div>
        )}

        {error && loading === "false" && <span> Something Went Wrong !!!</span>}
      </form>
    </div>
  );
};

export default Form;
