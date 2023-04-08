import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HomeScreen} from './screens/HomeScreen';
import {ArticleScreen} from './screens/ArticleScreen';
import {ClipScreen} from './screens/ClipScreen';
import {FontAwesome} from '@expo/vector-icons'
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const screenOption = ({ route }) => ({
    tabBarIcon: ({ color, size }) => {
      let iconName;

      if (route.name === 'HomeTab') {
        return <FontAwesome name="home" size={size} color={color} />;
      } else if (route.name === 'ClipTab') {
        return <FontAwesome name="bookmark" size={size} color={color} />;
      }
    },
  })

const HomeStack = () => {
  return(
    <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
    <Stack.Screen name="Article" component={ArticleScreen} />
  </Stack.Navigator>
  )
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOption}>
        <Tab.Screen name="HomeTab" component={HomeStack} options={{headerShown: false, title: "Home"}} />
        <Tab.Screen name="ClipTag" component={ClipScreen} options={{headerShown: false, title: "Clip"}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

