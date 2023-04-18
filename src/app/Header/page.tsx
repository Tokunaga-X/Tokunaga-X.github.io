export default function Header() {
    return (
        <nav className="fixed z-10 w-full flex justify-between align-center py-[28px] pl-[40px] pr-[50px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.09)]">
            <h3 className="font-bold text-3xl">Tokunaga-X</h3>
            <ul className="flex gap-8">
                <li className="nav-li">Home</li>
                <li className="nav-li">About</li>
                <li className="nav-li">Projects</li>
                <li className="nav-li">Contact</li>
            </ul>
        </nav>
    )
}
