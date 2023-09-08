'use client'

import { useIngredientsContext } from "@/contexts/IngredientsContext"

export default function Header() {

  const { setIngredients, setModalOpen }:any = useIngredientsContext()

  const handleSubmit = (event: any) => { 
    event?.preventDefault()

    const newIngredients = event.target.ingredients.value

    setIngredients(newIngredients)
  }

  return (
    <header className='bg-header bg-cover h-[calc(100vh-92.25px)]'>
      <section className='backdrop-brightness-[65%] p-4 px-32 h-full'>
        <section className='container mx-auto flex gap-6 flex-col justify-center h-full'>
          <h1 className='text-5xl text-white font-semibold'>A chef in every meal</h1>
          <p className='text-2xl text-white max-w-md'>Use AI to create recipes from your input! And then choose a category you like.</p>
          <form className='flex w-4/5 rounded' onSubmit={handleSubmit}>
              <input placeholder='What ingredients do you have?' className='outline-none px-2 w-full border-2 border-main' type="text" name="ingredients" id="ingredients" />
              <button type="submit" className='bg-main py-3 px-8 border border-main text-white font-semibold whitespace-nowrap'>Create recipes</button>
          </form>
        </section>
      </section>
    </header>
  )
}