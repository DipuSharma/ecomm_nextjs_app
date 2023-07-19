import React from "react";

const Wrapper = ({ children, clasName }) => {
    return (
        <div className={`w-full max-w-[1280px] 
        px-5 md:px-10 mx-auto ${clasName || ""}`}>
            {children}
        </div>
    )
}
export default Wrapper;