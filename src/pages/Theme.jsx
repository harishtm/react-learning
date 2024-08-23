import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { setMode } from "../redux/slices/modeSlice";


const Theme = () => {
    const dispatch = useDispatch();
    const { darkMode } = useSelector(
        (state) => state.mode
    );

    return (
        <>
            <section className={`h-screen  
                                 flex  
                                 items-center  
                                 justify-center  
                                 text-2xl  
                                 cursor-pointer
                                 ${darkMode ?
                                    "text-richblack-100"
                                    :"text-richblack-700"}`
                                }
                    onClick={() => {dispatch(setMode(!darkMode))}}
            >
                {darkMode ? ( 
                    <MdOutlineLightMode size={"100px"}/> 
                ) : ( 
                    <MdOutlineDarkMode size={"100px"}/>)} 
            </section>
        </>
    )
}

export default Theme;