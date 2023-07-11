import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'
import { Message } from '../../models'
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';

type MessageItemProps = {
    item: Message
}

const MessageItem = ({ item }: MessageItemProps) => {
    return (
        <Pressable style={styles.container}>
            <View>
                <Image
                    style={{
                        width: 85,
                        height: 85,
                        borderRadius: 12
                    }}
                    source={{ uri: item.image }} />
                <View
                    style={{
                        width: 36,
                        height: 36,
                        borderRadius: 18,
                        backgroundColor: "#A3CE72",
                        position: "absolute",
                        right: -10,
                        bottom: 0,
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <Text
                        style={{
                            color: "white",
                            fontWeight: "bold"
                        }}
                    >S</Text>
                </View>
            </View>
            <View style={{ flex: 1, marginLeft: 20 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                        {item.productName.length > 25 ? item.productName.substring(0, 25) + "..." : item.productName}
                    </Text>
                    <Text style={{ color: "#8B8B8B" }}>+1 ay</Text>
                </View>
                <Text style={{ marginVertical: 5 }}>{item.sellerName}</Text>
                {
                    item.situation === "Satıldı" ? (
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                gap: 5
                            }}
                        >
                            <FontAwesome name="times-circle" size={15} color="#A0A0A0" />
                            <Text style={{ fontSize: 13, color: "#777777" }}>Artık mevcut değil</Text>
                        </View>
                    ) : (
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                gap: 5
                            }}
                        >
                            <Entypo name="info-with-circle" size={15} color="#F24E61"/>
                            <Text style={{ fontSize: 13, color: '#F24E61', fontWeight: '500' }}>Satıldı</Text>
                        </View>
                    )
                }
            </View>
        </Pressable>
    )
}

export default MessageItem

const styles = StyleSheet.create({
    container: {
        padding: 15,
        borderBottomColor: "#e2e2e2",
        borderBottomWidth: 1,
        flexDirection: "row",
        alignItems: "center"
    }
})