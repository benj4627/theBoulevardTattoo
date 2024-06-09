
// fanger de relevante HTML elementer
let tabBtns = document.querySelectorAll('.tabsBtnContainer button');
let tabContents = document.querySelectorAll('.tabContent');


//declares og tildeler det relevante indhold i et array, til en variabel, som skal bruges til innerHTML
let tabContent = [
    `
    <div class="tabTextContent">
    <h2>FØR</h2>
    <p>
    Det er ikke nogen raketvidenskab at få en tatovering, men derfor er der stadig ting du bør være forberet på inden du skal tatoveres, især hvis det er din første tatovering.
    </p>
    <h3>Klar til at blive tatoveret?</h3>
    <p>
    Vi vil bare lige sikre os, at alt er på plads, før vi går i gang med at tatovere dig skal du være fyldt 18 år.
    </p>
    <h3>Sunde forhold</h3>
    <p>
    Vi igver dig et lille spørgeskema efter din første konsultation somsikrer at du lider af nogle sygdomme eller tager noget medicin som vil kunne føre til nogel komplikationer.
    </p>
    <h3>Ideer og inspiration</h3>
    <p>
    Inden vi starter, er det en god idé at have nogenlunde styr på, hvad du vil have lavet. Det kan være en idé, et billede eller bare en følelse. Og hvis du ikke helt kan sætte ord på det, er et par skitser eller billeder også fine. Så skal du bare sende det til os i bookingformularen og så kører tager vi den derfra.
    </p>
    <h3>Stilvalg</h3>
    <p>
    Når det kommer til tatoveringer, handler det om dig og din stil. Vi har masser af forskellige stilarter at vælge imellem, så du kan være sikker på at finde noget, der passer til dig. Og hvis du har brug for lidt hjælp, kan du bruge vores stil-guide som inspiration!
    </p>
    <h3>Kontakt os</h3>
    <p>
    Du er altid velkommen til at kigge forbi vores studio og snakke med os ansigt til ansigt. Den mest effektive måde at komme i gang er ved at bruge vores bookingformular. Du kan også skrive eller ringe til os, så finder vi sammen ud af, hvad du har brug for. Vi glæder os til at høre fra dig!
    </p>
    <h3>Betaling og ændringer</h3>
    <p>
    For at sikre at alt går glat, beder vi om et lille depositum, når du booker din tid. Og hvis noget kommer i vejen, så bare rolig - bare du kontakter os i god tid på 98113030, så finder vi en anden dag, der passer dig bedre.
    </p>
  </div> 
    `,
    `
     <div class="tabTextContent">
                    <h2>Under</h2>
                    <p>
                        Her er nogle af de ting du kan gøre og bør undgå for at få den bedste oplevelse når du skal ind og tatoveres.
                    </p>
                    <h3>På selve dagen</h3>
                    <p>
                        Sørg for at være veludhvilet på dagen for din tatovering. Det kan være lidt hårdt for kroppen, så det er vigtigt, at du passer godt på dig selv. Derudover skal du sørge for at spise og drikke rigeligt inden din aftale.
                    </p>
                    <h3>Husk at medbringe</h3>
                    <p>
                        Kontanter, betalingskort eller gavekort til betaling. Id; sygesikring, kørekort eller pas. Tag noget behageligt tøj på som er praktisk ift. der hvor du skal tatoveres. Tag gerne en lille bid mad med og noget af drikke.
                    </p>
                    <h3>Alkohol</h3>
                    <p>
                        Selvfølgelig er alkohol og stoffer no-go før din aftale. Og husk at afsætte nok tid til sessionen; det skal ikke være stressende - især ikke for dig.
                    </p>
                    <h3>Tag gerne en ven med</h3>
                    <p>
                        Du må gerne tage en ven med til din aftale, de kan bare ikke være med ved selve tatoveringsstationen af hygiejnemæssige årsager.
                    </p>
                  </div> 
    `,
    `
    <div class="tabTextContent">
                    <h2>Efter</h2>
                    <p>
                    For at sikre at din nye tatovering heler uden problemer og holder sig i den bedste stand i lang tid, giver vi her nogle tips til hvordan du kan passe på den.
                    </p>
                    <h3>Første step</h3>
                    <p>
                    Et par timer efter din aftale kan du tage bandagen af for første gang. Vask din tatovering forsigtigt og påfør derefter lidt creme.
                    </p>
                    <h3>Helingsforløbet</h3>
                    <p>
                    I løbet af den første uge efter din tatovering skal du vaske og fugte den med creme 2-3 gange om dagen. Vi anbefaler denne creme. Helingen kan variere afhængigt af din hudtype, størrelsen på tatoveringen og hvor på kroppen den er placeret. Efter tre til fire uger bør din tatovering være helt helet.
                    </p>
                    <h3>Vask</h3>
                    <p>
                    Brug vand ved en behagelig temperatur og undgå at gnide for hårdt. Du kan bruge en mild sæbe, hvis du ønsker det. Tør forsigtigt din tatovering af med et rent håndklæde eller viskestykke.
                    </p>
                    <h3>Påføring af creme</h3>
                    <p>
                    Sørg for at påføre cremen i et tyndt lag. Det er vigtigt at holde din tatovering fugtig, så den heler ordentligt. Spørg os gerne om råd til den rette creme til din tatovering.
                    </p>
                    <h3>Renhed</h3>
                    <p>
                    Pas godt på din friske tatovering som et sår. Hold det rent, og undgå at udsætte det for snavs eller friktion. Du kan dække det med plastfolie, især når du sover de første par nætter.
                    </p>
                    <h3>Giv den luft</h3>
                    <p>
                    Din tatovering har brug for luft for at hele ordentligt. Undgå at dække den til med folie unødigt, da det kan forhindre huden i at ånde, og derfor kan kroppen ikke hele ordentligt.
                    </p>
                    <h3>Årene efter</h3>
                    <p>
                    Selv efter helingsprocessen er det vigtigt at beskytte din tatovering mod solen. Brug solcreme, når du er udenfor, for at forhindre fading og beskadigelse af farverne. Men først når tatoveringen er mindst 14 dage gammel.
                    </p>
                    <h3>Største no-gos</h3>
                    <p>
                    Undgå at tage lange bade i dagene efter du er blevet tatoveret. Undgå at strække og klø det hudområde du er blevet tatoveret på. Sidst men ikke mindst skal du ungå direkte sollys på din tatovering i mindst  14  dage efter du har fået din tatovering.
                    </p>
                    <h3>Har du spørgsmål?</h3>
                    <p>
                    Hvis du er i tvivl eller oplever problemer med din tatovering, kan du kigge i vores FAQ sektion og ellers er du altid velkommen til at kontakte os. Vi er her for at hjælpe dig med hele processen.
                    </p>
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
//kalder click metoden på den første tab knap, den som er på index plads 0, hvilket er historie. Det sker når siden loader, og derfor vises den sektion som default. 
tabBtns[0].click();