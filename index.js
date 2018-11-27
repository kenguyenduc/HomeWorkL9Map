/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import gmap from './gmap';
import marker from './marker';
import markerinf from './markerinf';
import imagemarker from './imagemarker';
import drawmap from './drawmap';
import maptravel from './maptravel';
import smoothmove from './smoothmove';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => smoothmove);
