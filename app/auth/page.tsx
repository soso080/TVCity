import Header from "@/src/component/Header";
import Loginform from "@/src/component/Loginform";
import Registerform from "@/src/component/Registerform";
import Footer from "@/src/component/Footer";

export default function Auth() {
  return (
    <>
      <Header />
      <Loginform />
      <Registerform />
      <Footer />
    </>
  );
}
