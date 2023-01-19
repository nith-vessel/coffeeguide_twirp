import { CoffeeReply, CoffeeRequest } from "../proto/coffeeguide.pb";
import { data } from "./resources/coffeeDB";

export default function getCoffee(coffeeRequest: CoffeeRequest): CoffeeReply {
  const coffeeReply: CoffeeReply = {
    name: "",
    description: "",
    id: "id",
  };
  data["Coffee"].forEach((e: { [x: string]: string }) => {
    if (e["id"] == coffeeRequest.id) {
      coffeeReply.name = e["name"];
      coffeeReply.description = e["description"];
      coffeeReply.id = e["id"];
    }
  });

  return coffeeReply;
}
