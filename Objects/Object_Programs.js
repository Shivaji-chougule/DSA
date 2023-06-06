// Obects_Programs
// Example 2
//  function func(a){
//   delete a;
//   return a
// }
// let ans=func(5);
// console.log(ans) //5
// This will not affect at all
// Because word delete we use for to delete properties from object.

// Example 1

// const user = {
//   name: "shivaji",
//   age: 26,
//   "who is he": "king",
// };
// /////////// to Access the property
// console.log(user.name);
// console.log(user["who is he"]);
// ////////////////// to add a property
// user.skill = "engineer";
// console.log(user);
// // ///////////to add a property method 2
// Object.assign(user, { title: "midweight champ" });
// console.log(user);
// ////////////// to delete properties
// delete user.title;
// delete user["who is he"];
// console.log(user);
// // //////////how to access all only propertis and only values
// for (let key in user) {
//   console.log(key);
// }
// for (let key in user) {
//   console.log(user[key]);
// }
// ////////////////////////////////////OBJECT DESTUCTURING
// let detail = {
//     name: "shiva",
//     age: 26,
//     fullName: {
//       firstName: "shivaji",
//       lastName: "chougule",
//     },
//   };
//   // this is destructuring
//   const { name, age, fullName } = detail;
//   console.log(name, age, fullName);
//   // to access nested proprties
//   const {
//     fullName: { firstName, lastName },
//   } = detail;
//   console.log(firstName, lastName);
// // ////////////////////////////////////////////////////
// // what will be the output
// let obj = {
//   a: "one",
//   b: "two",
//   a: "three",
// };
// console.log(obj); //{a:"three",b:"two"}
// //////////////////////////////////////////////////////
// create function multiplyByTwo(obj) that multiplies all the numeric
// property values of num by 2
// let nums = {
//   a: 100,
//   b: 200,
//   title: "my nums",
// };
// // console.log(nums)
// function multiplyByTwo(nums) {
//   for (key in nums) {
//     if (typeof nums[key] === "number") {
//       nums[key] *= 2;
//     }
//   }
// }
// multiplyByTwo(nums);
// console.log(nums);
// // //////////////////////////////////////
// // what will be the output
// // const a={}
// // const b={key:'b'}
// // const c={key:'c'}

// // a[b]=123;
// // a[c]=456
// // console.log(a[b]) //?
// // console.log(a) // check this first
// // /////////////////////////////////////
// // ////////////////What is JSON.stringify AND JSON.parse
// let obj1 = {
//   name: "shivaji",
//   rank: 1,
// };
// console.log(obj1);
// // to convert object into string use JSON.stringify
// const ans = JSON.stringify(obj1);
// console.log(ans);
// // to convert string into object use JSON.parse
// const ans1 = JSON.parse(ans);
// console.log(ans1);
// // to store data at local storage need to stringify the data.
// // first let see what happens when we try to store data at local
// // storage using original objct obj1
// localStorage.setItem("item", obj1);
// console.log(localStorage.getItem("item"));
// // now using stringify object ans
// localStorage.setItem("item", ans);
// console.log(localStorage.getItem("item"));
// // ////////////////////////////////////////////////////////////
// // what will be the output
// console.log([..."shivaji"])
// // ////////////////////////////////////////////////////////
// // what will be the output
// const shape={
//     radius:10,
//     dia:function diameter(){
//         return this.radius*2
//     },
//     dia2:()=>{2*Math.PI*this.radius}
// }
// console.log(shape.dia())
// console.log(shape.dia2())
// //////////////////////////////////////////////////
// what will be the output
// let person={name:"conor"}
// let member=[person]
// person=null
// console.log(member)
// //////////////////////////////////////////////////
//  shalow copy and deep copy
// //////////example 1 shallow copy
// const a = { key: "test1" };
// const b = a;//Shallow copy
// b.key = "test2"; 

// console.log(a); // test2
// console.log(b); // test2
// ///////////example 2 deep copy by using spread operater
// const c = { key: "test1" };
// const d = { ...c };// or const d = Object.assign({},c); // Deep copy
// d.key = "test2";

// console.log(c); // test1
// console.log(d); // test2
// /////////////////////////////////////////////