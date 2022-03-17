import React, { useEffect, useState } from 'react'
import { CardInfoRAm } from './cardInfoRAm'
import { ChartRam } from './chartRam'
import { getRAM } from '../requests/api-modsKernel';

export const ConsumoRam = () => {
  const [ram1, setRam1] = useState({usingRAM:0});
  const [ram2, setRam2] = useState({usingRAM:0});
  const [data, setdata] = useState([]);

  const get_RAM = () => {
    getRAM().then((resp) => {
      if (resp.VM === 'VM1') {
        setRam1(resp);
        setdata([...data, {
          date: resp.date,
          usingRAM_VM1: resp.usingRAM,
          usingRAM_VM2: ram2.usingRAM
        }]);
      }else if (resp.VM === 'VM2') {
        setRam2(resp); 
        setdata([...data, {
          date: resp.date,
          usingRAM_VM1: ram1.usingRAM,
          usingRAM_VM2: resp.usingRAM
        }]);
      }
    });
  }

  useEffect(() => {
    const timeOut = setInterval(get_RAM, 3000);
    return () => clearInterval(timeOut);
  }, [data]);

  return (
    <div>
        <div className='header'>Grafico del consumo de la memoria RAM</div>
        <CardInfoRAm data = {ram1} color = 'danger'/>
        <CardInfoRAm  data = {ram2} color = 'warning'/>
        <ChartRam data={data}/>
    </div>
  )
}
