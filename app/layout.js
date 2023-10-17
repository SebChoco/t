import style from "./globale.module.css"

export const metadata = {
  title: 'Connexion Lycée Connecté - Jeunes Nouvelle Aquitaine',
  description: "Connectez-vous depuis votre smartphone ou votre ordinateur à l'espace de travail de votre &quot;lycée connecté&quot; de la Région Nouvelle Aquitaine.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" style={{WebkitTextSizeAdjust :'100%'}}>
      <body className={style.body}>{children}</body>
    </html>
  )
}
