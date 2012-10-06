﻿ function CalculatePO(from, time) {
     var diff = new Date();
     diff.setTime(diff - from);
     return (diff.getTime() / time);
 }

 function CalculatePOS(from) {
     return CalculatePO(from, 1000);
 }

 function CalculateLength(A, B) {
     return Math.sqrt(Math.pow(A.X - B.X, 2) + Math.pow(A.Y - B.Y, 2));
 }

 function CalculateDistance(A, B) {
     return { X: Math.abs(B.X - A.X), Y: Math.abs(B.Y - A.Y) };
 }

 function StandardDeviation(arr) {
     var average = Average(arr),
         size = arr.length,
         sum = 0;

     for (var i = 0; i < size; i++) {
         sum += Math.pow(arr[i] - average, 2);
     }

     return Math.sqrt(sum / (size - 1));
 }

 function Average(arr) {
     var sum = 0, size = arr.length;
     for (var i = 0; i < size; i++) {
         sum += arr[i];
     }

     return sum / size;
 }

 var delay = (function () {
     var timer = 0;
     return function (callback, ms) {
         clearTimeout(timer);
         timer = setTimeout(callback, ms);
     };
 })();