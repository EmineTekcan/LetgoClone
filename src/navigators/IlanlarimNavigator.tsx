import { createStackNavigator } from '@react-navigation/stack';
import ILanlarim from '../screens/IlanlarimScreen'
import CustomHeader from './CustomHeader';

const Stack = createStackNavigator();

const İlanlarim = () => {
  return (
    <Stack.Navigator
      initialRouteName='İlanlarim'
      screenOptions={{
        header: () => (<CustomHeader ilanlarim={true} />)
      }}
    >
      <Stack.Screen
        name='İlanlarim'
        component={ILanlarim}
      />
    </Stack.Navigator>
  )
}

export default İlanlarim
