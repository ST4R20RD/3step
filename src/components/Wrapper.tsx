import styled from "styled-components";
import Calendar from "./Calendar";
import Guests from "./Guests";
import ReservationTimes from "./ReservationTimes";
import Container from "./Container";

export default function Wrapper() {
  return (
    <Container>
      <Div className="flex flex-col justify-center items-center w-96 min-h-[535px]">
        <Calendar />
        <ReservationTimes />
        <Guests />
      </Div>
    </Container>
  );
}

const Div = styled.div`
  & > * {
    border: 1px solid #03635f;
    width: 100%;
    &:nth-child(1) {
      border-top-left-radius: 1.5rem;
      border-top-right-radius: 1.5rem;
    }
    &:nth-child(2) {
      border-radius: 0;
    }
    &:nth-child(3) {
      border-bottom-left-radius: 1.5rem;
      border-bottom-right-radius: 1.5rem;
    }
  }
`;
