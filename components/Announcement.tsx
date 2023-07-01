import type { NextPage } from "next";
import { Badge, Text } from "@nextui-org/react";

const Announcement: NextPage = () => {
  return (
    <Text css={{ fontSize: "14px", pt: 15, textAlign: "center" }}>
      <Badge variant="bordered" color={"success"} css={{ marginRight: "5px" }}>
        Сайн уу! v0.0.1
      </Badge>
      Монголын анхны өөртөө үйлчилдэг агент
    </Text>
  );
};

export default Announcement;
