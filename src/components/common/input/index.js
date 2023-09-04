const Input = ({ text, onChangeHandler, name, value }) => {
    return (<div className="mb-6">
        <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900">{text}</label>
        <input onChange={(e) => onChangeHandler(e)} name={name} value={value || ""} type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" />
    </div>);
}

export default Input;