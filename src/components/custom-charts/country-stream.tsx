import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CountryStreamData } from '../../interface';

export const CountryStreamChart = ({
  data,
}: {
  data: CountryStreamData[] | null;
}) => {
  if (!data) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Streams by Country</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="country" type="category" width={100} />
              <Tooltip formatter={(value) => value.toLocaleString()} />
              <Legend />
              <Bar dataKey="streams" fill="#0088FE" name="Streams" />
              <Bar dataKey="revenue" fill="#00C49F" name="Revenue ($)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};
