
// fanger de relevante HTML elementer
let tabBtns = document.querySelectorAll('.tabsBtnContainer button');
let tabContents = document.querySelectorAll('.tabContent');


//gemmmer det relevante indhold i et array som skal bruge til innerHTML
let tabContent = [
    `
    <div class="tabTextContent">
        <h2>HISTORIE</h2>
        <p>
            The Boulevard Socialclub Tattoo Parlor har eksisteret siden
            2011 og er nu efterhånden en af de ældste tatoveringsbutikker
            i Aalborg. Vores fokus de sidste 13 år har altid været at
            levere et godt stykke håndværk, skabe en behagelig oplevelse
            for vores kunder, hvor alle føler sig velkommen og opretholde
            den høje hygiejnestandard, man forventer fra en professionel
            tatoveringsbutik.
        </p>
        <p>
            Med over 40 års samlet erfaring i branchen er du altid i
            kyndige hænder hos os. Uanset om du drømmer om et fuldt sleeve
            eller en minimalistisk rose, står vores seks tatovører klar
            til at imødekomme dine ønsker. Vi dækker en bred vifte af
            <a href="./stilguide">stilarter</a> og gør vores bedste for at
            sikre, at du får en tatovering, du bliver glad for.
        </p>
        <p>
            Udover vores <a href="./kunstenere">tatovører </a>består vores
            fulde team af: Thomas (Manager) og Brian (ejer/stifter)
        </p>
    </div>
    <div class="tabImg">
        <img src="../assets/images/historieGruppebillede.png" alt="gruppebillede af ansatte hos The Boulevard Tattoo i Aalborg">
    </div>
    `,
    `
    <div class="tabTextContent">
        <h2>HYGIEJNE</h2>
        <p>Vi har alle fuldført og bestået det påkrævede hygiejnekursus fra Sikkerhedsstyrelsen, og det betyder at vi ved lige præcis hvad vi skal gøre, for at passe så godt på dig og din hud som muligt i forbindelse med en tatovering.</p>
        <p>Derudover er både butikken og alle tatovører godkendt og registreret hos Sikkerhedsstyrelse. De kommer uanmeldt i ny og næ, og sikrer sig at vi lever op til de krav vi bliver stillet både med rengøring, klargøringsprocedure, opsætning af arbejdsstation, opbevaring af udstyr, farver og alt andet man kunne forestille sig. På <a href="https://www.sik.dk/tattooregister" target="_blank">Sikkerhedsstyrelsens hjemmmeside</a>, kan du selv gå ind og tjekke om din tatovør er godkendt og registreret. Hvis du har spørgsmål kan du altid kigge i vores <a href="./faq">FAQ</a> eller skrive til os via vores kontaktformular som du finder ude til højre.</p>
    </div>
    <div class="tabImg">
        <img src="../assets/images/hygiejne.jpg" alt="Billede af steril arbejdsstation">
    </div>
    `,
    `
    <div class="tabTextContent">
        <h2>AWARDS</h2>
        <p>Igennem årene har vi været så heldige at vinde priser for vores arbejde, rundt omkring i landet til forskellige messer. Her er der oftest et panel af respekterede tatovører fra hele landet, som dømmer tatoveringer i konkurrencen efter både tekniske og kunstneriske evner.</p>
        <p>Priserne strækker sig over forskellige kategorier, og vi er meget taknemmelige og stolte af anerkendelsen fra kollegaer i branchen.</p>
    </div>
    <div class="tabImg">
        <img src="../assets/images/awards1.jpg" alt="Billede fra The Boulevard Tattoo med awards">
    </div>
    `
];

//forEach loop som tilføjer eventListener.
//Index gør det muligt at tilgå det korrekte indhold fra tabContent array og derfor kan det sættes med innerHTML til at matche den korrekte knap.
tabBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        // Sikrer at tabs er inaktive, og derfor vises "historie" tab som default fordi den er hardcoded.
        tabBtns.forEach(otherBtn => {
            otherBtn.classList.remove('activeTab');
            otherBtn.classList.add('inactiveTab');
        });
        //tildeler den korrekt class til inactive og active tabs
        btn.classList.add('activeTab');
        btn.classList.remove('inactiveTab');

        //Gemmer tab indhold
        tabContents.forEach(content => {
            content.style.display = 'none';
        });


        //Opdatere og viser the korrekte indhold, til den clicker tab
        tabContents[index].style.display = 'grid';
        tabContents[index].innerHTML = tabContent[index];
    });
});

//simluerer et click event på den tab med tilhørende indhold som har plads 0 i index, hvilket er historie. Derfor er den aktiv som default når siden loades. 
tabBtns[0].click();