import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import AboutStack from './aboutStack';
import HomeStack from './homeStack';
import ContactStact from './contactStack';

const RootDrawerNavigator = createDrawerNavigator({

    Home: {
        screen: HomeStack,
    },
     About: {
         screen: AboutStack,
     },
     Contact: {
        screen: ContactStact,
    }
});

export default createAppContainer(RootDrawerNavigator);

