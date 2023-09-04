const TextArea = ({ label, value, onChangeHandler, name, placeholder }) => {
    return (
        <>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 ">{label}</label>
            <textarea onChange={(e) => onChangeHandler(e)} name={name} value={value || ""} id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder={placeholder}></textarea>
        </>
    );
}

export default TextArea;