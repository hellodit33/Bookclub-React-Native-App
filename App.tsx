import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {IconButton} from 'react-native-paper'; // Import IconButton from react-native-paper

import BookclubOverview from './screens/BookclubOverview';
import ReadBooks from './screens/ReadBooks';
import Ideas from './screens/Ideas';
import Profile from './screens/Profile';
import Chat from './screens/Chat';
import Bookclub from './assets/Bookclub';
import Read from './assets/Read';
import IdeasIcon from './assets/Ideas';
import ChatIcon from './assets/Chat';
import User from './assets/Profile';
import Notes from './screens/Notes';
import BookQuotes from './screens/BookQuotes';
import BookDetails from './screens/BookDetails';
import BookIdeaDetails from './screens/BookIdeaDetails';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          padding: 6,
          fontSize: 10,
          fontWeight: 'bold',
          fontFamily: 'Open-Sans',
        },
        tabBarStyle: {height: 60, backgroundColor: '#9D5C63'},
        tabBarActiveBackgroundColor: '#DCA6AC',
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'white',
      }}>
      <Tab.Screen
        name="My Bookclub"
        component={BookclubOverview}
        options={{
          tabBarIcon: () => <Bookclub />,
        }}
      />
      <Tab.Screen
        name="Read Books"
        component={ReadBooks}
        options={{
          tabBarIcon: () => <Read />,
        }}
      />
      <Tab.Screen
        name="Ideas"
        component={Ideas}
        options={{
          tabBarIcon: () => <IdeasIcon />,
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarIcon: () => <ChatIcon />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => <User />,
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MainTabs"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="MainTabs" component={MainTabs} />
        <Stack.Screen
          name="Notes"
          component={Notes}
          options={({navigation}) => ({
            title: 'Notes',
            headerLeft: () => (
              <IconButton
                icon="arrow-left"
                onPress={() => navigation.goBack()}
              />
            ),
          })}
        />
        <Stack.Screen
          name="BookQuote"
          component={BookQuotes}
          options={({navigation}) => ({
            title: 'BookQuote',
            headerLeft: () => (
              <IconButton
                icon="arrow-left"
                onPress={() => navigation.goBack()}
              />
            ),
          })}
        />
      <Stack.Screen
          name="BookDetails"
          component={BookDetails}
          options={({navigation}) => ({
            title: 'BookDetails',
            headerLeft: () => (
              <IconButton
                icon="arrow-left"
                onPress={() => navigation.goBack()}
              />
            ),
          })}
        />
         <Stack.Screen
          name="BookIdeaDetails"
          component={BookIdeaDetails}
          options={({navigation}) => ({
            title: 'BookIdeaDetails',
            headerLeft: () => (
              <IconButton
                icon="arrow-left"
                onPress={() => navigation.goBack()}
              />
            ),
          })}
        />
         <Stack.Screen
          name="Bookclub"
          component={Bookclub}
          options={({navigation}) => ({
            title: 'Bookclub',
            headerLeft: () => (
              <IconButton
                icon="arrow-left"
                onPress={() => navigation.goBack()}
              />
            ),
          })}
        />
              </Stack.Navigator>

    </NavigationContainer>
  );
};

export default App;
