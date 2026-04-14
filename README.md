# Todo App med TypeScript

## Beskrivning

Detta projekt är en webbapplikation där användare kan hantera en lista med uppgifter ("todos"). Applikationen är byggd med **TypeScript**, använder principer för objektorienterad programmering (OOP) och lagrar data i **LocalStorage** så att listan sparas mellan sidvisningar.

Projektet följer uppgiften för att skapa en webbaserad todo-applikation med fokus på korrekt användning av TypeScript, interfaces och klasser, samt hantering av logik, validering och persistens.

## Funktioner

### Visa todos
Alla uppgifter visas i en lista med text och prioritet.

### Lägg till ny todo
Ett formulär för att lägga till uppgifter med valfri prioritet (1–3), med validering.

### Markera som klar
En knapp på varje todo för att markera den som utförd. Utförda todos visas överstrukna.

### Redigera todo
Möjlighet att ändra text och prioritet på befintliga todos.

### Rensa hela listan
En knapp som tömmer hela listan och LocalStorage.

### Responsiv design
Webbplatsen fungerar bra på både stora och små skärmar.

### LocalStorage
Todos sparas lokalt i webbläsaren så att de finns kvar efter att sidan laddas om.

## Tekniker

- **TypeScript:** För typkontroll och OOP-struktur.
- **HTML & CSS:** För layout, formulär och stil.
- **LocalStorage:** För att spara todos lokalt mellan sidvisningar.
- **Vite:** Utvecklingsserver och bundler för snabb uppstart.

## Funktionalitet

### Formulär
Användaren kan skriva in uppgift och välja prioritet. Formuläret validerar att text och prioritet är korrekt.

### Lista
Todos visas med text och prioritet. Knappar för att markera som klar eller redigera placeras centrerade under texten.

### Redigera
Klick på "Redigera" öppnar ett prompt-fönster där användaren kan uppdatera text och prioritet.

### Rensa
"Rensa lista"-knappen tömmer både listan och LocalStorage, så att användaren kan börja om från början när en lista är använd.

### Persistens
Alla ändringar sparas automatiskt i LocalStorage.

**Webbplats:**  
https://t-880.github.io/LabTyp2Todo/
