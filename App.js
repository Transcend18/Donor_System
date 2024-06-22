import { PaperProvider } from "react-native-paper";
import { StackNavigaton } from "./Components/Navigation/StackNavigation";
import { AppProvider } from "./Components/Context/AppContext";


export default function App() {
  return (
    <AppProvider>
      <PaperProvider>
        <StackNavigaton>
        </StackNavigaton>
      </PaperProvider>
    </AppProvider>
  );
}

