import { useRouter } from "next/router";
import { useState } from "react";
import Error from "../elements/Error";
import FormBtn from "../elements/formBtn";
import FormInputs from "../elements/formInput";

export default function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [message, setMessage] = useState("");
  let [showMessage, setShowMessage] = useState(false);
  let router = useRouter();

  let loginHandler = async () => {
    event.preventDefault();

    // send data
    let res = await fetch("api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password, email }),
    });
    let fetchData = await res.json();

    // show error and send dashboard
    if (fetchData.status === "success") {
      setShowMessage(false);
      // router.replace("/dashboard");
      window.location.href = "/dashboard";
    } else if (fetchData.status === "feild") {
      setMessage(fetchData.message);
      setShowMessage(true);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] mt-16 bg-login bg-cover bg-fixed">
      <form
        onSubmit={loginHandler}
        className="w-80 h-80 py-10 sm:scale-125 backdrop-blur-xl shadow-2xl rounded-3xl flex items-center justify-evenly flex-col "
      >
        <h1 className=" font-bold text-xl text-white">فرم ورود</h1>
        <FormInputs
          email={email}
          setEmail={setEmail}
          showPass={{ show: true, password, setPassword }}
          showName={{ show: false }}
        />
        <FormBtn content="ورود" />
      </form>
      {showMessage && <Error data={{ message, setShowMessage }} />}
    </div>
  );
}
