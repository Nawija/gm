import * as React from "react"
import speedTest from "../images/SpeedTest.png"

const InfoGatsby = () => (
    <section className="flex items-center justify-center flex-wrap text-center py-12 lg:py-20 md:px-4 w-full px-2 lg:px-6 globalWrapper">
      <div className="w-full lg:w-1/2 lg:text-start ">
        <h3 className=" text-green-500 text-xs xl:text-base font-semibold tracking-widest px-2" >TECHNOLOGIA GATSBY!</h3>
        <h2 className="text-2xl lg:text-3xl font-semibold pb-6 px-2">Uzyskaj najszybszą strone w Internecie</h2>
        <p className="text-base xl:text-lg pb-12 xl:pb-12 px-2">Nasze strony internetowe tworzymy w technologii Gatsby, aby zapewnić naszym klientom najlepsze doświadczenie użytkownika. Dzięki szybkości i wydajności, nasze strony są łatwo dostępne dla każdego, bez względu na urządzenie, z jakiego korzystają. Integracja z różnymi źródłami danych pozwala nam łączyć dane z wielu źródeł i tworzyć dynamiczne strony internetowe. Optymalizacja SEO sprawia, że nasze strony są łatwo widoczne dla wyszukiwarek i znajdują się na szczycie wyników wyszukiwania. Wsparcie i dobre praktyki, na jakich opiera się Gatsby, zapewniają nam bezpieczeństwo i pewność, że nasze strony są zawsze najlepszej jakości.</p>
      </div>
      <img className="lg:w-1/2" src={speedTest} />

    </section>
)

export default InfoGatsby
