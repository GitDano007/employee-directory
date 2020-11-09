

import React from "react";
import "./style.css";

function DirHeader() {

  function orderFirst() {
    console.log('First Name')
  }

  function orderLast() {
    console.log('Last Name')
  }

  function orderDept() {
    console.log('Department')
  }

  function orderTitle() {
    console.log('Title')
  }

  return (
    <>
    <button className="headData" id="firstName" onClick={() => orderFirst()}>
        First Name
    </button>
    <button className="headData" id="lastName" onClick={() => orderLast()}>
        Last
    </button>
    <button className="headData" id="department" onClick={() => orderDept()}>
        Dept
    </button>
    <button className="headData" id="title" onClick={() => orderTitle()}>
        Job Title
    </button>
    </>
  );
}

export default DirHeader;


