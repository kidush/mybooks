import React from "react"
import { Image, View, Text, TextInput, TouchableOpacity } from "react-native"
import { Styles } from "./styles"
import { Formik } from "formik"
import * as Yup from 'yup'
import { useNavigation } from "@react-navigation/native"

interface LoginFormTypes {
  email: string,
  password: string
}

export const LoginScreen: React.FC<{}> = (props) => {
  const nav = useNavigation()
  const initialValues: LoginFormTypes = { email: '', password: '' }

  const LoginValidationSchema = Yup.object().shape({
    email: Yup.string().email('E-mail inválido').required('Informe um E-mail válido'),
    password: Yup.string().min(6, 'A senha deve ter no mínimo 6 caracteres').required('Informe uma senha')
  })

  const onSubmit = (values: object) => {
    console.info(values)
    nav.navigate('books')
  }

  return (
      <Formik
        initialValues={initialValues}
        validationSchema={LoginValidationSchema}
        onSubmit={onSubmit}
      >
        {({ values, touched, handleChange, handleSubmit, errors }) => (
          <View style={Styles.container}>
            <Image source={require('../../../assets/logo.png')} style={Styles.logo}/>
            <TextInput
              value={values.email}
              style={Styles.fields}
              placeholder="E-mail"
              keyboardType="email-address"
              onChangeText={handleChange('email')}
            />

            {errors.email && <Text style={Styles.errors}>{errors.email}</Text>}
            <TextInput 
              value={values.password} 
              style={Styles.fields} 
              secureTextEntry 
              placeholder="Senha" 
              onChangeText={handleChange('password')}
            />
            {errors.password && <Text style={Styles.errors}>{errors.password}</Text>}


            <TouchableOpacity 
              style={Styles.submitButton} 
              activeOpacity={0.90} 
              onPress={handleSubmit}
            >
              <Text style={Styles.textSubmitButton}>Entrar</Text>  
            </TouchableOpacity> 

            <View style={Styles.linkToScreensContainer}>
              <Text style={Styles.textLinkToScreen}>Esqueceu a senha?</Text>
              <Text style={Styles.textLinkToScreen}>Cadastrar</Text>
            </View>
          </View>
        )}
      </Formik>
  )
}