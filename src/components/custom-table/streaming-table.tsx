'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DataTable } from '@/components/ui/data-table';
import { Input } from '@/components/ui/input';
import { columns, type StreamData } from './columns';
import { Search } from 'lucide-react';

export function StreamingTable({ data }: { data: StreamData[] | null }) {
  const [filterValue, setFilterValue] = useState('');

  if (!data) {
    return null;
  }

  const filteredData = data.filter((item) => {
    const searchTerm = filterValue.toLowerCase();
    return (
      item.songName.toLowerCase().includes(searchTerm) ||
      item.artist.toLowerCase().includes(searchTerm)
    );
  });

  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Recent Streams</CardTitle>
        <div className="relative">
          <Search className="absolute left-2 top-3 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Search by song or artist..."
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
            className="pl-8"
          />
        </div>
      </CardHeader>
      <CardContent>
        <DataTable 
          columns={columns} 
          data={filteredData}
        />
      </CardContent>
    </Card>
  );
}
