import { useState } from "react";
import FormBtn from "../elements/formBtn";
import FormInputs from "../elements/formInput";
import Error from "../elements/Error";

export default function Edit({ data }) {
  let [name, setName] = useState(data.name);
  let [email, setEmail] = useState(data.email);
  let [password, setPassword] = useState(data.password);
  let [message, setMessage] = useState("");
  let [showMessage, setShowMessage] = useState(false);

  let editHandler = async () => {
    event.preventDefault();

    // send data
    let res = await fetch("api/signUp", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password, email, name, id: data.id }),
    });
    let fetchData = await res.json();

    // show error
    if (fetchData.status === "success") {
      setShowMessage(false);
      window.location.reload();
    } else if (fetchData.status === "feild") {
      setMessage(fetchData.message);
      setShowMessage(true);
    }
  };

  return (
    <div className="flex justify-center items-center my-10">
      <form
        onSubmit={editHandler}
        className=" bg-black w-80 h-80 py-10 sm:scale-125 backdrop-blur-xl shadow-2xl rounded-3xl flex items-center justify-evenly flex-col "
      >
        <h1 className=" font-bold text-xl text-white">ویرایش اطلاعات</h1>
        <FormInputs
          email={email}
          setEmail={setEmail}
          showPass={{ show: false }}
          showName={{ show: true, name, setName }}
        />
        <FormBtn content="ویرایش" />
      </form>
      {showMessage && <Error data={{ message, setShowMessage }} />}
    </div>
  );
}
