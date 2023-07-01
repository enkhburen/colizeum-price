import type { NextPage } from "next";
import { Container, Grid, Text, Image, Col } from "@nextui-org/react";

const SupportedBanks: NextPage = () => {
  return (
    <Container
      css={{
        borderWidth: "1px !important",
        borderStyle: "solid",
        borderColor: "rgba(255,255,255,0.15)",
        borderRadius: "10px",
      }}
    >
      <Grid.Container gap={2}>
        <Grid xs={12} justify="center">
          <Col>
            <Text
              h3
              transform="uppercase"
              weight={"bold"}
              css={{ textAlign: "center", m: 0 }}
            >
              банк
            </Text>
            <Text
              transform="uppercase"
              size={"12px"}
              color="#999"
              css={{ textAlign: "center" }}
            >
              Та доорх банкуудаар шилжүүлэг
            </Text>
            <Text
              transform="uppercase"
              size={"12px"}
              color="#999"
              css={{ textAlign: "center" }}
            >
              хийвэл шимтгэлгүй
            </Text>
          </Col>
        </Grid>
        <Grid md={2} xs={4}>
          <Image width={128} height={64} src="/banks/khanbank.png" />
        </Grid>
        <Grid md={2} xs={4}>
          <Image width={128} height={64} src="/banks/golomt.png" />
        </Grid>
        <Grid md={2} xs={4}>
          <Image width={128} height={64} src="/banks/xacbank.png" />
        </Grid>
        <Grid md={2} xs={4}>
          <Image width={128} height={64} src="/banks/tdbm.png" />
        </Grid>
        <Grid md={2} xs={4}>
          <Image width={128} height={64} src="/banks/mbank.png" />
        </Grid>
        <Grid md={2} xs={4}>
          <Image width={128} height={64} src="/banks/turiin bank.png" />
        </Grid>
      </Grid.Container>
    </Container>
  );
};

export default SupportedBanks;
