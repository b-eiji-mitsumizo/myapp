"use client";

import Header from "@/app/components/Header";
import JotaiTodo from "@/app/jotai/components/JotaiTodo";
import React from "react";

const JotaiPage = () => {
  return (
    <>
      <Header name="Jotai" />
      <JotaiTodo />
    </>
  );
};

export default JotaiPage;
