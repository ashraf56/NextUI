'use client'
import React, { useMemo, useState } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, } from "@nextui-org/react";

export default function Retable({ users, columns }) {
    const [page, setPage] = useState(1);

    const rowsPerPage = 6;

    const pages = Math.ceil(users?.length / rowsPerPage);

    const items = useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        return users?.slice(start, end);
    }, [page, users]);

    return (
        <div> <Table className="max-w-2xl h-[400px]"
            aria-label="Example table with client side pagination">
            <TableHeader>
            {/* table column and table must be same */}
                {
                    columns.map(c => (
                        <TableColumn key={c}>{c}</TableColumn>
                    ))
                }
            </TableHeader>
            <TableBody>

                {
                    items?.map(it => (
                        <TableRow key={it}>
                            <TableCell >{it.title}</TableCell>
                            <TableCell>{it.price}</TableCell>
                            <TableCell>{it.category}</TableCell>
                        </TableRow>))
                }


            </TableBody>
        </Table>
            <div className="flex w-full justify-center mt-5">
                <Pagination
                    isCompact
                    showControls
                    showShadow
                    color="secondary"
                    page={page}
                    total={pages}
                    onChange={(page) => setPage(page)}
                />
            </div>
        </div>
    );
}
