import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.View`
    flex: 1;

    background-color: #A2A2A2;
`;

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

export const IconImage = styled.Image`
    width: ${props => props.size}px;
    height: ${props => props.size}px;
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


