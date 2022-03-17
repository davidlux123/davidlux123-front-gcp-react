import axios from "axios";
import socketIOClient from "socket.io-client";
const urlGO = process.env.BALANCERGO || 'http://35.208.104.239/api';
const urlNODE = process.env.ENGINENODE ||'https://seventh-dryad-340400.uc.r.appspot.com';//'http://localhost:8080/'

const arreglarJson = (element) =>{
    let nvoDate = element.date + ''
    nvoDate = nvoDate.split('.')[0]

    if (element.type === 'RAM'){

        const ram = element.ram_data;
        let total = ram.total/1000000 + '';
        total = total.split('.')[0];
        let free = ram.freeMemory/1000000 + '';
        free = free.split('.')[0];
        let uso = ram.usingMemory/1000000 + '';
        uso = uso.split('.')[0];
        let porcent = (ram.usingMemory/ram.total)*100 + '';
        porcent = porcent.split('.')[0];

        let Ram = {
            "VM": element.vm_name,
            "date": nvoDate,
            "totalRAM": total,
            "freeRAM": free,
            "usingRAM": uso,
            "usePorcent": porcent,
        }
        return Ram;

    }else if (element.type === 'CPU'){

        element.data = element.data.root;
        element.data.forEach(proceso => {
            proceso['VM'] = element.vm_name
            proceso['date'] = nvoDate;
        });
        return element.data
    }
    return element;
}

const request = async (httpcall) =>  {
    const response = await httpcall();
    return arreglarJson(response.data);
}

export const getRAM = () => request(() => axios.get(urlGO + "/RAM"));
export const getCPU = () => request(() => axios.get(urlGO + "/CPU"));
export const setLogs = (setlogsRam, setlogsCpu) => {
    const socket = socketIOClient(urlNODE);
    socket.on("FromAPI", data => {
      //console.log(data);
      setlogsRam(data.logsRam);
      setlogsCpu(data.logsCpu);
    });
    return socket
}
