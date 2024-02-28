import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { City, CityResponse } from "../../types.ts";
import Axios from "npm:axios";
import Ciu from "../../components/Ciudad.tsx";

const apiKey = "CbmwFqPFOskF4+mJRHqIUQ==pv7Sz9vc428fBkK7";

export const handler: Handlers = {
   
  GET: async (_req: Request, ctx: FreshContext<unknown, CityResponse>) => {
  
    try {
  
      const url = new URL(_req.url);

      const name = url.searchParams.get("name") || "";
      
        if(name !== ""){

            const ciudad = await Axios.get<CityResponse>(`https://api.api-ninjas.com/v1/city?name=${name}`,{
                headers: {
                    "X-Api-Key": apiKey,
                },
            });

            if(ciudad.data.length === 0){

                return ctx.render([]); //Si no existe ciudad, se muestra un array vacio
               
            }else{

                return ctx.render(ciudad.data ); //Devolvemos la ciudad
            }

        } else {

            return ctx.render([]); //Si no le pasamos una ciudad, se muestra un array vacio
        }
    } catch (e) {

      console.error(e);
      
      throw new Error("Ha habido un error");
    };
  },
};

//Se usa target en el formulario ya que lo va a mostrar en la misma pagina

export default function Page(props: PageProps<CityResponse>) {
  
    try{
  
      const results = props.data;
  
      return (
  
        <div>
          
            <a href="/">Back</a>
            <h1> City Search</h1>

            <form method="get" /*target="/city"*/> 
                <input type="text" name="name" />
                <button> Search </button>
            </form>

          {results.map((ci) => (
            <Ciu
            key={ci.id} //Siempre que se haga un map hay que poner la key de id
            name={ci.name}
            latitude={ci.latitude}
            longitude={ci.longitude}
            country={ci.country}
            population={ci.population}
            />

          ))}

        </div>
      
      );
  
    }catch(e){
  
      console.error(e);
      
      throw new Error("Ha habido un error");
    };
  };
    
  
