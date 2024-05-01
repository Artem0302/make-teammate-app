import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {TMainNavigatorParamsList} from '@shared/types';

export type TTabParamsList = {
  'TAB.MAP_SCREEN': undefined;
  'TAB.MESSAGES_SCREEN': undefined;
  'TAB.PROFILE': undefined;
};

export type TMapScreenNavigatorType = CompositeScreenProps<
  BottomTabScreenProps<TTabParamsList, 'TAB.MAP_SCREEN'>,
  StackScreenProps<TMainNavigatorParamsList>
>;
export type TMessagesScreenNavigatorType = CompositeScreenProps<
  BottomTabScreenProps<TTabParamsList, 'TAB.MESSAGES_SCREEN'>,
  StackScreenProps<TMainNavigatorParamsList>
>;
export type TProfileTabNavigatorType = CompositeScreenProps<
  BottomTabScreenProps<TTabParamsList, 'TAB.PROFILE'>,
  StackScreenProps<TMainNavigatorParamsList>
>;
