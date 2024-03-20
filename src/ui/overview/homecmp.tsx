import Footer from "../shared/footer"
import Card from "./card"
import HomeTable from "./homeTable"
import Price from "./price"
import Secure from "./secure"

const Homecmp = () => {
    return (
        <>
            <Secure />
            <Price />
            <Card />
            <HomeTable />
            <Footer />
        </>
    )
}

export default Homecmp