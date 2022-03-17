import React, { useEffect, useState } from 'react'
import { ListCpus } from './listCpus'
import { getCPU } from '../requests/api-modsKernel';
import { ListCpuSons } from './listCpuSons';

export const ProcesosCPU = () => {
  const [cpus, setCpus] = useState([]);
  const [mostrar, setMostrar] = useState({
    semuestra: false,
    procesoPadre: '',
    pidPadre: '',
    sons: []
  });
  
  const get_CPU = ()=>{
    getCPU().then((resp)=>{
      setCpus(resp);
    });
  }

  useEffect(() => {
    const timeOut=setInterval(get_CPU, 2000);
    return () => clearInterval(timeOut);
  }, [cpus])

  return (
    <div>
        <div className='header'>Lista de Procesos</div>
        <div className='divcenter'>
          <div className='item'>
              <ListCpus data = {cpus} setMostrar = {setMostrar} />
          </div>
          {mostrar.semuestra ? 
            <div className='item'>
                <ListCpuSons data={mostrar} setMostrar = {setMostrar} />
            </div>
          :<></>  
          }
        </div>
        
    </div>
  )
}
