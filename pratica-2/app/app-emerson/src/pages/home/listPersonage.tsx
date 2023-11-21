
import {styles as sy} from './home.styles'
import ListPersonageComponent from "src/components/listPersonage/listPersonage";


const ListPersonage:React.FC = () => {
  
 
  
    return (
      <>
       
        <sy.column>
          <ListPersonageComponent  colorBackground="#0000ff3d" colorText="#000"></ListPersonageComponent>     
        </sy.column>

      </>
    )
  }

  export {ListPersonage}