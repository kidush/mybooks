import React from 'react'
import { View, Text } from 'react-native'
import { Card, Image } from 'react-native-elements'

import { Styles } from './styles'

export const Book: React.FC<{}> = () => {
  return (
    <Card>
      <View style={Styles.card}>
        <Image 
          style={Styles.cover} 
          source={require('../../../../assets/book-example.jpg')} 
          resizeMode="cover" />
        <View style={Styles.information}>
          <Text>
            Olá Livro
          </Text>

          <Text>
            Description
          </Text>

          <Text>
            ISBN
          </Text>

          <Text>
            Número de páginas
          </Text>
        </View>
      </View>
    </Card>
  )
}
