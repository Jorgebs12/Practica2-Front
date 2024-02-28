import { FunctionComponent } from "preact";

type CityProps = {
    name: string,
    latitude: string,
    longitude: string,
    country: string,
    population: string,
};


const Ciu: FunctionComponent<CityProps> = (props) => {
    
    const { name, latitude, longitude, country, population } = props;
    const url = `/city`;
  
    return (
      <div class="parent">
        <div class="box">  
          <img src="https://cdn-icons-png.flaticon.com/512/3909/3909117.png" alt="img" class="img"></img>
          <h2 class="text-overflow">{name}</h2>
          <hr></hr>
          <h2 class="text-overflow">Latitude: {latitude}</h2>
          <h2 class="text-overflow">Longitude: {longitude}</h2>
          <h2 class="text-overflow">Country: {country}</h2>
          <h2 class="text-overflow">Population: {population}</h2>

        </div>
      </div>
    );
  };
  
  export default Ciu;