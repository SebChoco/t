import s from './.module.css'

export default function A({obj: obj}) {
  return (
    <div>
        <ul className={s.ul}>
            {obj.map((item)=><Li txt={item.txt} to={item.to}/>)}
        </ul>
    </div>
  )
}


function Li({txt : t, to: to}){
    return(
        <li className={s.li}>
            <a className={s.a} href={to}>
                {t}
            </a>
        </li>
    )
}