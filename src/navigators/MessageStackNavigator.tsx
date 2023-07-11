import { createStackNavigator } from '@react-navigation/stack';
import SohbetTopBar from './SohbetTopBar';
import CustomHeader from './CustomHeader';

const Stack = createStackNavigator();

const MessageStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{
                    headerStyle:{
                        backgroundColor:"#F8F8F8"
                    },
                    headerTitleStyle:{
                        fontWeight:"300",
                        fontSize:16
                    }
                }}
                name='Sohbetler'
                component={SohbetTopBar}
            />
        </Stack.Navigator>
    )
}

export default MessageStackNavigator
