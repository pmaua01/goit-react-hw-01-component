import styled from "styled-components";

export const SectionUpload = styled.section`
  padding-top: ${(p) => p.theme.space[6]}px;
  padding-bottom: ${(p) => p.theme.space[6]}px;
  text-align: center;
  margin-left: 15px;
`;

export const SectionTitle = styled.h2`
  text-align: center;
  font-size: 50px;
  text-transform: uppercase;
  color: ${(p) => p.theme.colors.accent};
  margin-bottom: 20px;
`;
