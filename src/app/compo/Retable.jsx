'use client'
import React, { useMemo, useState } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, getKeyValue, } from "@nextui-org/react";

export default function Retable({ users, columns }) {
    const [page, setPage] = useState(1);

    const rowsPerPage = 7;

    const pages = Math.ceil(users?.length / rowsPerPage);

    const items = useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        return users?.slice(start, end);
    }, [page, users]);

    return (
        <div> <Table className="max-w-full h-screen"
            aria-label="Example table with client side pagination" 
            bottomContent={
                <div className="flex w-full justify-center">
                  <Pagination
                    isCompact
                    showControls
                    showShadow
                    color="primary"
                    page={page}
                    total={pages}
                    onChange={(page) => setPage(page)}
                  />
                </div>
              }
            >
            <TableHeader>
                {
                    columns.map(c => (
                        <TableColumn key={c}>{c}</TableColumn>
                    ))
                }
            </TableHeader>
            <TableBody items={items}>
        {(item) => (
          <TableRow key={item}>
            {(columnKey) => <TableCell>{getKeyValue( item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
        </Table>
            
        </div>
    );
}
