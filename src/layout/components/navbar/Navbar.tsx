import { FC } from "react";

import { Button, Container } from "library";

import { AppBar, Brand, Item, List, Nav } from "./Navbar.style";
import { SignIn } from "assets/icons";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  return (
    <AppBar>
      <Container>
        <Nav>
          <Brand>Books</Brand>
          <List>
            <Item>
              <Button size="small">Sign up free</Button>
            </Item>
            <Item>
              <Button size="small" endIcon={<SignIn />}>
                Sign in
              </Button>
            </Item>
          </List>
        </Nav>
      </Container>
    </AppBar>
  );
};

export default Navbar;
