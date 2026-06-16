import { NavigationContainer } from "@react-navigation/native";
import { Login } from "./src/pages/Login"
import { Routers } from "./src/routers";

export default function App() {
  return (
    <NavigationContainer>
      <Routers />
    </NavigationContainer>
  );
}
