import { Collapse, Text, Col, Grid } from "@nextui-org/react";

export default function App() {
  return (
    <Grid.Container>
      <Grid xs={12} justify="center">
        <Col>
          <Text
            h3
            transform="uppercase"
            weight={"bold"}
            css={{ textAlign: "center", m: 0 }}
          >
            түгээмэл асуултууд
          </Text>
          <Text
            transform="uppercase"
            size={"12px"}
            color="#999"
            css={{ textAlign: "center" }}
          >
            Хамгийн түгээмэл асуултуудад хариулав
          </Text>
        </Col>
      </Grid>
      <Grid xs={12}>
        <Collapse.Group>
          <Collapse title="Option A" subtitle="More description about Option A">
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Collapse>
          <Collapse
            title="Option B"
            subtitle={
              <>
                More description about <Text b>Option B</Text>
              </>
            }
          >
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Collapse>
        </Collapse.Group>
      </Grid>
    </Grid.Container>
  );
}
