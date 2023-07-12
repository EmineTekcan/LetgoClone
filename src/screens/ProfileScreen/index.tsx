import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../conts/constants'
import ProfileComp from '../../components/ProfileComp'
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

const { height, width } = Dimensions.get("window")

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>

      {/* Ad Soyad section */}
      <View style={{ flexDirection: "row", paddingHorizontal: "4%", marginVertical: "8%", alignItems: "center", gap: 25 }}>
        <View style={{
          backgroundColor: "#8C6E64",
          height: 100,
          width: 100,
          borderRadius: 50,
          alignItems: "center",
          justifyContent: "center",
        }}>
          <Text style={{ fontWeight: "bold", fontSize: 45,color:"white" }}>E</Text>
        </View>
        <Text style={{ fontWeight: "bold", fontSize: 25, letterSpacing: 1 }}>Emine Tekcan</Text>
      </View>

      <Pressable
        style={{
          backgroundColor: colors.mainColor,
          paddingVertical: "3%",
          borderRadius: 25,
          marginVertical: "4%",
          marginHorizontal: "4%"
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 15,
            color: "white",
            fontWeight: "bold"
          }}
        >Profili görüntüle ve düzenle</Text>
      </Pressable>

      <View style={{ marginVertical: "5%", marginHorizontal: "4%" }}>
        <Text style={{ fontWeight: "bold", fontSize: 17 }}>2 adım kaldı</Text>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-around", marginVertical: "3%" }}>

          {
            [2, 2, 2, 2, 1, 1].map((item, index) => <View
              key={index}
              style={{
                backgroundColor: item % 2 === 0 ? "#F8DE3B" : "#E0E0E0",
                width: width * 0.14,
                height: 10
              }}
            />)
          }
        </View>
        <Text style={{ color: "#898989", fontSize: 12, fontWeight: "300" }}>Harika fırsatlar güven gerektirir. Birbirimizi daha iyi tanımak için birbirimize yardımcı olalım.</Text>
      </View>

      <View>
        <ProfileComp
          icon={<Fontisto name="credit-card" size={16} color="#949494" />}
          title='İlan Vitamini Satın Alma ve Siparişlerim'
          description='İlan vitaminleri, siparişler, faturalar ve faturalandırma bilgileri'
          key={"İlan"}
          func={() => { }}
        />
        <View
          style={{
            borderBottomColor: "#DCDCDC",
            borderBottomWidth: StyleSheet.hairlineWidth,
            marginHorizontal: "5%"
          }}
        />
        <ProfileComp
          icon={<Ionicons name="md-settings-sharp" size={24} color="#949494" />}
          title='Ayarlar'
          description='Gizlilik ve çıkış'
          key={"ayarlar"}
          func={() => { }}
        />
        <View
          style={{
            borderBottomColor: "#DCDCDC",
            borderBottomWidth: StyleSheet.hairlineWidth,
            marginHorizontal: "5%"
          }}
        />
        <ProfileComp
          icon={<MaterialIcons name="group" size={24} color="#949494" />}
          title='Yardım ve Destek'
          description='Yardım merkezi ve yasal şartlar'
          key={"yardım"}
          func={() => { }}
        />
        <View
          style={{
            borderBottomColor: "#DCDCDC",
            borderBottomWidth: StyleSheet.hairlineWidth,
            marginHorizontal: "5%"
          }}
        />
      </View>
    </ScrollView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    width: width
  }
})