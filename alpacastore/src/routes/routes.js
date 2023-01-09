import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CollectI2022 } from "../core/collectI2022/collectI2022.core";
import { Home } from "../core/home/home.core";
import { NotFound } from "../core/notFound/notFound.core";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* General Routes */}
        <Route path="*" exact element={<NotFound />} />
        <Route path="/" exact element={<Home />} />
        <Route path="/coleccionista-I2022" exact element={<CollectI2022 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;