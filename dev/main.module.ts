//var angularTouchspin = require<string>('../dist/angular-touchspin.js')
import './styles/vendor';
import 'font-awesome-webpack';
//import '.../dist/angular-touchspin.css';
import touchspinModule from '../src/angular-touchspin.module';
import { MainController } from './controllers/main.controller';

export default angular
	.module('lm.main', [touchspinModule])
	.controller('MainController', MainController)
	.config(function(touchSpinConfigProvider: angularTouchSpin.ITouchSpinConfigProvider) {
		touchSpinConfigProvider.defaults(<angularTouchSpin.ITouchSpinOptions>{
			decimals: 2,
			verticalButtons: false
		});
	});