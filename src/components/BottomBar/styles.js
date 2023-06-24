import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons';
import { Dimensions } from 'react-native';

export const Content = styled.View`
    position: absolute;
    width: ${Dimensions.get("window").width}px;
    z-index: 0;
    bottom: -1px;
`;

export const SubContent = styled.View`
    position: absolute;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    z-index: 1;
    bottom: 32%;
`

export const Gradient = styled(LinearGradient).attrs({
    colors: ['#97A3E2', '#3E59E8'], 
  })`
    position: absolute;
    align-self: center;
    width: 50px;
    height: 50px;
    
    bottom: -25px;

    border-radius: 25px;
`;

export const MenuToggle = styled.TouchableOpacity`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;

    border-radius: 30px;
`;

export const ButtonsContainer = styled.View`
    flex-direction: row;
    width: 100%;

    gap: 50px;

    justify-content: space-around;
`;

export const ButtonsSeparator = styled.View`
    flex-direction: row;
    width: 50%;
    justify-content: space-evenly;
`;

export const Button = styled.TouchableOpacity`
    height: 100%;
    justify-content: center;
    align-items: center;
`;

export const Dot = styled(Entypo)`
    color: #4D65E7;
    position: absolute;
    bottom: -14px;
`;