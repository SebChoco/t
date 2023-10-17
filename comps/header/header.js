import s from './.module.css'
import svg from '@/public/logo-naq.svg'
import Image from 'next/image'

export default function Header() {
  return (
    <header className={s.header} style={{visibility:'hidden'}}>
        <a className={s.a}>
            <figure className={s.f}>
                <Image src={svg} className={s.img}/>
            </figure>
        </a>
    </header>
  )
}
