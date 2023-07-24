import type { NextPage } from "next";
import Layout from "@/pages/Layout";

import {
  Image,
  Button,
  Text,
  Badge,
  Container,
  Col,
  Grid,
  Spacer,
} from "@nextui-org/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  icon,
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import { useEffect, useState } from "react";

const Price: NextPage = () => {
  const [time, setTime] = useState<any>();
  const [hours, setHours] = useState<any>();
  const [minute, setMinute] = useState<any>();
  const [date, setDate] = useState<any>();
  const [weekend, setWeekend] = useState(false);
  useEffect(() => {
    setInterval(() => {
      const currentTime = new Date();
      const hours = currentTime.getHours();
      const minutes = currentTime.getMinutes();
      const seconds = currentTime.getSeconds();

      const formattedTime = `${hours}:${minutes}:${seconds}`;
      setDate(currentTime.getDay());
      setTime(formattedTime);
      setHours(hours);
      setMinute(minutes);

      if (date === 6 || date === 0) {
        setWeekend(true);
      } else {
        setWeekend(false);
      }
    }, 1000);
  });

  return (
    <Container>
      <Col>
        <Text
          h2
          css={{
            borderBottom: "1px solid #FEF102",
            textAlign: "center",
            fontWeight: "bold",
            pb: 10,
          }}
        >
          <FontAwesomeIcon
            icon={solid("user-group")}
            color="#FEF102"
            style={{ marginRight: "20px" }}
          />
          ЗААЛ (RTX 3060, 165hz, 27&quot;)
        </Text>
      </Col>
      <Col>
        <Text>{time}</Text>
        <Grid.Container>
          <Grid xs={4}>
            <Col css={{ textAlign: "center" }}>
              <Text h2 css={{ m: 0, mb: -5 }}>
                ЦАГИЙН
              </Text>
              <Text color="#999" span>
                {hours >= 8 && hours < 17 ? "08.00-17.00" : ""}
                {hours >= 17 || (hours >= 0 && hours < 8) ? "17.00-08.00" : ""}
              </Text>
              <Text h2>
                {weekend === false && hours >= 8 && hours < 17 ? "3,000₮" : ""}
                {(weekend === false && hours >= 17) ||
                (weekend === false && hours >= 0 && hours < 8)
                  ? "3,500₮"
                  : ""}
                {weekend === true && hours >= 8 && hours < 17 ? "3,500₮" : ""}
                {(weekend === true && hours >= 17) ||
                (weekend === true && hours >= 0 && hours < 8)
                  ? "4,000₮"
                  : ""}
              </Text>
            </Col>
          </Grid>
          <Grid xs={4}>
            <Col css={{ textAlign: "center" }}>
              <Text h2 css={{ m: 0, mb: -5 }}>
                3 ЦАГИЙН БАГЦ
              </Text>
              <Text color="#999" span>
                {hours >= 8 && hours < 16 ? "08.00-16.00" : ""}
                {hours >= 16 && hours < 21 ? "16.00-21.00" : ""}
                {(hours >= 21 && hours <= 23) || (hours >= 0 && hours < 8)
                  ? "ЦАГ ДУУССАН, АВАХ БОЛОМЖГҮЙ (08.00-21.00)"
                  : ""}
              </Text>
              <Text h2>
                {weekend === false && hours >= 8 && hours < 16 ? "8,000₮" : ""}
                {weekend === false && hours >= 16 && hours < 21 ? "9,500₮" : ""}
                {weekend === true && hours >= 8 && hours < 16 ? "9,000₮" : ""}
                {weekend === true && hours >= 16 && hours < 21 ? "10,000₮" : ""}
              </Text>
            </Col>
          </Grid>
          <Grid xs={4}>
            <Col css={{ textAlign: "center" }}>
              <Text h2 css={{ m: 0, mb: -5 }}>
                {hours >= 8 && hours < 20 ? "5 ЦАГИЙН БАГЦ" : ""}
                {(hours >= 22 && hours <= 23) || (hours >= 0 && hours < 8)
                  ? "10 ЦАГИЙН ШӨНИЙН БАГЦ"
                  : ""}
              </Text>
              <Text color="#999" span>
                {hours >= 8 && hours < 14 ? "08.00-14.00" : ""}
                {hours >= 14 && hours < 20 ? "14.00-20.00" : ""}
                {(hours >= 22 && hours <= 23) || (hours >= 0 && hours < 8)
                  ? "(22.00-08.00)"
                  : ""}
              </Text>
              <Text h2>
                {weekend === false && hours >= 8 && hours < 14 ? "12,000₮" : ""}
                {weekend === false && hours >= 14 && hours < 20
                  ? "14,500₮"
                  : ""}
                {weekend === true && hours >= 8 && hours < 14 ? "14,000₮" : ""}
                {weekend === true && hours >= 14 && hours < 21 ? "16,000₮" : ""}
                {(weekend === false && hours >= 22) ||
                (weekend === false && hours >= 0 && hours < 8)
                  ? "18,000₮"
                  : ""}

                {(weekend === true && hours >= 22) ||
                (weekend === true && hours >= 0 && hours < 8)
                  ? "20,000₮"
                  : ""}
              </Text>
            </Col>
          </Grid>
        </Grid.Container>
      </Col>

      <Col>
        <Spacer y={3} />
        <Text
          h2
          css={{
            borderBottom: "1px solid #FEF102",
            textAlign: "center",
            fontWeight: "bold",
            pb: 10,
          }}
        >
          <FontAwesomeIcon
            icon={solid("computer")}
            color="#FEF102"
            style={{ marginRight: "20px" }}
          />
          BOOTCAMP (RTX 3060, 165hz, 27&quot;)
        </Text>
      </Col>
      <Col css={{ mt: 10 }}>
        <Spacer y={2} />
        <Grid.Container>
          <Grid xs={4}>
            <Col css={{ textAlign: "center" }}>
              <Text h2 css={{ m: 0, mb: -5 }}>
                ЦАГИЙН
              </Text>
              <Text color="#999" span>
                {hours >= 8 && hours < 17 ? "08.00-17.00" : ""}
                {hours >= 17 || (hours >= 0 && hours < 8) ? "17.00-08.00" : ""}
              </Text>
              <Text h2>
                {weekend === false && hours >= 8 && hours < 17 ? "3,500₮" : ""}
                {(weekend === false && hours >= 17) ||
                (weekend === false && hours >= 0 && hours < 8)
                  ? "4,000₮"
                  : ""}
                {weekend === true && hours >= 8 && hours < 17 ? "4,000₮" : ""}
                {(weekend === true && hours >= 17) ||
                (weekend === true && hours >= 0 && hours < 8)
                  ? "4,500₮"
                  : ""}
              </Text>
            </Col>
          </Grid>
          <Grid xs={4}>
            <Col css={{ textAlign: "center" }}>
              <Text h2 css={{ m: 0, mb: -5 }}>
                3 ЦАГИЙН БАГЦ
              </Text>
              <Text color="#999" span>
                {hours >= 8 && hours < 16 ? "08.00-16.00" : ""}
                {hours >= 16 && hours < 21 ? "16.00-21.00" : ""}
                {(hours >= 21 && hours <= 23) || (hours >= 0 && hours < 8)
                  ? "ЦАГ ДУУССАН, АВАХ БОЛОМЖГҮЙ (08.00-21.00)"
                  : ""}
              </Text>
              <Text h2>
                {weekend === false && hours >= 8 && hours < 16 ? "9,000₮" : ""}
                {weekend === false && hours >= 16 && hours < 21
                  ? "11,000₮"
                  : ""}
                {weekend === true && hours >= 8 && hours < 16 ? "10,000₮" : ""}
                {weekend === true && hours >= 16 && hours < 21 ? "13,000₮" : ""}
              </Text>
            </Col>
          </Grid>
          <Grid xs={4}>
            <Col css={{ textAlign: "center" }}>
              <Text h2 css={{ m: 0, mb: -5 }}>
                {hours >= 8 && hours < 20 ? "5 ЦАГИЙН БАГЦ" : ""}
                {(hours >= 22 && hours <= 23) || (hours >= 0 && hours < 8)
                  ? "10 ЦАГИЙН ШӨНИЙН БАГЦ"
                  : ""}
              </Text>
              <Text color="#999" span>
                {hours >= 8 && hours < 14 ? "08.00-14.00" : ""}
                {hours >= 14 && hours < 20 ? "14.00-20.00" : ""}
                {(hours >= 22 && hours <= 23) || (hours >= 0 && hours < 8)
                  ? "(22.00-08.00)"
                  : ""}
              </Text>
              <Text h2>
                {weekend === false && hours >= 8 && hours < 14 ? "14,000₮" : ""}
                {weekend === false && hours >= 14 && hours < 20
                  ? "17,000₮"
                  : ""}
                {weekend === true && hours >= 8 && hours < 14 ? "16,000₮" : ""}
                {weekend === true && hours >= 14 && hours < 21 ? "18,000₮" : ""}
                {(weekend === false && hours >= 22) ||
                (weekend === false && hours >= 0 && hours < 8)
                  ? "20,000₮"
                  : ""}

                {(weekend === true && hours >= 22) ||
                (weekend === true && hours >= 0 && hours < 8)
                  ? "22,000₮"
                  : ""}
              </Text>
            </Col>
          </Grid>
        </Grid.Container>
      </Col>

      <Col>
        <Spacer y={3} />
        <Text
          h2
          css={{
            borderBottom: "1px solid #FEF102",
            textAlign: "center",
            fontWeight: "bold",
            pb: 10,
          }}
        >
          <FontAwesomeIcon
            icon={solid("headset")}
            color="#FEF102"
            style={{ marginRight: "20px" }}
          />
          BOOTCAMP-VIP (RTX 3070Ti, 280hz, 27&quot;)
        </Text>
      </Col>
      <Col>
        <Spacer y={2} />
        <Grid.Container>
          <Grid xs={4}>
            <Col css={{ textAlign: "center" }}>
              <Text h2 css={{ m: 0, mb: -5 }}>
                ЦАГИЙН
              </Text>
              <Text color="#999" span>
                {hours >= 8 && hours < 17 ? "08.00-17.00" : ""}
                {hours >= 17 || (hours >= 0 && hours < 8) ? "17.00-08.00" : ""}
              </Text>
              <Text h2>
                {weekend === false && hours >= 8 && hours < 17 ? "4,000₮" : ""}
                {(weekend === false && hours >= 17) ||
                (weekend === false && hours >= 0 && hours < 8)
                  ? "4,500₮"
                  : ""}
                {weekend === true && hours >= 8 && hours < 17 ? "4,500₮" : ""}
                {(weekend === true && hours >= 17) ||
                (weekend === true && hours >= 0 && hours < 8)
                  ? "5,000₮"
                  : ""}
              </Text>
            </Col>
          </Grid>
          <Grid xs={4}>
            <Col css={{ textAlign: "center" }}>
              <Text h2 css={{ m: 0, mb: -5 }}>
                3 ЦАГИЙН БАГЦ
              </Text>
              <Text color="#999" span>
                {hours >= 8 && hours < 16 ? "08.00-16.00" : ""}
                {hours >= 16 && hours < 21 ? "16.00-21.00" : ""}
                {(hours >= 21 && hours <= 23) || (hours >= 0 && hours < 8)
                  ? "ЦАГ ДУУССАН, АВАХ БОЛОМЖГҮЙ (08.00-21.00)"
                  : ""}
              </Text>
              <Text h2>
                {weekend === false && hours >= 8 && hours < 16 ? "10,000₮" : ""}
                {weekend === false && hours >= 16 && hours < 21
                  ? "13,000₮"
                  : ""}
                {weekend === true && hours >= 8 && hours < 14 ? "12,000₮" : ""}
                {weekend === true && hours >= 14 && hours < 21 ? "14,000₮" : ""}
              </Text>
            </Col>
          </Grid>
          <Grid xs={4}>
            <Col css={{ textAlign: "center" }}>
              <Text h2 css={{ m: 0, mb: -5 }}>
                {hours >= 8 && hours < 20 ? "5 ЦАГИЙН БАГЦ" : ""}
                {(hours >= 22 && hours <= 23) || (hours >= 0 && hours < 8)
                  ? "10 ЦАГИЙН ШӨНИЙН БАГЦ"
                  : ""}
              </Text>
              <Text color="#999" span>
                {hours >= 8 && hours < 14 ? "08.00-14.00" : ""}
                {hours >= 14 && hours < 20 ? "14.00-20.00" : ""}
                {(hours >= 22 && hours <= 23) || (hours >= 0 && hours < 8)
                  ? "(22.00-08.00)"
                  : ""}
              </Text>
              <Text h2>
                {weekend === false && hours >= 8 && hours < 14 ? "16,000₮" : ""}
                {weekend === false && hours >= 14 && hours < 20
                  ? "18,000₮"
                  : ""}
                {weekend === true && hours >= 8 && hours < 16 ? "18,000₮" : ""}
                {weekend === true && hours >= 16 && hours < 21 ? "20,000₮" : ""}
                {(weekend === false && hours >= 22) ||
                (weekend === false && hours >= 0 && hours < 8)
                  ? "22,000₮"
                  : ""}

                {(weekend === true && hours >= 22) ||
                (weekend === true && hours >= 0 && hours < 8)
                  ? "25,000₮"
                  : ""}
              </Text>
            </Col>
          </Grid>
        </Grid.Container>
      </Col>

      <Col>
        <Spacer y={3} />
        <Text
          h2
          css={{
            borderBottom: "1px solid #FEF102",
            textAlign: "center",
            fontWeight: "bold",
            pb: 10,
          }}
        >
          <FontAwesomeIcon
            icon={solid("gamepad")}
            color="#FEF102"
            style={{ marginRight: "20px" }}
          />
          Playstation 5 65&quot; (2 хүртэл хүн)
        </Text>
      </Col>
      <Col>
        <Spacer y={2} />
        <Grid.Container>
          <Grid xs={4}>
            <Col css={{ textAlign: "center" }}>
              <Text h2 css={{ m: 0, mb: -5 }}>
                ЦАГИЙН
              </Text>
              <Text color="#999" span>
                {hours >= 8 && hours < 17 ? "08.00-17.00" : ""}
                {hours >= 17 || (hours >= 0 && hours < 8) ? "17.00-08.00" : ""}
              </Text>
              <Text h2>
                {weekend === false && hours >= 8 && hours < 17 ? "5,000₮" : ""}
                {(weekend === false && hours >= 17) ||
                (weekend === false && hours >= 0 && hours < 8)
                  ? "6,000₮"
                  : ""}
                {weekend === true && hours >= 8 && hours < 17 ? "6,000₮" : ""}
                {(weekend === true && hours >= 17) ||
                (weekend === true && hours >= 0 && hours < 8)
                  ? "7,000₮"
                  : ""}
              </Text>
            </Col>
          </Grid>
          <Grid xs={4}>
            <Col css={{ textAlign: "center" }}>
              <Text h2 css={{ m: 0, mb: -5 }}>
                3 ЦАГИЙН БАГЦ
              </Text>
              <Text color="#999" span>
                {hours >= 8 && hours < 16 ? "08.00-16.00" : ""}
                {hours >= 16 && hours < 21 ? "16.00-21.00" : ""}
                {(hours >= 21 && hours <= 23) || (hours >= 0 && hours < 8)
                  ? "ЦАГ ДУУССАН, АВАХ БОЛОМЖГҮЙ (08.00-21.00)"
                  : ""}
              </Text>
              <Text h2>
                {weekend === false && hours >= 8 && hours < 16 ? "13,000₮" : ""}
                {weekend === false && hours >= 16 && hours < 21
                  ? "16,000₮"
                  : ""}
                {weekend === true && hours >= 8 && hours < 16 ? "16,000₮" : ""}
                {weekend === true && hours >= 16 && hours < 21 ? "19,000₮" : ""}
              </Text>
            </Col>
          </Grid>
          <Grid xs={4}>
            <Col css={{ textAlign: "center" }}>
              <Text h2 css={{ m: 0, mb: -5 }}>
                {hours >= 8 && hours < 20 ? "5 ЦАГИЙН БАГЦ" : ""}
                {(hours >= 22 && hours <= 23) || (hours >= 0 && hours < 8)
                  ? "10 ЦАГИЙН ШӨНИЙН БАГЦ"
                  : ""}
              </Text>
              <Text color="#999" span>
                {hours >= 8 && hours < 14 ? "08.00-14.00" : ""}
                {hours >= 14 && hours < 20 ? "14.00-20.00" : ""}
                {(hours >= 22 && hours <= 23) || (hours >= 0 && hours < 8)
                  ? "(22.00-08.00)"
                  : ""}
              </Text>
              <Text h2>
                {weekend === false && hours >= 8 && hours < 14 ? "20,000₮" : ""}
                {weekend === false && hours >= 14 && hours < 20
                  ? "24,000₮"
                  : ""}
                {weekend === true && hours >= 8 && hours < 14 ? "24,000₮" : ""}
                {weekend === true && hours >= 14 && hours < 21 ? "28,000₮" : ""}
                {(weekend === false && hours >= 22) ||
                (weekend === false && hours >= 0 && hours < 8)
                  ? "27,000₮"
                  : ""}

                {(weekend === true && hours >= 22) ||
                (weekend === true && hours >= 0 && hours < 8)
                  ? "31,000₮"
                  : ""}
              </Text>
            </Col>
          </Grid>
        </Grid.Container>
      </Col>
    </Container>
  );
};

export default Price;
