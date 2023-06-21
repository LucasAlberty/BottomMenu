import React from "react";
import { BottomMenu, Gradient, MenuToggle, ButtonsContainer, ButtonsSeparator, Button, Dot } from "./styles";
import { Octicons, AntDesign, MaterialIcons, Entypo  } from '@expo/vector-icons';

export default function BottomBar({ state, navigation }) {

  const handleNavigation = (screnName) => { navigation.navigate(screnName) };

  return (
    <BottomMenu>
      <Gradient>
        <MenuToggle>
          <AntDesign name="plus" size={26} color={"#ffffff"} />
        </MenuToggle>
      </Gradient>
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
    </BottomMenu>
  )
}




