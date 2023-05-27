import React from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #333;
`;

const Paragraph = styled.p`
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: #666;
`;

const Home = () => (
  <HomeContainer>
    <Heading>Welcome!</Heading>
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam elementum
      convallis risus, id pellentesque ipsum pulvinar quis. Sed volutpat metus
      id turpis lacinia interdum. Mauris tristique euismod nisi vel fermentum.
      Curabitur non semper tortor, vitae rutrum nisi. Sed vitae ligula euismod,
      fermentum ligula non, suscipit magna. Duis nec fringilla lorem. In vitae
      sapien justo. Aliquam et efficitur nunc. Sed efficitur tincidunt
      consectetur. Ut vitae enim vitae dui fringilla accumsan. Phasellus id
      mollis est, ut finibus ante. Suspendisse eleifend eleifend ligula sed
      pellentesque.
    </Paragraph>
    <Paragraph>
      Fusce id ligula nec nunc tempor finibus. Aliquam non tortor eu metus
      pellentesque feugiat. Morbi convallis, urna ut aliquam bibendum, purus
      justo fringilla lacus, ac luctus tellus tellus non tellus. Mauris dictum
      ligula ut tincidunt vestibulum. In posuere facilisis nunc eu ultricies.
      Vivamus at quam congue, euismod massa ac, dictum ipsum. In hac habitasse
      platea dictumst. Sed ac enim id arcu sollicitudin cursus. Phasellus vitae
      tincidunt sapien, id bibendum sem. Sed pellentesque neque tellus, sed
      feugiat dolor iaculis eget. Nullam auctor eleifend fringilla. Sed sit amet
      nunc nec nunc faucibus tristique vel eu ex. Vivamus convallis pellentesque
      lectus, in elementum sem consequat id. Nullam mollis ultrices sapien, at
      commodo mauris semper eu. Donec in enim sollicitudin, ultrices turpis id,
      consequat dolor.
    </Paragraph>
  </HomeContainer>
);

export default Home;
