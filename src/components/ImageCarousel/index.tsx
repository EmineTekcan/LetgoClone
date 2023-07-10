import { StyleSheet, Text, View, Dimensions, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { colors } from '../../conts/constants'

const { height, width } = Dimensions.get("window")

type ImageCarouselProps = {
    images: string[]
}

const ImageCarousel = ({ images }: ImageCarouselProps) => {

    const [activeIndex, setActiveIndex] = useState(0)

    const onViewRef = React.useRef((viewableItems: any) => {
        if (viewableItems.viewableItems.length > 0) {
            setActiveIndex(viewableItems.viewableItems[0].index || 0);
        }
        //console.log(viewableItems);
    });

    const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 })

    return (
        <View>
            <FlatList
                snapToInterval={width}
                viewabilityConfig={viewConfigRef.current}
                onViewableItemsChanged={onViewRef.current}
                snapToAlignment={"center"}
                decelerationRate={"fast"}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={images}
                renderItem={({ item, index }) => (
                    <View>
                        <Image
                            source={{ uri: item }}
                            style={{ width: width, height: height * 0.45, resizeMode: 'stretch' }}
                        />
                        <View style={styles.dotsView}>
                            {images.map((image, index) => (
                                <View key={index} style={[styles.dot, {width:index === activeIndex ? 10: 7, height:index === activeIndex ? 10: 7  ,backgroundColor: index === activeIndex ? '#FFFFFD' : '#CBCAD0' }]} />
                            ))}
                        </View>
                        <Text
                            style={{
                                position: "absolute",
                                right: 20,
                                bottom: 20,
                                color: colors.gray
                            }}
                        >{`${index + 1} / ${images.length}`}</Text>
                    </View>
                )}
            />
        </View>
    )
}

export default ImageCarousel

const styles = StyleSheet.create({
    dotsView: {
        position: 'absolute',
        bottom: 12,
        alignSelf: "center",
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',

    },
    dot: {
        width: 10, height: 10,
        borderRadius: 5,
        marginVertical: 6,
        marginHorizontal: 8,
    }
})