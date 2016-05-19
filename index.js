'use strict';

import {Platform} from 'react-native';
import ActionSheetIOS from './ActionSheetIOS';
import ActionSheetCustom from './ActionSheetCustom';

let ActionSheet;

if (Platform.OS === 'ios') {
	ActionSheet = ActionSheetIOS;
} else {
	ActionSheet = ActionSheetCustom;
}

export default ActionSheet;
