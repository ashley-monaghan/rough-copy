// Copyright (c) 2023 Ashley Monaghan All rights reserved
//
// Created by: Ashley Monaghan
// Created on: Jan 2023
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
    document.getElementById("crystalName").innerHTML =
      "Birthday doesn't exist, sorry. :("
  } else if ((inputedMonth == "Month") || (inputedDay == "Day" )) {
    document.getElementById("crystalName").innerHTML =
    "Please select your birthday in the selection boxes above..."
  } else if (inputedMonth == "January"){
    document.getElementById("crystalName").innerHTML =
    "Garnet!"
    document.getElementById("crystalInfo1").innerHTML =
    "Garnet is most commonly found in red, it also comes in other colours such as orange, pink, green, black and honey brown. Garnet is also the generic name for different minerals, each is named after its colour."
    document.getElementById("crystalInfo2").innerHTML =
    "The garnet is usually thought of as an energising stone, which helps balance, strengthen and protect the user. It's also used to attract and activate passion and success. Garnet can help get rid of emotional and energetic blocks, and to create energetic and emotional balance in the body."
  
  } else if (inputedMonth == "February"){
    document.getElementById("crystalName").innerHTML =
    "Amethyst!"
    document.getElementById("crystalInfo1").innerHTML =
    "Amethyst are purple coloured stones that are also scratch-resistant."
    document.getElementById("crystalInfo2").innerHTML =
    "Amethyst are very well-known for being protection crystals that also help with grounding, tranquillity and can help to calm the user. They can help to relieve stress and anxiety, and things like headaches and fatigue. Amethysts can even improve cell regeneration to help your bones and joints, and improve your skin."
  
  } else if (inputedMonth == "March"){
    document.getElementById("crystalName").innerHTML =
    "Aquamarine!"
    document.getElementById("crystalInfo1").innerHTML =
    "Aquamarine is a pale blue colour."
    document.getElementById("crystalInfo2").innerHTML =
    "This stone helps with relaxing and cleansing the user, inspiring truth and can help to let go of unwanted or unneeded negative energy. Aquamarine can help to process information, and go through energy, create mental clarity, and soothe an overactive mind. It's even used to improve the intellect!"
  
  } else if (inputedMonth == "April"){
    document.getElementById("crystalName").innerHTML =
    "Diamond!"
    document.getElementById("crystalInfo1").innerHTML =
    "The diamond is one the most precious substances on earth being greatly valued for its rarity."
    document.getElementById("crystalInfo2").innerHTML =
    "Diamonds have many healing powers as they strengthen and help re-energize all the energy centres of the wearer. They help to bring together the mind and the body, helping them work together to cleanse and restore your mind, body and soul. It's also associated with invincibility."
  
  } else if (inputedMonth == "May"){
    document.getElementById("crystalName").innerHTML =
    "Emerald!"
    document.getElementById("crystalInfo1").innerHTML =
    "Emerald is a dark green stone, as well as known for being one of the “big four” gems, with rubies, diamonds and sapphires."
    document.getElementById("crystalInfo2").innerHTML =
    "Emeralds are associated with truth and love but have also been known to represent intuition as well. It helps open the heart chakra and calms the emotions. It provides inspiration, balance, wisdom, and patience. It can help improve friendship, peace, harmony, and domestic bliss giving wearer to both give and receive unconditional love."
  
  } else if (inputedMonth == "June"){
    document.getElementById("crystalName").innerHTML =
    "Pearl!"
    document.getElementById("crystalInfo1").innerHTML =
    "The pearl is the only birthstone to be taken from living creatures, marine oysters and freshwater mussels."
    document.getElementById("crystalInfo2").innerHTML =
    "Pearls are the ultimate symbol of wisdom, having the phrase “a pearl of wisdom”. They are also seen as a symbol of integrity, loyalty and are known to strengthen relationships. Pearls are used to tap into inner wisdom and nurture love. They help enhance personal integrity, bring truth forward, grow sincerity, inhibit immodest behaviour and advance in wisdom."
  
  } else if (inputedMonth == "July"){
    document.getElementById("crystalName").innerHTML =
    "Ruby!"
    document.getElementById("crystalInfo1").innerHTML =
    "Rubys are one of the priciest stones out of the birthstones, the ruby is known for its signature red colour and durability."
    document.getElementById("crystalInfo2").innerHTML =
    "This stone represents nobility, purity and passion. It's associated with improving energy and concentration, creativity, loyalty, honour and compassion. Ruby is said to stimulate heart chakra and bring spiritual wisdom while shielding against psychic attacks."
  
  } else if (inputedMonth == "August"){
    document.getElementById("crystalName").innerHTML =
    "Peridot!"
    document.getElementById("crystalInfo1").innerHTML =
    "Peridot is known for its green colour, which comes in a variety of shades. Throughout history, they have been used in jewellery."
    document.getElementById("crystalInfo2").innerHTML =
    "The stone is associated with strength and balance, and is believed to bring peace and rest to those who wear it. Peridots help with respiratory ailments, insomnia, and bleeding. It's associated with helping memory and ease labour and delivery. For years, peridot beads and talismans were used for protection, as well as to promote love, happiness, and wealth."
  
  } else if (inputedMonth == "September"){
    document.getElementById("crystalName").innerHTML =
    "Sapphire!"
    document.getElementById("crystalInfo1").innerHTML =
    "The sapphire comes in a variety of colours, but is best known for being blue."
    document.getElementById("crystalInfo2").innerHTML =
    "The sapphire is a guardian of innocence, a bestower of truth and a promoter of good health. It helps with focusing and calming the mind, helps remove unwanted thoughts, depression and mental tension. It is claimed to be useful in encouraging faithfulness and loyalty. Sapphire is thought to bring peace of mind, serenity and prosperity."
  
  } else if (inputedMonth == "October"){
    document.getElementById("crystalName").innerHTML =
    "Opal!"
    document.getElementById("crystalInfo1").innerHTML =
    "The opal is unique because of its pearlescent patterns that are almost metallic in colour."
    document.getElementById("crystalInfo2").innerHTML =
    "The opal represents a symbol of hope, purity, and truth. They’re also useful in helping to treat fevers and help the immune system. Opal can be used for balance, amplifying positive energy, helping with clarity and working through challenges."
  
  } else if (inputedMonth == "November"){
    document.getElementById("crystalName").innerHTML =
    "Topaze!"
    document.getElementById("crystalInfo1").innerHTML =
    "This type of quartz is known for its earthy tones from a deep red to an orangey-brown colour."
    document.getElementById("crystalInfo2").innerHTML =
    "It is often referred to as the stone of abundance and is said to attract wealth and prosperity. It helps to soothe, heal, re-motivate, and bring strength. Loyalty, beauty, protection, healing, weight loss, joy, generosity, abundance, wisdom, enlightenment, knowledge, good health, virtues of leadership, and love are also known to be linked to Topaz. It's known as the 'lover of gold,' as it helps to bring wealth and money."
  
  } else if (inputedMonth == "December"){
    document.getElementById("crystalName").innerHTML =
    "Turquoise!"
    document.getElementById("crystalInfo1").innerHTML =
    "The turquoise crystal is of the oldest stones in the world and known for its opaque blue colouring."
    document.getElementById("crystalInfo2").innerHTML =
    "Due to its strong opaque colour, the stone is often thought of as one of protection. It also has a great connection to the throat chakra and helps to enhance communication and expression. It is usually used for healing purposes as it helps align your Chakras.. Turquoise can also help to become more open to love and forgiveness. It helps to release patterns of self-sabotage."
  
  } else {
    document.getElementById("crystalName").innerHTML =
      "Something went wrong. Please try again."
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
    document.getElementById("zodiacName").innerHTML =
      "This day doesn't exist..."
  
  } else if (((inputedMonth == "January") && (inputedDay == "20" || inputedDay == "21" || inputedDay == "22" || inputedDay == "23" || inputedDay == "24" || inputedDay == "25" || inputedDay == "26" || inputedDay == "27" || inputedDay == "28" || inputedDay == "29" || inputedDay == "30" || inputedDay == "31")) || ((inputedMonth == "February") && (inputedDay == "1" || inputedDay == "2" || inputedDay == "3" || inputedDay == "4" || inputedDay == "5" || inputedDay == "6" || inputedDay == "7" || inputedDay == "8" || inputedDay == "9" || inputedDay == "10" || inputedDay == "11" || inputedDay == "12" || inputedDay == "13" || inputedDay == "14" || inputedDay == "15" || inputedDay == "16" || inputedDay == "17" || inputedDay == "18"))) {
    document.getElementById("zodiacName").innerHTML =
      "Aquarius"
    document.getElementById("zodiacInfo1").innerHTML =
      "Info1"
    document.getElementById("zodiacInfo2").innerHTML =
      "info2"
  
  } else if (((inputedMonth == "February") && (inputedDay == "19" || inputedDay == "20" || inputedDay == "21" || inputedDay == "22" || inputedDay == "23" || inputedDay == "24" || inputedDay == "25" || inputedDay == "26" || inputedDay == "27" || inputedDay == "28" || inputedDay == "29")) || ((inputedMonth == "March") && (inputedDay == "1" || inputedDay == "2" || inputedDay == "3" || inputedDay == "4" || inputedDay == "5" || inputedDay == "6" || inputedDay == "7" || inputedDay == "8" || inputedDay == "9" || inputedDay == "10" || inputedDay == "11" || inputedDay == "12" || inputedDay == "13" || inputedDay == "14" || inputedDay == "15" || inputedDay == "16" || inputedDay == "17" || inputedDay == "18" || inputedDay == "19" || inputedDay == "20"))) {
    document.getElementById("zodiacName").innerHTML =
      "Pisces"  
    document.getElementById("zodiacInfo1").innerHTML =
      "Info1"
    document.getElementById("zodiacInfo2").innerHTML =
      "info2"
  
  } else if (((inputedMonth == "March") && (inputedDay == "21" || inputedDay == "22" || inputedDay == "23" || inputedDay == "24" || inputedDay == "25" || inputedDay == "26" || inputedDay == "27" || inputedDay == "28" || inputedDay == "29" || inputedDay == "30" || inputedDay == "31")) || ((inputedMonth == "April") && (inputedDay == "1" || inputedDay == "2" || inputedDay == "3" || inputedDay == "4" || inputedDay == "5" || inputedDay == "6" || inputedDay == "7" || inputedDay == "8" || inputedDay == "9" || inputedDay == "10" || inputedDay == "11" || inputedDay == "12" || inputedDay == "13" || inputedDay == "14" || inputedDay == "15" || inputedDay == "16" || inputedDay == "17" || inputedDay == "18" || inputedDay == "19"))) {
    document.getElementById("zodiacName").innerHTML =
      "Aries"  
    document.getElementById("zodiacInfo1").innerHTML =
      "Info1"
    document.getElementById("zodiacInfo2").innerHTML =
      "info2"
  
  } else if (((inputedMonth == "April") && (inputedDay == "20" || inputedDay == "21" || inputedDay == "22" || inputedDay == "23" || inputedDay == "24" || inputedDay == "25" || inputedDay == "26" || inputedDay == "27" || inputedDay == "28" || inputedDay == "29" || inputedDay == "30")) || ((inputedMonth == "May") && (inputedDay == "1" || inputedDay == "2" || inputedDay == "3" || inputedDay == "4" || inputedDay == "5" || inputedDay == "6" || inputedDay == "7" || inputedDay == "8" || inputedDay == "9" || inputedDay == "10" || inputedDay == "11" || inputedDay == "12" || inputedDay == "13" || inputedDay == "14" || inputedDay == "15" || inputedDay == "16" || inputedDay == "17" || inputedDay == "18" || inputedDay == "19" || inputedDay == "20"))) {
    document.getElementById("zodiacName").innerHTML =
      "Taurus"  
    document.getElementById("zodiacInfo1").innerHTML =
      "Info1"
    document.getElementById("zodiacInfo2").innerHTML =
      "info2"
  
  } else if (((inputedMonth == "May") && (inputedDay == "21" || inputedDay == "22" || inputedDay == "23" || inputedDay == "24" || inputedDay == "25" || inputedDay == "26" || inputedDay == "27" || inputedDay == "28" || inputedDay == "29" || inputedDay == "30" || inputedDay == "31")) || ((inputedMonth == "June") && (inputedDay == "1" || inputedDay == "2" || inputedDay == "3" || inputedDay == "4" || inputedDay == "5" || inputedDay == "6" || inputedDay == "7" || inputedDay == "8" || inputedDay == "9" || inputedDay == "10" || inputedDay == "11" || inputedDay == "12" || inputedDay == "13" || inputedDay == "14" || inputedDay == "15" || inputedDay == "16" || inputedDay == "17" || inputedDay == "18" || inputedDay == "19" || inputedDay == "20"))) {
    document.getElementById("zodiacName").innerHTML =
      "Gemini"  
    document.getElementById("zodiacInfo1").innerHTML =
      "Info1"
    document.getElementById("zodiacInfo2").innerHTML =
      "info2"
  
  } else if (((inputedMonth == "June") && (inputedDay == "21" || inputedDay == "22" || inputedDay == "23" || inputedDay == "24" || inputedDay == "25" || inputedDay == "26" || inputedDay == "27" || inputedDay == "28" || inputedDay == "29" || inputedDay == "30")) || ((inputedMonth == "July") && (inputedDay == "1" || inputedDay == "2" || inputedDay == "3" || inputedDay == "4" || inputedDay == "5" || inputedDay == "6" || inputedDay == "7" || inputedDay == "8" || inputedDay == "9" || inputedDay == "10" || inputedDay == "11" || inputedDay == "12" || inputedDay == "13" || inputedDay == "14" || inputedDay == "15" || inputedDay == "16" || inputedDay == "17" || inputedDay == "18" || inputedDay == "19" || inputedDay == "20" || inputedDay == "21" || inputedDay == "22"))) {
    document.getElementById("zodiacName").innerHTML =
      "Cancer"
    document.getElementById("zodiacInfo1").innerHTML =
      "Info1"
    document.getElementById("zodiacInfo2").innerHTML =
      "info2"
  
  } else if (((inputedMonth == "July") && (inputedDay == "23" || inputedDay == "24" || inputedDay == "25" || inputedDay == "26" || inputedDay == "27" || inputedDay == "28" || inputedDay == "29" || inputedDay == "30" || inputedDay == "31")) || ((inputedMonth == "August") && (inputedDay == "1" || inputedDay == "2" || inputedDay == "3" || inputedDay == "4" || inputedDay == "5" || inputedDay == "6" || inputedDay == "7" || inputedDay == "8" || inputedDay == "9" || inputedDay == "10" || inputedDay == "11" || inputedDay == "12" || inputedDay == "13" || inputedDay == "14" || inputedDay == "15" || inputedDay == "16" || inputedDay == "17" || inputedDay == "18" || inputedDay == "19" || inputedDay == "20" || inputedDay == "21" || inputedDay == "22"))) {
    document.getElementById("zodiacName").innerHTML =
      "Leo"
    document.getElementById("zodiacInfo1").innerHTML =
      "Info1"
    document.getElementById("zodiacInfo2").innerHTML =
      "info2"
  
  } else if (((inputedMonth == "August") && (inputedDay == "23" || inputedDay == "24" || inputedDay == "25" || inputedDay == "26" || inputedDay == "27" || inputedDay == "28" || inputedDay == "29" || inputedDay == "30" || inputedDay == "31")) || ((inputedMonth == "September") && (inputedDay == "1" || inputedDay == "2" || inputedDay == "3" || inputedDay == "4" || inputedDay == "5" || inputedDay == "6" || inputedDay == "7" || inputedDay == "8" || inputedDay == "9" || inputedDay == "10" || inputedDay == "11" || inputedDay == "12" || inputedDay == "13" || inputedDay == "14" || inputedDay == "15" || inputedDay == "16" || inputedDay == "17" || inputedDay == "18" || inputedDay == "19" || inputedDay == "20" || inputedDay == "21" || inputedDay == "22"))) {
    document.getElementById("zodiacName").innerHTML =
      "Virgo"  
    document.getElementById("zodiacInfo1").innerHTML =
      "Info1"
    document.getElementById("zodiacInfo2").innerHTML =
      "info2"
  
  } else if (((inputedMonth == "September") && (inputedDay == "23" || inputedDay == "24" || inputedDay == "25" || inputedDay == "26" || inputedDay == "27" || inputedDay == "28" || inputedDay == "29" || inputedDay == "30")) || ((inputedMonth == "October") && (inputedDay == "1" || inputedDay == "2" || inputedDay == "3" || inputedDay == "4" || inputedDay == "5" || inputedDay == "6" || inputedDay == "7" || inputedDay == "8" || inputedDay == "9" || inputedDay == "10" || inputedDay == "11" || inputedDay == "12" || inputedDay == "13" || inputedDay == "14" || inputedDay == "15" || inputedDay == "16" || inputedDay == "17" || inputedDay == "18" || inputedDay == "19" || inputedDay == "20" || inputedDay == "21" || inputedDay == "22"))) {
    document.getElementById("zodiacName").innerHTML =
      "Libra"
    document.getElementById("zodiacInfo1").innerHTML =
      "Info1"
    document.getElementById("zodiacInfo2").innerHTML =
      "info2"
  
  } else if (((inputedMonth == "October") && (inputedDay == "23" || inputedDay == "24" || inputedDay == "25" || inputedDay == "26" || inputedDay == "27" || inputedDay == "28" || inputedDay == "29" || inputedDay == "30" || inputedDay == "31")) || ((inputedMonth == "November") && (inputedDay == "1" || inputedDay == "2" || inputedDay == "3" || inputedDay == "4" || inputedDay == "5" || inputedDay == "6" || inputedDay == "7" || inputedDay == "8" || inputedDay == "9" || inputedDay == "10" || inputedDay == "11" || inputedDay == "12" || inputedDay == "13" || inputedDay == "14" || inputedDay == "15" || inputedDay == "16" || inputedDay == "17" || inputedDay == "18" || inputedDay == "19" || inputedDay == "20" || inputedDay == "21"))) {
    document.getElementById("zodiacName").innerHTML =
      "Scorpio"
    document.getElementById("zodiacInfo1").innerHTML =
      "Info1"
    document.getElementById("zodiacInfo2").innerHTML =
      "info2"
  
  } else if (((inputedMonth == "November") && (inputedDay == "22" || inputedDay == "23" || inputedDay == "24" || inputedDay == "25" || inputedDay == "26" || inputedDay == "27" || inputedDay == "28" || inputedDay == "29" || inputedDay == "30")) || ((inputedMonth == "December") && (inputedDay == "1" || inputedDay == "2" || inputedDay == "3" || inputedDay == "4" || inputedDay == "5" || inputedDay == "6" || inputedDay == "7" || inputedDay == "8" || inputedDay == "9" || inputedDay == "10" || inputedDay == "11" || inputedDay == "12" || inputedDay == "13" || inputedDay == "14" || inputedDay == "15" || inputedDay == "16" || inputedDay == "17" || inputedDay == "18" || inputedDay == "19" || inputedDay == "20" || inputedDay == "21"))) {
    document.getElementById("zodiacName").innerHTML =
      "Sagittarius"
    document.getElementById("zodiacInfo1").innerHTML =
      "Info1"
    document.getElementById("zodiacInfo2").innerHTML =
      "info2"
  
  } else if (((inputedMonth == "December") && (inputedDay == "22" || inputedDay == "23" || inputedDay == "24" || inputedDay == "25" || inputedDay == "26" || inputedDay == "27" || inputedDay == "28" || inputedDay == "29" || inputedDay == "30" || inputedDay == "31")) || ((inputedMonth == "January") && (inputedDay == "1" || inputedDay == "2" || inputedDay == "3" || inputedDay == "4" || inputedDay == "5" || inputedDay == "6" || inputedDay == "7" || inputedDay == "8" || inputedDay == "9" || inputedDay == "10" || inputedDay == "11" || inputedDay == "12" || inputedDay == "13" || inputedDay == "14" || inputedDay == "15" || inputedDay == "16" || inputedDay == "17" || inputedDay == "18" || inputedDay == "19"))) {
    document.getElementById("zodiacName").innerHTML =
      "Capricorn"
    document.getElementById("zodiacInfo1").innerHTML =
      "Info1"
    document.getElementById("zodiacInfo2").innerHTML =
      "info2"
  
  } else if ((inputedMonth == "Month") || (inputedDay == "Day" )) {
    document.getElementById("zodiacName").innerHTML =
    "Please select your birthday in the selection boxes above..."
  } else {
    document.getElementById("zodiacName").innerHTML =
      "Something went wrong. Please try again."
  }
}
