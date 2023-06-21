import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons';

export const BottomMenu = styled.View`
    position: absolute;
    width: 100%;
    height: 66px;
    bottom: 0px;

    justify-content: space-around;
    align-items: center;

    background-color: #FFFFFF;
`;

export const Gradient = styled(LinearGradient).attrs({
    colors: ['#97A3E2', '#3E59E8'], 
  })`
    position: absolute;
    align-self: center;
    width: 60px;
    height: 60px;
    bottom:  37px;

    border-radius: 30px;
`;

export const MenuToggle = styled.TouchableOpacity`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;

    border-radius: 30px;
    border: 6px solid #A2A2A2;
`;

export const ButtonsContainer = styled.View`
    flex-direction: row;
    width: 100%;

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
    bottom: -8px;
`;
