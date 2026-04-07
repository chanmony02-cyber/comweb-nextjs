import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";

// children is built-in prop
const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
