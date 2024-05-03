"use client";

import Header from "@/app/components/Header";
import RecoilTodo from "@/app/recoil/components/RecoilTodo";
import React from "react";

const RecoilPage = () => {
  return (
    <>
      <Header name="Recoil" />
      <RecoilTodo />
    </>
  );
};

export default RecoilPage;
