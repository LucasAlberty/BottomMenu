import React from "react";
import { Container, BottomMenu, Gradient, MenuToggle, IconImage, ButtonsContainer, ButtonsSeparator } from "./styles";

export default function BottomBar() {
  return (
    <Container>
      <BottomMenu>
        
        <Gradient>
          <MenuToggle>
            <IconImage
              source={require('./../../assets/plus.png')}
              size={20}
            />
          </MenuToggle>
        </Gradient>

        <ButtonsContainer>
          <ButtonsSeparator>
          <IconImage
            source={require('./../../assets/home.png')}
            size={24}
          />
          <IconImage
            source={require('./../../assets/search.png')}
            size={24}
          />

          </ButtonsSeparator>
          <ButtonsSeparator>
          <IconImage
            source={require('./../../assets/store.png')}
            size={24}
          />
          <IconImage
            source={require('./../../assets/gift.png')}
            size={24}
          />

          </ButtonsSeparator>
        </ButtonsContainer>

      </BottomMenu>
    </Container>
  )
}




