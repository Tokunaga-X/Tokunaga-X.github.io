export default function Header() {
    return (
        <nav className="fixed w-full flex justify-between align-center py-[28px] pl-[40px] pr-[50px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.09)]">
            <h3 className="font-bold text-3xl">Tokunaga-X</h3>
            <ul className="flex gap-8">
                <li className="font-semibold text-[1.7rem] text-[#2d2e32]">
                    Home
                </li>
                <li className="font-semibold text-[1.7rem] text-[#2d2e32]">
                    About
                </li>
                <li className="font-semibold text-[1.7rem] text-[#2d2e32]">
                    Projects
                </li>
                <li className="font-semibold text-[1.7rem] text-[#2d2e32]">
                    Contact
                </li>
            </ul>
        </nav>
    )
}
