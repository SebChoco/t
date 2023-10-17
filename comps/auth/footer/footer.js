import s from './.module.css'
import Logo from './logo/logo'

export default function Footer() {
  return (
    <footer className={s.foo}>
        <div className={s.cont}>
            <div className={s.a2}>
                <div className={s.a3}>
                <Logo />
                </div>
                <div className={s.a4}>
                    <p className={s.p2}>Un compte unique pour les services numériques des écoles et des établissements</p>
                    <ul className={s.ul}>
                        <Li txt={'education.gouv.fr'} to={'https://www.education.gouv.fr/'}/>
                        <Li txt={'service-public.fr'} to={'https://www.service-public.fr/'}/>
                        <Li txt={'legifrance.gouv.fr'} to={'https://www.legifrance.gouv.fr/'}/>
                        <Li txt={'franceconnect.gouv.fr'} to={'https://franceconnect.gouv.fr/'}/>
                    </ul>
                </div>
            </div>
            <div className={s.bot}>
                <ul className={s.gray}>
                    <L txt={'Besoin d’aide ?'} to={'https://educonnect.education.gouv.fr/educt-aide/aide/'}/>
                    <L txt={'Accessibilité : non conforme'} to={'https://conformite.education.fr/?appli=EDUCONNECT'}/>
                    <L txt={'Mentions légales'} to={'https://educonnect.education.gouv.fr/educt-aide/mentions/'}/>
                    <L txt={'Mentions informatives'} to={'https://educonnect.education.gouv.fr/educt-aide/informations/'}/>
                    <li className={s.lii}>
                        <span className={s.c}>
                        v1.9
                        </span>
                    </li>
                </ul>
                <div style={{color:'#6a6a6a'}}>
                    <p className={s.copy}>
                    © Ministère de l’Éducation nationale et de la Jeunesse
                    </p>
                </div>
            </div>
        </div>
    </footer>
  )
}


function Li({txt, to}){
    return(<li className={s.li}>
        <a className={s.a} href={to} target='_blank'>
            {txt}
        </a>
    </li>)
}


function L({txt, to}){
    return(<li className={s.lii}>
        <a href={to} target='_blank' className={s.aa}> 
            {txt}
        </a>
    </li>)
}