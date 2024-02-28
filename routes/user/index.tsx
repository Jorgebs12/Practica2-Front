import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios";
import Per from "../../components/User.tsx";
import { People } from "../../types.ts";

const apiKey = "CbmwFqPFOskF4+mJRHqIUQ==pv7Sz9vc428fBkK7";

export const handler: Handlers = {
   
  GET: async (_req: Request, ctx: FreshContext<unknown, Person>) => {
  
    try {
  
      const url = new URL(_req.url);

      const response = await Axios.get<Person>(`https://api.api-ninjas.com/v1/randomuser`,{
        headers: {
            "X-Api-Key": apiKey,
        },
      });

      const user = response.data;

      return ctx.render(response.data); 

    } catch (e) {

      console.error(e);
      
      throw new Error("Ha habido un error");
    };
  },
};

export default function Page(props: PageProps<Person>) {
  
  try{

    const data = props.data;

    return (
        
        <div>
            <a href="/">Back</a>

            <Per 
            name={data.name}
            email={data.email}
            sex={data.sex} 
            address={data.address} 
            />

        </div>
    );

  }catch(e){

    console.error(e);
    
    throw new Error("Ha habido un error");
  };
};
  
