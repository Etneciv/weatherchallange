import React from 'react'
import CardPronosticDay from './CardPronosticDay';

const CardPronostics = (props) => {
    const {pronostic_weather} = props;
  return (
    <div className='w-full flex lg:col-span-4 lg:col-start-2 col-span-full gap-2 rounded-lg flex overflow-x-scroll snap-mandatory snap-x'>
        {pronostic_weather?pronostic_weather.map((day)=>{
            return(
                <CardPronosticDay
                    key={day.dt_txt}
                    day={day}
                />
            )
        }):'No se han encontrado pronosticos'}
    </div>
  )
}

export default CardPronostics
