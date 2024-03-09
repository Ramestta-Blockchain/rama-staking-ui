import Headingcmp from "@/theme/components/headingcmp";
import PaginationCustome from "@/theme/components/paginationCustome";
import ShowDropList from "@/theme/components/showDropList";
import { Box } from "@mui/material";
import UnboundTable from "./unboundTable";

const Unbound = () => {
    return (
        <>
            <Box>
                <Headingcmp text={"Your Unbound History"} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                    <ShowDropList />
                    <PaginationCustome />
                </Box>
                <UnboundTable/>
            </Box>
        </>
    )
}

export default Unbound;