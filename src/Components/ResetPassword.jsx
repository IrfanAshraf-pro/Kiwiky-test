import React, { useState } from "react";
import Logo from "../Assests/logo.png";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [emailTouched, setEmailTouched] = useState(true);
  const onChangeEmail = (e) => {
    let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    if (regex.test(e.target.value)) {
      setIsEmailValid(true);
      setEmailTouched(true);
    } else {
      setIsEmailValid(false);
    }
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isEmailValid) {
      setEmailTouched(false);
    } else alert("Password reset successful");
  };
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img src={Logo} className="mx-auto h-12 w-auto" alt="WorkFlow" />
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          {" "}
          Redefinir a senha{" "}
        </h2>
        <p className="mt-2 text-center text-base leading-5 text-gray-600">
          Você receberá um e-mail com instruções para redefinir a senha
        </p>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <form
          className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"
          onSubmit={handleSubmit}
        >
          <div>
            <div>
              <label
                htmlFor=""
                className="block text-sm font-medium leading-5 mb-1 text-gray-700"
              >
                E-mail
              </label>
              <div>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="username"
                  className={`form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 ${
                    !emailTouched && !isEmailValid
                      ? "border-red-500"
                      : "border-gray-300"
                  } w-full`}
                  value={email}
                  onChange={(e) => onChangeEmail(e)}
                  onBlur={() => setEmailTouched(false)}
                />
                <div className="text-red-500 text-xs mt-1">
                  {email.length > 0 && !isEmailValid && (
                    <div> O e-mail deve ser válido </div>
                  )}
                </div>
              </div>
              <div>
                {!emailTouched && email.length < 1 && (
                  <div className="text-xs text-red-500">
                    Esse campo é obrigatório
                  </div>
                )}
              </div>
            </div>
            <div className="mt-6">
              <span className="block w-full rounded-md shadow-sm">
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                >
                  {" "}
                  Criar conta{" "}
                </button>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
