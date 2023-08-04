import React from "react";
import { styled } from "styled-components";

function NavItem(props) {
  return (
    <>
      <a
        href={props.href}
        className="leading-10 text-3xl pb-1 mr-[64px] text-white hocus:border-gray-700"
      >
        {props.children}
      </a>
    </>
  );
}

function NavButton(props) {
  return (
    <>
      <a
        href={props.href}
        className="p-[20px] px-[44px] text-3xl text-white border bg-gradient-to-r from-[#6DDCFF] to-[#7F60F9] rounded-full font-medium text-gray-700 border-gray-400 hocus:border-gray-700"
      >
        {props.children}
      </a>
    </>
  );
}

function LogoLink(props) {
  return (
    <>
      <a
        href={props.href}
        className="items-center font-black font-jost text-4xl border-b-0 lg:mr-[80px] text-2xl! ml-0! text-white"
      >
        {props.children}
      </a>
    </>
  );
}

function Nabvar() {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto">
        <header className="header-light justify-between items-center">
          <div className="flex flex-col border bg-[#010C21] p-[12px] pl-[84px] rounded-full lg:flex-row items-center justify-between">
            <div className="-mr-12">
              <LogoLink children="MoveBudi" href="/#" />
              <NavItem children="Services" href="/#" />
              <NavItem children="Became Partner" href="/#" />
              <NavItem children="Contact Us" href="/#" />
            </div>
            <div className="flex flex-wrap justify-center lg:justify-end items-center -mr-1">
              <NavButton children="Sign In" href="/#" />
              <div className="md:hidden flex-100 h-0"></div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default Nabvar;
