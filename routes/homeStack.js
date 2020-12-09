import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import Header from '../shared/header'
import React from 'react';
import About from '../screens/about';
import blackHole from '../screens/blackHole';
import luminosity from '../screens/luminosity';
import PtoMeters from '../screens/PtoMeters';
import DegreesToArc from '../screens/DegreesToArc';
import OrbitSpeed from '../screens/OrbitSpeed';
import ConvertAU from '../screens/ConvertAU';
import LYtoMeters from '../screens/LYtoMeters';
import ConvertSolarMass from '../screens/ConvertSolarMass';
import distanceConvert from '../screens/distanceConvert';
import convertTemp from '../screens/convertTemp';
import convertMass from '../screens/convertMass';
import escapeVeocity from '../screens/escapeV';
import blackholeTempurature from '../screens/blackholeTempurature';
import paralax from '../screens/paralax';
import StarMass from '../screens/StarMass';
import Contact from '../screens/contact';
import WiensLaw from '../screens/WiensLaw';
import acceleration from '../screens/acceleration';
import gravityForce from '../screens/gravityForce';





const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} />,
            }
        }
    },
    blackHole: {
        screen: blackHole,
                navigationOptions: {
            title: 'Schwarzschild Radius',
            // headerStyle: {backgroundColor: 'coral'}
        }
    },
    luminosity: {
        screen: luminosity,
        navigationOptions: {
            title: 'luminosity',
            // headerStyle: {backgroundColor: 'coral'}
        }
    },
    PtoMeters: {
        screen: PtoMeters,
        navigationOptions: {
            title: ' ',
            // headerStyle: {backgroundColor: 'coral'}
        }
    },
    DegreesToArc: {
        screen: DegreesToArc,
        navigationOptions: {
            title: 'Convert Degrees',
            // headerStyle: {backgroundColor: 'coral'}
        }
    },

    LYtoMeters: {
        screen: LYtoMeters,
        navigationOptions: {
            title: ' ',
            // headerStyle: {backgroundColor: 'coral'}
        }
    },

    OrbitSpeed: {
        screen: OrbitSpeed,
        navigationOptions: {
            title: 'Orbit Speed',
            // headerStyle: {backgroundColor: 'coral'}
        }
    },
    ConvertAU: {
        screen: ConvertAU,
        navigationOptions: {
            title: ' ',
            // headerStyle: {backgroundColor: 'coral'}
        }
    },

    ConvertSolarMass: {
        screen: ConvertSolarMass,
        navigationOptions: {
            title: ' ',
            // headerStyle: {backgroundColor: 'coral'}
        }
    },

    distanceConvert: {
        screen: distanceConvert,
        navigationOptions: {
            title: 'Convert Distance',
            // headerStyle: {backgroundColor: 'coral'}
        }
    },

    convertTemp: {
        screen: convertTemp,
        navigationOptions: {
            title: 'Convert Temperature',
            // headerStyle: {backgroundColor: 'coral'}
        }
    },
    convertMass: {
        screen: convertMass,
        navigationOptions: {
            title: 'Convert Mass',
            // headerStyle: {backgroundColor: 'coral'}
        }
    },

    escapeVeocity: {
        screen: escapeVeocity,
        navigationOptions: {
            title: 'Escape Veocity',
            // headerStyle: {backgroundColor: 'coral'}
        }
    },


    blackholeTempurature: {
        screen: blackholeTempurature,
        navigationOptions: {
            title: '  BlackHole Tempurature',
            // headerStyle: {backgroundColor: 'coral'}
        }
    },
    paralax: {
        screen: paralax,
        navigationOptions: {
            title: '  paralax',
            // headerStyle: {backgroundColor: 'coral'}
        }
    },

    StarMass: {
        screen: StarMass,
        navigationOptions: {
            title: 'Mass Of Stars',
            // headerStyle: {backgroundColor: 'coral'}
        }
    },
    WiensLaw: {
        screen: WiensLaw,
        navigationOptions: {
            title: ' Surface tempurature',
            // headerStyle: {backgroundColor: 'coral'}
        }
    },
    acceleration: {
        screen: acceleration,
        navigationOptions: {
            title: 'Acceleration from gravity',
            // headerStyle: {backgroundColor: 'coral'}
        }
    },

    gravityForce: {
        screen: gravityForce,
        navigationOptions: {
            title: 'Gravitational force',
            // headerStyle: {backgroundColor: 'coral'}
        }
    },
    About: {
        screen: About,
        navigationOptions: {
            title: 'About',
            // headerStyle: {backgroundColor: 'coral'}
        }
    },
    Contact: {
        screen: Contact,
        navigationOptions: {
            title: 'Contact',
            // headerStyle: {backgroundColor: 'coral'}
        }
    },
}



const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
         headerStyle: { backgroundColor: '#FE5A50' },
         //headerTintColor: '#E23956',
       
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },

          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          },
        


    }
});

export default HomeStack;