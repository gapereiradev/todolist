import { View, TouchableOpacity, Text} from 'react-native';
import { styles } from './styles';

import { MaterialCommunityIcons } from '@expo/vector-icons'
import { theme } from '../../theme';
import { TaskDTO } from '../../dtos/TaskDTO';

export function Task({title, isCompleted}:TaskDTO){
    return(
        <View style={styles.taskContainer}>
            <TouchableOpacity>
                <MaterialCommunityIcons 
                    name='checkbox-marked-circle-outline'
                    size={22}
                    color={theme.colors.brand.purple}
                />
            </TouchableOpacity>

        <View style={styles.textContainer}>
            <Text style={styles.textCreated}>{title}</Text>
        </View>
        

        <TouchableOpacity>
            <MaterialCommunityIcons 
                name='trash-can-outline'
                size={20}
                color={theme.colors.base.gray300}
            />
        </TouchableOpacity>     
        </View>
   
    )
}