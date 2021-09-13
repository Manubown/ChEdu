import { Dimensions, StyleSheet} from 'react-native';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default getOrientation = () => {
  if(windowWidth<windowHeight){
    return true;
  }else{
    return false;
  }
}
