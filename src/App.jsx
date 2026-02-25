import { useState } from 'react'
import './index.css'
import Navbar from './Navbar'
import Slider from './Slider'
import Products from './Products'
import Categary from './Categary'
import Trending from './Trending'
import Service from './Service'
import Footer from './Footer'
import Blog from './Blog'
import Newsletter from './Newsletter'
import Accordion from './Accordian'


function App() {
  /////////////////////factorial//////////////////
  // const factorial = (n) => {
  //   if ( n === 1) {
  //     return 1;
  //   }
  //   return n * factorial(n - 1);
  // }
  // console.log(factorial(5))
  ///////////////////////-/////////////////////////

  /////////////////////Student Object//////////////////




  ///////////////////student object //////////////////
  // const student = {
  //   name: 'krishhhh ka suna ga ',
  //   age: 20,
  //   course: 'F.E.D.',
  //   isEnrolled: true,

  // }
  // console.log('Student Name:', student.name)
  // student.grade = 'A'
  // student.song ='dil na diya dil na liya akhi duniya mai bhi agar payar na kiya to kya kiya le beta '
  // console.log( student)
  ////////////////////////-//////////////////////////




  /////////////////////let ,var ,const//////////////////

  // var varExample = "I can be redeclared"
  // let letExample = "I am a let variable"
  // const constExample = "I am a const variable"

  // console.log("VAR: Function-scoped, can be redeclared & reassigned ")
  // console.log("LET: Block-scoped, can be reassigned but NOT redeclared ")
  // console.log("CONST: Block-scoped, CANNOT be reassigned or redeclared ")

  ////////////////////////-//////////////////////////

  


  
  /////////////////////8 JavaScript Data Types//////////////////
  // const stringExample = "Hello, World!"
  // console.log('String:', stringExample)

  // const numberExample = 42
  // console.log('Number:',numberExample)

  // const booleanExample = true
  // console.log('Boolean:', booleanExample)

  // let undefinedExample
  // console.log('Undefined:', undefinedExample)

  // const nullExample = null
  // console.log('Null:', nullExample)

  // const objectExample = {
  //   name: 'krishh',
  //   age: 25,
  // }
  // console.log('Object:',objectExample)

  // const arrayExample = [1, 2, 3, 4, 5]
  // console.log('Array:',arrayExample)

  // const symbolExample = Symbol('unique')
  // console.log('Symbol:', symbolExample)

  ////////////////////////-//////////////////////////




  return (
    <>
      <Navbar />
      <Slider />
      <Products />
      <Categary />
      <Trending />
      <Service />
      <Blog />
      <Accordion/>
      <Newsletter/>
      <Footer/>
    </>
  )
}

export default App
