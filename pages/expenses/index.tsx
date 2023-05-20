import React from "react";
import Calendar from "../../components/Calendar";
import ExpencesStore from "../../components/ExpencesStore";
import MainLayout from "../../layouts/MainLayout";

const index = () => {
  return (
    <MainLayout>
      <Calendar />
      <ExpencesStore />
    </MainLayout>
  )
};

export default index;
