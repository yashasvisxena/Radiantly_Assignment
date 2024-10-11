import { ThemeProvider } from "@/components/theme/themeProvider"
import Navbar from "./components/header/Navbar"
import Hero from "./components/main/Hero"


function App() {
  

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <div className="flex flex-col justify-start items-stretch max-w-screen-xl min-h-screen mx-auto">
      <Navbar/>
      <Hero/>
    </div>
  </ThemeProvider>
  )
}

export default App
