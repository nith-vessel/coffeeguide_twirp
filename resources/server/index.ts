import { createServer } from "http";
import { createTwirpServer } from "twirpscript";
import { coffeeGuideHandler } from "./handler";
const PORT = 8080;

const app = createTwirpServer([coffeeGuideHandler]);

createServer(app).listen(PORT, () =>
  console.log(`Server listening on port ${PORT}`)
);
