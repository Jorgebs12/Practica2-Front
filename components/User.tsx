import { FunctionComponent } from "preact";

type PersonProps = {
    name: string,
    email: string,
    sex: string,
    address: string,
};

/*El primer div es el padre donde se va a hacer el flex
en el segundo div se va a hacer solo la caja*/
const Per: FunctionComponent<PersonProps> = (props) => {
    
    const { name, address, sex, email } = props;
    const url = `/user`;
  
    return (
      <div class="parent"> 
        <div class="box">  
          <img src="https://static.vecteezy.com/system/resources/previews/010/147/713/non_2x/people-icon-sign-symbol-design-free-png.png" alt="img" class="img"></img>
            <h2 class="name">{name}</h2>
            <hr></hr>
            <h2 class="email">{email}</h2>
            <h2 class="address">{address}</h2>
            <h2 class="sex">{sex}</h2>
        </div>
      </div>
    );
  };
  
  export default Per;