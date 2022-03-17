import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const ChartRam = ({data}) => {
  return (     
      <ResponsiveContainer width="99%" aspect={3}>
          <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
              }}
          >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="usingRAM_VM1" stroke="#fc0f0f" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="usingRAM_VM2" stroke="#ffd500" activeDot={{ r: 8 }} />
          </LineChart>
      </ResponsiveContainer>
  )
}