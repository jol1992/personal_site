import { FC } from "react";
import styled from "styled-components";

const Image = styled.img<{ width: string }>`
  width: ${({ width }) => width}px;
  filter: grayscale(100%);
  &:hover {
    filter: none;
    cursor: pointer;
  }
`;
const ImageConatiner = styled.div`
  max-width: 100%;
  margin: auto 0;
`;

const Container = styled.div`
  height: 100%;
  postion: relative;
`;

export const Icon: FC<{ image: string; width?: string; url?: string }> = ({
  image,
  width = "55",
  url,
}) => {
  return (
    <Container>
      <a href={url}>
        <ImageConatiner>
          <Image src={image} width={width} />
        </ImageConatiner>
      </a>
    </Container>
  );
};
