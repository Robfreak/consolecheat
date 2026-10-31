import type { Lang } from "@/lib/messages";

export type TosDoc = {
  title: string;
  kicker: string;
  back: string;
  sections: { heading: string; paragraphs: string[] }[];
};

function doc(
  title: string,
  kicker: string,
  back: string,
  sections: [string, string[]][],
): TosDoc {
  return {
    title,
    kicker,
    back,
    sections: sections.map(([heading, paragraphs]) => ({ heading, paragraphs })),
  };
}

export const tosDocs: Record<Lang, TosDoc> = {
  en: doc("Terms", "For consolecheat.com", "Back to the hub", [
    [
      "Scope",
      [
        "These terms apply to consolecheat.com and to the tools linked from it. By using the site, you accept them.",
      ],
    ],
    [
      "Not operated by Sony",
      [
        "consolecheat is not operated by Sony and is not affiliated with Sony. PlayStation, PSN, and the related marks belong to their owners.",
        "An account, a purchase, and a payment are handled by PlayStation, not by this site.",
      ],
    ],
    [
      "What the site does",
      [
        "The site provides free tools in the browser, including avatars, codes, and title IDs. Some sections are not open yet.",
        "If an avatar or a game costs money, you pay that in the PlayStation Store. This site does not take payment.",
      ],
    ],
    [
      "What is stored",
      [
        "As a rule, no personal data is stored.",
        "The only planned exception is a code newsletter. It is not available yet. When it is, you enter an email address and a continent. A message is sent only when a new avatar code is available for that region. For this, the address and the continent are stored. No password, no PSN login, and no payment data are collected for it.",
        "Until the newsletter exists, that information is not stored either.",
        "Webmail checks the mailbox directly at Purelymail. The password is used only for that check and is then discarded. It is not stored here. Language and the light or dark setting stay in your browser.",
      ],
    ],
    [
      "Codes and tools",
      [
        "A code can be redeemed by more than one person and may already be invalid. There is no promise that a code still works or that Sony will accept it. You use the tools at your own risk.",
      ],
    ],
    [
      "Changes",
      [
        "This text can be updated. The version published on this page is the one that applies.",
      ],
    ],
  ]),
  de: doc("Nutzungsbedingungen", "Für consolecheat.com", "Zurück zum Hub", [
    [
      "Geltung",
      [
        "Diese Bedingungen gelten für consolecheat.com und für die Werkzeuge, die von hier aus verlinkt sind. Wer die Seite benutzt, akzeptiert sie.",
      ],
    ],
    [
      "Nicht von Sony betrieben",
      [
        "consolecheat wird nicht von Sony betrieben und steht in keiner Verbindung zu Sony. PlayStation, PSN und die zugehörigen Marken gehören ihren Inhabern.",
        "Ein Konto, ein Kauf und eine Zahlung laufen bei PlayStation, nicht auf dieser Seite.",
      ],
    ],
    [
      "Was die Seite macht",
      [
        "Die Seite stellt kostenlose Werkzeuge im Browser bereit, unter anderem für Avatare, Codes und Title-IDs. Manche Bereiche sind noch nicht offen.",
        "Kostet ein Avatar oder ein Spiel Geld, wird das im PlayStation Store bezahlt. Diese Seite nimmt kein Geld an.",
      ],
    ],
    [
      "Was gespeichert wird",
      [
        "Grundsätzlich werden keine personenbezogenen Daten gespeichert.",
        "Die einzige vorgesehene Ausnahme ist ein Code-Newsletter. Den gibt es noch nicht. Sobald er angeboten wird, gibst du eine E-Mail-Adresse und einen Kontinent an. Eine Nachricht wird nur verschickt, wenn für diese Region ein neuer Avatar-Code vorliegt. Dafür werden die Adresse und der Kontinent gespeichert. Passwort, PSN-Zugangsdaten und Zahlungsdaten werden dafür nicht erhoben.",
        "Bis der Newsletter existiert, wird auch das nicht gespeichert.",
        "Die Webmail prüft das Postfach direkt bei Purelymail. Das Passwort wird nur für diese Abfrage verwendet und danach verworfen. Es wird hier nicht gespeichert. Sprache und die Einstellung Hell oder Dunkel bleiben im Browser.",
      ],
    ],
    [
      "Codes und Werkzeuge",
      [
        "Ein Code kann von mehreren Personen eingelöst werden und kann bereits ungültig sein. Es gibt keine Zusage, dass ein Code noch funktioniert oder dass Sony ihn annimmt. Die Benutzung erfolgt auf eigene Verantwortung.",
      ],
    ],
    [
      "Änderungen",
      [
        "Dieser Text kann angepasst werden. Es gilt die Fassung, die auf dieser Seite steht.",
      ],
    ],
  ]),
  fr: doc("Conditions", "Pour consolecheat.com", "Retour au hub", [
    [
      "Champ d’application",
      [
        "Ces conditions s’appliquent à consolecheat.com et aux outils liés depuis ce site. En utilisant le site, tu les acceptes.",
      ],
    ],
    [
      "Pas exploité par Sony",
      [
        "consolecheat n’est pas exploité par Sony et n’est pas affilié à Sony. PlayStation, le PSN et les marques associées appartiennent à leurs titulaires.",
        "Un compte, un achat et un paiement sont traités par PlayStation, pas par ce site.",
      ],
    ],
    [
      "Ce que fait le site",
      [
        "Le site propose des outils gratuits dans le navigateur, notamment pour les avatars, les codes et les Title ID. Certaines parties ne sont pas encore ouvertes.",
        "Si un avatar ou un jeu est payant, le paiement se fait sur le PlayStation Store. Ce site n’encaisse rien.",
      ],
    ],
    [
      "Ce qui est enregistré",
      [
        "En principe, aucune donnée personnelle n’est enregistrée.",
        "La seule exception prévue est une newsletter de codes. Elle n’existe pas encore. Lorsqu’elle sera proposée, tu indiques une adresse e-mail et un continent. Un message n’est envoyé que lorsqu’un nouveau code d’avatar est disponible pour cette région. L’adresse et le continent sont alors enregistrés. Aucun mot de passe, aucun identifiant PSN et aucune donnée de paiement ne sont collectés pour cela.",
        "Tant que la newsletter n’existe pas, ces informations ne sont pas enregistrées non plus.",
        "Le webmail vérifie la boîte directement chez Purelymail. Le mot de passe ne sert qu’à cette vérification, puis il est effacé. Il n’est pas enregistré ici. La langue et le réglage clair ou sombre restent dans le navigateur.",
      ],
    ],
    [
      "Codes et outils",
      [
        "Un code peut être utilisé par plusieurs personnes et peut déjà être invalide. Rien ne garantit qu’un code fonctionne encore ou que Sony l’acceptera. L’usage se fait à tes risques.",
      ],
    ],
    [
      "Modifications",
      [
        "Ce texte peut être modifié. La version publiée sur cette page est celle qui s’applique.",
      ],
    ],
  ]),
  es: doc("Condiciones", "Para consolecheat.com", "Volver al hub", [
    [
      "Ámbito",
      [
        "Estas condiciones se aplican a consolecheat.com y a las herramientas enlazadas desde aquí. Al usar el sitio, las aceptas.",
      ],
    ],
    [
      "No lo opera Sony",
      [
        "consolecheat no está operado por Sony ni está vinculado a Sony. PlayStation, PSN y las marcas relacionadas pertenecen a sus titulares.",
        "Una cuenta, una compra y un pago los gestiona PlayStation, no este sitio.",
      ],
    ],
    [
      "Qué hace el sitio",
      [
        "El sitio ofrece herramientas gratuitas en el navegador, entre ellas avatares, códigos y Title ID. Algunas secciones aún no están abiertas.",
        "Si un avatar o un juego cuesta dinero, se paga en PlayStation Store. Este sitio no cobra.",
      ],
    ],
    [
      "Qué se guarda",
      [
        "Por norma no se guardan datos personales.",
        "La única excepción prevista es un boletín de códigos. Todavía no existe. Cuando se ofrezca, indicas un correo y un continente. Solo se envía un mensaje cuando haya un código de avatar nuevo para esa región. Para eso se guardan la dirección y el continente. No se recogen contraseña, acceso a PSN ni datos de pago.",
        "Hasta que el boletín exista, eso tampoco se guarda.",
        "El webmail comprueba el buzón directamente en Purelymail. La contraseña solo se usa para esa consulta y después se descarta. No se guarda aquí. El idioma y el ajuste claro u oscuro quedan en el navegador.",
      ],
    ],
    [
      "Códigos y herramientas",
      [
        "Un código lo puede canjear más de una persona y puede estar ya inválido. No hay garantía de que un código siga funcionando ni de que Sony lo acepte. El uso es bajo tu responsabilidad.",
      ],
    ],
    [
      "Cambios",
      [
        "Este texto puede actualizarse. Vale la versión publicada en esta página.",
      ],
    ],
  ]),
  pt: doc("Termos", "Para consolecheat.com", "Voltar ao hub", [
    [
      "Âmbito",
      [
        "Estes termos aplicam-se a consolecheat.com e às ferramentas ligadas a partir daqui. Ao usar o site, aceitas estes termos.",
      ],
    ],
    [
      "Não é operado pela Sony",
      [
        "O consolecheat não é operado pela Sony e não tem ligação à Sony. PlayStation, PSN e as marcas associadas pertencem aos seus titulares.",
        "Uma conta, uma compra e um pagamento são tratados pela PlayStation, não por este site.",
      ],
    ],
    [
      "O que o site faz",
      [
        "O site disponibiliza ferramentas gratuitas no navegador, incluindo avatares, códigos e Title ID. Algumas secções ainda não estão abertas.",
        "Se um avatar ou um jogo custar dinheiro, o pagamento é feito na PlayStation Store. Este site não recebe dinheiro.",
      ],
    ],
    [
      "O que é guardado",
      [
        "Em regra, não são guardados dados pessoais.",
        "A única exceção prevista é uma newsletter de códigos. Ainda não existe. Quando for oferecida, indicas um e-mail e um continente. Só é enviada uma mensagem quando houver um código de avatar novo para essa região. Para isso são guardados o endereço e o continente. Não são recolhidos palavra-passe, acesso à PSN nem dados de pagamento.",
        "Até a newsletter existir, isso também não é guardado.",
        "O webmail verifica a caixa diretamente na Purelymail. A palavra-passe só é usada nessa consulta e depois é descartada. Não fica guardada aqui. A língua e a definição clara ou escura ficam no navegador.",
      ],
    ],
    [
      "Códigos e ferramentas",
      [
        "Um código pode ser usado por várias pessoas e pode já estar inválido. Não há garantia de que um código ainda funcione ou de que a Sony o aceite. O uso é por tua conta e risco.",
      ],
    ],
    [
      "Alterações",
      [
        "Este texto pode ser atualizado. Vale a versão publicada nesta página.",
      ],
    ],
  ]),
  it: doc("Condizioni", "Per consolecheat.com", "Torna al hub", [
    [
      "Ambito",
      [
        "Queste condizioni valgono per consolecheat.com e per gli strumenti collegati da qui. Usando il sito, le accetti.",
      ],
    ],
    [
      "Non gestito da Sony",
      [
        "consolecheat non è gestito da Sony e non è collegato a Sony. PlayStation, PSN e i marchi relativi appartengono ai rispettivi titolari.",
        "Un account, un acquisto e un pagamento li gestisce PlayStation, non questo sito.",
      ],
    ],
    [
      "Cosa fa il sito",
      [
        "Il sito offre strumenti gratuiti nel browser, tra cui avatar, codici e Title ID. Alcune sezioni non sono ancora aperte.",
        "Se un avatar o un gioco costa, il pagamento avviene sul PlayStation Store. Questo sito non incassa denaro.",
      ],
    ],
    [
      "Cosa viene salvato",
      [
        "Di norma non vengono salvati dati personali.",
        "L’unica eccezione prevista è una newsletter dei codici. Non esiste ancora. Quando sarà disponibile, indichi un indirizzo email e un continente. Un messaggio viene inviato solo quando per quella regione c’è un nuovo codice avatar. Per questo vengono salvati l’indirizzo e il continente. Non vengono raccolti password, accesso PSN né dati di pagamento.",
        "Finché la newsletter non esiste, nemmeno questi dati vengono salvati.",
        "La webmail controlla la casella direttamente su Purelymail. La password serve solo per quel controllo e poi viene eliminata. Non viene salvata qui. Lingua e impostazione chiara o scura restano nel browser.",
      ],
    ],
    [
      "Codici e strumenti",
      [
        "Un codice può essere usato da più persone e può essere già non valido. Non c’è garanzia che un codice funzioni ancora o che Sony lo accetti. L’uso è a tuo rischio.",
      ],
    ],
    [
      "Modifiche",
      [
        "Questo testo può essere aggiornato. Vale la versione pubblicata su questa pagina.",
      ],
    ],
  ]),
  nl: doc("Voorwaarden", "Voor consolecheat.com", "Terug naar de hub", [
    [
      "Geldigheid",
      [
        "Deze voorwaarden gelden voor consolecheat.com en voor de tools die vanaf hier worden gelinkt. Wie de site gebruikt, aanvaardt ze.",
      ],
    ],
    [
      "Niet door Sony beheerd",
      [
        "consolecheat wordt niet door Sony beheerd en is niet verbonden met Sony. PlayStation, PSN en de bijbehorende merken behoren toe aan hun eigenaren.",
        "Een account, een aankoop en een betaling lopen via PlayStation, niet via deze site.",
      ],
    ],
    [
      "Wat de site doet",
      [
        "De site biedt gratis tools in de browser, onder meer voor avatars, codes en title-ID’s. Sommige onderdelen zijn nog niet open.",
        "Kost een avatar of een spel geld, dan betaal je dat in de PlayStation Store. Deze site ontvangt geen geld.",
      ],
    ],
    [
      "Wat wordt bewaard",
      [
        "In beginsel worden geen persoonsgegevens bewaard.",
        "De enige voorziene uitzondering is een code-nieuwsbrief. Die bestaat nog niet. Zodra die wordt aangeboden, geef je een e-mailadres en een continent op. Een bericht wordt alleen verstuurd als er voor die regio een nieuwe avatarcode is. Daarvoor worden het adres en het continent bewaard. Wachtwoord, PSN-inloggegevens en betaalgegevens worden daarvoor niet gevraagd.",
        "Tot de nieuwsbrief bestaat, wordt ook dat niet bewaard.",
        "De webmail controleert de bus rechtstreeks bij Purelymail. Het wachtwoord wordt alleen voor die controle gebruikt en daarna verwijderd. Het wordt hier niet opgeslagen. Taal en de lichte of donkere weergave blijven in de browser.",
      ],
    ],
    [
      "Codes en tools",
      [
        "Een code kan door meerdere personen worden ingewisseld en kan al ongeldig zijn. Er is geen garantie dat een code nog werkt of dat Sony hem aanneemt. Gebruik is op eigen risico.",
      ],
    ],
    [
      "Wijzigingen",
      [
        "Deze tekst kan worden aangepast. De versie op deze pagina geldt.",
      ],
    ],
  ]),
  pl: doc("Warunki", "Dla consolecheat.com", "Wróć do huba", [
    [
      "Zakres",
      [
        "Te warunki dotyczą consolecheat.com i narzędzi, do których prowadzi ta strona. Korzystając ze strony, akceptujesz te warunki.",
      ],
    ],
    [
      "Nie prowadzi tego Sony",
      [
        "consolecheat nie jest prowadzone przez Sony i nie jest z Sony powiązane. PlayStation, PSN i związane znaki należą do ich właścicieli.",
        "Konto, zakup i płatność obsługuje PlayStation, nie ta strona.",
      ],
    ],
    [
      "Co robi strona",
      [
        "Strona udostępnia darmowe narzędzia w przeglądarce, w tym awatary, kody i Title ID. Niektóre działy nie są jeszcze otwarte.",
        "Jeśli awatar albo gra kosztuje, płatność odbywa się w PlayStation Store. Ta strona nie przyjmuje pieniędzy.",
      ],
    ],
    [
      "Co jest zapisywane",
      [
        "Co do zasady nie są zapisywane dane osobowe.",
        "Jedyny planowany wyjątek to newsletter z kodami. Jeszcze go nie ma. Gdy będzie dostępny, podajesz adres e-mail i kontynent. Wiadomość jest wysyłana tylko wtedy, gdy dla tego regionu jest nowy kod awatara. Zapisywane są wtedy adres i kontynent. Hasło, dane logowania PSN i dane płatności nie są do tego zbierane.",
        "Dopóki newslettera nie ma, te dane też nie są zapisywane.",
        "Webmail sprawdza skrzynkę bezpośrednio w Purelymail. Hasło służy tylko do tego sprawdzenia i jest potem usuwane. Nie jest tu zapisywane. Język oraz jasny lub ciemny wygląd zostają w przeglądarce.",
      ],
    ],
    [
      "Kody i narzędzia",
      [
        "Kod może zrealizować więcej niż jedna osoba i może być już nieważny. Nie ma gwarancji, że kod nadal działa albo że Sony go przyjmie. Korzystasz na własną odpowiedzialność.",
      ],
    ],
    [
      "Zmiany",
      [
        "Ten tekst może zostać zmieniony. Obowiązuje wersja opublikowana na tej stronie.",
      ],
    ],
  ]),
  sv: doc("Villkor", "För consolecheat.com", "Tillbaka till hubben", [
    [
      "Omfattning",
      [
        "Dessa villkor gäller consolecheat.com och verktygen som länkas härifrån. Genom att använda sidan godkänner du dem.",
      ],
    ],
    [
      "Drivs inte av Sony",
      [
        "consolecheat drivs inte av Sony och är inte knutet till Sony. PlayStation, PSN och tillhörande varumärken tillhör sina ägare.",
        "Ett konto, ett köp och en betalning hanteras av PlayStation, inte av den här sidan.",
      ],
    ],
    [
      "Vad sidan gör",
      [
        "Sidan tillhandahåller gratis verktyg i webbläsaren, bland annat för avatarer, koder och title-ID. Vissa delar är inte öppna än.",
        "Om en avatar eller ett spel kostar pengar betalas det i PlayStation Store. Den här sidan tar inte emot betalning.",
      ],
    ],
    [
      "Vad som sparas",
      [
        "Som regel sparas inga personuppgifter.",
        "Det enda planerade undantaget är ett kodnyhetsbrev. Det finns inte än. När det erbjuds anger du en e-postadress och en kontinent. Ett meddelande skickas bara när en ny avatarkod finns för den regionen. Då sparas adressen och kontinenten. Lösenord, PSN-inloggning och betaluppgifter samlas inte in för det.",
        "Tills nyhetsbrevet finns sparas inte heller de uppgifterna.",
        "Webbmejlen kontrollerar lådan direkt hos Purelymail. Lösenordet används bara för den kontrollen och raderas sedan. Det sparas inte här. Språk och ljust eller mörkt läge stannar i webbläsaren.",
      ],
    ],
    [
      "Koder och verktyg",
      [
        "En kod kan lösas in av flera personer och kan redan vara ogiltig. Det finns inget löfte om att en kod fortfarande fungerar eller att Sony godkänner den. Du använder verktygen på egen risk.",
      ],
    ],
    [
      "Ändringar",
      [
        "Den här texten kan uppdateras. Den version som står på den här sidan gäller.",
      ],
    ],
  ]),
  da: doc("Vilkår", "For consolecheat.com", "Tilbage til hubben", [
    [
      "Gyldighed",
      [
        "Disse vilkår gælder for consolecheat.com og for de værktøjer, der linkes hertil. Ved at bruge siden accepterer du dem.",
      ],
    ],
    [
      "Ikke drevet af Sony",
      [
        "consolecheat drives ikke af Sony og er ikke tilknyttet Sony. PlayStation, PSN og de tilhørende varemærker tilhører deres ejere.",
        "En konto, et køb og en betaling håndteres af PlayStation, ikke af dette site.",
      ],
    ],
    [
      "Hvad siden gør",
      [
        "Siden stiller gratis værktøjer til rådighed i browseren, blandt andet til avatarer, koder og title-ID. Nogle dele er endnu ikke åbne.",
        "Hvis en avatar eller et spil koster penge, betales det i PlayStation Store. Dette site modtager ingen betaling.",
      ],
    ],
    [
      "Hvad der gemmes",
      [
        "Som udgangspunkt gemmes ingen personoplysninger.",
        "Den eneste planlagte undtagelse er et kodenyhedsbrev. Det findes ikke endnu. Når det tilbydes, angiver du en e-mailadresse og et kontinent. En besked sendes kun, når der er en ny avatarkode til den region. Til det gemmes adressen og kontinentet. Adgangskode, PSN-login og betalingsdata indsamles ikke til det.",
        "Indtil nyhedsbrevet findes, gemmes de oplysninger heller ikke.",
        "Webmailen tjekker postkassen direkte hos Purelymail. Adgangskoden bruges kun til det tjek og slettes derefter. Den gemmes ikke her. Sprog og lys eller mørk visning bliver i browseren.",
      ],
    ],
    [
      "Koder og værktøjer",
      [
        "En kode kan indløses af flere personer og kan allerede være ugyldig. Der loves ikke, at en kode stadig virker, eller at Sony accepterer den. Brugen sker på eget ansvar.",
      ],
    ],
    [
      "Ændringer",
      [
        "Denne tekst kan blive opdateret. Den version, der står på denne side, gælder.",
      ],
    ],
  ]),
  no: doc("Vilkår", "For consolecheat.com", "Tilbake til huben", [
    [
      "Virkeområde",
      [
        "Disse vilkårene gjelder for consolecheat.com og for verktøyene som lenkes herfra. Ved å bruke nettstedet godtar du dem.",
      ],
    ],
    [
      "Ikke drevet av Sony",
      [
        "consolecheat drives ikke av Sony og er ikke tilknyttet Sony. PlayStation, PSN og de tilhørende merkene tilhører sine eiere.",
        "En konto, et kjøp og en betaling håndteres av PlayStation, ikke av dette nettstedet.",
      ],
    ],
    [
      "Hva nettstedet gjør",
      [
        "Nettstedet tilbyr gratis verktøy i nettleseren, blant annet for avatarer, koder og title-ID. Noen deler er ikke åpne ennå.",
        "Hvis en avatar eller et spill koster penger, betales det i PlayStation Store. Dette nettstedet tar ikke imot betaling.",
      ],
    ],
    [
      "Hva som lagres",
      [
        "Som hovedregel lagres ingen personopplysninger.",
        "Det eneste planlagte unntaket er et kodenyhetsbrev. Det finnes ikke ennå. Når det tilbys, oppgir du en e-postadresse og et kontinent. En melding sendes bare når en ny avatarkode finnes for den regionen. Da lagres adressen og kontinentet. Passord, PSN-innlogging og betalingsdata samles ikke inn til dette.",
        "Inntil nyhetsbrevet finnes, lagres heller ikke disse opplysningene.",
        "Nettposten sjekker postkassen direkte hos Purelymail. Passordet brukes bare til den sjekken og slettes deretter. Det lagres ikke her. Språk og lys eller mørk visning blir i nettleseren.",
      ],
    ],
    [
      "Koder og verktøy",
      [
        "En kode kan løses inn av flere personer og kan allerede være ugyldig. Det loves ikke at en kode fortsatt virker, eller at Sony godtar den. Du bruker verktøyene på eget ansvar.",
      ],
    ],
    [
      "Endringer",
      [
        "Denne teksten kan oppdateres. Versjonen som står på denne siden, gjelder.",
      ],
    ],
  ]),
  fi: doc("Ehdot", "Sivustolle consolecheat.com", "Takaisin hubiin", [
    [
      "Soveltaminen",
      [
        "Nämä ehdot koskevat sivustoa consolecheat.com ja siitä linkitettyjä työkaluja. Käyttämällä sivustoa hyväksyt ehdot.",
      ],
    ],
    [
      "Sony ei ylläpidä tätä",
      [
        "Sony ei ylläpidä consolecheatia, eikä sivusto ole yhteydessä Sonyyn. PlayStation, PSN ja niihin liittyvät merkit kuuluvat haltijoilleen.",
        "Tili, osto ja maksu hoidetaan PlayStationilla, ei tällä sivustolla.",
      ],
    ],
    [
      "Mitä sivusto tekee",
      [
        "Sivusto tarjoaa ilmaisia työkaluja selaimessa, muun muassa avatareille, koodeille ja title-ID:ille. Osa osioista ei ole vielä auki.",
        "Jos avatar tai peli maksaa, maksu tapahtuu PlayStation Storessa. Tämä sivusto ei vastaanota maksua.",
      ],
    ],
    [
      "Mitä tallennetaan",
      [
        "Pääsääntöisesti henkilötietoja ei tallenneta.",
        "Ainoa suunniteltu poikkeus on koodiuutiskirje. Sitä ei vielä ole. Kun se tulee, annat sähköpostiosoitteen ja maanosan. Viesti lähetetään vain, kun kyseiselle alueelle on uusi avatar-koodi. Sitä varten tallennetaan osoite ja maanosa. Salasanaa, PSN-kirjautumista tai maksutietoja ei kerätä tätä varten.",
        "Kunnes uutiskirje on olemassa, näitäkään tietoja ei tallenneta.",
        "Webmail tarkistaa postilaatikon suoraan Purelymailissa. Salasanaa käytetään vain siihen tarkistukseen, ja se hylätään sen jälkeen. Sitä ei tallenneta tänne. Kieli sekä vaalea tai tumma asetus jäävät selaimeen.",
      ],
    ],
    [
      "Koodit ja työkalut",
      [
        "Koodin voi lunastaa useampi henkilö, ja se voi olla jo virheellinen. Ei luvata, että koodi toimii yhä tai että Sony hyväksyy sen. Käyttö on omalla vastuulla.",
      ],
    ],
    [
      "Muutokset",
      [
        "Tätä tekstiä voidaan muuttaa. Tällä sivulla julkaistu versio on voimassa.",
      ],
    ],
  ]),
  cs: doc("Podmínky", "Pro consolecheat.com", "Zpět na hub", [
    [
      "Platnost",
      [
        "Tyto podmínky platí pro consolecheat.com a pro nástroje, na které se odsud odkazuje. Používáním stránky je přijímáš.",
      ],
    ],
    [
      "Neprovozuje Sony",
      [
        "consolecheat neprovozuje Sony a není se Sony spojený. PlayStation, PSN a související známky patří jejich vlastníkům.",
        "Účet, nákup a platbu vyřizuje PlayStation, ne tato stránka.",
      ],
    ],
    [
      "Co stránka dělá",
      [
        "Stránka poskytuje bezplatné nástroje v prohlížeči, mimo jiné pro avatary, kódy a Title ID. Některé části ještě nejsou otevřené.",
        "Pokud avatar nebo hra stojí peníze, platí se v PlayStation Store. Tato stránka peníze nepřijímá.",
      ],
    ],
    [
      "Co se ukládá",
      [
        "Osobní údaje se zásadně neukládají.",
        "Jedinou plánovanou výjimkou je newsletter s kódy. Zatím neexistuje. Až bude nabízen, zadáš e-mail a kontinent. Zpráva se pošle jen tehdy, když je pro tento region nový kód avataru. Uloží se adresa a kontinent. Heslo, přihlášení k PSN ani platební údaje se kvůli tomu neshromažďují.",
        "Dokud newsletter není, neukládají se ani tyto údaje.",
        "Webmail kontroluje schránku přímo u Purelymail. Heslo slouží jen k této kontrole a potom se zahodí. Tady se neukládá. Jazyk a světlé nebo tmavé zobrazení zůstanou v prohlížeči.",
      ],
    ],
    [
      "Kódy a nástroje",
      [
        "Kód může uplatnit více osob a může už být neplatný. Není záruka, že kód ještě funguje nebo že ho Sony přijme. Použití je na vlastní odpovědnost.",
      ],
    ],
    [
      "Změny",
      [
        "Tento text lze upravit. Platí znění zveřejněné na této stránce.",
      ],
    ],
  ]),
  sk: doc("Podmienky", "Pre consolecheat.com", "Späť na hub", [
    [
      "Platnosť",
      [
        "Tieto podmienky platia pre consolecheat.com a pre nástroje, na ktoré sa odtiaľto odkazuje. Používaním stránky ich prijímaš.",
      ],
    ],
    [
      "Neprevádzkuje Sony",
      [
        "consolecheat neprevádzkuje Sony a nie je so Sony spojený. PlayStation, PSN a súvisiace známky patria ich vlastníkom.",
        "Účet, nákup a platbu vybavuje PlayStation, nie táto stránka.",
      ],
    ],
    [
      "Čo stránka robí",
      [
        "Stránka poskytuje bezplatné nástroje v prehliadači, okrem iného pre avatary, kódy a Title ID. Niektoré časti ešte nie sú otvorené.",
        "Ak avatar alebo hra stoja peniaze, platí sa v PlayStation Store. Táto stránka peniaze neprijíma.",
      ],
    ],
    [
      "Čo sa ukladá",
      [
        "Osobné údaje sa zásadne neukladajú.",
        "Jedinou plánovanou výnimkou je newsletter s kódmi. Zatiaľ neexistuje. Keď bude ponúkaný, zadáš e-mail a kontinent. Správa sa pošle len vtedy, keď je pre tento región nový kód avataru. Uložia sa adresa a kontinent. Heslo, prihlásenie do PSN ani platobné údaje sa kvôli tomu nezhromažďujú.",
        "Kým newsletter nie je, neukladajú sa ani tieto údaje.",
        "Webmail kontroluje schránku priamo v Purelymail. Heslo slúži len na túto kontrolu a potom sa zahodí. Tu sa neukladá. Jazyk a svetlé alebo tmavé zobrazenie ostanú v prehliadači.",
      ],
    ],
    [
      "Kódy a nástroje",
      [
        "Kód môže uplatniť viac osôb a môže už byť neplatný. Nie je záruka, že kód ešte funguje alebo že ho Sony prijme. Použitie je na vlastnú zodpovednosť.",
      ],
    ],
    [
      "Zmeny",
      [
        "Tento text možno upraviť. Platí znenie zverejnené na tejto stránke.",
      ],
    ],
  ]),
  hu: doc("Feltételek", "A consolecheat.com oldalra", "Vissza a hubra", [
    [
      "Hatály",
      [
        "Ezek a feltételek a consolecheat.com oldalra és az innen hivatkozott eszközökre vonatkoznak. Az oldal használatával elfogadod őket.",
      ],
    ],
    [
      "Nem a Sony üzemelteti",
      [
        "A consolecheat oldalt nem a Sony üzemelteti, és nincs kapcsolatban a Sonyval. A PlayStation, a PSN és a kapcsolódó védjegyek a jogosultaké.",
        "A fiókot, a vásárlást és a fizetést a PlayStation intézi, nem ez az oldal.",
      ],
    ],
    [
      "Mit csinál az oldal",
      [
        "Az oldal ingyenes eszközöket ad a böngészőben, többek között avatarokhoz, kódokhoz és Title ID-khoz. Néhány rész még nincs nyitva.",
        "Ha egy avatar vagy egy játék pénzbe kerül, a fizetés a PlayStation Store-ban történik. Ez az oldal nem fogad el pénzt.",
      ],
    ],
    [
      "Mit tárolunk",
      [
        "Főszabály szerint személyes adatot nem tárolunk.",
        "Az egyetlen tervezett kivétel a kódos hírlevél. Még nincs meg. Amikor elérhető lesz, megadsz egy e-mail-címet és egy kontinenst. Üzenet csak akkor megy, ha arra a régióra van új avatarkód. Ehhez a cím és a kontinens kerül tárolásra. Jelszót, PSN-belépést és fizetési adatot ehhez nem kérünk.",
        "Amíg a hírlevél nincs meg, ezek az adatok sem kerülnek tárolásra.",
        "A webmail a postaládát közvetlenül a Purelymailnél ellenőrzi. A jelszó csak ehhez az ellenőrzéshez kell, utána törlődik. Itt nem kerül mentésre. A nyelv és a világos vagy sötét beállítás a böngészőben marad.",
      ],
    ],
    [
      "Kódok és eszközök",
      [
        "Egy kódot többen is beválthatnak, és lehet, hogy már érvénytelen. Nincs ígéret arra, hogy a kód még működik, vagy hogy a Sony elfogadja. A használat saját felelősség.",
      ],
    ],
    [
      "Változások",
      [
        "Ez a szöveg módosulhat. Az ezen az oldalon közzétett változat érvényes.",
      ],
    ],
  ]),
  ro: doc("Termeni", "Pentru consolecheat.com", "Înapoi la hub", [
    [
      "Aplicare",
      [
        "Acești termeni se aplică site-ului consolecheat.com și uneltelor legate de aici. Folosind site-ul, îi accepți.",
      ],
    ],
    [
      "Nu este operat de Sony",
      [
        "consolecheat nu este operat de Sony și nu este afiliat cu Sony. PlayStation, PSN și mărcile aferente aparțin titularilor lor.",
        "Un cont, o cumpărare și o plată sunt gestionate de PlayStation, nu de acest site.",
      ],
    ],
    [
      "Ce face site-ul",
      [
        "Site-ul oferă unelte gratuite în browser, inclusiv pentru avataruri, coduri și Title ID. Unele secțiuni nu sunt încă deschise.",
        "Dacă un avatar sau un joc costă bani, plata se face în PlayStation Store. Acest site nu încasează bani.",
      ],
    ],
    [
      "Ce se păstrează",
      [
        "De regulă nu se păstrează date personale.",
        "Singura excepție prevăzută este un newsletter de coduri. Încă nu există. Când va fi oferit, indici o adresă de e-mail și un continent. Un mesaj este trimis doar când există un cod nou de avatar pentru acea regiune. Pentru asta se păstrează adresa și continentul. Nu se colectează parolă, date de autentificare PSN sau date de plată.",
        "Până există newsletterul, nici aceste date nu se păstrează.",
        "Webmailul verifică cutia direct la Purelymail. Parola este folosită doar pentru această verificare și apoi este ștearsă. Nu este salvată aici. Limba și setarea deschisă sau închisă rămân în browser.",
      ],
    ],
    [
      "Coduri și unelte",
      [
        "Un cod poate fi folosit de mai multe persoane și poate fi deja invalid. Nu există o garanție că un cod mai funcționează sau că Sony îl acceptă. Folosirea este pe propria răspundere.",
      ],
    ],
    [
      "Modificări",
      [
        "Acest text poate fi actualizat. Versiunea publicată pe această pagină este cea valabilă.",
      ],
    ],
  ]),
  bg: doc("Условия", "За consolecheat.com", "Обратно към хъба", [
    [
      "Прилагане",
      [
        "Тези условия важат за consolecheat.com и за инструментите, към които се сочи оттук. Като ползваш сайта, приемаш ги.",
      ],
    ],
    [
      "Не се управлява от Sony",
      [
        "consolecheat не се управлява от Sony и не е свързан със Sony. PlayStation, PSN и свързаните марки принадлежат на притежателите им.",
        "Профил, покупка и плащане се обработват от PlayStation, не от този сайт.",
      ],
    ],
    [
      "Какво прави сайтът",
      [
        "Сайтът дава безплатни инструменти в браузъра, включително за аватари, кодове и Title ID. Някои части още не са отворени.",
        "Ако аватар или игра струват пари, плащането е в PlayStation Store. Този сайт не приема пари.",
      ],
    ],
    [
      "Какво се пази",
      [
        "По правило лични данни не се пазят.",
        "Единственото предвидено изключение е бюлетин с кодове. Още го няма. Когато бъде предложена, посочваш имейл и континент. Съобщение се изпраща само когато за този регион има нов код за аватар. За това се пазят адресът и континентът. Парола, вход в PSN и данни за плащане не се събират за него.",
        "Докато бюлетинът не съществува, и тези данни не се пазят.",
        "Уеб пощата проверява кутията директно в Purelymail. Паролата се използва само за тази проверка и после се изтрива. Тук не се записва. Езикът и светлата или тъмната настройка остават в браузъра.",
      ],
    ],
    [
      "Кодове и инструменти",
      [
        "Код може да се активира от повече от един човек и може вече да е невалиден. Няма обещание, че кодът още работи или че Sony ще го приеме. Ползването е на твоя отговорност.",
      ],
    ],
    [
      "Промени",
      [
        "Този текст може да се променя. Важи версията, публикувана на тази страница.",
      ],
    ],
  ]),
  hr: doc("Uvjeti", "Za consolecheat.com", "Natrag na hub", [
    [
      "Primjena",
      [
        "Ovi uvjeti vrijede za consolecheat.com i za alate na koje se odavde vodi. Korištenjem stranice prihvaćaš ih.",
      ],
    ],
    [
      "Ne vodi Sony",
      [
        "consolecheat ne vodi Sony i nije povezan sa Sonyjem. PlayStation, PSN i povezani žigovi pripadaju svojim vlasnicima.",
        "Račun, kupnju i plaćanje obrađuje PlayStation, ne ova stranica.",
      ],
    ],
    [
      "Što stranica radi",
      [
        "Stranica daje besplatne alate u pregledniku, među ostalim za avatare, kodove i Title ID. Neki dijelovi još nisu otvoreni.",
        "Ako avatar ili igra koštaju, plaćanje ide u PlayStation Storeu. Ova stranica ne prima novac.",
      ],
    ],
    [
      "Što se sprema",
      [
        "U pravilu se ne spremaju osobni podaci.",
        "Jedina predviđena iznimka je newsletter s kodovima. Još ne postoji. Kad bude ponuđen, unosiš e-mail i kontinent. Poruka se šalje samo kad za tu regiju postoji novi kod avatara. Za to se spremaju adresa i kontinent. Lozinka, prijava na PSN i podaci o plaćanju se za to ne prikupljaju.",
        "Dok newsletter ne postoji, ni ti se podaci ne spremaju.",
        "Webmail provjerava sandučić izravno na Purelymailu. Lozinka služi samo za tu provjeru i zatim se briše. Ovdje se ne sprema. Jezik i svijetli ili tamni prikaz ostaju u pregledniku.",
      ],
    ],
    [
      "Kodovi i alati",
      [
        "Kod može iskoristiti više osoba i može već biti nevažeći. Nema obećanja da kod još radi ili da će ga Sony prihvatiti. Korištenje je na vlastitu odgovornost.",
      ],
    ],
    [
      "Promjene",
      [
        "Ovaj tekst može se izmijeniti. Vrijedi inačica objavljena na ovoj stranici.",
      ],
    ],
  ]),
  el: doc("Όροι", "Για το consolecheat.com", "Πίσω στο hub", [
    [
      "Ισχύς",
      [
        "Αυτοί οι όροι ισχύουν για το consolecheat.com και για τα εργαλεία που συνδέονται από εδώ. Με τη χρήση του site τους αποδέχεσαι.",
      ],
    ],
    [
      "Δεν το λειτουργεί η Sony",
      [
        "Το consolecheat δεν λειτουργεί από τη Sony και δεν συνδέεται με τη Sony. Τα PlayStation, PSN και τα σχετικά σήματα ανήκουν στους κατόχους τους.",
        "Λογαριασμός, αγορά και πληρωμή γίνονται από την PlayStation, όχι από αυτό το site.",
      ],
    ],
    [
      "Τι κάνει το site",
      [
        "Το site προσφέρει δωρεάν εργαλεία στον browser, μεταξύ άλλων για avatar, κωδικούς και Title ID. Ορισμένα μέρη δεν είναι ακόμη ανοιχτά.",
        "Αν ένα avatar ή ένα παιχνίδι κοστίζει, η πληρωμή γίνεται στο PlayStation Store. Αυτό το site δεν εισπράττει χρήματα.",
      ],
    ],
    [
      "Τι αποθηκεύεται",
      [
        "Κατά κανόνα δεν αποθηκεύονται προσωπικά δεδομένα.",
        "Η μόνη προβλεπόμενη εξαίρεση είναι ένα newsletter κωδικών. Δεν υπάρχει ακόμη. Όταν προσφερθεί, δηλώνεις email και ήπειρο. Μήνυμα στέλνεται μόνο όταν υπάρχει νέος κωδικός avatar για αυτή την περιοχή. Για αυτό αποθηκεύονται η διεύθυνση και η ήπειρος. Δεν συλλέγονται κωδικός, σύνδεση PSN ή στοιχεία πληρωμής.",
        "Μέχρι να υπάρξει το newsletter, ούτε αυτά τα στοιχεία αποθηκεύονται.",
        "Το webmail ελέγχει το γραμματοκιβώτιο απευθείας στην Purelymail. Ο κωδικός χρησιμοποιείται μόνο για αυτόν τον έλεγχο και μετά διαγράφεται. Δεν αποθηκεύεται εδώ. Η γλώσσα και η ανοιχτή ή σκούρα εμφάνιση μένουν στον browser.",
      ],
    ],
    [
      "Κωδικοί και εργαλεία",
      [
        "Έναν κωδικό μπορούν να τον χρησιμοποιήσουν περισσότερα άτομα και μπορεί να είναι ήδη άκυρος. Δεν υπάρχει υπόσχεση ότι ένας κωδικός λειτουργεί ακόμη ή ότι η Sony θα τον δεχτεί. Η χρήση γίνεται με δική σου ευθύνη.",
      ],
    ],
    [
      "Αλλαγές",
      [
        "Αυτό το κείμενο μπορεί να αλλάξει. Ισχύει η έκδοση που δημοσιεύεται σε αυτή τη σελίδα.",
      ],
    ],
  ]),
  tr: doc("Koşullar", "consolecheat.com için", "Hub’a dön", [
    [
      "Kapsam",
      [
        "Bu koşullar consolecheat.com ve buradan bağlanan araçlar için geçerlidir. Siteyi kullanarak bunları kabul edersin.",
      ],
    ],
    [
      "Sony tarafından işletilmez",
      [
        "consolecheat Sony tarafından işletilmez ve Sony ile bağlantılı değildir. PlayStation, PSN ve ilgili markalar sahiplerine aittir.",
        "Hesap, satın alma ve ödeme PlayStation tarafından yapılır, bu site tarafından değil.",
      ],
    ],
    [
      "Site ne yapar",
      [
        "Site, tarayıcıda ücretsiz araçlar sunar. Bunların arasında avatarlar, kodlar ve Title ID vardır. Bazı bölümler henüz açık değildir.",
        "Bir avatar veya oyun ücretliyse ödeme PlayStation Store’da yapılır. Bu site ödeme almaz.",
      ],
    ],
    [
      "Ne saklanır",
      [
        "Kural olarak kişisel veri saklanmaz.",
        "Öngörülen tek istisna bir kod bültenidir. Henüz yoktur. Sunulduğunda bir e-posta adresi ve bir kıta girersin. Mesaj yalnızca o bölge için yeni bir avatar kodu olduğunda gönderilir. Bunun için adres ve kıta saklanır. Şifre, PSN girişi ve ödeme verisi bunun için toplanmaz.",
        "Bülten yokken bu bilgiler de saklanmaz.",
        "Webmail, posta kutusunu doğrudan Purelymail’de kontrol eder. Şifre yalnızca bu kontrol için kullanılır ve sonra silinir. Burada saklanmaz. Dil ile açık veya koyu ayar tarayıcıda kalır.",
      ],
    ],
    [
      "Kodlar ve araçlar",
      [
        "Bir kodu birden fazla kişi kullanabilir ve kod geçersiz olabilir. Kodun hâlâ çalışacağına veya Sony’nin kabul edeceğine dair söz yoktur. Kullanım kendi sorumluluğundadır.",
      ],
    ],
    [
      "Değişiklikler",
      [
        "Bu metin güncellenebilir. Bu sayfada yayımlanan sürüm geçerlidir.",
      ],
    ],
  ]),
  ru: doc("Условия", "Для consolecheat.com", "Назад к хабу", [
    [
      "Действие",
      [
        "Эти условия действуют для consolecheat.com и для инструментов, на которые ведут ссылки отсюда. Пользуясь сайтом, ты их принимаешь.",
      ],
    ],
    [
      "Не управляется Sony",
      [
        "consolecheat не управляется Sony и не связан с Sony. PlayStation, PSN и соответствующие знаки принадлежат их правообладателям.",
        "Аккаунт, покупку и оплату обрабатывает PlayStation, а не этот сайт.",
      ],
    ],
    [
      "Что делает сайт",
      [
        "Сайт даёт бесплатные инструменты в браузере, в том числе для аватаров, кодов и Title ID. Некоторые разделы ещё не открыты.",
        "Если аватар или игра стоят денег, оплата идёт в PlayStation Store. Этот сайт деньги не принимает.",
      ],
    ],
    [
      "Что хранится",
      [
        "По общему правилу персональные данные не хранятся.",
        "Единственное предусмотренное исключение — рассылка кодов. Её ещё нет. Когда она появится, указываешь адрес почты и континент. Сообщение отправляется только если для этого региона есть новый код аватара. Для этого хранятся адрес и континент. Пароль, вход в PSN и платёжные данные для этого не собираются.",
        "Пока рассылки нет, эти сведения тоже не хранятся.",
        "Веб-почта проверяет ящик напрямую в Purelymail. Пароль используется только для этой проверки и затем удаляется. Здесь он не сохраняется. Язык и светлая или тёмная тема остаются в браузере.",
      ],
    ],
    [
      "Коды и инструменты",
      [
        "Код может активировать несколько человек, и он может быть уже недействителен. Нет обещания, что код ещё работает или что Sony его примет. Использование на твой риск.",
      ],
    ],
    [
      "Изменения",
      [
        "Этот текст может быть изменён. Действует версия, опубликованная на этой странице.",
      ],
    ],
  ]),
  uk: doc("Умови", "Для consolecheat.com", "Назад до хабу", [
    [
      "Дія",
      [
        "Ці умови діють для consolecheat.com і для інструментів, на які ведуть посилання звідси. Користуючись сайтом, ти їх приймаєш.",
      ],
    ],
    [
      "Не керується Sony",
      [
        "consolecheat не керується Sony і не пов’язаний із Sony. PlayStation, PSN і відповідні знаки належать їхнім власникам.",
        "Обліковий запис, покупку й оплату обробляє PlayStation, а не цей сайт.",
      ],
    ],
    [
      "Що робить сайт",
      [
        "Сайт дає безкоштовні інструменти в браузері, зокрема для аватарів, кодів і Title ID. Деякі розділи ще не відкриті.",
        "Якщо аватар чи гра коштують грошей, оплата йде в PlayStation Store. Цей сайт грошей не приймає.",
      ],
    ],
    [
      "Що зберігається",
      [
        "За загальним правилом персональні дані не зберігаються.",
        "Єдиний передбачений виняток — розсилка кодів. Її ще немає. Коли вона з’явиться, вказуєш адресу пошти і континент. Повідомлення надсилається лише якщо для цього регіону є новий код аватара. Для цього зберігаються адреса і континент. Пароль, вхід у PSN і платіжні дані для цього не збираються.",
        "Поки розсилки немає, ці відомості теж не зберігаються.",
        "Вебпошта перевіряє скриньку безпосередньо в Purelymail. Пароль використовується лише для цієї перевірки і потім видаляється. Тут він не зберігається. Мова і світла чи темна тема лишаються в браузері.",
      ],
    ],
    [
      "Коди й інструменти",
      [
        "Код може активувати кілька людей, і він може бути вже недійсним. Немає обіцянки, що код ще працює або що Sony його прийме. Використання на твій ризик.",
      ],
    ],
    [
      "Зміни",
      [
        "Цей текст може бути змінений. Діє версія, опублікована на цій сторінці.",
      ],
    ],
  ]),
  ar: doc("الشروط", "لموقع consolecheat.com", "العودة إلى الصفحة", [
    [
      "النطاق",
      [
        "تسري هذه الشروط على consolecheat.com وعلى الأدوات المربوطة من هنا. باستخدام الموقع فإنك تقبلها.",
      ],
    ],
    [
      "لا تديره سوني",
      [
        "لا تدير سوني موقع consolecheat وليس مرتبطًا بسوني. بلايستيشن وPSN والعلامات التابعة لها تعود لأصحابها.",
        "الحساب والشراء والدفع تتم عند بلايستيشن، وليس على هذا الموقع.",
      ],
    ],
    [
      "ماذا يفعل الموقع",
      [
        "يقدّم الموقع أدوات مجانية في المتصفح، منها الصور الرمزية والأكواد ومعرّفات العناوين. بعض الأقسام ليست مفتوحة بعد.",
        "إذا كانت الصورة أو اللعبة بمقابل، يتم الدفع في متجر بلايستيشن. هذا الموقع لا يقبض مالًا.",
      ],
    ],
    [
      "ماذا يُحفظ",
      [
        "الأصل أنه لا تُحفظ بيانات شخصية.",
        "الاستثناء الوحيد المقرر هو نشرة الأكواد. ليست متاحة بعد. عند توفرها تُدخل بريدًا إلكترونيًا وقارة. تُرسل رسالة فقط عندما يتوفر كود أفاتار جديد لتلك المنطقة. يُحفظ لذلك العنوان والقارة. لا تُجمع كلمة مرور ولا دخول PSN ولا بيانات دفع.",
        "إلى أن توجد النشرة، لا تُحفظ هذه البيانات أيضًا.",
        "يفحص البريد الصندوق مباشرة عند Purelymail. تُستخدم كلمة المرور لهذا الفحص فقط ثم تُحذف. لا تُحفظ هنا. اللغة وإعداد الفاتح أو الداكن يبقيان في المتصفح.",
      ],
    ],
    [
      "الأكواد والأدوات",
      [
        "يمكن لأكثر من شخص استخدام الكود، وقد يكون غير صالح بالفعل. لا يوجد وعد بأن الكود ما زال يعمل أو أن سوني ستقبله. الاستخدام على مسؤوليتك.",
      ],
    ],
    [
      "التغييرات",
      [
        "يمكن تحديث هذا النص. النسخة المنشورة على هذه الصفحة هي المعتمدة.",
      ],
    ],
  ]),
  he: doc("תנאים", "עבור consolecheat.com", "חזרה לדף הראשי", [
    [
      "תחולה",
      [
        "התנאים האלה חלים על consolecheat.com ועל הכלים שמקושרים מכאן. בשימוש באתר אתה מקבל אותם.",
      ],
    ],
    [
      "לא מופעל על ידי סוני",
      [
        "consolecheat אינו מופעל על ידי סוני ואינו קשור לסוני. פלייסטיישן, PSN והסימנים הקשורים שייכים לבעליהם.",
        "חשבון, רכישה ותשלום מטופלים על ידי פלייסטיישן, לא על ידי האתר הזה.",
      ],
    ],
    [
      "מה האתר עושה",
      [
        "האתר מספק כלים חינם בדפדפן, בין היתר לאווטארים, לקודים ול-Title ID. חלק מהמדורים עדיין סגורים.",
        "אם אווטאר או משחק עולים כסף, התשלום נעשה ב-PlayStation Store. האתר הזה לא גובה כסף.",
      ],
    ],
    [
      "מה נשמר",
      [
        "ככלל לא נשמרים נתונים אישיים.",
        "החריג היחיד המתוכנן הוא ניוזלטר לקודים. הוא עוד לא קיים. כשיוצע, מזינים כתובת דוא״ל ויבשת. הודעה נשלחת רק כאשר יש קוד אווטאר חדש לאזור הזה. לשם כך נשמרים הכתובת והיבשת. לא נאספים סיסמה, כניסה ל-PSN או נתוני תשלום.",
        "עד שהניוזלטר קיים, גם הנתונים האלה לא נשמרים.",
        "הוובמייל בודק את התיבה ישירות ב-Purelymail. הסיסמה משמשת רק לבדיקה הזאת ואחר כך נמחקת. היא לא נשמרת כאן. שפה והגדרת בהיר או כהה נשארות בדפדפן.",
      ],
    ],
    [
      "קודים וכלים",
      [
        "קוד יכול להיות ממומש על ידי יותר מאדם אחד, והוא עשוי כבר להיות לא תקף. אין הבטחה שקוד עדיין עובד או שסוני תקבל אותו. השימוש על אחריותך.",
      ],
    ],
    [
      "שינויים",
      [
        "הטקסט הזה יכול להתעדכן. הגרסה שמפורסמת בעמוד הזה היא התקפה.",
      ],
    ],
  ]),
  ja: doc("利用規約", "consolecheat.com について", "ハブに戻る", [
    [
      "適用",
      [
        "この規約は consolecheat.com と、そこからリンクされるツールに適用されます。サイトを使うことで、この規約に同意したものとします。",
      ],
    ],
    [
      "ソニーが運営していない",
      [
        "consolecheat はソニーが運営しておらず、ソニーとは関係がありません。PlayStation、PSN および関連する標章は、それぞれの権利者に属します。",
        "アカウント、購入、支払いは PlayStation が扱い、このサイトは扱いません。",
      ],
    ],
    [
      "サイトの内容",
      [
        "このサイトは、ブラウザで使える無料のツールを提供します。アバター、コード、タイトルIDを含みます。まだ開いていない欄もあります。",
        "アバターやゲームが有料の場合、支払いは PlayStation Store で行います。このサイトは代金を受け取りません。",
      ],
    ],
    [
      "保存する情報",
      [
        "原則として、個人情報は保存しません。",
        "予定している唯一の例外は、コード案内のメールです。まだありません。提供するときは、メールアドレスと大陸を入力します。その地域に新しいアバターコードがあるときだけメールを送ります。そのために保存するのはアドレスと大陸だけです。パスワード、PSNのログイン、支払い情報は集めません。",
        "案内を始めるまでは、その情報も保存しません。",
        "ウェブメールは Purelymail の受信箱を直接確認します。パスワードはその確認だけに使い、そのあと破棄します。ここでは保存しません。言語と明るい暗いはブラウザに残ります。",
      ],
    ],
    [
      "コードとツール",
      [
        "コードは複数の人が使え、すでに無効なことがあります。コードがまだ使えることや、ソニーが受け取ることを約束しません。利用は自己責任です。",
      ],
    ],
    [
      "変更",
      [
        "この文章は更新されることがあります。このページに掲載されている版が有効です。",
      ],
    ],
  ]),
  ko: doc("이용약관", "consolecheat.com에 적용", "허브로", [
    [
      "적용",
      [
        "이 약관은 consolecheat.com과 여기에서 연결되는 도구에 적용됩니다. 사이트를 쓰면 이 약관에 동의한 것입니다.",
      ],
    ],
    [
      "소니가 운영하지 않음",
      [
        "consolecheat는 소니가 운영하지 않으며 소니와 관련이 없습니다. PlayStation, PSN 및 관련 표장은 각 권리자의 것입니다.",
        "계정, 구매, 결제는 PlayStation이 처리하며 이 사이트가 처리하지 않습니다.",
      ],
    ],
    [
      "사이트가 하는 일",
      [
        "사이트는 브라우저에서 쓰는 무료 도구를 제공합니다. 아바타, 코드, 타이틀 ID가 포함됩니다. 아직 열리지 않은 항목도 있습니다.",
        "아바타나 게임이 유료이면 결제는 PlayStation Store에서 합니다. 이 사이트는 돈을 받지 않습니다.",
      ],
    ],
    [
      "저장하는 것",
      [
        "원칙적으로 개인정보는 저장하지 않습니다.",
        "예정된 유일한 예외는 코드 소식 메일입니다. 아직 없습니다. 생기면 이메일 주소와 대륙을 입력합니다. 그 지역에 새 아바타 코드가 있을 때만 메일을 보냅니다. 그때 저장하는 것은 주소와 대륙뿐입니다. 비밀번호, PSN 로그인, 결제 정보는 받지 않습니다.",
        "소식이 생기기 전에는 그 정보도 저장하지 않습니다.",
        "웹메일은 Purelymail 편지함을 직접 확인합니다. 비밀번호는 그 확인에만 쓰고 그다음 버립니다. 여기에는 저장하지 않습니다. 언어와 밝기 설정은 브라우저에 남습니다.",
      ],
    ],
    [
      "코드와 도구",
      [
        "코드는 여러 사람이 쓸 수 있고 이미 무효일 수 있습니다. 코드가 아직 작동하거나 소니가 받아 준다는 약속은 없습니다. 이용은 본인 책임입니다.",
      ],
    ],
    [
      "변경",
      [
        "이 글은 바뀔 수 있습니다. 이 페이지에 올라 있는 판이 적용됩니다.",
      ],
    ],
  ]),
  zh: doc("条款", "适用于 consolecheat.com", "回到首页", [
    [
      "适用范围",
      [
        "本条款适用于 consolecheat.com 以及从这里链接的工具。使用本站即表示接受这些条款。",
      ],
    ],
    [
      "并非由索尼运营",
      [
        "consolecheat 不由索尼运营，也与索尼没有关联。PlayStation、PSN 及相关标志归其权利人所有。",
        "账户、购买和付款由 PlayStation 处理，不由本站处理。",
      ],
    ],
    [
      "本站做什么",
      [
        "本站在浏览器中提供免费工具，包括头像、兑换码和 Title ID。有些栏目尚未开放。",
        "如果头像或游戏需要付费，付款在 PlayStation Store 完成。本站不收款。",
      ],
    ],
    [
      "保存什么",
      [
        "原则上不保存个人数据。",
        "唯一计划中的例外是兑换码邮件。目前还没有。开放后，你填写邮箱和一个洲。只有该地区出现新的头像兑换码时才会发信。为此只保存邮箱和洲。不收集密码、PSN 登录信息或付款资料。",
        "在这项功能出现之前，这些信息也不会保存。",
        "网页邮箱直接在 Purelymail 检查邮箱。密码只用于这次检查，之后即丢弃，不在这里保存。语言和明暗设置留在浏览器中。",
      ],
    ],
    [
      "兑换码与工具",
      [
        "兑换码可能被多人使用，也可能已经失效。不保证兑换码仍然有效，也不保证索尼会接受。使用由你自行承担。",
      ],
    ],
    [
      "变更",
      [
        "本文可以更新。以本页公布的版本为准。",
      ],
    ],
  ]),
  "zh-Hant": doc("條款", "適用於 consolecheat.com", "回到首頁", [
    [
      "適用範圍",
      [
        "本條款適用於 consolecheat.com 以及從這裡連結的工具。使用本站即表示接受這些條款。",
      ],
    ],
    [
      "並非由索尼營運",
      [
        "consolecheat 不由索尼營運，也與索尼沒有關聯。PlayStation、PSN 及相關標誌歸其權利人所有。",
        "帳戶、購買和付款由 PlayStation 處理，不由本站處理。",
      ],
    ],
    [
      "本站做什麼",
      [
        "本站在瀏覽器中提供免費工具，包括頭像、兌換碼和 Title ID。有些欄目尚未開放。",
        "如果頭像或遊戲需要付費，付款在 PlayStation Store 完成。本站不收款。",
      ],
    ],
    [
      "保存什麼",
      [
        "原則上不保存個人資料。",
        "唯一計畫中的例外是兌換碼郵件。目前還沒有。開放後，你填寫郵箱和一個洲。只有該地區出現新的頭像兌換碼時才會發信。為此只保存郵箱和洲。不收集密碼、PSN 登入資訊或付款資料。",
        "在這項功能出現之前，這些資訊也不會保存。",
        "網頁郵箱直接在 Purelymail 檢查郵箱。密碼只用於這次檢查，之後即丟棄，不在這裡保存。語言和明暗設定留在瀏覽器中。",
      ],
    ],
    [
      "兌換碼與工具",
      [
        "兌換碼可能被多人使用，也可能已經失效。不保證兌換碼仍然有效，也不保證索尼會接受。使用由你自行承擔。",
      ],
    ],
    [
      "變更",
      [
        "本文可以更新。以本頁公布的版本為準。",
      ],
    ],
  ]),
  th: doc("ข้อกำหนด", "สำหรับ consolecheat.com", "กลับไปหน้าหลัก", [
    [
      "ขอบเขต",
      [
        "ข้อกำหนดนี้ใช้กับ consolecheat.com และเครื่องมือที่ลิงก์จากที่นี่. การใช้ไซต์ถือว่ารับข้อกำหนดนี้.",
      ],
    ],
    [
      "ไม่ได้ดำเนินการโดย Sony",
      [
        "consolecheat ไม่ได้ดำเนินการโดย Sony และไม่ได้เกี่ยวข้องกับ Sony. PlayStation, PSN และเครื่องหมายที่เกี่ยวข้องเป็นของเจ้าของสิทธิ.",
        "บัญชี การซื้อ และการชำระเงินดำเนินการโดย PlayStation ไม่ใช่ไซต์นี้.",
      ],
    ],
    [
      "ไซต์ทำอะไร",
      [
        "ไซต์ให้เครื่องมือฟรีในเบราว์เซอร์ รวมถึงอวตาร โค้ด และ Title ID. บางส่วนยังไม่เปิด.",
        "ถ้าอวตารหรือเกมมีราคา การชำระเงินอยู่ที่ PlayStation Store. ไซต์นี้ไม่รับเงิน.",
      ],
    ],
    [
      "อะไรที่ถูกเก็บ",
      [
        "โดยหลักแล้วไม่เก็บข้อมูลส่วนบุคคล.",
        "ข้อยกเว้นเดียวที่วางไว้คือจดหมายโค้ด. ยังไม่มี. เมื่อมีแล้ว ให้ใส่อีเมลและทวีป. จะส่งข้อความก็ต่อเมื่อภูมิภาคนั้นมีโค้ดอวตารใหม่. สิ่งที่เก็บคืออีเมลกับทวีป. ไม่เก็บรหัสผ่าน การเข้า PSN หรือข้อมูลการจ่ายเงิน.",
        "จนกว่าจดหมายนั้นจะมี ข้อมูลนี้ก็ยังไม่ถูกเก็บ.",
        "เว็บเมลตรวจกล่องโดยตรงที่ Purelymail. รหัสผ่านใช้แค่การตรวจนั้น แล้วทิ้ง. ไม่ถูกบันทึกที่นี่. ภาษาและธีมสว่างหรือมืดอยู่ในเบราว์เซอร์.",
      ],
    ],
    [
      "โค้ดและเครื่องมือ",
      [
        "โค้ดอาจมีคนใช้ได้หลายคน และอาจใช้ไม่ได้แล้ว. ไม่มีการรับประกันว่าโค้ดยังใช้ได้ หรือว่า Sony จะรับ. การใช้เป็นความรับผิดชอบของคุณ.",
      ],
    ],
    [
      "การเปลี่ยนแปลง",
      [
        "ข้อความนี้อาจถูกปรับ. ฉบับที่อยู่บนหน้านี้เป็นฉบับที่ใช้.",
      ],
    ],
  ]),
  id: doc("Ketentuan", "Untuk consolecheat.com", "Kembali ke hub", [
    [
      "Cakupan",
      [
        "Ketentuan ini berlaku untuk consolecheat.com dan alat yang ditautkan dari sini. Dengan memakai situs, kamu menerimanya.",
      ],
    ],
    [
      "Tidak dijalankan Sony",
      [
        "consolecheat tidak dijalankan oleh Sony dan tidak terhubung dengan Sony. PlayStation, PSN, dan merek terkait milik pemegangnya.",
        "Akun, pembelian, dan pembayaran ditangani PlayStation, bukan situs ini.",
      ],
    ],
    [
      "Apa yang dilakukan situs",
      [
        "Situs menyediakan alat gratis di browser, termasuk avatar, kode, dan Title ID. Beberapa bagian belum dibuka.",
        "Jika avatar atau game berbayar, pembayaran dilakukan di PlayStation Store. Situs ini tidak menerima uang.",
      ],
    ],
    [
      "Apa yang disimpan",
      [
        "Pada dasarnya data pribadi tidak disimpan.",
        "Satu-satunya pengecualian yang direncanakan adalah newsletter kode. Belum ada. Saat ditawarkan, kamu mengisi email dan benua. Pesan hanya dikirim jika ada kode avatar baru untuk wilayah itu. Yang disimpan adalah alamat dan benua. Kata sandi, login PSN, dan data pembayaran tidak dikumpulkan untuk itu.",
        "Selama newsletter belum ada, data itu juga tidak disimpan.",
        "Webmail memeriksa kotak langsung di Purelymail. Kata sandi hanya dipakai untuk pemeriksaan itu lalu dibuang. Tidak disimpan di sini. Bahasa serta tampilan terang atau gelap tetap di browser.",
      ],
    ],
    [
      "Kode dan alat",
      [
        "Kode bisa dipakai lebih dari satu orang dan mungkin sudah tidak berlaku. Tidak ada janji bahwa kode masih berfungsi atau bahwa Sony akan menerimanya. Pemakaian menjadi tanggung jawabmu.",
      ],
    ],
    [
      "Perubahan",
      [
        "Teks ini dapat diperbarui. Versi yang terbit di halaman ini yang berlaku.",
      ],
    ],
  ]),
  ms: doc("Terma", "Untuk consolecheat.com", "Kembali ke hub", [
    [
      "Skop",
      [
        "Terma ini terpakai untuk consolecheat.com dan alat yang dipaut dari sini. Dengan menggunakan laman, anda menerimanya.",
      ],
    ],
    [
      "Tidak dikendalikan Sony",
      [
        "consolecheat tidak dikendalikan oleh Sony dan tidak berkaitan dengan Sony. PlayStation, PSN dan tanda berkaitan milik pemegangnya.",
        "Akaun, pembelian dan bayaran diurus oleh PlayStation, bukan laman ini.",
      ],
    ],
    [
      "Apa yang laman buat",
      [
        "Laman menyediakan alat percuma dalam pelayar, termasuk avatar, kod dan Title ID. Sesetengah bahagian belum dibuka.",
        "Jika avatar atau permainan berbayar, bayaran dibuat di PlayStation Store. Laman ini tidak menerima wang.",
      ],
    ],
    [
      "Apa yang disimpan",
      [
        "Pada dasarnya data peribadi tidak disimpan.",
        "Satu-satunya pengecualian yang dirancang ialah surat berita kod. Belum ada. Apabila ditawarkan, anda isi e-mel dan benua. Mesej hanya dihantar apabila ada kod avatar baharu untuk rantau itu. Yang disimpan ialah alamat dan benua. Kata laluan, log masuk PSN dan data bayaran tidak dikumpul untuk itu.",
        "Selagi surat berita belum ada, data itu juga tidak disimpan.",
        "Webmail menyemak peti terus di Purelymail. Kata laluan hanya digunakan untuk semakan itu, kemudian dibuang. Ia tidak disimpan di sini. Bahasa serta paparan cerah atau gelap kekal dalam pelayar.",
      ],
    ],
    [
      "Kod dan alat",
      [
        "Kod boleh digunakan oleh lebih daripada seorang dan mungkin sudah tidak sah. Tiada janji bahawa kod masih berfungsi atau Sony akan menerimanya. Penggunaan atas tanggungjawab anda.",
      ],
    ],
    [
      "Perubahan",
      [
        "Teks ini boleh dikemas kini. Versi yang diterbitkan di halaman ini yang terpakai.",
      ],
    ],
  ]),
  vi: doc("Điều khoản", "Cho consolecheat.com", "Về trang chính", [
    [
      "Phạm vi",
      [
        "Điều khoản này áp dụng cho consolecheat.com và các công cụ được liên kết từ đây. Dùng trang là chấp nhận các điều khoản.",
      ],
    ],
    [
      "Không do Sony vận hành",
      [
        "consolecheat không do Sony vận hành và không liên kết với Sony. PlayStation, PSN và các nhãn liên quan thuộc chủ sở hữu.",
        "Tài khoản, mua hàng và thanh toán do PlayStation xử lý, không phải trang này.",
      ],
    ],
    [
      "Trang làm gì",
      [
        "Trang cung cấp công cụ miễn phí trên trình duyệt, gồm avatar, mã và Title ID. Một số mục chưa mở.",
        "Nếu avatar hoặc game có giá, thanh toán ở PlayStation Store. Trang này không nhận tiền.",
      ],
    ],
    [
      "Cái gì được lưu",
      [
        "Về nguyên tắc không lưu dữ liệu cá nhân.",
        "Ngoại lệ duy nhất được dự kiến là thư mã. Hiện chưa có. Khi có, bạn nhập email và một châu lục. Thư chỉ được gửi khi vùng đó có mã avatar mới. Khi đó chỉ lưu địa chỉ và châu lục. Không thu mật khẩu, đăng nhập PSN hay dữ liệu thanh toán.",
        "Khi thư đó chưa có, những thông tin này cũng không được lưu.",
        "Webmail kiểm tra hộp thư trực tiếp ở Purelymail. Mật khẩu chỉ dùng cho lần kiểm tra đó rồi bị hủy. Không được lưu ở đây. Ngôn ngữ và giao diện sáng hoặc tối nằm trong trình duyệt.",
      ],
    ],
    [
      "Mã và công cụ",
      [
        "Một mã có thể được nhiều người dùng và có thể đã hết hiệu lực. Không có cam kết mã còn dùng được hoặc Sony sẽ chấp nhận. Việc dùng là do bạn tự chịu.",
      ],
    ],
    [
      "Thay đổi",
      [
        "Đoạn này có thể được cập nhật. Bản đăng trên trang này là bản có hiệu lực.",
      ],
    ],
  ]),
};
