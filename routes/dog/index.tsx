import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { Dog, DogResponse } from "../../types.ts";
import Axios from "npm:axios";
import Dogo from '../../components/Dog.tsx';

const apiKey = "CbmwFqPFOskF4+mJRHqIUQ==pv7Sz9vc428fBkK7";

export const handler: Handlers = {
   
  GET: async (_req: Request, ctx: FreshContext<unknown, DogResponse>) => {
  
    try {
  
      const url = new URL(_req.url);

      const name = url.searchParams.get("name") || "";
      
        if(name !== ""){

            const dog = await Axios.get<DogResponse>(`https://api.api-ninjas.com/v1/dogs?name=${name}`,{
                headers: {
                    "X-Api-Key": apiKey,
                },
            });

            if(dog.data.length === 0){

                return ctx.render([]); //Si no existe un perro, se muestra un array vacio
               
            }else{

                return ctx.render(dog.data ); //Devolvemos el perro
            }

        } else {

            return ctx.render([]); //Si no le pasamos un perro, se muestra un array vacio
        }
    } catch (e) {

      console.error(e);
      
      throw new Error("Ha habido un error");
    };
  },
};

//Se usa target en el formulario ya que lo va a mostrar en la misma pagina

export default function Page(props: PageProps<DogResponse>) {
  
    try{
  
      const results = props.data;
  
      return (
  
        <div>
            <a href="/">Back</a>
            <h1> Dog Search</h1>

            <form method="get" /*target="/dog"*/> 
                <input type="text" name="name" />
                <button> Search </button>
            </form>

            {results.map((perr) => (
                <Dogo
                key={perr.id} 
                name={perr.name}
                max_weight_male={perr.max_weight_male}
                max_weight_female={perr.max_weight_female}
                max_height_male={perr.max_height_male}
                max_height_female={perr.max_height_female}
                good_with_children={perr.good_with_children}
                good_with_other_dogs={perr.good_with_other_dogs}
                good_with_strangers={perr.good_with_strangers}
                image_link={perr.image_link}
                />

            ))}
  
        </div>
      );
  
    }catch(e){
  
      console.error(e);
      
      throw new Error("Ha habido un error");
    };
};
    
  
