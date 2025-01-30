"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import { formatCurrency } from "@/lib/utils";

interface Cryptocurrency {
  name: string;
  price: number;
  change24h: number;
  chartData: { value: number }[];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function CryptoTable({ data }: { data: any }) {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">Cryptocurrency Market</h1>
      <div className="rounded-md border border-neutrals-2">
        <Table>
          <TableHeader className="">
            <TableRow className="border-none">
              <TableHead>Name</TableHead>
              <TableHead className="text-right">Price</TableHead>
              <TableHead className="text-right">24h Change</TableHead>
              <TableHead className="hidden sm:table-cell">
                Chart (24h)
              </TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="border-none">
            {data.map((crypto) => (
              <TableRow
                key={crypto.id}
                className="border-none hover:bg-primary-1"
              >
                <TableCell className="font-medium">{crypto.name}</TableCell>
                <TableCell className="text-right">
                  {formatCurrency(crypto.quote.VND.price)}
                </TableCell>
                <TableCell
                  className={`text-right ${
                    crypto.quote.VND.volume_change_24h >= 0
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  <span className="flex items-center justify-end">
                    {crypto.quote.VND.volume_change_24h >= 0 ? (
                      <ArrowUpIcon className="w-4 h-4 mr-1" />
                    ) : (
                      <ArrowDownIcon className="w-4 h-4 mr-1" />
                    )}
                    {Math.abs(crypto.quote.VND.volume_change_24h).toFixed(2)}%
                  </span>
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  <ResponsiveContainer width="100%" height={50}>
                    <LineChart data={crypto.chartData}>
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke={crypto.change24h >= 0 ? "#22c55e" : "#ef4444"}
                        strokeWidth={2}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </TableCell>
                <TableCell>
                  <Button size="sm">Trade</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
