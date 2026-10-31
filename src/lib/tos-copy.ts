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
  en: doc("Terms", "Short, and not from Sony.", "Back to the hub", [
    [
      "Not Sony",
      [
        "This site is not Sony. Sony did not build it, did not read it, and certainly did not approve it. PlayStation, PSN, and the logos belong to them.",
        "If Sony sends a lawyer, the lawyer can explain the console's shopping cart. We only explain this website. The console stays theirs. The site does not.",
      ],
    ],
    [
      "What this is",
      [
        "Free tools in the browser. Avatars, codes, title IDs, and cards that are still closed. If an avatar or a game costs money, you pay PlayStation. Not here. There is no checkout on this site.",
      ],
    ],
    [
      "What is stored",
      [
        "Almost nothing.",
        "The only exception will be the code newsletter. It is not live yet. When it is, you give an email address and a continent. You get a mail only when a new avatar code shows up for that region. For that we keep the address and the continent. Nothing else. No password, no PSN login, no payment data.",
        "Until the newsletter exists, we do not store that either.",
        "Webmail checks the mailbox at Purelymail. The password is dropped after that. It is not saved. Language and light or dark stay in your browser, on your device.",
      ],
    ],
    [
      "Codes",
      [
        "Anyone can redeem a code. It can already be dead when you copy it. We do not promise that Sony will accept it, or that your account will thank you.",
      ],
    ],
    [
      "Changes",
      [
        "This text can change. The joke about Sony is not a contract with Sony.",
      ],
    ],
  ]),
  de: doc("Nutzungsbedingungen", "Kurz, und nicht von Sony.", "Zurück zum Hub", [
    [
      "Nicht Sony",
      [
        "Diese Seite ist nicht Sony. Sony hat sie nicht gebaut, nicht gelesen und ganz sicher nicht freigegeben. PlayStation, PSN und die Logos gehören denen.",
        "Wenn Sony einen Anwalt schickt, darf der gern den Warenkorb der Konsole erklären. Wir erklären nur diese Website. Die Konsole bleibt bei Sony. Die Seite nicht.",
      ],
    ],
    [
      "Was das hier ist",
      [
        "Kostenlose Werkzeuge im Browser. Avatare, Codes, Title-IDs, und Karten, die noch zu sind. Kostet ein Avatar oder ein Spiel Geld, bezahlst du das bei PlayStation. Hier nicht. Hier gibt es keine Kasse.",
      ],
    ],
    [
      "Was gespeichert wird",
      [
        "Fast nichts.",
        "Die einzige Ausnahme wird der Code-Newsletter. Den gibt es noch nicht. Wenn er da ist, gibst du eine E-Mail und einen Kontinent an. Du bekommst nur dann eine Mail, wenn in dieser Region ein neuer Avatar-Code liegt. Gespeichert werden dafür die Adresse und der Kontinent. Sonst nichts. Kein Passwort, kein PSN-Login, keine Zahlungsdaten.",
        "Bis der Newsletter existiert, speichern wir auch das nicht.",
        "Die Webmail prüft das Postfach bei Purelymail. Das Passwort wird danach verworfen, nicht abgelegt. Sprache und Hell oder Dunkel bleiben in deinem Browser, auf deinem Gerät.",
      ],
    ],
    [
      "Codes",
      [
        "Einen Code kann jeder einlösen. Er kann schon tot sein, wenn du ihn kopierst. Wir versprechen nicht, dass Sony ihn annimmt oder dass dein Konto sich bedankt.",
      ],
    ],
    [
      "Änderungen",
      [
        "Dieser Text kann sich ändern. Der Witz über Sony ist kein Vertrag mit Sony.",
      ],
    ],
  ]),
  fr: doc("Conditions", "Court, et pas de Sony.", "Retour au hub", [
    [
      "Pas Sony",
      [
        "Ce site n’est pas Sony. Sony ne l’a pas fait, ne l’a pas lu et ne l’a surtout pas validé. PlayStation, le PSN et les logos leur appartiennent.",
        "Si Sony envoie un avocat, il peut expliquer le panier de la console. Nous, on explique seulement ce site. La console reste à Sony. Le site, non.",
      ],
    ],
    [
      "Ce que c’est",
      [
        "Des outils gratuits dans le navigateur. Avatars, codes, Title ID, et des cartes encore fermées. Si un avatar ou un jeu coûte de l’argent, tu paies PlayStation. Pas ici. Il n’y a pas de caisse.",
      ],
    ],
    [
      "Ce qui est enregistré",
      [
        "Presque rien.",
        "La seule exception sera la newsletter des codes. Elle n’existe pas encore. Quand elle existera, tu donnes une adresse e-mail et un continent. Tu ne reçois un mail que lorsqu’un nouveau code d’avatar existe pour cette région. On garde alors l’adresse et le continent. Rien d’autre. Pas de mot de passe, pas de login PSN, pas de paiement.",
        "Tant que la newsletter n’existe pas, on ne garde pas ça non plus.",
        "Le webmail vérifie la boîte chez Purelymail. Le mot de passe est jeté ensuite. Il n’est pas enregistré. La langue et le thème clair ou sombre restent dans ton navigateur.",
      ],
    ],
    [
      "Codes",
      [
        "Tout le monde peut utiliser un code. Il peut déjà être mort quand tu le copies. On ne promet pas que Sony l’acceptera.",
      ],
    ],
    [
      "Changements",
      [
        "Ce texte peut changer. La blague sur Sony n’est pas un contrat avec Sony.",
      ],
    ],
  ]),
  es: doc("Condiciones", "Corto, y no es de Sony.", "Volver al hub", [
    [
      "No es Sony",
      [
        "Este sitio no es Sony. Sony no lo hizo, no lo leyó y desde luego no lo aprobó. PlayStation, PSN y los logos son suyos.",
        "Si Sony manda un abogado, que explique el carrito de la consola. Nosotros solo explicamos esta web. La consola sigue siendo de Sony. El sitio, no.",
      ],
    ],
    [
      "Qué es esto",
      [
        "Herramientas gratis en el navegador. Avatares, códigos, Title ID y tarjetas que aún están cerradas. Si un avatar o un juego cuesta dinero, se lo pagas a PlayStation. Aquí no. Aquí no hay caja.",
      ],
    ],
    [
      "Qué se guarda",
      [
        "Casi nada.",
        "La única excepción será el boletín de códigos. Aún no existe. Cuando exista, das un correo y un continente. Solo recibes un correo cuando haya un código de avatar nuevo en esa región. Para eso se guardan la dirección y el continente. Nada más. Ni contraseña, ni login de PSN, ni datos de pago.",
        "Hasta que el boletín exista, eso tampoco se guarda.",
        "El webmail comprueba el buzón en Purelymail. La contraseña se tira después. No se guarda. El idioma y el tema claro u oscuro se quedan en tu navegador.",
      ],
    ],
    [
      "Códigos",
      [
        "Cualquiera puede canjear un código. Puede estar muerto antes de que lo copies. No prometemos que Sony lo acepte.",
      ],
    ],
    [
      "Cambios",
      [
        "Este texto puede cambiar. La broma sobre Sony no es un contrato con Sony.",
      ],
    ],
  ]),
  pt: doc("Termos", "Curto, e não é da Sony.", "Voltar ao hub", [
    [
      "Não é a Sony",
      [
        "Este site não é a Sony. A Sony não o fez, não o leu e de certeza não o aprovou. PlayStation, PSN e os logótipos são deles.",
        "Se a Sony mandar um advogado, ele que explique o carrinho da consola. Nós só explicamos este site. A consola fica com a Sony. O site, não.",
      ],
    ],
    [
      "O que é isto",
      [
        "Ferramentas grátis no navegador. Avatares, códigos, Title ID e cartões ainda fechados. Se um avatar ou um jogo custar dinheiro, pagas à PlayStation. Aqui não. Aqui não há caixa.",
      ],
    ],
    [
      "O que fica guardado",
      [
        "Quase nada.",
        "A única exceção será a newsletter de códigos. Ainda não existe. Quando existir, dás um e-mail e um continente. Só recebes um mail quando houver um código de avatar novo nessa região. Para isso guardamos o endereço e o continente. Mais nada. Sem palavra-passe, sem login PSN, sem dados de pagamento.",
        "Até a newsletter existir, isso também não fica guardado.",
        "O webmail verifica a caixa na Purelymail. A palavra-passe é deitada fora a seguir. Não fica guardada. Língua e tema claro ou escuro ficam no teu navegador.",
      ],
    ],
    [
      "Códigos",
      [
        "Qualquer pessoa pode usar um código. Pode já estar morto quando o copias. Não prometemos que a Sony o aceite.",
      ],
    ],
    [
      "Alterações",
      [
        "Este texto pode mudar. A piada sobre a Sony não é um contrato com a Sony.",
      ],
    ],
  ]),
  it: doc("Condizioni", "Breve, e non è Sony.", "Torna al hub", [
    [
      "Non è Sony",
      [
        "Questo sito non è Sony. Sony non l’ha fatto, non l’ha letto e di sicuro non l’ha approvato. PlayStation, PSN e i loghi sono loro.",
        "Se Sony manda un avvocato, può spiegare il carrello della console. Noi spieghiamo solo questo sito. La console resta di Sony. Il sito no.",
      ],
    ],
    [
      "Cos’è",
      [
        "Strumenti gratis nel browser. Avatar, codici, Title ID e schede ancora chiuse. Se un avatar o un gioco costa, paghi PlayStation. Non qui. Qui non c’è cassa.",
      ],
    ],
    [
      "Cosa viene salvato",
      [
        "Quasi niente.",
        "L’unica eccezione sarà la newsletter dei codici. Non c’è ancora. Quando ci sarà, dai un’email e un continente. Ricevi una mail solo quando nella regione c’è un nuovo codice avatar. Per quello teniamo l’indirizzo e il continente. Nient’altro. Niente password, niente login PSN, niente dati di pagamento.",
        "Finché la newsletter non esiste, non salviamo nemmeno quello.",
        "La webmail controlla la casella su Purelymail. La password viene buttata dopo. Non viene salvata. Lingua e tema chiaro o scuro restano nel browser.",
      ],
    ],
    [
      "Codici",
      [
        "Un codice lo può riscattare chiunque. Può essere già morto quando lo copi. Non promettiamo che Sony lo accetti.",
      ],
    ],
    [
      "Modifiche",
      [
        "Questo testo può cambiare. La battuta su Sony non è un contratto con Sony.",
      ],
    ],
  ]),
  nl: doc("Voorwaarden", "Kort, en niet van Sony.", "Terug naar de hub", [
    [
      "Niet Sony",
      [
        "Deze site is niet Sony. Sony heeft hem niet gebouwd, niet gelezen en zeker niet goedgekeurd. PlayStation, PSN en de logo’s zijn van hen.",
        "Als Sony een advocaat stuurt, mag die de winkelwagen van de console uitleggen. Wij leggen alleen deze site uit. De console blijft van Sony. De site niet.",
      ],
    ],
    [
      "Wat dit is",
      [
        "Gratis tools in de browser. Avatars, codes, title-ID’s en kaarten die nog dicht zijn. Kost een avatar of een spel geld, dan betaal je PlayStation. Niet hier. Hier is geen kassa.",
      ],
    ],
    [
      "Wat wordt bewaard",
      [
        "Bijna niets.",
        "De enige uitzondering wordt de code-nieuwsbrief. Die is er nog niet. Als hij er is, geef je een e-mail en een continent. Je krijgt alleen een mail als er in die regio een nieuwe avatarcode is. Daarvoor bewaren we het adres en het continent. Verder niets. Geen wachtwoord, geen PSN-login, geen betaalgegevens.",
        "Tot de nieuwsbrief bestaat, bewaren we dat ook niet.",
        "De webmail checkt de bus bij Purelymail. Het wachtwoord wordt daarna weggegooid. Het wordt niet opgeslagen. Taal en licht of donker blijven in je browser.",
      ],
    ],
    [
      "Codes",
      [
        "Een code kan iedereen inwisselen. Hij kan al dood zijn als je hem kopieert. We beloven niet dat Sony hem aanneemt.",
      ],
    ],
    [
      "Wijzigingen",
      [
        "Deze tekst kan veranderen. De grap over Sony is geen contract met Sony.",
      ],
    ],
  ]),
  pl: doc("Warunki", "Krótko i nie od Sony.", "Wróć do huba", [
    [
      "To nie Sony",
      [
        "Ta strona nie jest Sony. Sony jej nie zrobiło, nie czytało i na pewno nie zatwierdziło. PlayStation, PSN i loga należą do nich.",
        "Jeśli Sony przyśle prawnika, niech tłumaczy koszyk konsoli. My tłumaczymy tylko tę stronę. Konsola zostaje u Sony. Strona nie.",
      ],
    ],
    [
      "Co to jest",
      [
        "Darmowe narzędzia w przeglądarce. Awatary, kody, Title ID i karty, które są jeszcze zamknięte. Jeśli awatar albo gra kosztuje, płacisz PlayStation. Nie tutaj. Tu nie ma kasy.",
      ],
    ],
    [
      "Co jest zapisywane",
      [
        "Prawie nic.",
        "Jedyny wyjątek to newsletter z kodami. Jeszcze go nie ma. Jak będzie, podajesz e-mail i kontynent. Mail przychodzi tylko wtedy, gdy w tym regionie jest nowy kod awatara. Zapisujemy wtedy adres i kontynent. Nic więcej. Bez hasła, bez logowania PSN, bez danych płatności.",
        "Dopóki newslettera nie ma, tego też nie zapisujemy.",
        "Webmail sprawdza skrzynkę w Purelymail. Hasło jest potem wyrzucane. Nie jest zapisywane. Język i jasny albo ciemny motyw zostają w przeglądarce.",
      ],
    ],
    [
      "Kody",
      [
        "Kod może zrealizować każdy. Może być już martwy, gdy go kopiujesz. Nie obiecujemy, że Sony go przyjmie.",
      ],
    ],
    [
      "Zmiany",
      [
        "Ten tekst może się zmienić. Żart o Sony nie jest umową z Sony.",
      ],
    ],
  ]),
  sv: doc("Villkor", "Kort, och inte från Sony.", "Tillbaka till hubben", [
    [
      "Inte Sony",
      [
        "Den här sidan är inte Sony. Sony byggde den inte, läste den inte och godkände den verkligen inte. PlayStation, PSN och logotyperna är deras.",
        "Om Sony skickar en jurist får den förklara konsolens varukorg. Vi förklarar bara den här sidan. Konsolen stannar hos Sony. Sidan gör det inte.",
      ],
    ],
    [
      "Vad det här är",
      [
        "Gratis verktyg i webbläsaren. Avatarer, koder, title-ID och kort som fortfarande är stängda. Kostar en avatar eller ett spel pengar betalar du PlayStation. Inte här. Här finns ingen kassa.",
      ],
    ],
    [
      "Vad som sparas",
      [
        "Nästan ingenting.",
        "Det enda undantaget blir kodnyhetsbrevet. Det finns inte än. När det gör det anger du en e-post och en kontinent. Du får bara ett mail när en ny avatarkod finns i den regionen. Då sparas adressen och kontinenten. Inget annat. Inget lösenord, ingen PSN-inloggning, inga betaluppgifter.",
        "Tills nyhetsbrevet finns sparar vi inte det heller.",
        "Webbmejlen kollar lådan hos Purelymail. Lösenordet slängs efteråt. Det sparas inte. Språk och ljust eller mörkt ligger kvar i din webbläsare.",
      ],
    ],
    [
      "Koder",
      [
        "Vem som helst kan lösa in en kod. Den kan redan vara död när du kopierar den. Vi lovar inte att Sony godtar den.",
      ],
    ],
    [
      "Ändringar",
      [
        "Den här texten kan ändras. Skämtet om Sony är inget avtal med Sony.",
      ],
    ],
  ]),
  da: doc("Vilkår", "Kort, og ikke fra Sony.", "Tilbage til hubben", [
    [
      "Ikke Sony",
      [
        "Denne side er ikke Sony. Sony har ikke bygget den, ikke læst den og bestemt ikke godkendt den. PlayStation, PSN og logoerne er deres.",
        "Hvis Sony sender en advokat, må han forklare konsollens kurv. Vi forklarer kun dette site. Konsollen bliver hos Sony. Sitet gør ikke.",
      ],
    ],
    [
      "Hvad det er",
      [
        "Gratis værktøjer i browseren. Avatarer, koder, title-ID og kort, der stadig er lukket. Koster en avatar eller et spil penge, betaler du PlayStation. Ikke her. Her er der ingen kasse.",
      ],
    ],
    [
      "Hvad der gemmes",
      [
        "Næsten ingenting.",
        "Den eneste undtagelse bliver kode-nyhedsbrevet. Det findes ikke endnu. Når det gør, giver du en e-mail og et kontinent. Du får kun en mail, når der er en ny avatarkode i den region. Så gemmes adressen og kontinentet. Ikke andet. Ingen adgangskode, intet PSN-login, ingen betalingsdata.",
        "Indtil nyhedsbrevet findes, gemmer vi heller ikke det.",
        "Webmailen tjekker postkassen hos Purelymail. Adgangskoden smides væk bagefter. Den gemmes ikke. Sprog og lyst eller mørkt bliver i din browser.",
      ],
    ],
    [
      "Koder",
      [
        "Alle kan indløse en kode. Den kan allerede være død, når du kopierer den. Vi lover ikke, at Sony accepterer den.",
      ],
    ],
    [
      "Ændringer",
      [
        "Denne tekst kan ændres. Joken om Sony er ikke en kontrakt med Sony.",
      ],
    ],
  ]),
  no: doc("Vilkår", "Kort, og ikke fra Sony.", "Tilbake til huben", [
    [
      "Ikke Sony",
      [
        "Dette nettstedet er ikke Sony. Sony har ikke laget det, ikke lest det og i hvert fall ikke godkjent det. PlayStation, PSN og logoene er deres.",
        "Hvis Sony sender en advokat, kan hen forklare konsollens handlekurv. Vi forklarer bare dette nettstedet. Konsollen blir hos Sony. Nettstedet gjør det ikke.",
      ],
    ],
    [
      "Hva dette er",
      [
        "Gratis verktøy i nettleseren. Avatarer, koder, title-ID og kort som fortsatt er stengt. Koster en avatar eller et spill penger, betaler du PlayStation. Ikke her. Her er det ingen kasse.",
      ],
    ],
    [
      "Hva som lagres",
      [
        "Nesten ingenting.",
        "Det eneste unntaket blir kodenyhetsbrevet. Det finnes ikke ennå. Når det gjør det, oppgir du en e-post og et kontinent. Du får bare en e-post når det finnes en ny avatarkode i den regionen. Da lagres adressen og kontinentet. Ikke noe annet. Ikke passord, ikke PSN-innlogging, ikke betalingsdata.",
        "Før nyhetsbrevet finnes, lagrer vi ikke det heller.",
        "Nettposten sjekker postkassen hos Purelymail. Passordet kastes etterpå. Det lagres ikke. Språk og lyst eller mørkt blir i nettleseren din.",
      ],
    ],
    [
      "Koder",
      [
        "Hvem som helst kan løse inn en kode. Den kan allerede være død når du kopierer den. Vi lover ikke at Sony godtar den.",
      ],
    ],
    [
      "Endringer",
      [
        "Denne teksten kan endres. Spøken om Sony er ikke en kontrakt med Sony.",
      ],
    ],
  ]),
  fi: doc("Ehdot", "Lyhyt, eikä Sonylta.", "Takaisin hubiin", [
    [
      "Ei Sony",
      [
        "Tämä sivu ei ole Sony. Sony ei tehnyt sitä, ei lukenut sitä eikä todellakaan hyväksynyt sitä. PlayStation, PSN ja logot ovat heidän.",
        "Jos Sony lähettää juristin, hän saa selittää konsolin ostoskorin. Me selitämme vain tämän sivun. Konsoli jää Sonylle. Sivu ei.",
      ],
    ],
    [
      "Mikä tämä on",
      [
        "Ilmaisia työkaluja selaimessa. Avatareja, koodeja, title-ID:itä ja kortteja, jotka ovat vielä kiinni. Jos avatar tai peli maksaa, maksat PlayStationille. Et tänne. Täällä ei ole kassaa.",
      ],
    ],
    [
      "Mitä tallennetaan",
      [
        "Melkein ei mitään.",
        "Ainoa poikkeus on koodiuutiskirje. Sitä ei vielä ole. Kun se tulee, annat sähköpostin ja maanosan. Saat viestin vain, kun sillä alueella on uusi avatar-koodi. Sitä varten tallennetaan osoite ja maanosa. Ei muuta. Ei salasanaa, ei PSN-kirjautumista, ei maksutietoja.",
        "Kunnes uutiskirje on olemassa, sitäkään ei tallenneta.",
        "Webmail tarkistaa postilaatikon Purelymailissa. Salasana hylätään sen jälkeen. Sitä ei tallenneta. Kieli ja vaalea tai tumma teema jäävät selaimeesi.",
      ],
    ],
    [
      "Koodit",
      [
        "Koodin voi lunastaa kuka tahansa. Se voi olla jo kuollut, kun kopioit sen. Emme lupaa, että Sony hyväksyy sen.",
      ],
    ],
    [
      "Muutokset",
      [
        "Tämä teksti voi muuttua. Vitsi Sonysta ei ole sopimus Sonyn kanssa.",
      ],
    ],
  ]),
  cs: doc("Podmínky", "Krátké a ne od Sony.", "Zpět na hub", [
    [
      "Není to Sony",
      [
        "Tahle stránka není Sony. Sony ji neudělalo, nečetlo a rozhodně neschválilo. PlayStation, PSN a loga patří jim.",
        "Když Sony pošle právníka, ať vysvětlí košík konzole. My vysvětlujeme jen tenhle web. Konzole zůstává Sony. Stránka ne.",
      ],
    ],
    [
      "Co to je",
      [
        "Nástroje zdarma v prohlížeči. Avatary, kódy, Title ID a karty, které jsou ještě zavřené. Stojí-li avatar nebo hra peníze, platíš PlayStation. Ne tady. Tady není pokladna.",
      ],
    ],
    [
      "Co se ukládá",
      [
        "Skoro nic.",
        "Jediná výjimka bude newsletter s kódy. Zatím není. Až bude, zadáš e-mail a kontinent. Mail přijde jen tehdy, když v tom regionu je nový kód avataru. Kvůli tomu se uloží adresa a kontinent. Nic jiného. Žádné heslo, žádné přihlášení k PSN, žádná platební data.",
        "Dokud newsletter není, neukládá se ani to.",
        "Webmail zkontroluje schránku u Purelymail. Heslo se potom zahodí. Neukládá se. Jazyk a světlý nebo tmavý vzhled zůstanou v prohlížeči.",
      ],
    ],
    [
      "Kódy",
      [
        "Kód může uplatnit kdokoli. Může být už mrtvý, když ho kopíruješ. Neslibujeme, že ho Sony přijme.",
      ],
    ],
    [
      "Změny",
      [
        "Tento text se může změnit. Vtip o Sony není smlouva se Sony.",
      ],
    ],
  ]),
  sk: doc("Podmienky", "Krátke a nie od Sony.", "Späť na hub", [
    [
      "Nie je to Sony",
      [
        "Táto stránka nie je Sony. Sony ju neurobilo, nečítalo a určite neschválilo. PlayStation, PSN a logá patria im.",
        "Ak Sony pošle právnika, nech vysvetlí košík konzoly. My vysvetľujeme len túto stránku. Konzola ostáva Sony. Stránka nie.",
      ],
    ],
    [
      "Čo to je",
      [
        "Nástroje zadarmo v prehliadači. Avatary, kódy, Title ID a karty, ktoré sú ešte zatvorené. Ak avatar alebo hra stojí peniaze, platíš PlayStation. Nie tu. Tu nie je pokladňa.",
      ],
    ],
    [
      "Čo sa ukladá",
      [
        "Skoro nič.",
        "Jediná výnimka bude newsletter s kódmi. Ešte nie je. Keď bude, zadáš e-mail a kontinent. Mail príde len vtedy, keď v tom regióne je nový kód avataru. Kvôli tomu sa uloží adresa a kontinent. Nič iné. Žiadne heslo, žiadne prihlásenie do PSN, žiadne platobné údaje.",
        "Kým newsletter nie je, neukladá sa ani to.",
        "Webmail skontroluje schránku v Purelymail. Heslo sa potom zahodí. Neukladá sa. Jazyk a svetlý alebo tmavý vzhľad ostanú v prehliadači.",
      ],
    ],
    [
      "Kódy",
      [
        "Kód môže uplatniť ktokoľvek. Môže byť už mŕtvy, keď ho kopíruješ. Nesľubujeme, že ho Sony prijme.",
      ],
    ],
    [
      "Zmeny",
      [
        "Tento text sa môže zmeniť. Vtip o Sony nie je zmluva so Sony.",
      ],
    ],
  ]),
  hu: doc("Feltételek", "Rövid, és nem a Sonyé.", "Vissza a hubra", [
    [
      "Nem a Sony",
      [
        "Ez az oldal nem a Sony. A Sony nem építette, nem olvasta, és biztosan nem hagyta jóvá. A PlayStation, a PSN és a logók az övék.",
        "Ha a Sony ügyvédet küld, elmagyarázhatja a konzol kosarát. Mi csak ezt az oldalt magyarázzuk. A konzol a Sonynál marad. Az oldal nem.",
      ],
    ],
    [
      "Mi ez",
      [
        "Ingyenes eszközök a böngészőben. Avatarok, kódok, Title ID-k, és kártyák, amelyek még zárva vannak. Ha egy avatar vagy játék pénzbe kerül, a PlayStationnek fizetsz. Nem ide. Itt nincs pénztár.",
      ],
    ],
    [
      "Mit tárolunk",
      [
        "Majdnem semmit.",
        "Az egyetlen kivétel a kódos hírlevél lesz. Még nincs meg. Ha meglesz, megadsz egy e-mailt és egy kontinenst. Csak akkor kapsz levelet, ha abban a régióban új avatarkód van. Ehhez a címet és a kontinenst tároljuk. Semmi mást. Nincs jelszó, nincs PSN-belépés, nincs fizetési adat.",
        "Amíg a hírlevél nincs meg, azt sem tároljuk.",
        "A webmail a Purelymailnél nézi a postaládát. A jelszót utána eldobjuk. Nem mentjük. A nyelv és a világos vagy sötét téma a böngésződben marad.",
      ],
    ],
    [
      "Kódok",
      [
        "Egy kódot bárki beválthat. Lehet, hogy már halott, amikor másolod. Nem ígérjük, hogy a Sony elfogadja.",
      ],
    ],
    [
      "Változások",
      [
        "Ez a szöveg változhat. A Sonyról szóló vicc nem szerződés a Sonyval.",
      ],
    ],
  ]),
  ro: doc("Termeni", "Scurt, și nu e de la Sony.", "Înapoi la hub", [
    [
      "Nu e Sony",
      [
        "Site-ul acesta nu este Sony. Sony nu l-a făcut, nu l-a citit și sigur nu l-a aprobat. PlayStation, PSN și siglele sunt ale lor.",
        "Dacă Sony trimite un avocat, poate explica coșul consolei. Noi explicăm doar site-ul. Consola rămâne la Sony. Site-ul nu.",
      ],
    ],
    [
      "Ce este",
      [
        "Unelte gratuite în browser. Avataruri, coduri, Title ID și carduri încă închise. Dacă un avatar sau un joc costă, plătești PlayStation. Nu aici. Aici nu e casă.",
      ],
    ],
    [
      "Ce se păstrează",
      [
        "Aproape nimic.",
        "Singura excepție va fi newsletterul de coduri. Încă nu există. Când va exista, dai un e-mail și un continent. Primești un mail doar când în regiunea aceea apare un cod nou de avatar. Pentru asta păstrăm adresa și continentul. Nimic altceva. Fără parolă, fără login PSN, fără date de plată.",
        "Până există newsletterul, nici asta nu se păstrează.",
        "Webmailul verifică cutia la Purelymail. Parola este aruncată după aceea. Nu este salvată. Limba și tema deschisă sau închisă rămân în browser.",
      ],
    ],
    [
      "Coduri",
      [
        "Un cod îl poate folosi oricine. Poate fi deja mort când îl copiezi. Nu promitem că Sony îl acceptă.",
      ],
    ],
    [
      "Modificări",
      [
        "Textul acesta se poate schimba. Gluma despre Sony nu este un contract cu Sony.",
      ],
    ],
  ]),
  bg: doc("Условия", "Кратко и не от Sony.", "Обратно към хъба", [
    [
      "Не е Sony",
      [
        "Този сайт не е Sony. Sony не го е направила, не го е чела и със сигурност не го е одобрила. PlayStation, PSN и логата са техни.",
        "Ако Sony прати адвокат, нека обясни количката на конзолата. Ние обясняваме само този сайт. Конзолата остава при Sony. Сайтът не.",
      ],
    ],
    [
      "Какво е това",
      [
        "Безплатни инструменти в браузъра. Аватари, кодове, Title ID и карти, които още са затворени. Ако аватар или игра струва пари, плащаш на PlayStation. Не тук. Тук няма каса.",
      ],
    ],
    [
      "Какво се пази",
      [
        "Почти нищо.",
        "Единственото изключение ще е бюлетинът с кодове. Още го няма. Когато го има, даваш имейл и континент. Получаваш писмо само когато в този регион има нов код за аватар. За това пазим адреса и континента. Нищо друго. Без парола, без вход в PSN, без данни за плащане.",
        "Докато бюлетинът не съществува, и това не се пази.",
        "Уеб пощата проверява кутията в Purelymail. Паролата после се изхвърля. Не се записва. Езикът и светлата или тъмната тема остават в браузъра.",
      ],
    ],
    [
      "Кодове",
      [
        "Код може да активира всеки. Може вече да е мъртъв, докато го копираш. Не обещаваме, че Sony ще го приеме.",
      ],
    ],
    [
      "Промени",
      [
        "Този текст може да се промени. Шегата за Sony не е договор със Sony.",
      ],
    ],
  ]),
  hr: doc("Uvjeti", "Kratko i nije od Sonyja.", "Natrag na hub", [
    [
      "Nije Sony",
      [
        "Ova stranica nije Sony. Sony je nije napravio, nije je pročitao i sigurno je nije odobrio. PlayStation, PSN i logotipi su njihovi.",
        "Ako Sony pošalje odvjetnika, neka objasni košaricu konzole. Mi objašnjavamo samo ovu stranicu. Konzola ostaje Sonyju. Stranica ne.",
      ],
    ],
    [
      "Što je ovo",
      [
        "Besplatni alati u pregledniku. Avatari, kodovi, Title ID i kartice koje su još zatvorene. Ako avatar ili igra košta, plaćaš PlayStation. Ne ovdje. Ovdje nema blagajne.",
      ],
    ],
    [
      "Što se sprema",
      [
        "Gotovo ništa.",
        "Jedina iznimka bit će newsletter s kodovima. Još ne postoji. Kad postoji, daješ e-mail i kontinent. Mail dobiješ samo kad u toj regiji postoji novi kod avatara. Za to se spremaju adresa i kontinent. Ništa drugo. Bez lozinke, bez PSN prijave, bez podataka o plaćanju.",
        "Dok newsletter ne postoji, ni to se ne sprema.",
        "Webmail provjerava sandučić na Purelymailu. Lozinka se potom baca. Ne sprema se. Jezik i svijetla ili tamna tema ostaju u pregledniku.",
      ],
    ],
    [
      "Kodovi",
      [
        "Kod može iskoristiti bilo tko. Može već biti mrtav kad ga kopiraš. Ne obećavamo da će ga Sony prihvatiti.",
      ],
    ],
    [
      "Promjene",
      [
        "Ovaj tekst se može promijeniti. Šala o Sonyju nije ugovor sa Sonyjem.",
      ],
    ],
  ]),
  el: doc("Όροι", "Σύντομα, και όχι από τη Sony.", "Πίσω στο hub", [
    [
      "Όχι η Sony",
      [
        "Αυτό το site δεν είναι η Sony. Η Sony δεν το έφτιαξε, δεν το διάβασε και σίγουρα δεν το ενέκρινε. Τα PlayStation, PSN και τα λογότυπα είναι δικά τους.",
        "Αν η Sony στείλει δικηγόρο, ας εξηγήσει το καλάθι της κονσόλας. Εμείς εξηγούμε μόνο αυτό το site. Η κονσόλα μένει στη Sony. Το site όχι.",
      ],
    ],
    [
      "Τι είναι",
      [
        "Δωρεάν εργαλεία στον browser. Avatar, κωδικοί, Title ID και κάρτες που είναι ακόμη κλειστές. Αν ένα avatar ή ένα παιχνίδι κοστίζει, πληρώνεις την PlayStation. Όχι εδώ. Εδώ δεν υπάρχει ταμείο.",
      ],
    ],
    [
      "Τι αποθηκεύεται",
      [
        "Σχεδόν τίποτα.",
        "Η μόνη εξαίρεση θα είναι το newsletter κωδικών. Δεν υπάρχει ακόμη. Όταν υπάρξει, δίνεις email και ήπειρο. Παίρνεις mail μόνο όταν σε αυτή την περιοχή υπάρχει νέος κωδικός avatar. Για αυτό κρατάμε τη διεύθυνση και την ήπειρο. Τίποτα άλλο. Όχι κωδικό, όχι σύνδεση PSN, όχι στοιχεία πληρωμής.",
        "Μέχρι να υπάρξει το newsletter, ούτε αυτό αποθηκεύεται.",
        "Το webmail ελέγχει το γραμματοκιβώτιο στην Purelymail. Ο κωδικός πετιέται μετά. Δεν αποθηκεύεται. Η γλώσσα και το ανοιχτό ή σκούρο θέμα μένουν στον browser σου.",
      ],
    ],
    [
      "Κωδικοί",
      [
        "Έναν κωδικό μπορεί να τον εξαργυρώσει ο καθένας. Μπορεί να είναι ήδη νεκρός όταν τον αντιγράφεις. Δεν υποσχόμαστε ότι η Sony θα τον δεχτεί.",
      ],
    ],
    [
      "Αλλαγές",
      [
        "Αυτό το κείμενο μπορεί να αλλάξει. Το αστείο για τη Sony δεν είναι συμβόλαιο με τη Sony.",
      ],
    ],
  ]),
  tr: doc("Koşullar", "Kısa, ve Sony’den değil.", "Hub’a dön", [
    [
      "Sony değil",
      [
        "Bu site Sony değil. Sony bunu yapmadı, okumadı ve kesinlikle onaylamadı. PlayStation, PSN ve logolar onlara ait.",
        "Sony bir avukat gönderirse, konsolun sepetini o açıklasın. Biz sadece bu siteyi açıklarız. Konsol Sony’de kalır. Site kalmaz.",
      ],
    ],
    [
      "Bu nedir",
      [
        "Tarayıcıda ücretsiz araçlar. Avatarlar, kodlar, Title ID’ler ve hâlâ kapalı kartlar. Bir avatar ya da oyun paraysa, PlayStation’a ödersin. Buraya değil. Burada kasa yok.",
      ],
    ],
    [
      "Ne saklanır",
      [
        "Neredeyse hiçbir şey.",
        "Tek istisna kod bülteni olacak. Henüz yok. Olduğunda bir e-posta ve bir kıta verirsin. Yalnızca o bölgede yeni bir avatar kodu olduğunda mail alırsın. Bunun için adres ve kıta saklanır. Başka bir şey yok. Şifre yok, PSN girişi yok, ödeme verisi yok.",
        "Bülten yokken bu da saklanmaz.",
        "Webmail, posta kutusunu Purelymail’de kontrol eder. Şifre sonra atılır. Kaydedilmez. Dil ve açık ya da koyu tema tarayıcıda kalır.",
      ],
    ],
    [
      "Kodlar",
      [
        "Bir kodu herkes kullanabilir. Kopyaladığında çoktan ölü olabilir. Sony’nin kabul edeceğini vaat etmiyoruz.",
      ],
    ],
    [
      "Değişiklikler",
      [
        "Bu metin değişebilir. Sony şakası Sony ile bir sözleşme değildir.",
      ],
    ],
  ]),
  ru: doc("Условия", "Коротко и не от Sony.", "Назад к хабу", [
    [
      "Не Sony",
      [
        "Этот сайт не Sony. Sony его не делала, не читала и точно не одобряла. PlayStation, PSN и логотипы принадлежат им.",
        "Если Sony пришлёт юриста, пусть объясняет корзину консоли. Мы объясняем только этот сайт. Консоль остаётся у Sony. Сайт нет.",
      ],
    ],
    [
      "Что это",
      [
        "Бесплатные инструменты в браузере. Аватары, коды, Title ID и карточки, которые ещё закрыты. Если аватар или игра стоят денег, платишь PlayStation. Не здесь. Здесь нет кассы.",
      ],
    ],
    [
      "Что хранится",
      [
        "Почти ничего.",
        "Единственное исключение будет рассылка кодов. Её ещё нет. Когда будет, указываешь почту и континент. Письмо приходит только если в этом регионе есть новый код аватара. Для этого хранятся адрес и континент. Больше ничего. Ни пароля, ни входа в PSN, ни платёжных данных.",
        "Пока рассылки нет, это тоже не хранится.",
        "Веб-почта проверяет ящик в Purelymail. Пароль после этого выбрасывается. Он не сохраняется. Язык и светлая или тёмная тема остаются в браузере.",
      ],
    ],
    [
      "Коды",
      [
        "Код может активировать кто угодно. Он может быть уже мёртв, когда ты его копируешь. Мы не обещаем, что Sony его примет.",
      ],
    ],
    [
      "Изменения",
      [
        "Этот текст может измениться. Шутка про Sony не договор с Sony.",
      ],
    ],
  ]),
  uk: doc("Умови", "Коротко і не від Sony.", "Назад до хабу", [
    [
      "Не Sony",
      [
        "Цей сайт не Sony. Sony його не робила, не читала і точно не схвалювала. PlayStation, PSN і логотипи належать їм.",
        "Якщо Sony надішле юриста, хай пояснює кошик консолі. Ми пояснюємо лише цей сайт. Консоль лишається в Sony. Сайт ні.",
      ],
    ],
    [
      "Що це",
      [
        "Безкоштовні інструменти в браузері. Аватари, коди, Title ID і картки, які ще закриті. Якщо аватар чи гра коштують грошей, платиш PlayStation. Не тут. Тут немає каси.",
      ],
    ],
    [
      "Що зберігається",
      [
        "Майже нічого.",
        "Єдиний виняток буде розсилка кодів. Її ще немає. Коли буде, вказуєш пошту і континент. Лист приходить лише тоді, коли в цьому регіоні є новий код аватара. Для цього зберігаються адреса і континент. Більше нічого. Ні пароля, ні входу в PSN, ні платіжних даних.",
        "Поки розсилки немає, це теж не зберігається.",
        "Вебпошта перевіряє скриньку в Purelymail. Пароль після цього викидається. Він не зберігається. Мова і світла чи темна тема лишаються в браузері.",
      ],
    ],
    [
      "Коди",
      [
        "Код може активувати будь-хто. Він може бути вже мертвий, коли ти його копіюєш. Ми не обіцяємо, що Sony його прийме.",
      ],
    ],
    [
      "Зміни",
      [
        "Цей текст може змінитися. Жарт про Sony не є договором із Sony.",
      ],
    ],
  ]),
  ar: doc("الشروط", "قصيرة، وليست من سوني.", "العودة إلى الصفحة", [
    [
      "ليست سوني",
      [
        "هذا الموقع ليس سوني. سوني لم تبنه ولم تقرأه وبالتأكيد لم توافق عليه. بلايستيشن وPSN والشعارات لهم.",
        "إذا أرسلت سوني محاميًا، فليشرح سلة التسوق في الجهاز. نحن نشرح هذا الموقع فقط. الجهاز يبقى لهم. الموقع لا.",
      ],
    ],
    [
      "ما هذا",
      [
        "أدوات مجانية في المتصفح. صور رمزية وأكواد ومعرّفات وبطاقات ما زالت مغلقة. إذا كانت الصورة أو اللعبة بمال، تدفع لبلايستيشن. ليس هنا. لا يوجد صندوق دفع.",
      ],
    ],
    [
      "ماذا يُحفظ",
      [
        "لا شيء تقريبًا.",
        "الاستثناء الوحيد سيكون نشرة الأكواد. ليست موجودة بعد. عندما توجد، تعطينا بريدًا وقارة. تصلك رسالة فقط عندما يظهر كود أفاتار جديد في تلك المنطقة. لذلك نحتفظ بالعنوان والقارة. لا شيء غير ذلك. لا كلمة مرور، ولا دخول PSN، ولا بيانات دفع.",
        "إلى أن توجد النشرة، لا نحتفظ بذلك أيضًا.",
        "البريد يفحص الصندوق عند Purelymail. كلمة المرور تُرمى بعد ذلك. لا تُحفظ. اللغة والمظهر الفاتح أو الداكن يبقيان في متصفحك.",
      ],
    ],
    [
      "الأكواد",
      [
        "أي شخص يستطيع استخدام الكود. قد يكون ميتًا قبل أن تنسخه. لا نعد بأن سوني ستقبله.",
      ],
    ],
    [
      "التغييرات",
      [
        "هذا النص قد يتغير. المزاح عن سوني ليس عقدًا مع سوني.",
      ],
    ],
  ]),
  he: doc("תנאים", "קצר, ולא מסוני.", "חזרה לדף הראשי", [
    [
      "לא סוני",
      [
        "האתר הזה אינו סוני. סוני לא בנתה אותו, לא קראה אותו ובטח לא אישרה אותו. פלייסטיישן, PSN והסמלים שייכים להם.",
        "אם סוני שולחת עורך דין, הוא יכול להסביר את עגלת הקונסולה. אנחנו מסבירים רק את האתר. הקונסולה נשארת אצל סוני. האתר לא.",
      ],
    ],
    [
      "מה זה",
      [
        "כלים חינם בדפדפן. אווטארים, קודים, Title ID וכרטיסים שעדיין סגורים. אם אווטאר או משחק עולים כסף, משלמים לפלייסטיישן. לא כאן. אין כאן קופה.",
      ],
    ],
    [
      "מה נשמר",
      [
        "כמעט כלום.",
        "החריג היחיד יהיה ניוזלטר הקודים. הוא עוד לא קיים. כשיהיה, נותנים כתובת דוא״ל ויבשת. מקבלים מייל רק כשיש קוד אווטאר חדש באזור הזה. בשביל זה נשמרים הכתובת והיבשת. שום דבר אחר. בלי סיסמה, בלי כניסה ל-PSN, בלי נתוני תשלום.",
        "עד שהניוזלטר קיים, גם זה לא נשמר.",
        "הוובמייל בודק את התיבה ב-Purelymail. הסיסמה נזרקת אחר כך. היא לא נשמרת. שפה ומצב בהיר או כהה נשארים בדפדפן.",
      ],
    ],
    [
      "קודים",
      [
        "כל אחד יכול לממש קוד. הוא יכול כבר להיות מת כשמעתיקים אותו. אנחנו לא מבטיחים שסוני תקבל אותו.",
      ],
    ],
    [
      "שינויים",
      [
        "הטקסט הזה יכול להשתנות. הבדיחה על סוני אינה חוזה עם סוני.",
      ],
    ],
  ]),
  ja: doc("利用規約", "短い。ソニーのものではない。", "ハブに戻る", [
    [
      "ソニーではない",
      [
        "このサイトはソニーではない。ソニーは作っていないし、読んでいないし、もちろん承認もしていない。PlayStation、PSN、ロゴはソニーのもの。",
        "ソニーが弁護士を送るなら、その人は本体のカートを説明すればいい。私たちが説明するのはこのサイトだけ。本体はソニーのもの。サイトは違う。",
      ],
    ],
    [
      "これは何か",
      [
        "ブラウザで使える無料の道具。アバター、コード、タイトルID、まだ閉じているカード。アバターやゲームが有料なら、払う相手はPlayStation。ここではない。ここにレジはない。",
      ],
    ],
    [
      "保存するもの",
      [
        "ほとんど何もない。",
        "例外はコードのメール案内だけ。まだない。できたときはメールアドレスと大陸を入れる。その地域に新しいアバターコードがあるときだけメールが来る。そのために住所と大陸だけを残す。それ以外は残さない。パスワードも、PSNのログインも、支払い情報もない。",
        "案内ができるまでは、それも保存しない。",
        "ウェブメールはPurelymailの受信箱を見る。パスワードはそのあと捨てる。保存しない。言語と明るい暗いはブラウザに残る。",
      ],
    ],
    [
      "コード",
      [
        "コードは誰でも使える。コピーした時点ですでに死んでいることがある。ソニーが受け取るとは約束しない。",
      ],
    ],
    [
      "変更",
      [
        "この文章は変わることがある。ソニーへの冗談は、ソニーとの契約ではない。",
      ],
    ],
  ]),
  ko: doc("이용약관", "짧다. 소니 것이 아니다.", "허브로", [
    [
      "소니가 아니다",
      [
        "이 사이트는 소니가 아니다. 소니가 만들지 않았고, 읽지 않았고, 승인하지도 않았다. PlayStation, PSN, 로고는 그들 것이다.",
        "소니가 변호사를 보내면, 그 사람이 본체의 장바구니를 설명하면 된다. 우리는 이 사이트만 설명한다. 본체는 소니 것. 사이트는 아니다.",
      ],
    ],
    [
      "이게 뭔가",
      [
        "브라우저에서 쓰는 무료 도구. 아바타, 코드, 타이틀 ID, 아직 닫힌 카드. 아바타나 게임이 유료면 PlayStation에 낸다. 여기가 아니다. 여기엔 계산대가 없다.",
      ],
    ],
    [
      "무엇을 저장하나",
      [
        "거의 아무것도.",
        "유일한 예외는 코드 소식 메일이다. 아직 없다. 생기면 이메일과 대륙을 적는다. 그 지역에 새 아바타 코드가 있을 때만 메일이 온다. 그때 주소와 대륙만 남긴다. 그 외에는 없다. 비밀번호도, PSN 로그인도, 결제 정보도 없다.",
        "소식이 생기기 전에는 그것도 저장하지 않는다.",
        "웹메일은 Purelymail 편지함을 확인한다. 비밀번호는 그 다음 버린다. 저장하지 않는다. 언어와 밝기 설정은 브라우저에 남는다.",
      ],
    ],
    [
      "코드",
      [
        "코드는 누구나 쓸 수 있다. 복사할 때 이미 죽었을 수 있다. 소니가 받아 준다고 약속하지 않는다.",
      ],
    ],
    [
      "변경",
      [
        "이 글은 바뀔 수 있다. 소니에 대한 농담은 소니와의 계약이 아니다.",
      ],
    ],
  ]),
  zh: doc("条款", "很短，而且不是索尼写的。", "回到首页", [
    [
      "不是索尼",
      [
        "这个网站不是索尼。索尼没做它，没读它，更没批准它。PlayStation、PSN 和标志是他们的。",
        "如果索尼派律师来，律师可以去解释主机的购物车。我们只解释这个网站。主机还是索尼的。网站不是。",
      ],
    ],
    [
      "这是什么",
      [
        "浏览器里的免费工具。头像、兑换码、Title ID，还有还没打开的卡片。头像或游戏要钱，就付给 PlayStation。不是这里。这里没有收银台。",
      ],
    ],
    [
      "会保存什么",
      [
        "几乎什么都不保存。",
        "唯一的例外是兑换码邮件。现在还没有。有了以后，你留下邮箱和一个洲。只有那个地区出现新的头像兑换码时，才会发一封邮件。为此只保存邮箱和洲。别的都没有。没有密码，没有 PSN 登录，没有付款资料。",
        "邮件功能还没有的时候，这些也不保存。",
        "网页邮箱只是到 Purelymail 查看邮箱。密码用完就丢掉，不保存。语言和明暗主题留在你的浏览器里。",
      ],
    ],
    [
      "兑换码",
      [
        "兑换码谁都能用。你复制的时候它可能已经失效。我们不保证索尼会收下。",
      ],
    ],
    [
      "更改",
      [
        "这段文字可能会改。拿索尼开玩笑，不是和索尼签的合同。",
      ],
    ],
  ]),
  "zh-Hant": doc("條款", "很短，而且不是索尼寫的。", "回到首頁", [
    [
      "不是索尼",
      [
        "這個網站不是索尼。索尼沒做它，沒讀它，更沒批准它。PlayStation、PSN 和標誌是他們的。",
        "如果索尼派律師來，律師可以去解釋主機的購物車。我們只解釋這個網站。主機還是索尼的。網站不是。",
      ],
    ],
    [
      "這是什麼",
      [
        "瀏覽器裡的免費工具。頭像、兌換碼、Title ID，還有還沒打開的卡片。頭像或遊戲要錢，就付給 PlayStation。不是這裡。這裡沒有收銀台。",
      ],
    ],
    [
      "會保存什麼",
      [
        "幾乎什麼都不保存。",
        "唯一的例外是兌換碼郵件。現在還沒有。有了以後，你留下郵箱和一個洲。只有那個地區出現新的頭像兌換碼時，才會發一封郵件。為此只保存郵箱和洲。別的都沒有。沒有密碼，沒有 PSN 登入，沒有付款資料。",
        "郵件功能還沒有的時候，這些也不保存。",
        "網頁郵箱只是到 Purelymail 查看郵箱。密碼用完就丟掉，不保存。語言和明暗主題留在你的瀏覽器裡。",
      ],
    ],
    [
      "兌換碼",
      [
        "兌換碼誰都能用。你複製的時候它可能已經失效。我們不保證索尼會收下。",
      ],
    ],
    [
      "更改",
      [
        "這段文字可能會改。拿索尼開玩笑，不是和索尼簽的合約。",
      ],
    ],
  ]),
  th: doc("ข้อกำหนด", "สั้น และไม่ใช่ของ Sony", "กลับไปหน้าหลัก", [
    [
      "ไม่ใช่ Sony",
      [
        "ไซต์นี้ไม่ใช่ Sony. Sony ไม่ได้สร้าง ไม่ได้อ่าน และไม่ได้อนุมัติ. PlayStation, PSN และโลโก้เป็นของเขา.",
        "ถ้า Sony ส่งทนายมา ให้คนนั้นอธิบายตะกร้าของเครื่อง. เราอธิบายแค่เว็บนี้. เครื่องยังเป็นของ Sony. เว็บไม่ใช่.",
      ],
    ],
    [
      "นี่คืออะไร",
      [
        "เครื่องมือฟรีในเบราว์เซอร์. อวตาร โค้ด Title ID และการ์ดที่ยังไม่เปิด. ถ้าอวตารหรือเกมมีราคา จ่ายให้ PlayStation. ไม่ใช่ที่นี่. ที่นี่ไม่มีแคชเชียร์.",
      ],
    ],
    [
      "อะไรที่ถูกเก็บ",
      [
        "แทบไม่เก็บอะไร.",
        "ข้อยกเว้นเดียวคือจดหมายโค้ด. ยังไม่มี. พอมีแล้ว ให้ใส่อีเมลและทวีป. จะได้เมลก็ต่อเมื่อภูมิภาคนั้นมีโค้ดอวตารใหม่. เก็บแค่อีเมลกับทวีป. ไม่มีอย่างอื่น. ไม่มีรหัสผ่าน ไม่มีล็อกอิน PSN ไม่มีข้อมูลจ่ายเงิน.",
        "จนกว่าจดหมายนั้นจะมี ก็ยังไม่เก็บสิ่งนี้.",
        "เว็บเมลตรวจกล่องที่ Purelymail. รหัสผ่านถูกทิ้งหลังใช้. ไม่ถูกบันทึก. ภาษาและธีมสว่างหรือมืดอยู่ในเบราว์เซอร์.",
      ],
    ],
    [
      "โค้ด",
      [
        "ใครก็ใช้โค้ดได้. ตอนคัดลอกมันอาจหมดอายุแล้ว. เราไม่สัญญาว่า Sony จะรับ.",
      ],
    ],
    [
      "การเปลี่ยนแปลง",
      [
        "ข้อความนี้อาจเปลี่ยน. มุกเกี่ยวกับ Sony ไม่ใช่สัญญากับ Sony.",
      ],
    ],
  ]),
  id: doc("Ketentuan", "Singkat, dan bukan dari Sony.", "Kembali ke hub", [
    [
      "Bukan Sony",
      [
        "Situs ini bukan Sony. Sony tidak membuatnya, tidak membacanya, dan tentu tidak menyetujuinya. PlayStation, PSN, dan logo milik mereka.",
        "Kalau Sony mengirim pengacara, biar dia yang menjelaskan keranjang konsol. Kami hanya menjelaskan situs ini. Konsol tetap milik Sony. Situsnya tidak.",
      ],
    ],
    [
      "Apa ini",
      [
        "Alat gratis di browser. Avatar, kode, Title ID, dan kartu yang masih tertutup. Kalau avatar atau game berbayar, kamu bayar ke PlayStation. Bukan di sini. Di sini tidak ada kasir.",
      ],
    ],
    [
      "Apa yang disimpan",
      [
        "Hampir tidak ada.",
        "Satu-satunya pengecualian nanti adalah newsletter kode. Belum ada. Kalau sudah ada, kamu memberi email dan benua. Email hanya datang kalau ada kode avatar baru di wilayah itu. Yang disimpan hanya alamat dan benua. Tidak ada yang lain. Tidak ada kata sandi, tidak ada login PSN, tidak ada data pembayaran.",
        "Selama newsletter belum ada, itu juga tidak disimpan.",
        "Webmail memeriksa kotak di Purelymail. Kata sandi dibuang setelah itu. Tidak disimpan. Bahasa dan tema terang atau gelap tinggal di browser.",
      ],
    ],
    [
      "Kode",
      [
        "Siapa saja bisa menukar kode. Kode bisa sudah mati saat disalin. Kami tidak menjanjikan Sony akan menerimanya.",
      ],
    ],
    [
      "Perubahan",
      [
        "Teks ini bisa berubah. Lelucon tentang Sony bukan kontrak dengan Sony.",
      ],
    ],
  ]),
  ms: doc("Terma", "Pendek, dan bukan dari Sony.", "Kembali ke hub", [
    [
      "Bukan Sony",
      [
        "Laman ini bukan Sony. Sony tidak membinanya, tidak membacanya, dan tentu tidak meluluskannya. PlayStation, PSN dan logo milik mereka.",
        "Jika Sony hantar peguam, biar dia terangkan troli konsol. Kami hanya terangkan laman ini. Konsol kekal milik Sony. Laman tidak.",
      ],
    ],
    [
      "Apa ini",
      [
        "Alat percuma dalam pelayar. Avatar, kod, Title ID, dan kad yang masih tertutup. Jika avatar atau permainan berbayar, bayar kepada PlayStation. Bukan di sini. Di sini tiada kaunter.",
      ],
    ],
    [
      "Apa yang disimpan",
      [
        "Hampir tiada.",
        "Satu-satunya pengecualian ialah surat berita kod. Belum ada. Apabila ada, anda beri e-mel dan benua. E-mel hanya dihantar apabila ada kod avatar baharu di rantau itu. Yang disimpan hanya alamat dan benua. Tiada yang lain. Tiada kata laluan, tiada log masuk PSN, tiada data bayaran.",
        "Selagi surat berita belum ada, itu juga tidak disimpan.",
        "Webmail menyemak peti di Purelymail. Kata laluan dibuang selepas itu. Ia tidak disimpan. Bahasa dan tema cerah atau gelap kekal dalam pelayar.",
      ],
    ],
    [
      "Kod",
      [
        "Sesiapa boleh menebus kod. Ia mungkin sudah mati semasa disalin. Kami tidak janji Sony akan menerimanya.",
      ],
    ],
    [
      "Perubahan",
      [
        "Teks ini boleh berubah. Jenaka tentang Sony bukan kontrak dengan Sony.",
      ],
    ],
  ]),
  vi: doc("Điều khoản", "Ngắn, và không phải của Sony.", "Về trang chính", [
    [
      "Không phải Sony",
      [
        "Trang này không phải Sony. Sony không làm nó, không đọc nó, và chắc chắn không duyệt nó. PlayStation, PSN và logo là của họ.",
        "Nếu Sony gửi luật sư, người đó cứ giải thích giỏ hàng của máy. Chúng tôi chỉ giải thích trang này. Máy vẫn là của Sony. Trang thì không.",
      ],
    ],
    [
      "Đây là gì",
      [
        "Công cụ miễn phí trên trình duyệt. Avatar, mã, Title ID, và các thẻ còn đóng. Avatar hoặc game có giá thì trả cho PlayStation. Không phải ở đây. Ở đây không có quầy thu tiền.",
      ],
    ],
    [
      "Cái gì được lưu",
      [
        "Gần như không có gì.",
        "Ngoại lệ duy nhất sẽ là thư mã. Chưa có. Khi có, bạn để lại email và một châu lục. Chỉ nhận thư khi vùng đó có mã avatar mới. Lúc đó chỉ lưu địa chỉ và châu lục. Không gì khác. Không mật khẩu, không đăng nhập PSN, không dữ liệu thanh toán.",
        "Khi thư đó chưa có, những thứ này cũng không được lưu.",
        "Webmail chỉ kiểm tra hộp thư ở Purelymail. Mật khẩu bị bỏ sau đó. Không được lưu. Ngôn ngữ và giao diện sáng hoặc tối nằm trong trình duyệt.",
      ],
    ],
    [
      "Mã",
      [
        "Ai cũng dùng được mã. Lúc chép nó có thể đã chết. Chúng tôi không hứa Sony sẽ nhận.",
      ],
    ],
    [
      "Thay đổi",
      [
        "Đoạn này có thể đổi. Câu đùa về Sony không phải hợp đồng với Sony.",
      ],
    ],
  ]),
};
