import About from "./About/page"
import Contact from "./Contact/page"
import Header from "./Header/page"
import Projects from "./Projects/page"

export default function Home() {
    return (
        <main>
            <Header />
            <About />
            <Projects />
            <Contact />
        </main>
    )
}
