//20.276505154510325, -97.95803878114857
import { useEffect, useState } from "react";

function Clima (){
    const [clima, setClima] = useState(null);
    const API_KEY = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;
    const lat = 20.276505154510325;
    const lon = -97.95803878114857;

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=es`)
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            setClima(data);
        })
        .catch(error => console.error("Error", error));
    },[])

    return (
        <div className="divClima">
            {clima ? (
                <>
                    <div className="clima-ubicacion">
                        <span className="clima-ciudad">{clima.name}</span>
                    </div>
                    <div className="clima-info">
                        <span className="clima-temp">{Math.round(clima.main.temp)}°C</span>
                        <span className="clima-separador">|</span>
                        <span className="clima-humedad">{clima.main.humidity}%</span>
                    </div>
                    <div className="clima-descripcion">
                        {clima.weather[0].description}
                    </div>
                </>
            ) : (
                <div className="clima-cargando">
                    <span>Cargando...</span>
                </div>
            )}
        </div>
    )
}
export default Clima;