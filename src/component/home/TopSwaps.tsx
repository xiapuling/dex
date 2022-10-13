import React from 'react'
import { 
    Box, 
    Grid, 
    Button, 
    Tabs, 
    Tab,
    Table, 
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography
  } from '@mui/material';
import HoldersTab from '../sec_one/HoldersTab';
import SelectHours from './SelectHours';

function createData(name:any, calories:any, fat:any, carbs:any){
    return { name, calories, fat , carbs};
  }
  
  const rows = [
    createData(<Box className="name_here_bx"><Box component="img" src="/img/hot_pairs_01.png" alt="" />NameHere</Box>,<Typography className="red_nmbr">0.57%</Typography>, '$0.00011084',<Box className="light_opcty" component="img" src="/img/vrtcl_arrw_ic.svg" alt="" />),
    createData(<Box className="name_here_bx"><Box component="img" src="/img/hot_pairs_02.png" alt="" />NameHere</Box>,<Typography className="grrn_nmbr">0.57%</Typography>, '$0.00011084',<Box className="light_opcty" component="img" src="/img/vrtcl_arrw_ic.svg" alt="" />),
    createData(<Box className="name_here_bx"><Box component="img" src="/img/hot_pairs_03.png" alt="" />NameHere</Box>,<Typography className="red_nmbr">0.57%</Typography>, '$0.00011084',<Box className="light_opcty" component="img" src="/img/vrtcl_arrw_ic.svg" alt="" />),
    createData(<Box className="name_here_bx"><Box className="def_nmbr_bg">4</Box>NameHere</Box>,<Typography className="grrn_nmbr">0.57%</Typography>, '$0.00011084',<Box className="light_opcty" component="img" src="/img/vrtcl_arrw_ic.svg" alt="" />),
    createData(<Box className="name_here_bx"><Box className="def_nmbr_bg">5</Box>NameHere</Box>,<Typography className="red_nmbr">0.57%</Typography>, '$0.00011084',<Box className="light_opcty" component="img" src="/img/vrtcl_arrw_ic.svg" alt="" />),
    createData(<Box className="name_here_bx"><Box className="def_nmbr_bg">6</Box>NameHere</Box>,<Typography className="grrn_nmbr">0.57%</Typography>, '$0.00011084',<Box className="light_opcty" component="img" src="/img/vrtcl_arrw_ic.svg" alt="" />),
    createData(<Box className="name_here_bx"><Box className="def_nmbr_bg">7</Box>NameHere</Box>,<Typography className="red_nmbr">0.57%</Typography>, '$0.00011084',<Box className="light_opcty" component="img" src="/img/vrtcl_arrw_ic.svg" alt="" />),
    createData(<Box className="name_here_bx"><Box className="def_nmbr_bg">8</Box>NameHere</Box>,<Typography className="grrn_nmbr">0.57%</Typography>, '$0.00011084',<Box className="light_opcty" component="img" src="/img/vrtcl_arrw_ic.svg" alt="" />),
    createData(<Box className="name_here_bx"><Box className="def_nmbr_bg">9</Box>NameHere</Box>,<Typography className="red_nmbr">0.57%</Typography>, '$0.00011084',<Box className="light_opcty" component="img" src="/img/vrtcl_arrw_ic.svg" alt="" />),
    createData(<Box className="name_here_bx"><Box className="def_nmbr_bg">10</Box>NameHere</Box>,<Typography className="grrn_nmbr">0.57%</Typography>, '$0.00011084',<Box className="light_opcty" component="img" src="/img/vrtcl_arrw_ic.svg" alt="" />),
  ];


export default function TopSwaps() {
  return (
    <>
        <Box className="tp_swp_box">
            <Box className="tpswp_innr">
                <Box className="hdng_bx">
                  <Typography component="h1" className="def_h1">Top Swaps</Typography>
                  <SelectHours />
                </Box>
                <Box className="hldr_main_box ">
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                            {/* <TableRow>
                                <TableCell>BALANCE</TableCell>
                                <TableCell align="center">PERCENTAGE</TableCell>
                                <TableCell align="left">ADDRESS</TableCell>
                                <TableCell align="left"></TableCell>
                            </TableRow> */}
                            </TableHead>
                            <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="center">{row.calories}</TableCell>
                                <TableCell align="center">{row.fat}</TableCell>
                                <TableCell align="left">{row.carbs}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>
        </Box>
    </>
  )
}
