import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

function PlayerTable({ PlayerData }) {
    return (
        <div className="w-full overflow-x-auto"> {/* Wrap table in a responsive div */}
            <TableContainer component={Paper} className="shadow-md">
                <Table stickyHeader aria-label="player table">
                    {/* Table Header */}
                    <TableHead>
                        <TableRow className="bg-gray-200">
                            <TableCell className="font-bold w-[200px]">Player Name</TableCell>
                            <TableCell className="font-bold w-[200px]">Team</TableCell>
                            <TableCell className="font-bold w-[200px]">Position</TableCell>
                            <TableCell className="font-bold w-[150px]">ID</TableCell>
                        </TableRow>
                    </TableHead>

                    {/* Table Body */}
                    <TableBody>
                        {PlayerData.length > 0 ? (
                            PlayerData.map((player, index) => (
                                <TableRow key={index} className="hover:bg-gray-100">
                                    <TableCell className="whitespace-nowrap">{player.name}</TableCell>
                                    <TableCell className="whitespace-nowrap">{player.teamname}</TableCell>
                                    <TableCell className="whitespace-nowrap">{player.position}</TableCell>
                                    <TableCell className="whitespace-nowrap">{player.id}</TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={4} className="text-center text-gray-500">
                                    No Data Available
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default PlayerTable;






