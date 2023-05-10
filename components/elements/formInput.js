export default function FormInputs({ email, setEmail, showPass, showName }) {
  return (
    <div className="grid gap-4">
      {showName.show && (
        <input
          id="name"
          value={showName.name}
          onChange={(e) => showName.setName(e.target.value)}
          type="text"
          placeholder="نام..."
          className=" w-64 h-8 p-3 text-left rounded-2xl bg-transparent border outline-none transition-all border-[#59ecd9] text-white shadow-glass focus:shadow-glass2 placeholder:text-right placeholder:text-white"
        />
      )}
      <input
        id="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="ایمیل..."
        className=" w-64 h-8 p-3 text-left rounded-2xl bg-transparent border outline-none transition-all border-[#59ecd9] text-white shadow-glass focus:shadow-glass2 placeholder:text-right placeholder:text-white"
      />
      {showPass.show && (
        <input
          id="Password"
          value={showPass.password}
          onChange={(e) => showPass.setPassword(e.target.value)}
          type="password"
          placeholder="رمزعبور..."
          className=" w-64 h-8 p-3 text-left rounded-2xl bg-transparent border outline-none transition-all border-[#59ecd9] text-white shadow-glass focus:shadow-glass2 placeholder:text-right placeholder:text-white"
        />
      )}
    </div>
  );
}
