//1.
// let input = prompt("nhap vao mot chuoi");
// let java = "java";
// alert(input.startsWith(java));

//2.---------------------------------------------------------
// let array = [1, -10, 5, 18, -9, 5];
// function findMaxDiff(array) {
//   let temp = 0;
//   for (let index = 0; index < array.length; index++) {
//     let diff = Math.abs(array[index] - array[index - 1]);
//     if (diff > temp) {
//       temp = diff;
//     }
//     if(array.length <= 1){
// 	    return 0;
//     }
//   }
//   return temp;
// }
// console.log(findMaxDiff(array));

//3.-------------------------------------------------------
// let array = [3, 4, 5, -5, 7, 1];
// let number = Number(prompt("nhap vao n "));
// function first(array, n) {
//   if (n > 0) {
//     for (let index = 0; index < n; index++) {
//       console.log(array[index]);
//     }
//   } else {
//     return 0;
//   }
// }
// console.log(first(array, number));

//4.----------------------------------------------------------
// let number1 = Number(prompt("nhap vao so nguyen thu nhat "));
// let number2 = Number(prompt("nhap vao so nguyen thu hai "));
// function checkInt(num1, num2) {
//   if (num1 * num2 < 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// alert(checkInt(number1, number2));

//5.--------------------------------------------------------
// let number = Number(prompt("nhap vao 1 so"));
// let temp = 0;
// function Test(number) {
//   temp = Math.abs(number - 13);
//   if (number > 13) {
//     console.log(temp * 2);
//   } else {
//     console.log(temp);
//   }
// }
// let ketqua = test(number);

//6.------------------------------------------------------

// let array = [1, 2, 3, 8, 19];
// let max = 0;
// let temp = 0;
// function Max(array, temp, max) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       temp = Math.abs(array[j] - array[i]);
//       if (temp > max) {
//         max = temp;
//       }
//     }
//   }
//   return max;
// }
// console.log(Max(array, temp, max));

// console.log();