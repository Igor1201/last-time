import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import _ from 'lodash';

export class Chart extends React.Component {
  render() {
    const lines = this.props.lines ?
      _.map(this.props.lines || [], (l) => <Area type='monotone' key={l.id} name={l.name} dataKey={l.id} fill={l.color} stroke={l.color} stackId='1' />) :
      <Area type='monotone' dataKey='count' stroke='#8884d8' stackId='1' />;
    return (
      <AreaChart width={600} height={300} data={this.props.data}
                 margin={{top: 5, right: 30, left: 5, bottom: 5}}>
        <XAxis dataKey='day' />
        <YAxis />
        <CartesianGrid strokeDasharray='3 3' />
        <Tooltip />
        { lines }
      </AreaChart>
    );
  }
}