import React from 'react'

const LogItem = ({log}) => {
  return<tr>
    <td>{log.vmname}</td>
    <td>{log.endpoint}</td>
    <td>{log.date}</td>
  </tr>;
}

export const ListLogs = ({data, title}) => {
  let header =  ['vmname','endpoint','date'];
  
  return <div>
    <h5 style = {{textAlign : 'center'}} >{title}</h5>
    <table className="table table-dark table-hover">
      <thead>
        <tr>
          {header.map(head => <th key = {head} scope="col">{head}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map(item => <LogItem key={item.id} log={item}/>)}
      </tbody>
    </table>
  </div>
}