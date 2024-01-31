import React from 'react'
import { Routes, Route } from "react-router-dom"
import Nav from "./components/Nav";
import HomePage from "./routes/HomePage";
import Favorites from "./routes/FavoritesPage";

export default function App () {
  return (
    <>
    <Nav />
    <Routes>
      <Route path="/" element ={<HomePage />} />
      <Route path="/favorites" element ={<Favorites />} />
    </Routes>
    </>
  )
}