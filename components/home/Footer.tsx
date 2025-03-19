import Logo from "@/components/Logo";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="p-4 text-center bg-gray-100">
            <Logo />
            <h5 className="text-gray-600 text-lg">
                This tool was developed with collaboration between <Link href='/team' className="text-blue-500">Wiki Loves Folklore Technical Team</Link> and  Wikimedia Switzerland.
            </h5>
        </footer>
    );
}
export default Footer;