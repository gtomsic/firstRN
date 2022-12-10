import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreens from "./src/screens/ListScreens";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorsScreen from "./src/screens/ColorsScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreens,
    ImageScreen: ImageScreen,
    Counter: CounterScreen,
    Colors: ColorsScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Urcups",
    },
  }
);

export default createAppContainer(navigator);
