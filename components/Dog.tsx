import { FunctionComponent } from "preact";

type DogProps = {
    name: string;
    max_height_male: number,
    max_height_female: number,
    max_weight_male: number,
    max_weight_female: number,
    good_with_children: number,
    good_with_other_dogs: number,
    good_with_strangers: number,
    image_link: string,
};


const Dogo: FunctionComponent<DogProps> = (props) => {
    
    const { name, max_height_male, max_height_female, max_weight_male, max_weight_female, good_with_children, good_with_other_dogs, good_with_strangers  } = props;
    const url = `/dog`;
  
    return (
      <div class="parent-dog">
        <div class="box-dog">  
          <img src={props.image_link} alt="img" class="img"></img>
          <div> {/* Hacemos otro div para agrupar el texto */}
            <p class="text">·Name: {name}</p>
            <h2 class="text">·Height Male: {max_height_male}</h2>
            <h2 class="text">·Height Female: {max_height_female}</h2>
            <h2 class="text">·Weight Male: {max_weight_male}</h2>
            <h2 class="text">·Weight Famele: {max_weight_female}</h2>
            <h2 class="text">·Good Children: {good_with_children}</h2>
            <h2 class="text">·Good Other Dogs: {good_with_other_dogs}</h2>
            <h2 class="text">·Good Strangers: {good_with_strangers}</h2>
          </div>
        </div>
      </div>
    );
  };
  
  export default Dogo;