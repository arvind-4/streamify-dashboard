import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { TimeDistributionData } from '../../interface';

export const TimeDistributionChart = ({
  data,
}: {
  data: TimeDistributionData[] | null;
}) => {
  if (!data) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Streaming by Time of Day</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="hour" />
              <YAxis />
              <Tooltip formatter={(value) => value.toLocaleString()} />
              <Line
                type="monotone"
                dataKey="streams"
                stroke="#0088FE"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};
