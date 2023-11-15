import { FC } from "react";

import { Button, Container } from "library";

import { AppBar, Brand, Item, List, Nav } from "./Navbar.style";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  return (
    <AppBar>
      <Container>
        <Nav>
          <Brand>Layout</Brand>
          <List>
            <Item>
              <Button>Sign up free</Button>
            </Item>
            <Item>
              <Button>Sign in</Button>
            </Item>
          </List>
        </Nav>
      </Container>
    </AppBar>
  );
};

export default Navbar;
