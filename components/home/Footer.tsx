import Logo from "@/components/Logo";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="p-2 text-center bg-gray-100 bottom-0 w-full ">
            <Logo />
            <h5 className="text-gray-600 text-md">
                This tool was developed with collaboration between <Link href='/team' className="text-blue-500">Wiki Loves Folklore Technical Team</Link> and  Wikimedia Switzerland.
            </h5>
        </footer>
    );
}
export default Footer;