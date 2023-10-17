import Image from "next/image"
import Comps from "./comps"


export default function nain() {
  return (
    <div>
        <h1>
        Lycée Connecté
        </h1>
        <p>
        Que vous soyez élèves en lycée public général et technologique, professionnel, agricole ou maritime, 
        la Région vous propose un service afin de faciliter vos études. Il s'agit de l'espace numérique de travail 
        (ENT) Lycée connecté. Outils pour étudier, ressources, et conseils pour faciliter votre travail au lycée.
        </p>
        <div>
            <Image />
            <h2>
                Accédez À Votre Espace Lycée Connecté
            </h2>
        </div>
        <div>
            <div>
                <h3>
                Elèves <br/> Parents
                </h3>
                <Comps txt={"educonnect"}/>
                <Comps txt={"lycée agricoles"}/>
            </div>
            <div>
                <h3>
                Personnels <br/> établissements
                </h3>
                <Comps txt={"académie bordeaux"}/>
                <Comps txt={"académie limoges"}/>
                <Comps txt={"académie potiers"}/>
                <Comps txt={"lycées agricoles"}/>
            </div>
            <div>
                <h3>
                    Autres <br/>
                    comptes <br/>
                    invités
                </h3>
                <Comps txt={'compte local'}/>
            </div>
        </div>
    </div>
  )
}
