import { Coffee, CoffeeListReply } from "../proto/coffeeguide.pb";
import { data } from "./resources/coffeeDB";

export default function getCoffeeList(): CoffeeListReply {
  const arr = Array<Coffee>();
  const send: CoffeeListReply = {
    list: [],
  };
  data["Coffee"].forEach((e: { [x: string]: string }) => {
    const coffee_item = {
      name: e["name"],
      preview: e["preview"],
      id: e["id"],
    };
    arr.push(coffee_item);
  });
  send.list = arr;
  return send;
}
