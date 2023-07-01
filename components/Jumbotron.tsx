/* eslint-disable jsx-a11y/alt-text */
import type { NextPage } from "next";

import { useRouter } from "next/navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  icon,
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";

import {
  Button,
  Grid,
  Image,
  Text,
  Link,
  Col,
  Spacer,
} from "@nextui-org/react";

const Jumbotron: NextPage = () => {
  const router = useRouter();
  return (
    <Grid.Container gap={0} justify="center">
      <Grid md={0} xs={12} justify="center" alignItems="center">
        <Col css={{ textAlign: "center" }}>
          <Text h3 weight={"bold"} css={{ textAlign: "center" }}>
            Монголын хамгийн анхны өөртөө үйлчилдэг агентийг ашигласнаар:
          </Text>
          <Text>
            <FontAwesomeIcon
              icon={solid("check")}
              color="#0F9549"
              style={{ marginRight: "5px" }}
            />{" "}
            24/7 түргэн шуурхай үйлчилгээ авах
          </Text>
          <Text>
            <FontAwesomeIcon
              icon={solid("check")}
              color="#0F9549"
              style={{ marginRight: "5px" }}
            />{" "}
            Гүйлгээ хийх тутамдаа бонус цуглуулах
          </Text>
          <Text>
            <FontAwesomeIcon
              icon={solid("check")}
              color="#0F9549"
              style={{ marginRight: "5px" }}
            />{" "}
            Зээлийн цэнэглэлт хийх
          </Text>
          <Text>
            <FontAwesomeIcon
              icon={solid("check")}
              color="#0F9549"
              style={{ marginRight: "5px" }}
            />{" "}
            Өөрийн санхүүгээ хянах боломжтой...
          </Text>
        </Col>
      </Grid>
      <Grid md={5} xs={0} justify="center" alignItems="center">
        <Col>
          <Text h2 weight={"bold"} css={{ textAlign: "left" }}>
            Монголын хамгийн анхны
          </Text>
          <Text h2 weight={"bold"} css={{ textAlign: "left" }}>
            өөртөө үйлчилдэг агентийг
          </Text>
          <Text h2 weight={"bold"} css={{ textAlign: "left" }}>
            ашигласнаар:
          </Text>
          <Text css={{ ml: 20 }}>
            <FontAwesomeIcon
              icon={solid("check")}
              color="#0F9549"
              style={{ marginRight: "5px" }}
            />{" "}
            24/7 түргэн шуурхай үйлчилгээ авах
          </Text>
          <Text css={{ ml: 20 }}>
            <FontAwesomeIcon
              icon={solid("check")}
              color="#0F9549"
              style={{ marginRight: "5px" }}
            />{" "}
            Гүйлгээ хийх тутамдаа бонус цуглуулах
          </Text>
          <Text css={{ ml: 20 }}>
            <FontAwesomeIcon
              icon={solid("check")}
              color="#0F9549"
              style={{ marginRight: "5px" }}
            />{" "}
            Зээлийн цэнэглэлт хийх
          </Text>
          <Text css={{ ml: 20 }}>
            <FontAwesomeIcon
              icon={solid("check")}
              color="#0F9549"
              style={{ marginRight: "5px" }}
            />{" "}
            Өөрийн санхүүгээ хянах боломжтой...
          </Text>
        </Col>
      </Grid>
      <Grid md={7} xs={12} justify="center" alignItems="center">
        <Col css={{ textAlign: "center" }}>
          <Image width={512} height={384} src={"images/melbet.png"} />
          <Text>BET69 промо кодыг ашиглан 100% бонус аваарай.</Text>
          <Link
            href="https://apps.apple.com/mn/app/melbet-sports-betting/id1005593631"
            css={{ mr: 15 }}
          >
            <Image
              width={128}
              height={64}
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1200px-Download_on_the_App_Store_Badge.svg.png"
              }
            />
          </Link>
          <Link href="https://melbet-mn.com/downloads/androidclient/releases_android/melbet/site/melbet.apk">
            <Image
              width={128}
              height={64}
              src={
                "https://play.google.com/intl/en_us/badges/images/apps/en-play-badge.png"
              }
            />
          </Link>
        </Col>
      </Grid>
      <Grid md={12} xs={12} justify="center" alignItems="center">
        <Button
          auto
          flat
          type="button"
          color="error"
          onPress={() => router.push("/deposit")}
          css={{ marginRight: "15px" }}
        >
          <FontAwesomeIcon
            icon={solid("arrow-up")}
            style={{ marginRight: "5px" }}
          />
          ЦЭНЭГЛЭХ
        </Button>
        <Button
          auto
          flat
          type="button"
          color="success"
          onPress={() => router.push("/withdraw")}
        >
          <FontAwesomeIcon
            icon={solid("arrow-down")}
            style={{ marginRight: "5px" }}
          />
          ТАТАХ
        </Button>
      </Grid>
    </Grid.Container>
  );
};

export default Jumbotron;
