import PropTypes from "prop-types";
import React from "react";
// import { AtSymbol } from "./AtSymbol";
// import "./style.css";

export const InputTextStyle = ({ text = "Enter email to get started" }) => {
  return (
    <div className={`p-[8px] my-[22px] border w-[512px] rounded-full `}>
      <div className="flex">
        <input
          placeholder={text}
          type="email"
          maxLength={40}
          className=" flex-none p-[16px] z-0  w-[350px] text-white text-[14px] leading-[22px] rounded-full border-none !outline-none bg-[transparent]"
        />
        <button className="hover:border text-white flex-auto text-[20px] z-10 leading-[20px] text-center w-[172px] p-[16px] bg-gradient-to-r from-[#6DDCFF] to-[#7F60F9] rounded-full">
          GO
        </button>
      </div>
    </div>
  );
};

InputTextStyle.propTypes = {
  hasInputLabel: PropTypes.bool,
  hasIcon: PropTypes.bool,
  text: PropTypes.string,
};
