'use client';

import type { ColumnDef } from '@tanstack/react-table';
import { format } from 'date-fns';
import { ArrowDown, ArrowUp, ArrowUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export type StreamData = {
  id: string;
  songName: string;
  artist: string;
  genre: string;
  dateStreamed: string;
  streamCount: number;
};

export const columns: ColumnDef<StreamData>[] = [
  {
    accessorKey: 'songName',
    header: ({ column }) => {
      const isSorted = column.getIsSorted();
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(isSorted === 'asc')}
          className="hover:bg-transparent"
        >
          Song
          {isSorted === 'asc' ? (
            <ArrowUp className="ml-2 h-4 w-4" />
          ) : isSorted === 'desc' ? (
            <ArrowDown className="ml-2 h-4 w-4" />
          ) : <ArrowUpDown className="ml-2 h-4 w-4" />}
        </Button>
      );
    },
  },
  {
    accessorKey: 'artist',
    header: ({ column }) => {
      const isSorted = column.getIsSorted();
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(isSorted === 'asc')}
          className="hover:bg-transparent"
        >
          Artist
          {isSorted === 'asc' ? (
            <ArrowUp className="ml-2 h-4 w-4" />
          ) : isSorted === 'desc' ? (
            <ArrowDown className="ml-2 h-4 w-4" />
          ) : <ArrowUpDown className="ml-2 h-4 w-4" />}
        </Button>
      );
    },
  },
  {
    accessorKey: 'genre',
    header: 'Genre',
  },
  {
    accessorKey: 'dateStreamed',
    header: ({ column }) => {
      const isSorted = column.getIsSorted();
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(isSorted === 'asc')}
          className="hover:bg-transparent"
        >
          Date
          {isSorted === 'asc' ? (
            <ArrowUp className="ml-2 h-4 w-4" />
          ) : isSorted === 'desc' ? (
            <ArrowDown className="ml-2 h-4 w-4" />
          ) : <ArrowUpDown className="ml-2 h-4 w-4" />}
        </Button>
      );
    },
    cell: ({ row }) => {
      return format(
        new Date(row.getValue('dateStreamed')),
        'MMM dd, yyyy HH:mm',
      );
    },
  },
  {
    accessorKey: 'streamCount',
    header: ({ column }) => {
      const isSorted = column.getIsSorted();
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(isSorted === 'asc')}
          className="hover:bg-transparent"
        >
          Streams
          {isSorted === 'asc' ? (
            <ArrowDown className="ml-2 h-4 w-4" />
          ) : isSorted === 'desc' ? (
            <ArrowUp className="ml-2 h-4 w-4" />
          ) : <ArrowUpDown className="ml-2 h-4 w-4" />}
        </Button>
      );
    },
    cell: ({ row }) => {
      const streamCount = Number.parseFloat(row.getValue('streamCount'));
      return (
        <div className="text-right font-medium">
          {streamCount.toLocaleString()}
        </div>
      );
    },
  },
];
