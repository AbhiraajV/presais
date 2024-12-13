import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface TableData {
  Name: string;
  EstimatedValue: number;
  Volume: number;
  Cpc: number;
}

interface SmallTableProps {
  data: TableData[];
}

export default function KWTable({ data }: SmallTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow className='text-[#fff9]'>
          <TableHead>Name</TableHead>
          <TableHead>Est. Value</TableHead>
          <TableHead>Volume</TableHead>
          <TableHead>CPC</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item?.Name}</TableCell>
            <TableCell>${item?.EstimatedValue ?? 'N/A'}</TableCell>
            <TableCell>{item?.Volume}</TableCell>
            <TableCell>${item?.Cpc ?? 'N/A'}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

