import {
  createCoffeeGuide,
  CoffeeGuide,
  CoffeeRequest,
} from "../proto/coffeeguide.pb";
import getCoffee from "./get-coffee";
import getCoffeeList from "./get-coffee-list";
const coffeeGuide: CoffeeGuide = {
  GetCoffee: (coffeeRequest: CoffeeRequest) => {
    var reply = getCoffee(coffeeRequest);
    return reply;
  },
  GetCoffeeList: () => {
    var list = getCoffeeList();
    return list;
  },
};

export const coffeeGuideHandler = createCoffeeGuide(coffeeGuide);
