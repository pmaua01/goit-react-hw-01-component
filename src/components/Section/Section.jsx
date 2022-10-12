import { SectionUpload, SectionTitle } from "./Sections.styled";
export const Section = ({ title, children }) => {
  return (
    <SectionUpload>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionUpload>
  );
};
