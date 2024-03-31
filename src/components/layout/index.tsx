import { Container } from "@mui/material";
import Navbar from "./navbar";

interface LayoutProps {
  children: string | React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Container maxWidth="lg">
      <Navbar />
      {children}
    </Container>
  );
};

export default Layout;
