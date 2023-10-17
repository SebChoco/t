import s from "./.module.css"

export default function Top() {
    
  return (
    <div className={s.first}>
      <div className={s.nd}>
        <div className={s.trd}>
          <p className={s.p}>
            Informations et alertes en Nouvelle-Aquitaine
            </p>
          <ul className={s.ul}>
            
            <li className={s.li}>
              <span className={s.spanf}>
                <span className={s.spannd}>

                </span>
              </span>
              <p className={s.txt}>
                <a href="" target="_blanc" className={s.href}>
                  <strong className={s.strong}> 
                    Cars scolaires : jusqu’au 20 octobre inclus, une tolérance est accordée pour la présentation de la carte, sauf 16-23-24
                  </strong>
                </a>
                
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
