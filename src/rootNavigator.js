import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import TestPage from './containers/TestPage';
import SignIn from '../src/SignIn'

const AppNavigator = createStackNavigator(
    {
        TestPage: { screen: TestPage },
        SignIn: { screen: SignIn }
    },
    {
        initialRouteName: 'TestPage',
        navigationOptions: {

        },
        headerMode: 'none'
    }
)

const App = createAppContainer(AppNavigator);

export default App;