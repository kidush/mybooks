import { useNavigation } from "@react-navigation/core";
import { Formik } from "formik";
import React, {useState, useEffect } from "react";
import { Alert, TextInput, TouchableOpacity } from "react-native";
import { Image, View, Text } from "react-native";

import { Styles } from "./styles";
import { GlobalStyles } from "../../styles/index"
import avatar from '../../../assets/avatar.png'

import * as ImagePicker from 'expo-image-picker'
import { result } from "lodash";

interface SignupFormTypes {
  photo: string,
  email: string,
  password: string,
  password_confirmation: string,
}

export const SignupScreen: React.FC<{}> = (props) => {
  const [image, setImage] = useState('')

  const navigator = useNavigation()
  const initialValues: SignupFormTypes = { photo: '', email: '', password: '', password_confirmation: '' }

  const onSubmit = () => {
    console.log('Cadastro')
  }

  const pickImage = async () => {
    Alert.alert(
      'Foto do perfil',
      'Escolha uma foto da galeria, ou tire uma nova foto',
      [
        {
          text: 'Galeria',
          onPress: async () => {
            let result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.Images,
              allowsEditing: true,
              aspect: [4, 3],
              base64: true,
              quality: 1
            })

            if (!result.cancelled) {
              setImage(result.base64)
            }
          }
        },
        {
          text: 'Nova foto',
          onPress: async () => {
            let cameraResult = await ImagePicker.launchCameraAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.Images,
              allowsEditing: true,
              aspect: [4, 3],
              base64: true,
              quality: 1
            })

            if (!cameraResult.cancelled) {
              setImage(cameraResult.base64)
            }

          }
        },
        { text: 'Cancelar', style: 'cancel'}
      ]
    )
  }

  useEffect(() => {
    (async () => {
      const { status: statusCamera } = await ImagePicker.requestCameraPermissionsAsync()
      const { status: statusLibrary } = await ImagePicker.requestMediaLibraryPermissionsAsync()

      if (statusCamera !== 'granted' && statusLibrary !== 'granted') {
        alert('Você precisa liberar a permissão para usar estes recursos!')
      }
    })()
  }, [])

  const setImageSource = () => {
    if (image === '') {
      return avatar
    }

    return { uri: 'data:image/jpeg;base64,' + image }
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {({ values, handleChange }) => (
        <View style={GlobalStyles.container}>
            <TouchableOpacity onPress={pickImage}>
              <Image source={setImageSource()} style={Styles.avatar} />
            </TouchableOpacity>

            <TextInput
              value={values.email}
              style={GlobalStyles.fields}
              placeholder="E-mail"
              keyboardType="email-address"
              onChangeText={handleChange('email')}
            />

            <TextInput
              value={values.password}
              style={GlobalStyles.fields}
              placeholder="Senha"
              secureTextEntry
              onChangeText={handleChange('password')}
            />

            <TextInput
              value={values.password}
              style={GlobalStyles.fields}
              placeholder="Confirmar Senha"
              secureTextEntry
              onChangeText={handleChange('password_confirmation')}
            />


            <TouchableOpacity
              style={GlobalStyles.submitButton}
              activeOpacity={0.90}
              onPress={() => handleSubmit()}
            >
              <Text style={GlobalStyles.textSubmitButton}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
      )}
    </Formik>
  )
}

function handleSubmit(): void {
  throw new Error("Function not implemented.");
}
