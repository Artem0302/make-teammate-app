import {StackScreenProps} from '@react-navigation/stack';

export type TMainNavigatorParamsList = {
  'MAIN.WELCOME_SCREEN': undefined;
  'MAIN.TAB_NAVIGATOR': undefined;
};

export type TWelcomeScreenNavigatorType = StackScreenProps<
  TMainNavigatorParamsList,
  'MAIN.WELCOME_SCREEN'
>;

export type TTabNavigatorType = StackScreenProps<
  TMainNavigatorParamsList,
  'MAIN.TAB_NAVIGATOR'
>;
