import React from "react";
import {
  TableHead as MuiTableHead,
  TableCell,
  TableRow,
  useTheme,
} from "@mui/material";
import { ITableHeadColumn } from "@/types/table.type";

interface ITableHeadProps {
  columns: ITableHeadColumn[];
}

const TableHead: React.FC<ITableHeadProps> = ({ columns }) => {
  const theme = useTheme();

  return (
    <MuiTableHead>
      <TableRow
        sx={{
          "&": {
            borderRadius: 1,
            background: "red",
            backgroundColor: theme.palette.grey[200],
            border: `1px solid ${theme.palette.divider}`,
          },
        }}
      >
        {columns.map((column, index) => (
          <TableCell key={index} align={column.align || "right"}>
            {column.title}
          </TableCell>
        ))}
      </TableRow>
    </MuiTableHead>
  );
};

export default TableHead;
