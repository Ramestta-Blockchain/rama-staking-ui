
import Card from "../overview/card";
import Price from "../overview/price"
import Secure from "../overview/secure"
import Footer from "../shared/footer";
import Earningcalculate from "./earningcalculate";

const Calculatorcmp = () => {
    return (
        <>
            <Secure />
            <Price />
            <Card />
            <Earningcalculate/>
            <Footer/>
        </>
    )
}

export default Calculatorcmp;