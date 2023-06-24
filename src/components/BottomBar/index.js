import React from "react";
import { Button, ButtonsContainer, ButtonsSeparator, Content, Dot, Gradient, MenuToggle, SubContent } from './styles';
import { AntDesign, Octicons, MaterialIcons } from '@expo/vector-icons'
import Svg, { Circle, Mask, Rect } from "react-native-svg";

export default function BottomBar({ state, navigation }) {

  const handleNavigation = (screnName) => { navigation.navigate(screnName) };

  return (
    <Content>
      <SubContent>
        <ButtonsContainer>
          <ButtonsSeparator>
            <Button onPress={() => handleNavigation("HomeScreen")}>
              <Octicons name="home" size={24} color={state.index === 0 ? "#4D65E7" : "#5C5858"} />
              {state.index === 0 && <Dot name="dot-single" size={22} />}
            </Button>
            <Button onPress={() => handleNavigation("SearchScreen")}>
              <Octicons name="search" size={24} color={state.index === 1 ? "#4D65E7" : "#5C5858"} />
              {state.index === 1 && <Dot name="dot-single" size={22} />}
            </Button>
          </ButtonsSeparator>
          <ButtonsSeparator>
            <Button onPress={() => handleNavigation("StoreScreen")}>
              <MaterialIcons name="storefront" size={26} color={state.index === 2 ? "#4D65E7" : "#5C5858"} />
              {state.index === 2 && <Dot name="dot-single" size={22} />}
            </Button>
            <Button onPress={() => handleNavigation("GiftScreen")}>
              <Octicons name="gift" size={24} color={state.index === 3 ? "#4D65E7" : "#5C5858"} />
              {state.index === 3 && <Dot name="dot-single" size={22} />}
            </Button>
          </ButtonsSeparator>
        </ButtonsContainer>
      </SubContent>
      <Svg height="66" width="100%">
        <Mask id="mask">
          <Rect x="0" y="0" width="100%" height="100" fill="white"/>
          <Circle cx="50%" cy="0" r="34" fill="black" />
        </Mask>
        <Rect x="0" y="0" width="100%" height="100" fill="white" mask="url(#mask)" />
      <Gradient>
        <MenuToggle>
          <AntDesign name="plus" size={26} color={"#ffffff"} />
        </MenuToggle>
      </Gradient>
      </Svg>
    </Content>
  )
}