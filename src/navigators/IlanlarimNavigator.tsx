import { createStackNavigator } from '@react-navigation/stack';
import ILanlarim from '../screens/IlanlarimScreen'
import CustomHeader from './CustomHeader';

const Stack = createStackNavigator();

const İlanlarim = () => {
  return (
    <Stack.Navigator
      initialRouteName='Ilanlarim'
      screenOptions={{
        header: () => (<CustomHeader />)
      }}
    >
      <Stack.Screen
        name='Ilanlarim'
        component={ILanlarim}
      />
    </Stack.Navigator>
  )
}

export default İlanlarim
