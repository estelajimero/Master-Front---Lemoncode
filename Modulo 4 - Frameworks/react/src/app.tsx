import React from "react";
import {HashRouter as Router, Route, Routes } from "react-router-dom";

import { MembersTable } from "./components/members-table";
import { DetailPage } from "./detail";
import { LoginPage } from "./login";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/list" element={<MembersTable />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </Router>
  );
};
