const http = require("http");
const app = require("./app");
const { loadPlanetsData } = require("./models/planets.model");

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startSetver() {
  await loadPlanetsData();

  console.log(__dirname);
  server.listen(PORT, () => {
    console.log(`Listen on port: ${PORT}...`);
  });
}

startSetver();
