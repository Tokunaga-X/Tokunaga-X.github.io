export default function Header() {
    return (
        <nav className="fixed w-full flex justify-between align-center py-6 pl-12 pr-10 bg-white shadow-md">
            <h3 className="font-bold text-xl">Stefan.dev</h3>
            <ul className="flex gap-8 font-bold">
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}
// align-items: center;
//     background-color: #fff;
//     box-shadow: 0 0 10px rgba(0,0,0,.09);
//     display: flex;
//     font-size: 1.7rem;
//     height: auto;
//     justify-content: space-between;
//     left: 0;
//     padding: 25px 40px 25px 50px;
//     position: fixed;
//     top: 0;
//     width: 100%;
//     z-index: 200;
