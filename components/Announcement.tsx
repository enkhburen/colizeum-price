import type { NextPage } from "next";
import { Badge, Text, Image, Container } from "@nextui-org/react";

const Announcement: NextPage = () => {
  return (
    <Container css={{ mt: 150 }}>
      <Image width={256} height={128} src="logo/colizeum.png" alt="" />
      <Text
        css={{
          fontSize: "24px",
          textAlign: "center",
          textTransform: "uppercase",
        }}
      >
        <Badge
          variant="bordered"
          css={{ marginRight: "5px", color: "#FEF102", borderColor: "#FEF102" }}
        >
          C O L I Z E U M !
        </Badge>
        Тавтай морил!
      </Text>
    </Container>
  );
};

export default Announcement;
