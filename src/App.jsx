import { Hero } from "./components/hero"
import { CardContainer } from "./components/card-container"

function App() {

  return (
    <main className="flex justify-center my-[80px] font-Poppins text-[15px] text-Grey-500">
      <section className="w-[296px] xl:w-[1100px]">
        <Hero />
        <CardContainer />
      </section>
    </main>
  )
}

export default App