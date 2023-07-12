import type { NextPage } from "next";
import { Layout } from "@/pages/Layout";

import { Navbar, Image, Button, Link, Text, Badge } from "@nextui-org/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  icon,
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";

const NavigationBar: NextPage = () => {
  const menuItems = ["CSGO Tips", "DOTA2 Tips", "Valorant Tips", "NBA Tips"];
  return (
    <Layout>
      <Navbar isBordered variant="sticky" css={{ px: 5 }}>
        <Navbar.Toggle
          showIn={"xs"}
          aria-label="toggle navigation"
          css={{ marginRight: "0px" }}
        />
        <Navbar.Brand hideIn={"xs"}>
          <Image width={128} height={64} src="logo/colizeum.png" />
          {/* <Badge
            size={"xs"}
            color={"secondary"}
            variant={"bordered"}
            css={{ color: "white", ml: 5 }}
          >
            MONGOLIA
          </Badge> */}
        </Navbar.Brand>

        <Navbar.Content showIn={"xs"}>
          <Image width={128} height={64} src="logo/colizeum.png" />
        </Navbar.Content>

        {/* <Navbar.Content hideIn={"md"}>
          <Navbar.Link href="#">CSGO</Navbar.Link>
          <Navbar.Link href="#">DOTA</Navbar.Link>
          <Navbar.Link href="#">VALORANT</Navbar.Link>
          <Navbar.Link href="#">NBA</Navbar.Link>
          <Navbar.Link href="#">FIFA</Navbar.Link>
          <Navbar.Item>
            <Button auto ghost color="gradient" size="xs">
              <FontAwesomeIcon
                icon={solid("arrow-left")}
                style={{ marginRight: "5px" }}
              />
              Tip-үүд тун удахгүй
            </Button>
          </Navbar.Item>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link href="https://t.me/+OofmfIwtcyM4ZWY1" hideIn={"xs"}>
            <FontAwesomeIcon
              icon={brands("telegram")}
              style={{ fontSize: "1.5rem", marginRight: "5px" }}
            />
            Telegram
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat href="#" color="success">
              <FontAwesomeIcon
                icon={solid("lock")}
                style={{ marginRight: "5px" }}
              />
              Нэвтрэх
            </Button>
          </Navbar.Item>
        </Navbar.Content> */}
        <Navbar.Collapse>
          {menuItems.map((item, index) => (
            <Navbar.CollapseItem key={item}>
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                  justifyContent: "center",
                }}
                href="#"
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </Layout>
  );
};

export default NavigationBar;
