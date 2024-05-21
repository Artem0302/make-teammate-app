import {StackScreenProps} from '@react-navigation/stack';

export type TMainNavigatorParamsList = {
  'MAIN.WELCOME_SCREEN': undefined;
  'MAIN.MY_GEO_SCREEN': undefined;
  'MAIN.TAB_NAVIGATOR': undefined;
  'MAIN.DIALOG': undefined;
};

export type TWelcomeScreenNavigatorType = StackScreenProps<
  TMainNavigatorParamsList,
  'MAIN.WELCOME_SCREEN'
>;

export type TMyGeoScreenNavigatorType = StackScreenProps<
  TMainNavigatorParamsList,
  'MAIN.MY_GEO_SCREEN'
>;

export type TDialogScreenNavigatorType = StackScreenProps<
  TMainNavigatorParamsList,
  'MAIN.DIALOG'
>;

// export type TTabNavigatorType = StackScreenProps<
//   TMainNavigatorParamsList,
//   'MAIN.TAB_NAVIGATOR'
// >;
