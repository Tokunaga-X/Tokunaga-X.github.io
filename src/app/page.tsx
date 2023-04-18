import About from "./About/page"
import Contact from "./Contact/page"
import Footer from "./Footer/page"
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
            <Footer />
        </main>
    )
}
