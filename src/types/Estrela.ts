import {GestureResponderEvent} from 'react-native/types';

export interface IEstrela {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  desabilitada: boolean;
  preenchida: boolean;
  grande: boolean;
}
