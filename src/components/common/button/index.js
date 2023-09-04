const Button = ({ icon, text, onClickHandler, className }) => {
    return (<button type="button"
        onClick={() => onClickHandler()}
        className={`${className}" text-white gap-x-2 font-medium rounded-lg text-sm px-3 py-1.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2"`}>
        {icon}
        {text}
    </button>);
}

export default Button;