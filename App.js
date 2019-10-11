import { createStackNavigator, createAppContainer } from "react-navigation";

import Loader from "./src/Loader";
import SignIn from "./src/SignIn";
import SocialAuth from "./src/SocialAuth";
import SignUp from "./src/SignUp";
import ForgotPassword from "./src/ForgotPassword";
import Confirmation from "./src/Confirmation";
import RootNavigator from "./src/rootNavigator";


const AuthStack = createStackNavigator(
  {

    RootNavigator,
    SignIn,
    SignUp,
    ForgotPassword,
    Confirmation,
    SocialAuth

  },
  {
    headerMode: "none"
  }
);

const App = createAppContainer(AuthStack);

export default App;
