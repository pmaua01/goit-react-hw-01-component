import styled from "styled-components";

export const ProfileCard = styled.div`
  border-radius: 6px;
  padding: ${(props) => props.theme.space[6]}px;

  box-shadow: 0 10px 20px rgba(122, 115, 117, 0.6);
  display: block;
`;

export const ProfileInfo = styled.div`
  width: 500px;
  display: flex;
  justify-content: end;
  flex-direction: column;
  align-item: center;
`;

export const AvatarThumb = styled.div`
  display: block;
  margin: auto;

  background-color: #808080;
  border-radius: 50%;
  overflow: hidden;
  width: 300px;
  height: 300px;

  margin-bottom: 10px;
`;

export const AvatarFoto = styled.img`
  display: block;
  height: 100%;
  width: 100%;

  object-fit: cover;
`;

export const ProfileName = styled.p`
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ProfileTag = styled.p`
  text-align: center;
  color: ${(p) => p.theme.colors.accent};
  margin-bottom: 10px;
`;

export const ProfileStats = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`;

export const ProfileStatsList = styled.li`
  display: flex;
  border: 1px solid ${(p) => p.theme.colors.accent};
  background-color: ${(p) => p.theme.colors.lite};
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding-top: ${(props) => props.theme.space[6]}px;
  padding-bottom: ${(props) => props.theme.space[6]}px;
  padding-left: ${(props) => props.theme.space[4]}px;
  padding-right: ${(props) => props.theme.space[4]}px;
`;

export const StatsTitle = styled.span`
  color: ${(p) => p.theme.colors.accent};
`;

export const StatsCount = styled.span`
  font-weight: bold;
`;
