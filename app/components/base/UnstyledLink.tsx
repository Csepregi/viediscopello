import { Link } from "react-router";
import { styled } from "../../stitches.config";
import Text from "./Text";

const UnstyledLink = styled(Link, Text, {
  textDecoration: "none",
  transition: "color $1 $ease, opacity $1 $ease",
});

export default UnstyledLink;
