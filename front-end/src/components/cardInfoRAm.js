import React from 'react'

export const CardInfoRAm = ({data, color}) => {
    const {VM, totalRAM, usingRAM, usePorcent, freeRAM} = data;

    return (
        <div className={`alert alert-${color} mb-3 divcomplete`}>
            <div className='row'>
                <h4>{VM}</h4>
                <div className='col-3'>
                    <div className = {`card border-${color} mb-3`}>
                        <div className='card-header'>Memoria RAM total</div>
                        <div className='card-body'>
                            <h5 className='card-title'>{totalRAM} MB</h5>
                        </div>
                    </div>
                </div>
                <div className='col-3'>
                    <div className={`card border-${color} mb-3`}>
                        <div className='card-header'>Memoria RAM en uso</div>
                        <div className='card-body'>
                            <h5 className='card-title'>{usingRAM} MB</h5>
                        </div>
                    </div>
                </div>
                <div className='col-3'>
                    <div className={`card border-${color} mb-3`}>
                        <div className='card-header'>Porcentaje de RAM</div>
                        <div className='card-body'>
                            <h5 className='card-title'>{usePorcent}%</h5>
                        </div>
                    </div>
                </div>
                <div className='col-3'>
                    <div className={`card border-${color} mb-3`}>
                        <div className='card-header'>Memoria RAM libre</div>
                        <div className='card-body'>
                            <h5 className='card-title'>{freeRAM} MB</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
