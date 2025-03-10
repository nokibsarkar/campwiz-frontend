import Image from 'next/image'
import LogoSvg from '@/public/logo.svg'
const Logo = () => (
    <Image src={LogoSvg} alt="Logo" width={100} height={100} style={{ margin: 'auto' }} />
)
export default Logo