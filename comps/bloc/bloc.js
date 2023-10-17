import Link from 'next/link'
import s from './.module.css'

export default function Bloc() {
  return (
    <div className={s.all}>
        <div className={s.bloc1}>
            <div className={s.content}>
                <h3 className={s.h3}>Elèves Parents</h3>
                <div>
                    <ul className={s.ul}>
                        <Li txt={'Educonnect'} to={'/'}/>
                        <Li txt={'Lycées Agricoles'} to={'/'}/>
                    </ul>
                </div>
            </div>
        </div>
        <div className={s.bloc1} style={{marginLeft: '19px'}}>
            <div className={s.content}>
                <h3 className={s.h3}>Personnels établissements</h3>
                <ul className={s.ul}>
                    <Li txt={'Académie Bordeaux'} to={'/'}/>
                    <Li txt={'Académie Limoges'} to={'/'}/>
                    <Li txt={'Académie Poitiers'} to={'/'}/>
                    <Li txt={'Lycées Agricoles'} to={'/'}/>
                </ul>
            </div>
        </div>
        <div className={s.bloc1} style={{marginLeft: '19px'}}>
            <div className={s.content}>
                <h3 className={s.h3}>Autres comptes invités</h3>
                <ul className={s.ul}>
                    <Li txt={'Compte local'} to={'/'}/>
                </ul>
            </div>
        </div>
    </div>
  )
}

         


                       

                                 

                            
                            


function Li({txt:t, to:to}){
    return(
        <li className={s.li}>
            <Link className={s.link} href={to}>  
                {t}         
            </Link>
            <div className={s.arrow}>
                <span className={s.icon}></span>
            </div>
        </li>
    )
}



                            