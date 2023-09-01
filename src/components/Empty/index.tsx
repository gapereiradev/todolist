import { View, Image, TextInput, TouchableOpacity, Text} from 'react-native';
import { styles } from './styles';
import logoImage from "../../assets/Logo.png"
import { theme } from '../../theme';

import { MaterialCommunityIcons } from '@expo/vector-icons'

import clipboard from '../../assets/Clipboard.png'

export function Empty(){
    return(
       <View style={styles.emptyContainer}>
            <Image source={clipboard} style={styles.image}/>
            <Text style={styles.textBold}>Você ainda não tem tarefas cadastradas</Text>
            <Text style={[styles.textBold, styles.textRegular]}>Crie tarefas e organize seus itens a fazer</Text>
       </View>
        
    )
}