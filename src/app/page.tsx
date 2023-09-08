'use client'

import EnterTheCommunity from "@/components/EnterTheCommunity";
import Header from "@/components/Header";
import LatestRecipes from "@/components/LatestRecipes";
import Modal from "@/components/Modal";
import { IngredientsContextProvider } from "@/contexts/IngredientsContext";

export default function Home() {

  return (
    <IngredientsContextProvider>
      <main>
        <Header/>
        <LatestRecipes/>
        <EnterTheCommunity/>
        <Modal/>
      </main>
    </IngredientsContextProvider>
  )
}