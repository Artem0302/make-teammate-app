import {StackScreenProps} from '@react-navigation/stack';

export type TMainNavigatorParamsList = {
  'MAIN.WELCOME_SCREEN': undefined;
  'MAIN.MY_GEO_SCREEN': undefined;
  'MAIN.TAB_NAVIGATOR': undefined;
  'MAIN.DIALOG': {chatId: string; name: string};
  'MAIN.CHANGE_GEO_SCREEN': {
    location: {
      latitude: number;
      longitude: number;
      latitudeDelta: 0.02;
      longitudeDelta: 0.02;
    };
  };
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

export type TChangeGeoScreenNavigatorType = StackScreenProps<
  TMainNavigatorParamsList,
  'MAIN.CHANGE_GEO_SCREEN'
>;

// export type TTabNavigatorType = StackScreenProps<
//   TMainNavigatorParamsList,
//   'MAIN.TAB_NAVIGATOR'
// >;
