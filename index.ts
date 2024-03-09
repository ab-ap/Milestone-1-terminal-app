import * as fs from 'fs';  // 'fs'-module om bestanden te lezen importeren
import * as rls from 'readline-sync';  // 'readline-sync'-module importeren
import { Game, Developer } from './interfaces/games.interfaces';  // interfaces importeren

// gegevens uit het JSON voor games
const gamesData: Game[] = JSON.parse(fs.readFileSync('./json/games.json', 'utf-8'));

// gegevens uit het JSON voor developers
const developersData: Developer[] = JSON.parse(fs.readFileSync('./json/developers.json', 'utf-8'));

// functie om alle games weer te geven
function displayAllGames(): void {
  gamesData.forEach((game: Game) => {
    console.log(` `);
    console.log(`- ${game.name} (${game.id})`);
  });
}

// functie om een game te filteren op basis van ID
function filterGameById(gameId: string): void {
  const filteredGame = gamesData.find((game: Game) => game.id === gameId);
  if (filteredGame) {
    console.log(` `);
    console.log(`- ${filteredGame.name} (${filteredGame.id})`);
    console.log(`  - Description: ${filteredGame.description}`);
    console.log(`  - Rating: ${filteredGame.rating}`);
    console.log(`  - Active: ${filteredGame.isActive}`);
    console.log(`  - Release date: ${filteredGame.releaseDate}`);
    console.log(`  - Image URL: ${filteredGame.imageUrl}`);
    console.log(`  - Genre: ${filteredGame.genre}`);
    console.log(`  - Playable platforms: ${filteredGame.platforms}`);
      
    // dev info weergeven
    const developer = developersData.find((dev: Developer) => dev.id === filteredGame.developer.id);
     if (developer) {
       console.log(` `);
       console.log(`    - Developer: ${developer.name}`);
       console.log(`    - Founded Year: ${developer.foundedYear}`);
       console.log(`    - Country: ${developer.country}`);
     } else {
       console.log(`Developer information not found.`);
     }
   } else {
    console.log(`Game with ID ${gameId} not found.`);
   }
 }

// welkomstbericht
console.log("Welcome to the JSON data viewer!");

// start app
while (true) {
  console.log("\n1. View all data\n2. Filter by ID\n3. Exit");

  // gebruiker om keuze vrage
  const choice = rls.questionInt("Please enter your choice: ");

  // keuze verwerken
  switch (choice) {
    case 1:
      displayAllGames();
      break;
    case 2:
      // vragen om game-ID
      const gameId = rls.question("Please enter the ID you want to filter by: ");
      filterGameById(gameId);
      break;
    case 3:
      // sluiten bij exit
      console.log("Exiting the application.");
      process.exit(0);
    default:
      console.log("Invalid choice. Please enter a valid option.");
      break;
  }
}
