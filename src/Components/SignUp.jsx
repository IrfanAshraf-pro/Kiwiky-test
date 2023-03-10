import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Assests/logo.png";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [repeatEmail, setRepeatEmail] = useState("");
  const [isRepeatEmailValid, setIsRepeatEmailValid] = useState(false);
  const [password, setPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [emailTouched, setEmailTouched] = useState(true);
  const [repeatEmailTouched, setRepeatEmailTouched] = useState(true);
  const [passwordTouched, setPasswordTouched] = useState(true);
  const [acceptTermsTouched, setAcceptTermsTouched] = useState(true);

  const onChangeEmail = (e) => {
    let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    if (regex.test(e.target.value)) {
      setIsEmailValid(true);
      setEmailTouched(true);
      setIsRepeatEmailValid(true);
      setRepeatEmailTouched(true);
    } else {
      setIsEmailValid(false);
      setIsRepeatEmailValid(false);

    }
    setEmail(e.target.value);
  };

  const onChangeRepeatEmail = (e) => {
    if (email === e.target.value) {
      setIsRepeatEmailValid(true);
      setRepeatEmailTouched(true);
    } else {
      setIsRepeatEmailValid(false);
    }
    setRepeatEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    if (e.target.value.length > 0) {
      setPasswordTouched(true);
    }
    setPassword(e.target.value);
  };
  const handleTermsChange = (e) => {
    setAcceptTerms(e.target.checked);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isEmailValid && password.length < 1 && !isRepeatEmailValid && !acceptTerms) {
      setEmailTouched(false);
      setPasswordTouched(false);
      setRepeatEmailTouched(false);
      setAcceptTermsTouched(false)
    }else if(!isEmailValid && password.length < 1 && !isRepeatEmailValid) {
        setEmailTouched(false);
        setPasswordTouched(false);
        setRepeatEmailTouched(false);
    }
    else
      alert(
        `Email is ${email} and Repeat Email is ${repeatEmail} and Password is ${password}`
      );
  };
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img src={Logo} className="mx-auto h-12 w-auto" alt="WorkFlow" />
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          {" "}
          Criar nova conta{" "}
        </h2>
        <p className="mt-2 text-center text-base leading-5 text-gray-600">
          Ou{" "}
          <NavLink
            to="/"
            className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
          >
            {" "}
            entrar na sua conta existente{" "}
          </NavLink>
        </p>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <form
          className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"
          onSubmit={handleSubmit}
        >
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-5 mb-1 text-gray-700"
            >
              {" "}
              E-mail{" "}
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
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-5 mb-1 text-gray-700"
            >
              {" "}
              Repetir e-mail{" "}
            </label>
            <div>
              <input
                type="text"
                name="username"
                id="username"
                autoComplete="username"
                className={`form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 ${
                  !repeatEmailTouched && !isRepeatEmailValid
                    ? "border-red-500"
                    : "border-gray-300"
                } w-full`}
                value={repeatEmail}
                onChange={(e) => onChangeRepeatEmail(e)}
                onBlur={() => setRepeatEmailTouched(false)}
              />
              <div className="text-red-500 text-xs mt-1">
                {repeatEmail.length > 0 && !isRepeatEmailValid && (
                  <div> Os dois e-mails devem ser iguais. </div>
                )}
              </div>
            </div>
            <div>
              {!repeatEmailTouched && repeatEmail.length < 1 && (
                <>
                  <div className="text-xs text-red-500">
                    Os dois e-mails devem ser iguais.
                  </div>
                  <div className="text-xs text-red-500">
                    Esse campo é obrigatório
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="mt-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              {" "}
              Senha{" "}
            </label>
            <div>
              <input
                type="password"
                id="password"
                autoComplete="current-password"
                name="password"
                className={`form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 ${
                  !passwordTouched && password.length < 1
                    ? "border-red-500"
                    : "border-gray-300"
                }  w-full`}
                value={password}
                onChange={(e) => onChangePassword(e)}
                onBlur={() => setPasswordTouched(false)}
              />
              {!passwordTouched && !password && (
                <div className="text-red-500 text-xs mt-1">
                  Esse campo é obrigatório
                </div>
              )}
            </div>
          </div>
          <div className="mt-6">
            <label htmlFor="" className="relative flex items-start mt-2">
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className={`form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out cursor-pointer  rounded focus:ring-1 ring-primary ${
                    !acceptTermsTouched && !acceptTerms
                      && "border-2 border-red-500"
                      
                  }`}
                  checked={acceptTerms}
                  onChange={handleTermsChange}
                />
                {console.log(`accept terms is ${acceptTerms} and touch is ${acceptTermsTouched}`)}
              </div>
              <div className="ml-2 text-sm leading-5">
                <span className="font-medium text-gray-700">
                    <span>Eu li e aceito os </span>
                    <a href="www.google.com" target='_blank' className="underline">
                    termos de uso
                    </a>
                    {" "}, 
                     <a href="www.google.com" target='_blank' className="underline">
                     termos de licença de uso de software
                     </a>
                      {" "},{" "} 
                      <a href="www.google.com" target='_blank' className="underline">
                      política de conteúdo
                      </a>
                      {" "}da Kiwify
                </span>
                {!acceptTermsTouched && !acceptTerms && (
                <div className="text-red-500 text-xs mt-1">
                  Esse campo é obrigatório
                </div>
              )}
              </div>
            </label>
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
        </form>
      </div>
    </div>
  );
};

export default SignUp;
