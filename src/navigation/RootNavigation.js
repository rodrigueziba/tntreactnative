import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/HomeScreen";
import { TextScreen } from "../screens/TextScreen";
import { ROUTES } from "./routes";
import { ImageScreen } from "../screens/ImageScreen";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { CameraScreen } from "../screens/CameraScreen";


const Tab = createBottomTabNavigator();
const ImageStack = createStackNavigator();

const ImageNavigator = () => (
  <ImageStack.Navigator screenOptions={{ headerShown: false }}>
    <ImageStack.Screen name={ROUTES.IMAGE_CHANNEL} component={ImageScreen} />
    <ImageStack.Screen name={ROUTES.CAMERA} component={CameraScreen} />
  </ImageStack.Navigator>
);

const CustomTabBarIcon = ({ focused, iconName, label }) => (
  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      gap: 5,
      backgroundColor: focused ? "black" : "transparent",
      padding: 10,
      borderRadius: 30,
      height: 40,
    }}
  >
    <Ionicons name={iconName} size={20} color={focused ? "white" : "#72777A"} />
    {focused && <Text style={{ color: "white" }}>{label}</Text>}
  </View>
);

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarHideOnKeyboard: true,
    }}
  >
    <Tab.Screen
      name={ROUTES.HOME}
      component={HomeScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <CustomTabBarIcon focused={focused} iconName="home" label="INICIO" />
        ),
      }}
    />
    <Tab.Screen
      name={ROUTES.TEXT}
      component={TextScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <CustomTabBarIcon
            focused={focused}
            iconName="chatbubbles-sharp"
            label="TEXTO"
          />
        ),
      }}
    />
    <Tab.Screen
      name={ROUTES.IMAGE}
      component={ImageNavigator}
      options={{
        tabBarIcon: ({ focused }) => (
          <CustomTabBarIcon focused={focused} iconName="image" label="IMAGEN" />
        ),
      }}
    />
  </Tab.Navigator>
);

const RootNavigation = () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
);

export { RootNavigation };
