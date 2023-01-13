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
  } else {
    document.getElementById("crystalInfo").innerHTML =
      "Yay this works!"
  }
}
