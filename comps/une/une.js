import s from './.module.css'
import Image from 'next/image'
import une1 from '@/public/une1.jpg'
import une2 from '@/public/une2.jpg'
import une3 from '@/public/une3.jpg'


export default function Une() {
  return (
    <div className={s.all}>
        <h2 className={s.h2}>à la une</h2>
        <ul className={s.ul}>
            <li className={s.li}>
                <div className={s.div}>
                    <div className={s.title}>
                        <h3 className={s.h3}>Tout savoir sur les aides jeunesse en Nouvelle-Aquitaine</h3>
                    </div>
                    <Image src={une1} className={s.img}/>
                </div>
            </li>
            <li className={s.li}>
                <div className={s.divv}>
                    <div className={s.title}>
                        <h3 className={s.h3}>Référents jeunesse, votre contact avec la Région Nouvelle-Aquitaine</h3>
                    </div>
                    <Image src={une2} className={s.img}/>
                </div>
            </li>
            <li className={s.li}>
                <div className={s.div}>
                    <div className={s.title}>
                        <h3 className={s.h3}>Rentrée  scolaire : la Région s'engage pour votre réussite</h3>
                    </div>
                    <Image src={une3} className={s.img}/>
                </div>
            </li>
        </ul>
    </div>
  )
}


// <Image src={une1}/>
