'use client'
import s from './.module.css'

export default function Nav() {
  return (
    <div className={s.nav} >
        <nav className={s.navv} style={{height:"2106px"}}>
            <ul className={s.ul} style={{marginTop:'0'}}>
                <li className={s.li}>
                    <button className={s.btn_menu}>
                        <span className={s.span}>
                            MENU
                        </span>
                    </button>
                </li>
                <Li/>
                <li className={s.li} >
                    <button className={s.btn_vs}>
                        <span className={s.span}>
                            Vous êtes...
                        </span>
                    </button>
                </li>
                <li className={s.li}>
                    <button className={s.btn_c}>
                        <span className={s.span}>
                            Contact
                        </span>
                    </button>
                </li>
                <li className={s.li}>
                    <button className={s.btn_r}>
                        <span className={s.span}>
                            Recherche
                        </span>
                    </button>
                </li>
                <li className={s.li}>
                    <button className={s.btn_s}>
                        <span className={s.span}>
                            Suivez-nous
                        </span>
                    </button>
                </li>
                <li className={s.li_box}>
                    <button className={s.btn_b}>
                        <span className={s.span_box}>
                            
                        Besoin d'aide ?
                
                        </span>
                    </button>
                </li> 
            </ul>
        </nav>
    </div>
    
  )
}


function Li(){
    return(
        <li className={s.li} style={{backgroundColor : '#1de2d0'}}>
            <button className={s.btn_ly}>
                <span className={s.span}>
                    Lycée connecté
                </span>
            </button>
        </li>
    )
}