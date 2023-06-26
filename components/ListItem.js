import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';

/**
* @param {
* imageUrl: 画像URL(string)
* title: タイトル(string)
* author: ニュース提供元(string)
* onPress: タップされたときのイベント
*} props
*@returns
*/
export const  ListItem = (props) => {
  const sampleText = " I love Nature.I love Nature.I love Nature.I love Nature.I love Nature.I love Nature.I love Nature.I love Nature."
  return (
      <TouchableOpacity style={styles.itemContainer} onPress={props.onPress}>
        <View style={styles.leftContainer}>
          <Image
            style={{ width: 100, height: 100 }}
            source={{ uri: props.imageUrl }}
          />
        </View>
        <View style={styles.rightContainer}>
          <Text numberOfLines={2} style={styles.Text}>
            {props.title}
          </Text>
          <Text style={styles.subText}>{props.author}</Text>
        </View>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    height: 100,
    width: "100%",
    flexDirection: "row",
    backgroundColor: "white",
    marginVertical: 5

  },
  leftContainer: {
    width:100,
  },
  rightContainer: {
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
  },
  subText: {
    fontSize: 12,
    color: "gray"
  }
});
