import Bloc from '../bloc/bloc'
import s from './.module.css'
import c from './a.module.css'
import Une from '../une/une'
import A from '../a/a'
import d from './d.module.css'

export default function Article() {
  return (
    <article className={s.art}>
        <div className={s.mod_title}>
            <div className={c._container}>
                <div className={c._row}>
                    <div className={c._col}>
                        <h1 className={s.h1}>Lycée Connecté </h1>
                    </div>
                </div>
            </div>
        </div>
        <div className={s.mod_p}>
            <div className={s.p_container}>
                <div className={s._p}>
                    <p className={s.p} style={{marginTop:0}}> 
                        Que vous soyez élèves en lycée public général et technologique, professionnel, agricole ou maritime, la Région vous propose un service afin de faciliter vos études. Il s'agit de l'espace numérique de travail (ENT) Lycée connecté. Outils pour étudier, ressources, et conseils pour faciliter votre travail au lycée.
                    </p>
                </div>
            </div>
        </div>
        <div className={s.mod_h2}>
            <div className={c._container}>
                <div className={c._row}>
                    <div className={c._col}>
                        <h2 className={s.h2} style={{marginTop:0, marginBottom:0}}>
                            Accédez à votre espace Lycée Connecté
                        </h2>
                    </div>
                    
                </div>
            </div>
        </div>
        <div className={s.mod_co}>
            <div className={c._container}>
                <div className={c._row}>
                    <div className={c._col}>
                        <Bloc />
                    </div>
                </div>
            </div>
        </div>
        <div className={s.mod_une}>
            <div className={c._container}>
                <div className={c._row}>
                    <div className={c._col}>
                        <Une/>
                    </div>
                </div>
            </div>
        </div>
        <div className={s.mod_list}>
            <div className={c._container}>
                <div className={c._row}>
                    <div className={c._col}>
                        <A obj={[{txt:'Toutes les actualités jeunesse', to: '/'}]}/>
                    </div>
                </div>
            </div>
        </div>
        <div className={s.mod_bu}>
            <div className={c._container}>
                <div className={c._row}>
                    <div className={c._col}>
                        <div className={d.all}>
                            <div className={d.cont}>
                                <span className={d.span}>Lundi 4 septembre : ouverture de Lycée connecté </span>
                                <div className={d.div}>
                                    <p>
                                        <strong>
                                        Lycée connecté
                                        </strong>
                                        ouvre, pour les parents comme pour les élèves, lundi 4 septembre 2023, jour de la rentrée des classes.
                                        <br/>
                                        D'ici là aucune information sur la composition des classes ne peut être communiquée. Soyez patients :)
                                    </p> 
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={s.mod_lst}>
            <div className={c._container}>
                <div className={c._row}>
                    <div className={c._col}>
                        <A obj={[{txt:'Des difficultés pour vous connecter à Lycée Connecté ? ', to:'/'},{txt: 'Tous les contenus de lycée connecté', to:'/'}]}/>
                    </div>
                </div>
            </div>
        </div>
        <div className={s._modH2}>
            <div className={c._container}>
                <div className={c._row}>
                    <div className={c._col}>
                        <h2 className={d.h2}>
                        Lycée connecté, qu’est-ce que c’est ?   
                        </h2>
                    </div>
                </div>
            </div>
        </div>
        <div className={s.mod_ly}>
            <div className={c._container}>
                <div className={c._row}>
                    <div className={c._col}>

                    </div>
                </div>
            </div>
        </div>
        <div></div>
        <div></div>
    </article>
  )
}


/*

<div className={c._container}>
                <div className={c._row}>
                    <div className={c._col}>

                    </div>
                </div>
            </div>



*/