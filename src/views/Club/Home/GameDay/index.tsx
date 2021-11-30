import React from "react";
// import component
import { Col, Row } from "components/Layout";
import { GameCard } from "components/GameCard";
import { Text } from "components/Text";
import Slider from "react-slick";

// import styled component
import { GameDayWrapper } from "./Gameday.style";
// import types
import { GameCardProps } from "types/components/GameCard";

// define example data
import clubImage1 from "assets/images/home/image12.png";
import clubImage2 from "assets/images/home/image9.png";
import backgroundImage from "assets/images/home/background.png";
import marker from "assets/images/home/mark.png";

const data: GameCardProps[] = [
  {
    backgroundImage,
    clubImage1,
    clubImage2,
    clubName1: "Perth FC",
    clubName2: "Claremont FC",
    divisionImage: marker,
    divisionName: "Mens Division 1",
    progress: "IN PROGRESS",
    users: 36,
  },
  {
    backgroundImage,
    clubImage1,
    clubImage2,
    clubName1: "Perth FC",
    clubName2: "Claremont FC",
    divisionImage: marker,
    divisionName: "Mens Division 1",
    progress: "IN PROGRESS",
    users: 12,
  },
  {
    backgroundImage,
    clubImage1,
    clubImage2,
    clubName1: "Perth FC",
    clubName2: "Claremont FC",
    divisionImage: marker,
    divisionName: "Mens Division 1",
    progress: "IN PROGRESS",
  },
  {
    backgroundImage,
    clubImage1,
    clubImage2,
    clubName1: "Perth FC",
    clubName2: "Claremont FC",
    divisionImage: marker,
    divisionName: "Mens Division 1",
    progress: "20 NOV 21 10:30AM",
  },
  {
    backgroundImage,
    clubImage1,
    clubImage2,
    clubName1: "Perth FC",
    clubName2: "Claremont FC",
    divisionImage: marker,
    divisionName: "Mens Division 1",
    progress: "20 NOV 21 10:30AM",
  },
];

// const setting for react slick
const NextArrow: React.FC = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        top: "100px",
      }}
      onClick={onClick}
    />
  );
};

const BeforeArrow: React.FC = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        top: "100px",
      }}
      onClick={onClick}
    />
  );
};

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  nextArrow: <NextArrow />,
  prevArrow: <BeforeArrow />,
};

const GameDayView: React.FC = () => {
  return (
    <GameDayWrapper>
      <Row flexDirection="column" gap={5}>
        <Col item={24}>
          <Text fColor="white" fSize={24} fWeight={700}>
            {"Game Day - Live & Upcoming"}
          </Text>
        </Col>
        <Col item={24}>
          <Slider {...settings}>
            {data.map((item: GameCardProps, index: number) => {
              return <GameCard {...item} key={index} />;
            })}
          </Slider>
        </Col>
      </Row>
    </GameDayWrapper>
  );
};

export default GameDayView;
