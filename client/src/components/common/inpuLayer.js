import React from "react";
import { inject, observer } from "mobx-react";

function InputLayer(props) {
  const { type, text, saveType, store } = props;
  const { loginModel } = store;

  const handleChange = event => {
    loginModel.setInputField(saveType, event.target.value);
  };
  return (
    <div className="relative mb-4">
      <label htmlFor={type} className="leading-7 text-sm text-gray-600">
        {text}
      </label>
      <input
        type={type}
        id={type}
        name={type}
        value={loginModel.saveType}
        onChange={handleChange}
        className="w-full
      bg-white rounded border border-gray-300 focus:border-indigo-500
      focus:ring-2 focus:ring-indigo-200 text-base outline-none
      text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
    </div>
  );
}

export default inject(({ store }) => ({
  store: store.mainModel,
}))(observer(InputLayer));
