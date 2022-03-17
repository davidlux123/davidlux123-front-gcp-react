import React, { useEffect, useState } from 'react'
import { ListLogs } from './listLogs';
import { setLogs } from '../requests/api-modsKernel';


export const Logs = () => {
  const [logsRam, setlogsRam] = useState([]);
  const [logsCpu, setlogsCpu] = useState([]);
  
  useEffect(() => {
    const socket = setLogs(setlogsRam, setlogsCpu);
    return () => socket.disconnect();
  }, [])
  
  return (
    <div>
      <div className='header'>Lista de Logs Realizados</div>
        <div className='divcenter'>
          <div className='item'>
            <ListLogs data = {logsRam} title = "logs RAM" />
          </div>
          <div className='item'>
            <ListLogs data = {logsCpu} title = "logs CPU" />
          </div>
        </div>
    </div>
  )
}

