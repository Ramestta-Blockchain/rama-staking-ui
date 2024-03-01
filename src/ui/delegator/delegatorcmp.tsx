
import Card from "../overview/card";
import Price from "../overview/price";
import Secure from "../overview/secure";
import Footer from "../shared/footer";
import ControllerTable from "./controllerTable";
import DelegatorTable from "./delegatorTable";



const Delegatorcmp = () => {
    return (
        <>
          <Secure />
            <Price />
            <Card />
            <ControllerTable />
            <DelegatorTable/>
            <Footer/>
        </>
    )
}

export default Delegatorcmp;