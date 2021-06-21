import React from "react"
import { Image, View, Text, TextInput, TouchableOpacity } from "react-native"
import { GlobalStyles } from "../../styles/index"
import { Styles } from "./styles"
import { Formik } from "formik"
import * as Yup from 'yup'
import { ParamListBase, useNavigation } from "@react-navigation/native"

interface LoginFormTypes {
  email: string,
  password: string
}

export const LoginScreen: React.FC<{}> = (props) => {
  const navigation = useNavigation()
  const initialValues: LoginFormTypes = { email: '', password: '' }

  const LoginValidationSchema = Yup.object().shape({
    email: Yup.string().email('E-mail inválido').required('Informe um E-mail válido'),
    password: Yup.string().min(6, 'A senha deve ter no mínimo 6 caracteres').required('Informe uma senha')
  })

  const onSubmit = (values: object) => {
    console.info(values)
    navigation.navigate('books')
  }

  return (
      <Formik
        initialValues={initialValues}
        validationSchema={LoginValidationSchema}
        onSubmit={onSubmit}
      >
        {({ values, touched, handleChange, handleSubmit, errors }) => (
          <View style={GlobalStyles.container}>
            <Image source={require('../../../assets/logo.png')} style={Styles.logo}/>
            <TextInput
              value={values.email}
              style={GlobalStyles.fields}
              placeholder="E-mail"
              keyboardType="email-address"
              onChangeText={handleChange('email')}
            />

            {errors.email && <Text style={GlobalStyles.errors}>{errors.email}</Text>}
            <TextInput
              value={values.password}
              style={GlobalStyles.fields}
              secureTextEntry
              placeholder="Senha"
              onChangeText={handleChange('password')}
            />
            {errors.password && <Text style={GlobalStyles.errors}>{errors.password}</Text>}

            <TouchableOpacity
              style={GlobalStyles.submitButton}
              activeOpacity={0.90}
              onPress={() => handleSubmit()}
            >
              <Text style={GlobalStyles.textSubmitButton}>Entrar</Text>
            </TouchableOpacity>

            <View style={Styles.linkToScreensContainer}>
              <Text style={GlobalStyles.textLinkToScreen}>Esqueceu a senha?</Text>
              <Text onPress={() => navigation.navigate('signup') } style={GlobalStyles.textLinkToScreen}>Cadastrar</Text>
            </View>
          </View>
        )}
      </Formik>
  )
}