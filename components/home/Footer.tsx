"use server";
import { uTranslation } from "@/i18n";
import Link from "next/link";

const Footer = async () => {
    const { t } = await uTranslation()
    return (
        <footer className="text-center bg-gray-100 w-full h-max p-2 mt-auto bottom-0 mb-1 dark:bg-gray-800 dark:text-gray-200">
            &copy; 2025 by <Link href='https://github.com/nokibsarkar/campwiz?tab=readme-ov-file#credits' target="_blank" className="text-blue-400">{t('footer.campwizNxtTeam')}</Link>
            &nbsp; | &nbsp; <Link href="https://commons.wikimedia.org/wiki/Commons:Campwiz_NXT" className="text-blue-400">{t('footer.manual')}</Link>
            &nbsp; | &nbsp; <Link href="/policy/terms" className="text-blue-400">{t('footer.terms')}</Link>
            &nbsp; | &nbsp; <Link href="/policy/privacy" className="text-blue-400">{t('footer.privacy')}</Link>
            &nbsp; | &nbsp; <Link href="https://github.com/nokibsarkar/campwiz/issues/new" target="_blank" className="text-blue-400">{t('footer.reportBug')}</Link>
        </footer>
    );
}
export default Footer;