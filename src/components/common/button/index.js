import React from "react";

const Button = React.forwardRef(({ onClickHandler, className, text, icon }, ref) => {
    return (<button type="button"
        onClick={() => onClickHandler()}
        className={`${className}" text-white gap-x-2 font-medium rounded-lg text-sm px-3 py-1.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55"`}
        ref={ref}>
        {icon}
        {text}
    </button>);
});

export default Button;