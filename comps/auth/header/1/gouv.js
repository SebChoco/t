import Image from "next/image"
import png from '@/public/logledu.png'

export default function Gouv() {
  return (
    <header>
        <div>
            <div>
                <div>
                    <div>
                        <div>
                            <div>
                                <Image src={png} alt="logo Ministère de l’Éducation"/>
                                <p>
                                    
                    Ministère <br/>
                    De l’éducation <br/>
                    
                    Et de la jeunesse
                  <br/>
                                </p>
                            </div>
                        </div>
                        <div>
                            <p>
                            ÉduConnect  
                            </p>
                            <p>
                            Un compte unique pour les services numériques des écoles et des établissements
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}
