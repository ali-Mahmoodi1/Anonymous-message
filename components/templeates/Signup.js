import { useRouter } from "next/router";
import { useState } from "react";
import Error from "../elements/Error";
import FormBtn from "../elements/formBtn";
import FormInputs from "../elements/formInput";

export default function SignIn() {
  // variables
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [message, setMessage] = useState("");
  let [showMessage, setShowMessage] = useState(false);

  let signInHandler = async () => {
    event.preventDefault();

    // send data
    let res = await fetch("api/signUp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password, email, name }),
    });
    let fetchData = await res.json();

    // show error
    if (fetchData.status === "success") {
      setShowMessage(false);
      // router.replace("/dashboard");
      window.location.href = "/dashboard";
    } else if (fetchData.status === "feild") {
      setMessage(fetchData.message);
      setShowMessage(true);
    }
  };

  // jsx
  return (
    <div className="flex justify-center items-center min-h-[80vh] mt-16 bg-login bg-cover bg-fixed">
      <form
        onSubmit={signInHandler}
        className="w-80 h-80 py-10 sm:scale-125 backdrop-blur-xl shadow-2xl rounded-3xl flex items-center justify-evenly flex-col "
      >
        <h1 className=" font-bold text-xl text-white">فرم ثبت نام</h1>
        <FormInputs
          email={email}
          setEmail={setEmail}
          showPass={{ show: true, password, setPassword }}
          showName={{ show: true, name, setName }}
        />
        <FormBtn content="ثبت نام" />
      </form>
      {showMessage && <Error data={{ message, setShowMessage }} />}
    </div>
  );
}
