import { StyleSheet, SafeAreaView, Text, FlatList } from "react-native";
import {useSelector} from "react-redux"
import {ListItem} from "../components/ListItem";

export const ClipScreen = ({navigation}) => {
    // redux上のclips配列を読み込んで、clip変数に代入
    const clips = useSelector((state) => state.user.clips);

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={clips}
                renderItem={({item}) => (
                    <ListItem
                        imageUrl={item.urlToImage}
                        title={item.title}
                        author={item.author}
                        onPress= {() => navigation.navigate( "Article", {article: item } ) }                     />
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
});
