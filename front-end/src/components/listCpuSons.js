import React from 'react'

const SonItem = ({son, pidPadre}) => {
  return <tr>
        <td>{son.Proceso}</td>
        <td>{son.PID}</td>
        <td>{pidPadre}</td>
        <td>{son.Estado}</td>
    </tr>
  
}

export const ListCpuSons = ({data, setMostrar}) => {
    const header =  ['Proceso','PID', 'PID del Padre', 'Estado'];
    const {procesoPadre, pidPadre, sons} = data;

    return <div>
      <div className='divcenter'>
        <div className='item'>
            <h5 style = {{textAlign : 'center'}} >{procesoPadre}</h5>
        </div>
        <div className='item'>
            <button
            className="btn btn-sm btn-outline-primary"
            onClick={(e) => {
                e.preventDefault();
                setMostrar({
                    semuestra: false,
                    procesoPadre: '',
                    pidPadre: '',
                    sons: []
                });
            }}>ocultar</button>
        </div>
      </div>

      <table className="table table-dark table-hover">
        <thead>
          <tr>
            {header.map(head => <th key = {head} scope="col">{head}</th>)}
          </tr>
        </thead>
        <tbody>
          {sons.map(item => <SonItem key={item.PID} son={item} pidPadre = {pidPadre}/>)}
        </tbody>
      </table>
    </div>
}
