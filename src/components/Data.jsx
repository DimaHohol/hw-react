import React from "react";

async function Ip() {
  let res = await fetch("src/components/Data.json");
  let ip = await res.json();
  console.log(ip);
}
export default Ip;
