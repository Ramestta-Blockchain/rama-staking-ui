import { Box } from "@mui/material"
import AccountDefault from "./accountDefault";
import Headingcmp from "@/theme/components/headingcmp";
import AccountAfterConnect from "./accountAfterConnect";
import ControllerTable from "../delegator/controllerTable";

const Accountcmp = () => {
    return (
        <>
        <Headingcmp text={'Your Account'} />
        <ControllerTable />
        {/* <AccountDefault/> */}
        <AccountAfterConnect/>
        </>
    )
}

export default Accountcmp;