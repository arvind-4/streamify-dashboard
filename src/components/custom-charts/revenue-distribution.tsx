import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { RevenueData } from '../../interface';

import { COLORS } from '@/constants';

export const RevenueDistributionChart = ({
  data,
}: {
  data: RevenueData[] | null;
}) => {
  if (!data) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Revenue Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="amount"
                nameKey="source"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label={({ source, percentage }) => `${source}: ${percentage}%`}
              >
                {data.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};
