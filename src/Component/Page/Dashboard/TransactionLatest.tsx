import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Bade } from '../../Element/Dashboard.Element'

interface Latest {
    no: number,
    name: string,
    symbol: string,
    status: string,
    amount: string,
    daytime: string
}

const data = [
    {
        no: 1,
        name: "Bot1",
        symbol: "bnb",
        status: "Buy",
        amount: "16.3500",
        daytime: "11-11-2021 10:00",
    },
    {
        no: 2,
        name: "Bot2",
        symbol: "bnb",
        status: "Buy",
        amount: "16.3500",
        daytime: "11-11-2021 10:00",
    },
    {
        no: 3,
        name: "Bot3",
        symbol: "bnb",
        status: "Buy",
        amount: "16.3500",
        daytime: "11-11-2021 10:00",
    },
    {
        no: 4,
        name: "Bot4",
        symbol: "bnb",
        status: "Sell",
        amount: "16.3500",
        daytime: "11-11-2021 10:00",
    },
    {
        no: 5,
        name: "Bot5",
        symbol: "bnb",
        status: "Sell",
        amount: "16.3500",
        daytime: "11-11-2021 10:00",
    },

]



export default function TransactionLatest() {
    return (
        <TableContainer sx={{ maxHeight: 200 }}>
            <Table size="small" aria-label="sticky table" stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell align="center" sx={{ fontWeight: "bolder" }}>No.</TableCell>
                        <TableCell align="center" sx={{ fontWeight: "bolder" }}>Name</TableCell>
                        <TableCell align="center" sx={{ fontWeight: "bolder" }}>Symbol</TableCell>
                        <TableCell align="center" sx={{ fontWeight: "bolder" }}>Status</TableCell>
                        <TableCell align="center" sx={{ fontWeight: "bolder" }}>Amount</TableCell>
                        <TableCell align="center" sx={{ fontWeight: "bolder" }}>Day/Time</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((item, i) => (
                        <TableRow
                            key={i}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="center" component="th" scope="row">{item.no}</TableCell>
                            <TableCell align="center">{item.name}</TableCell>
                            <TableCell align="center">{item.symbol.toUpperCase()}</TableCell>
                            <TableCell align="center" sx={{width:50}}>
                                <Bade style={{ background: item.status === "Buy" ? "#007944" : "#D32626" }} >
                                    {item.status}
                                </Bade>
                            </TableCell>
                            <TableCell align="center">{item.amount}</TableCell>
                            <TableCell align="center">{item.daytime}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}


