// Copyright (c) 2022 Ashley Monaghan All rights reserved
//
// Created by: Ashley Monaghan
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/rough-copy/sw.js", {
    scope: "/rough-copy/",
  })
}

/**
 * This function displays an alert for index2
 * crystalInfo
 */
function crystalButton() {
  let inputedMonth = document.getElementById("month").value
  let inputedDay = document.getElementById("day").value

  if ((inputedMonth == "February" && inputedDay == "30" || inputedDay == "31") || (inputedMonth == "April" && inputedDay == "31") || (inputedMonth == "June" && inputedDay == "31") || (inputedMonth == "September" && inputedDay == "31") || (inputedMonth == "November" && inputedDay == "31")) {
    document.getElementById("crystalInfo").innerHTML =
      "Birthday doesn't exist, sorry. :("
  } else if (inputedMonth == "January"){
    document.getElementById("crystalInfo").innerHTML =
    Garnet
  } else if (inputedMonth == "February"){
    document.getElementById("crystalInfo").innerHTML =
    Amethyst
  } else if (inputedMonth == "March"){
    document.getElementById("crystalInfo").innerHTML =
    Aquamarine
  } else if (inputedMonth == "April"){
    document.getElementById("crystalInfo").innerHTML =
    Diamond
  } else if (inputedMonth == "May"){
    document.getElementById("crystalInfo").innerHTML =
    Emerald
  } else if (inputedMonth == "June"){
    document.getElementById("crystalInfo").innerHTML =
    Pearl
  } else if (inputedMonth == "July"){
    document.getElementById("crystalInfo").innerHTML =
    Ruby
  } else if (inputedMonth == "August"){
    document.getElementById("crystalInfo").innerHTML =
    Peridot
  } else if (inputedMonth == "September"){
    document.getElementById("crystalInfo").innerHTML =
    Sapphire
  } else if (inputedMonth == "October"){
    document.getElementById("crystalInfo").innerHTML =
    Opal
  } else if (inputedMonth == "November"){
    document.getElementById("crystalInfo").innerHTML =
    Topaze
  } else if (inputedMonth == "December"){
    document.getElementById("crystalInfo").innerHTML =
    Turquoise
  }
}

/**
 * This function displays an alert for index3
 * zodiacInfo
 */
function zodiacButton() {
  let inputedMonth = document.getElementById("month").value
  let inputedDay = document.getElementById("day").value

  if (((inputedMonth == "February") && (inputedDay == "30" || inputedDay == "31")) || ((inputedMonth == "April") && (inputedDay == "31")) || ((inputedMonth == "June") && (inputedDay == "31")) || ((inputedMonth == "September") && (inputedDay == "31")) || ((inputedMonth == "November") && (inputedDay == "31"))) {
    document.getElementById("zodiacInfo").innerHTML =
      "This day doesnt exist..."
  } else if (((inputedMonth == "January") && (inputedDay == "20" || inputedDay == "21" || inputedDay == "22" || inputedDay == "23" || inputedDay == "24" || inputedDay == "25" || inputedDay == "26" || inputedDay == "27" || inputedDay == "28" || inputedDay == "29" || inputedDay == "30" || inputedDay == "31")) || ((inputedMonth == "February") && (inputedDay == "1" || inputedDay == "2" || inputedDay == "3" || inputedDay == "4" || inputedDay == "5" || inputedDay == "6" || inputedDay == "7" || inputedDay == "8" || inputedDay == "9" || inputedDay == "10" || inputedDay == "11" || inputedDay == "12" || inputedDay == "13" || inputedDay == "14" || inputedDay == "15" || inputedDay == "16" || inputedDay == "17" || inputedDay == "18"))) {
    document.getElementById("zodiacInfo").innerHTML =
      "Aquarius"
  } else if (((inputedMonth == "February") && (inputedDay == "19" || inputedDay == "20" || inputedDay == "21" || inputedDay == "22" || inputedDay == "23" || inputedDay == "24" || inputedDay == "25" || inputedDay == "26" || inputedDay == "27" || inputedDay == "28" || inputedDay == "29")) || ((inputedMonth == "March") && (inputedDay == "1" || inputedDay == "2" || inputedDay == "3" || inputedDay == "4" || inputedDay == "5" || inputedDay == "6" || inputedDay == "7" || inputedDay == "8" || inputedDay == "9" || inputedDay == "10" || inputedDay == "11" || inputedDay == "12" || inputedDay == "13" || inputedDay == "14" || inputedDay == "15" || inputedDay == "16" || inputedDay == "17" || inputedDay == "18" || inputedDay == "19" || inputedDay == "20"))) {
    document.getElementById("zodiacInfo").innerHTML =
      "Pisces"  
  } else if (((inputedMonth == "March") && (inputedDay == "21" || inputedDay == "22" || inputedDay == "23" || inputedDay == "24" || inputedDay == "25" || inputedDay == "26" || inputedDay == "27" || inputedDay == "28" || inputedDay == "29" || inputedDay == "30" || inputedDay == "31")) || ((inputedMonth == "April") && (inputedDay == "1" || inputedDay == "2" || inputedDay == "3" || inputedDay == "4" || inputedDay == "5" || inputedDay == "6" || inputedDay == "7" || inputedDay == "8" || inputedDay == "9" || inputedDay == "10" || inputedDay == "11" || inputedDay == "12" || inputedDay == "13" || inputedDay == "14" || inputedDay == "15" || inputedDay == "16" || inputedDay == "17" || inputedDay == "18" || inputedDay == "19"))) {
    document.getElementById("zodiacInfo").innerHTML =
      "Aries"  
  } else if (((inputedMonth == "April") && (inputedDay == "20" || inputedDay == "21" || inputedDay == "22" || inputedDay == "23" || inputedDay == "24" || inputedDay == "25" || inputedDay == "26" || inputedDay == "27" || inputedDay == "28" || inputedDay == "29" || inputedDay == "30")) || ((inputedMonth == "May") && (inputedDay == "1" || inputedDay == "2" || inputedDay == "3" || inputedDay == "4" || inputedDay == "5" || inputedDay == "6" || inputedDay == "7" || inputedDay == "8" || inputedDay == "9" || inputedDay == "10" || inputedDay == "11" || inputedDay == "12" || inputedDay == "13" || inputedDay == "14" || inputedDay == "15" || inputedDay == "16" || inputedDay == "17" || inputedDay == "18" || inputedDay == "19" || inputedDay == "20"))) {
    document.getElementById("zodiacInfo").innerHTML =
      "Taurus"  
  } else if (((inputedMonth == "May") && (inputedDay == "21" || inputedDay == "22" || inputedDay == "23" || inputedDay == "24" || inputedDay == "25" || inputedDay == "26" || inputedDay == "27" || inputedDay == "28" || inputedDay == "29" || inputedDay == "30" || inputedDay == "31")) || ((inputedMonth == "June") && (inputedDay == "1" || inputedDay == "2" || inputedDay == "3" || inputedDay == "4" || inputedDay == "5" || inputedDay == "6" || inputedDay == "7" || inputedDay == "8" || inputedDay == "9" || inputedDay == "10" || inputedDay == "11" || inputedDay == "12" || inputedDay == "13" || inputedDay == "14" || inputedDay == "15" || inputedDay == "16" || inputedDay == "17" || inputedDay == "18" || inputedDay == "19" || inputedDay == "20"))) {
    document.getElementById("zodiacInfo").innerHTML =
      "Gemini"  
  } else if (((inputedMonth == "June") && (inputedDay == "21" || inputedDay == "22" || inputedDay == "23" || inputedDay == "24" || inputedDay == "25" || inputedDay == "26" || inputedDay == "27" || inputedDay == "28" || inputedDay == "29" || inputedDay == "30")) || ((inputedMonth == "July") && (inputedDay == "1" || inputedDay == "2" || inputedDay == "3" || inputedDay == "4" || inputedDay == "5" || inputedDay == "6" || inputedDay == "7" || inputedDay == "8" || inputedDay == "9" || inputedDay == "10" || inputedDay == "11" || inputedDay == "12" || inputedDay == "13" || inputedDay == "14" || inputedDay == "15" || inputedDay == "16" || inputedDay == "17" || inputedDay == "18" || inputedDay == "19" || inputedDay == "20" || inputedDay == "21" || inputedDay == "22"))) {
    document.getElementById("zodiacInfo").innerHTML =
      "Cancer"
  } else if (((inputedMonth == "July") && (inputedDay == "23" || inputedDay == "24" || inputedDay == "25" || inputedDay == "26" || inputedDay == "27" || inputedDay == "28" || inputedDay == "29" || inputedDay == "30" || inputedDay == "31")) || ((inputedMonth == "August") && (inputedDay == "1" || inputedDay == "2" || inputedDay == "3" || inputedDay == "4" || inputedDay == "5" || inputedDay == "6" || inputedDay == "7" || inputedDay == "8" || inputedDay == "9" || inputedDay == "10" || inputedDay == "11" || inputedDay == "12" || inputedDay == "13" || inputedDay == "14" || inputedDay == "15" || inputedDay == "16" || inputedDay == "17" || inputedDay == "18" || inputedDay == "19" || inputedDay == "20" || inputedDay == "21" || inputedDay == "22"))) {
    document.getElementById("zodiacInfo").innerHTML =
      "Leo"
  } else if (((inputedMonth == "August") && (inputedDay == "23" || inputedDay == "24" || inputedDay == "25" || inputedDay == "26" || inputedDay == "27" || inputedDay == "28" || inputedDay == "29" || inputedDay == "30" || inputedDay == "31")) || ((inputedMonth == "September") && (inputedDay == "1" || inputedDay == "2" || inputedDay == "3" || inputedDay == "4" || inputedDay == "5" || inputedDay == "6" || inputedDay == "7" || inputedDay == "8" || inputedDay == "9" || inputedDay == "10" || inputedDay == "11" || inputedDay == "12" || inputedDay == "13" || inputedDay == "14" || inputedDay == "15" || inputedDay == "16" || inputedDay == "17" || inputedDay == "18" || inputedDay == "19" || inputedDay == "20" || inputedDay == "21" || inputedDay == "22"))) {
    document.getElementById("zodiacInfo").innerHTML =
      "Virgo"  
  } else if (((inputedMonth == "September") && (inputedDay == "23" || inputedDay == "24" || inputedDay == "25" || inputedDay == "26" || inputedDay == "27" || inputedDay == "28" || inputedDay == "29" || inputedDay == "30")) || ((inputedMonth == "October") && (inputedDay == "1" || inputedDay == "2" || inputedDay == "3" || inputedDay == "4" || inputedDay == "5" || inputedDay == "6" || inputedDay == "7" || inputedDay == "8" || inputedDay == "9" || inputedDay == "10" || inputedDay == "11" || inputedDay == "12" || inputedDay == "13" || inputedDay == "14" || inputedDay == "15" || inputedDay == "16" || inputedDay == "17" || inputedDay == "18" || inputedDay == "19" || inputedDay == "20" || inputedDay == "21" || inputedDay == "22"))) {
    document.getElementById("zodiacInfo").innerHTML =
      "Libra"
  } else if (((inputedMonth == "October") && (inputedDay == "23" || inputedDay == "24" || inputedDay == "25" || inputedDay == "26" || inputedDay == "27" || inputedDay == "28" || inputedDay == "29" || inputedDay == "30" || inputedDay == "31")) || ((inputedMonth == "November") && (inputedDay == "1" || inputedDay == "2" || inputedDay == "3" || inputedDay == "4" || inputedDay == "5" || inputedDay == "6" || inputedDay == "7" || inputedDay == "8" || inputedDay == "9" || inputedDay == "10" || inputedDay == "11" || inputedDay == "12" || inputedDay == "13" || inputedDay == "14" || inputedDay == "15" || inputedDay == "16" || inputedDay == "17" || inputedDay == "18" || inputedDay == "19" || inputedDay == "20" || inputedDay == "21"))) {
    document.getElementById("zodiacInfo").innerHTML =
      "Scorpio"
  } else if (((inputedMonth == "November") && (inputedDay == "22" || inputedDay == "23" || inputedDay == "24" || inputedDay == "25" || inputedDay == "26" || inputedDay == "27" || inputedDay == "28" || inputedDay == "29" || inputedDay == "30")) || ((inputedMonth == "December") && (inputedDay == "1" || inputedDay == "2" || inputedDay == "3" || inputedDay == "4" || inputedDay == "5" || inputedDay == "6" || inputedDay == "7" || inputedDay == "8" || inputedDay == "9" || inputedDay == "10" || inputedDay == "11" || inputedDay == "12" || inputedDay == "13" || inputedDay == "14" || inputedDay == "15" || inputedDay == "16" || inputedDay == "17" || inputedDay == "18" || inputedDay == "19" || inputedDay == "20" || inputedDay == "21"))) {
    document.getElementById("zodiacInfo").innerHTML =
      "Sagittarius"
  } else if (((inputedMonth == "December") && (inputedDay == "22" || inputedDay == "23" || inputedDay == "24" || inputedDay == "25" || inputedDay == "26" || inputedDay == "27" || inputedDay == "28" || inputedDay == "29" || inputedDay == "30" || inputedDay == "31")) || ((inputedMonth == "January") && (inputedDay == "1" || inputedDay == "2" || inputedDay == "3" || inputedDay == "4" || inputedDay == "5" || inputedDay == "6" || inputedDay == "7" || inputedDay == "8" || inputedDay == "9" || inputedDay == "10" || inputedDay == "11" || inputedDay == "12" || inputedDay == "13" || inputedDay == "14" || inputedDay == "15" || inputedDay == "16" || inputedDay == "17" || inputedDay == "18" || inputedDay == "19"))) {
    document.getElementById("zodiacInfo").innerHTML =
      "Capricorn"
  } else if ((inputedMonth == "Month") && (inputedDay == "Day" )) {
    document.getElementById("zodiacInfo").innerHTML =
    "Please select your birthday in the selection boxes above..."
  } else {
    document.getElementById("zodiacInfo").innerHTML =
      "Something went wrong. Please try again."
  }
}
