import React from "react";
import { style } from "./styles";
import { Ball } from "../../components/Ball";
import { Input } from "../../components/Input";
import { MaterialIcons } from '@expo/vector-icons';
import { Text, View, StatusBar, FlatList, TouchableOpacity, Button } from 'react-native';
import { Flag } from "../../components/Flag";
import { useNavigation } from '@react-navigation/native';
import { themas } from "../../global/themes";
import { AuthNavigationProp } from "../../routes/types";

const data = [
  {
    item: 0,
    title: 'Bolo de chocolate',
    description: 'um bolo super macio e delicioso.',
    flag: 'Ver'
  },
  {
    item: 1,
    title: 'Torta de frango',
    description: ' uma torta de outro mundo.',
    flag: 'Ver'
  },
];

export default function List() {
    const navigation = useNavigation<AuthNavigationProp>();

  const _renderCard = (item, index) => {
    return (
      <TouchableOpacity key={item.item} style={style.card}>
        <View style={style.rowCard}>
          <View style={style.rowCardLeft}>
            <Ball color="red" />
            <View>
              <Text style={style.titleCard}>{item.title}</Text>
              <Text style={style.descriptionCard}>{item.description}</Text>
            </View>
          </View>
          <Flag caption="Ver" color={themas.Colors.red} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={style.container}>
      <StatusBar barStyle="light-content" />
      <View style={style.header}>
        <Text style={style.greeting}>Olá, <Text style={{ fontWeight: 'bold' }}>Marcos</Text></Text>
        <View style={style.boxInput}>
          <Input 
            IconLeft={MaterialIcons}
            iconLeftName="search"
          />
        </View>
      </View>
      <Button title="Ir para Tela de Localização" onPress={() => navigation.navigate('User')} />
      <View style={style.boxList}>
        <FlatList 
          data={data}
          style={{ marginTop: 40, paddingHorizontal: 30 }}
          keyExtractor={(item, index) => item.item.toString()}
          renderItem={({ item, index }) => { return (_renderCard(item, index)) }}
        />
      </View>
    </View>
  );
}
