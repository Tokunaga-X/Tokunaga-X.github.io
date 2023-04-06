import About from "./About/page"
import Contact from "./Contact/page"
import Header from "./Header/page"
import Home from "./Home/page"
import Projects from "./Projects/page"

export default function App() {
    return (
        <main>
            <Header />
            <Home />
            <About />
            <Projects />
            <Contact />
        </main>
    )
}
