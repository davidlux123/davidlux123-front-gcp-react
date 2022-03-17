import React from 'react'

const CpuItem = ({cpu, setMostrar}) => {
  return<tr>
    <td>{cpu.VM}</td>
    <td>{cpu.Proceso}</td>
    <td>{cpu.PID}</td>
    <td>{cpu.RAM}</td>
    <td>{cpu.Estado}</td>
    <td>{cpu.date}</td>
    <td>
      <button 
        className="btn btn-sm btn-outline-primary"
        onClick={(e) => {
          e.preventDefault();
          setMostrar({
            semuestra: true,
            procesoPadre: cpu.Proceso,
            pidPadre: cpu.PID,
            sons: cpu.hijos
          });
        }}> ver hijos </button>
    </td>
  </tr>;
}

export const ListCpus = ({data, setMostrar}) => {
  let header = ['VM', 'Proceso', 'PID','RAM', 'Estado', 'date'];

  return <div>
    <table className="table table-dark table-hover">
      <thead>
        <tr>
            {header.map(head => <th key = {head} scope="col">{head}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map(item => <CpuItem key ={item.PID} cpu ={item} setMostrar = {setMostrar}/>)}
      </tbody>
    </table>
  </div>
}