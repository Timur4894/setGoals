import { Pressable, StyleSheet, Text, View} from "react-native"

function GoalItem(props) {
    return(
        <Pressable onPress={props.onDeleteItem.bind(this, props.id)} style={({pressed}) => pressed && styles.presedItem}>
            <View style={styles.goalItem}>
                <Text style={{color: "white"}}>{props.text}</Text>
            </View>
        </Pressable>
    )

}

const styles = StyleSheet.create({
    goalsContainer: {
        flex: 4,
        marginTop: 30,
      },
      goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: "#333",
      },
      presedItem: {
        opacity: 0.5
      }
})

export default GoalItem