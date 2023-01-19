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

  if (((inputedMonth == "February") && (inputedDay == "30" || inputedDay == "31")) || ((inputedMonth == "April") && (inputedDay == "31")) || ((inputedMonth == "June") && (inputedDay == "31")) || ((inputedMonth == "September") && (inputedDay == "31")) || ((inputedMonth == "November") && (inputedDay == "31"))) {
    document.getElementById("crystalName").innerHTML =
      "This day doesn't exist..."
    document.getElementById("crystalInfo1").innerHTML =
      ""
    document.getElementById("crystalInfo2").innerHTML =
      ""
    } else if ((inputedMonth == "Month") || (inputedDay == "Day" )) {
    document.getElementById("crystalName").innerHTML =
      "Please select your birthday in the selection boxes above..."
    document.getElementById("crystalInfo1").innerHTML =
      ""
    document.getElementById("crystalInfo2").innerHTML =
      ""
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
    document.getElementById("zodiacInfo1").innerHTML =
      ""
    document.getElementById("zodiacInfo2").innerHTML =
      ""
  
  } else if (((inputedMonth == "January") && (inputedDay == "20" || inputedDay == "21" || inputedDay == "22" || inputedDay == "23" || inputedDay == "24" || inputedDay == "25" || inputedDay == "26" || inputedDay == "27" || inputedDay == "28" || inputedDay == "29" || inputedDay == "30" || inputedDay == "31")) || ((inputedMonth == "February") && (inputedDay == "1" || inputedDay == "2" || inputedDay == "3" || inputedDay == "4" || inputedDay == "5" || inputedDay == "6" || inputedDay == "7" || inputedDay == "8" || inputedDay == "9" || inputedDay == "10" || inputedDay == "11" || inputedDay == "12" || inputedDay == "13" || inputedDay == "14" || inputedDay == "15" || inputedDay == "16" || inputedDay == "17" || inputedDay == "18"))) {
    document.getElementById("zodiacName").innerHTML =
      "Aquarius!"
    document.getElementById("zodiacDate").innerHTML =
      "January 20 - February 18"
    document.getElementById("zodiacInfo1").innerHTML =
      "Even with the 'aqua' in its name, Aquarius is actually the last air sign of the zodiac. Aquarians are typical outcasts. This doesn’t mean they’re loners. In fact, they love being in large groups, showing off their differences. Intelligence, to them, means the ability to formulate the most unpopular opinion possible. They love to live their lives in opposition to the current world. An entire universe exists in their heads, and this universe sticks to its own set of logic that doesn’t map onto reality. Aquarians wonder why they aren't normal, but find normalcy boring. Aquarians, seek to avoid categorization. Aquarians are always experimenting, using the element of surprise to have reactions and make theories about the difficulties of human nature."
    document.getElementById("zodiacInfo2").innerHTML =
      "Symbol: Water Bear"
      "Element: Air"
      "Ruling Planet: Uranus"
  
  } else if (((inputedMonth == "February") && (inputedDay == "19" || inputedDay == "20" || inputedDay == "21" || inputedDay == "22" || inputedDay == "23" || inputedDay == "24" || inputedDay == "25" || inputedDay == "26" || inputedDay == "27" || inputedDay == "28" || inputedDay == "29")) || ((inputedMonth == "March") && (inputedDay == "1" || inputedDay == "2" || inputedDay == "3" || inputedDay == "4" || inputedDay == "5" || inputedDay == "6" || inputedDay == "7" || inputedDay == "8" || inputedDay == "9" || inputedDay == "10" || inputedDay == "11" || inputedDay == "12" || inputedDay == "13" || inputedDay == "14" || inputedDay == "15" || inputedDay == "16" || inputedDay == "17" || inputedDay == "18" || inputedDay == "19" || inputedDay == "20"))) {
    document.getElementById("zodiacName").innerHTML =
      "Pisces!"  
    document.getElementById("zodiacDate").innerHTML =
      "February 19 - March 20"
    document.getElementById("zodiacInfo1").innerHTML =
      "Pisces' behaviour changes based on who they’re around. They are unlimited, weakening themselves with larger personalities to avoid having to form readable identities. Most of the traits usually associated with Pisces (dreaminess, emotionality, imagination) are internal processes that are difficult to observe from the outside. Therefore hard to read. Pisces are mostly inward-facing. They are not self-absorbed, but they are absorbed in themselves."
    document.getElementById("zodiacInfo2").innerHTML =
      "Symbol: The Fishes"
      "Element: Water"
      "Ruling Planet: Neptune"
  
  } else if (((inputedMonth == "March") && (inputedDay == "21" || inputedDay == "22" || inputedDay == "23" || inputedDay == "24" || inputedDay == "25" || inputedDay == "26" || inputedDay == "27" || inputedDay == "28" || inputedDay == "29" || inputedDay == "30" || inputedDay == "31")) || ((inputedMonth == "April") && (inputedDay == "1" || inputedDay == "2" || inputedDay == "3" || inputedDay == "4" || inputedDay == "5" || inputedDay == "6" || inputedDay == "7" || inputedDay == "8" || inputedDay == "9" || inputedDay == "10" || inputedDay == "11" || inputedDay == "12" || inputedDay == "13" || inputedDay == "14" || inputedDay == "15" || inputedDay == "16" || inputedDay == "17" || inputedDay == "18" || inputedDay == "19"))) {
    document.getElementById("zodiacName").innerHTML =
      "Aries!"  
    document.getElementById("zodiacDate").innerHTML =
      "March 21 - April 19"
    document.getElementById("zodiacInfo1").innerHTML =
      "Aries do things their own way. They are highly competitive and honest. They throw themselves at the world eagerly and without fear. Aries are driven by a desire to prove themselves and their strength. They have high energy and are very ambitious. They naturally take charge because they are good at initiating new projects. They can also be impatient, but are naturally active and don’t like to waste time. While they want competition, they don’t like to play games. They are highly self-aware, have strong opinions and are always ready to defend themselves."
    document.getElementById("zodiacInfo2").innerHTML =
      "Symbol: The Ram"
      "Element: Fire"
      "Ruling Planet: Mars"
  
  } else if (((inputedMonth == "April") && (inputedDay == "20" || inputedDay == "21" || inputedDay == "22" || inputedDay == "23" || inputedDay == "24" || inputedDay == "25" || inputedDay == "26" || inputedDay == "27" || inputedDay == "28" || inputedDay == "29" || inputedDay == "30")) || ((inputedMonth == "May") && (inputedDay == "1" || inputedDay == "2" || inputedDay == "3" || inputedDay == "4" || inputedDay == "5" || inputedDay == "6" || inputedDay == "7" || inputedDay == "8" || inputedDay == "9" || inputedDay == "10" || inputedDay == "11" || inputedDay == "12" || inputedDay == "13" || inputedDay == "14" || inputedDay == "15" || inputedDay == "16" || inputedDay == "17" || inputedDay == "18" || inputedDay == "19" || inputedDay == "20"))) {
    document.getElementById("zodiacName").innerHTML =
      "Taurus!"  
    document.getElementById("zodiacDate").innerHTML =
      "April 20 - May 20"
    document.getElementById("zodiacInfo1").innerHTML =
      "Tauruses have a stable routine they follow, and will do anything not to break it. They won't be at peace if something disturbs their pattern. Tauruses adapt around the physical world. They tend to be grounded and logical. They like to be in control. They’re patient and steady. They are stubborn, so it’s difficult for them to change their mind. They like things to be predictable and are easy to read. They are perfectly happy having strict habits. They would prefer things be consistent than chaotically okay. Tauruses can absolutely go on forever. They are extremely hard-working and won't let a challenge that someone throws at them, stop them."
    document.getElementById("zodiacInfo2").innerHTML =
      "Symbol: The Bull"
      "Element: Earth"
      "Ruling Planet: Venus"
  
  } else if (((inputedMonth == "May") && (inputedDay == "21" || inputedDay == "22" || inputedDay == "23" || inputedDay == "24" || inputedDay == "25" || inputedDay == "26" || inputedDay == "27" || inputedDay == "28" || inputedDay == "29" || inputedDay == "30" || inputedDay == "31")) || ((inputedMonth == "June") && (inputedDay == "1" || inputedDay == "2" || inputedDay == "3" || inputedDay == "4" || inputedDay == "5" || inputedDay == "6" || inputedDay == "7" || inputedDay == "8" || inputedDay == "9" || inputedDay == "10" || inputedDay == "11" || inputedDay == "12" || inputedDay == "13" || inputedDay == "14" || inputedDay == "15" || inputedDay == "16" || inputedDay == "17" || inputedDay == "18" || inputedDay == "19" || inputedDay == "20"))) {
    document.getElementById("zodiacName").innerHTML =
      "Gemini!"  
    document.getElementById("zodiacDate").innerHTML =
      "May 21 - June 20"
    document.getElementById("zodiacInfo1").innerHTML =
    "Geminis are very intelligent and pick up knowledge quickly. They are wise, logical, and often very funny. They have an unreserved, childlike curiosity. Geminis have an ability to pick up a person’s character in a matter of seconds, even if they only just met them. If someone’s lying, they’ll be the first to notice. They are great communicators because they tend to be very responsive and sensitive listeners. Geminis are versatile, comfortable being both introverts and extroverts. They are quick to adjust to the energy of a room. Geminis are afraid of being alone. This is why they tend to have large social circles and always have a companion. They’re afraid of their own minds, they’re afraid of the power of their own imagination."
    document.getElementById("zodiacInfo2").innerHTML =
    "Symbol: The Twins"
    "Element: Air"
    "Ruling Planet: Mercury"

  } else if (((inputedMonth == "June") && (inputedDay == "21" || inputedDay == "22" || inputedDay == "23" || inputedDay == "24" || inputedDay == "25" || inputedDay == "26" || inputedDay == "27" || inputedDay == "28" || inputedDay == "29" || inputedDay == "30")) || ((inputedMonth == "July") && (inputedDay == "1" || inputedDay == "2" || inputedDay == "3" || inputedDay == "4" || inputedDay == "5" || inputedDay == "6" || inputedDay == "7" || inputedDay == "8" || inputedDay == "9" || inputedDay == "10" || inputedDay == "11" || inputedDay == "12" || inputedDay == "13" || inputedDay == "14" || inputedDay == "15" || inputedDay == "16" || inputedDay == "17" || inputedDay == "18" || inputedDay == "19" || inputedDay == "20" || inputedDay == "21" || inputedDay == "22"))) {
    document.getElementById("zodiacName").innerHTML =
      "Cancer!"
    document.getElementById("zodiacDate").innerHTML =
      "June 21 - July 22"
    document.getElementById("zodiacInfo1").innerHTML =
      "Cancers are highly sensitive and very insecure, so they need constant reassurance. This doesn't have to come from only their lovers–it can also be a close friend or a parent. Cancers need this emotional intimacy or they suffer. Cancers thrive on the security of close relationships. The self-awareness of a Cancer are constantly moving in and out of focus. They have many moods, some of which are opposed, but they also have a deep, core self that continues. Cancers are weighed down by their own sufferings and the sufferings of those around them. It’s hard for them to share their pain with others, and they are often afraid to be vulnerable because they carry a fear that people will use their weaknesses against them. Cancers have learned to hide their pain to avoid burdening anyone else. They pretend they’re okay when they’re not."
    document.getElementById("zodiacInfo2").innerHTML =
      "Symbol: The Crab"
      "Element: Water"
      "Ruling Planet: Moon"
  
  } else if (((inputedMonth == "July") && (inputedDay == "23" || inputedDay == "24" || inputedDay == "25" || inputedDay == "26" || inputedDay == "27" || inputedDay == "28" || inputedDay == "29" || inputedDay == "30" || inputedDay == "31")) || ((inputedMonth == "August") && (inputedDay == "1" || inputedDay == "2" || inputedDay == "3" || inputedDay == "4" || inputedDay == "5" || inputedDay == "6" || inputedDay == "7" || inputedDay == "8" || inputedDay == "9" || inputedDay == "10" || inputedDay == "11" || inputedDay == "12" || inputedDay == "13" || inputedDay == "14" || inputedDay == "15" || inputedDay == "16" || inputedDay == "17" || inputedDay == "18" || inputedDay == "19" || inputedDay == "20" || inputedDay == "21" || inputedDay == "22"))) {
    document.getElementById("zodiacName").innerHTML =
      "Leo!"
    document.getElementById("zodiacDate").innerHTML =
      "July 23 - August 22"
    document.getElementById("zodiacInfo1").innerHTML =
      "Leos are bold, warm, and loving. They are also the ultimate performers. They can dazzle with the theatrical flair of a Broadway star and the charisma of a politician. They have big personalities. Leos put ambition into everything they do. They are ruled by the heart. Their actions are natural and effortless because they are confident and trust their instincts. When a Leo is hurting, it shows. They will use their anger as a protective wall to shield their vulnerabilities. They want to be shown as unbreakable because they are scared of admitting vulnerability, needing things from other people, or being incomplete."
    document.getElementById("zodiacInfo2").innerHTML =
      "Symbol: The Lion"
      "Element: Fire"
      "Ruling Planet: Sun"
  
  } else if (((inputedMonth == "August") && (inputedDay == "23" || inputedDay == "24" || inputedDay == "25" || inputedDay == "26" || inputedDay == "27" || inputedDay == "28" || inputedDay == "29" || inputedDay == "30" || inputedDay == "31")) || ((inputedMonth == "September") && (inputedDay == "1" || inputedDay == "2" || inputedDay == "3" || inputedDay == "4" || inputedDay == "5" || inputedDay == "6" || inputedDay == "7" || inputedDay == "8" || inputedDay == "9" || inputedDay == "10" || inputedDay == "11" || inputedDay == "12" || inputedDay == "13" || inputedDay == "14" || inputedDay == "15" || inputedDay == "16" || inputedDay == "17" || inputedDay == "18" || inputedDay == "19" || inputedDay == "20" || inputedDay == "21" || inputedDay == "22"))) {
    document.getElementById("zodiacName").innerHTML =
      "Virgo!"  
    document.getElementById("zodiacDate").innerHTML =
      "August 23 - September 22"
    document.getElementById("zodiacInfo1").innerHTML =
      "Virgos are known for being perfectionists. They pay much attention to detail, which helps them find patterns where there are none. It’s true that Virgos are very organized, but that doesn’t mean that they keep neat spaces. They can become so busy fixing the lives of those around them that they don't put much work into providing for their own needs. Virgos are also known for being intelligent, but because of their introverted nature, they can sometimes have trouble expressing themselves. Virgos will be endlessly accepting of whatever you have to share, but may not see the value in voluntarily showing a similar reveal of themselves to anyone else. Virgos are self-conscious about their imperfections. They are sensitive to the consequences of their actions and the fact that they occasionally lead to their own pain. They often say things like 'It's my fault' and 'I did this to myself' because of this."
    document.getElementById("zodiacInfo2").innerHTML =
      "Symbol: The Virgin"
      "Element: Earth"
      "Ruling Planet: Mercury"
  
  } else if (((inputedMonth == "September") && (inputedDay == "23" || inputedDay == "24" || inputedDay == "25" || inputedDay == "26" || inputedDay == "27" || inputedDay == "28" || inputedDay == "29" || inputedDay == "30")) || ((inputedMonth == "October") && (inputedDay == "1" || inputedDay == "2" || inputedDay == "3" || inputedDay == "4" || inputedDay == "5" || inputedDay == "6" || inputedDay == "7" || inputedDay == "8" || inputedDay == "9" || inputedDay == "10" || inputedDay == "11" || inputedDay == "12" || inputedDay == "13" || inputedDay == "14" || inputedDay == "15" || inputedDay == "16" || inputedDay == "17" || inputedDay == "18" || inputedDay == "19" || inputedDay == "20" || inputedDay == "21" || inputedDay == "22"))) {
    document.getElementById("zodiacName").innerHTML =
      "Libra!"
    document.getElementById("zodiacDate").innerHTML =
      "September 23 - October 22"
    document.getElementById("zodiacInfo1").innerHTML =
      "Libras are difficult to really understand because they seem so opposed. They are both extroverted and introverted, planned and unplanned, intuitive and focused. It is difficult to pinpoint their true character because of their variability. They are a variation of personalities altogether. Libras change based on who they are with. This is due to their desire for inclusivity and appreciation of sympathy. They can take a long time to understand themselves, even though they have strong opinions about other people. Because Libras are aware of how their unhappiness affects those around them, they experience extreme amounts of guilt and shame whenever they are unhappy."
    document.getElementById("zodiacInfo2").innerHTML =
      "Symbol: The Scales"
      "Element: Air"
      "Ruling Planet: Venus"
  
  } else if (((inputedMonth == "October") && (inputedDay == "23" || inputedDay == "24" || inputedDay == "25" || inputedDay == "26" || inputedDay == "27" || inputedDay == "28" || inputedDay == "29" || inputedDay == "30" || inputedDay == "31")) || ((inputedMonth == "November") && (inputedDay == "1" || inputedDay == "2" || inputedDay == "3" || inputedDay == "4" || inputedDay == "5" || inputedDay == "6" || inputedDay == "7" || inputedDay == "8" || inputedDay == "9" || inputedDay == "10" || inputedDay == "11" || inputedDay == "12" || inputedDay == "13" || inputedDay == "14" || inputedDay == "15" || inputedDay == "16" || inputedDay == "17" || inputedDay == "18" || inputedDay == "19" || inputedDay == "20" || inputedDay == "21"))) {
    document.getElementById("zodiacName").innerHTML =
      "Scorpio!"
    document.getElementById("zodiacDate").innerHTML =
      "October 23 - November 21"
    document.getElementById("zodiacInfo1").innerHTML =
      "A Scorpio's personality is an abyss of infinite complicatedness (or at least how they project themselves). They are difficult people to get to know because they are psychological trapdoors. Scorpios socialize from behind a double-sided mirror, reading you. They prefer to be the people asking the questions, removing your skin with their sharp scalpel and taking information from your guts. They subtly study and push your pressure points so they can get the answer they're seeking. Scorpios' knowledge of other people’s ways of mind gives them an edge over the competition. They know how to put people against each other. A conflict between wants and needs where somebody wins and somebody loses. Scorpios are intentional about the information they reveal. They don't spread lies, they aren't liars, but they are masters at letting some truths through while keeping others hidden behind thick gates."
    document.getElementById("zodiacInfo2").innerHTML =
      "Symbol: The Scorpion"
      "Element: Water"
      "Ruling Planet: Pluto"
  
  } else if (((inputedMonth == "November") && (inputedDay == "22" || inputedDay == "23" || inputedDay == "24" || inputedDay == "25" || inputedDay == "26" || inputedDay == "27" || inputedDay == "28" || inputedDay == "29" || inputedDay == "30")) || ((inputedMonth == "December") && (inputedDay == "1" || inputedDay == "2" || inputedDay == "3" || inputedDay == "4" || inputedDay == "5" || inputedDay == "6" || inputedDay == "7" || inputedDay == "8" || inputedDay == "9" || inputedDay == "10" || inputedDay == "11" || inputedDay == "12" || inputedDay == "13" || inputedDay == "14" || inputedDay == "15" || inputedDay == "16" || inputedDay == "17" || inputedDay == "18" || inputedDay == "19" || inputedDay == "20" || inputedDay == "21"))) {
    document.getElementById("zodiacName").innerHTML =
      "Sagittarius!"
    document.getElementById("zodiacDate").innerHTML =
      "November 22 - December 21"
    document.getElementById("zodiacInfo1").innerHTML =
      "Sagittarians are the ultimate philosophers of science. They will always choose principles over feelings and will often question who they are. They are explorers of the human condition and are unafraid of change. Sagittarians feel like the world is their playground. They love to explore the unknown. They want to understand how the world works. Sagittarians are reckless in their pursuit of what they want and often end up doing and experiencing things that fight conceptions of the possible. Sagittarians understand that knowledge comes in two forms: the shallow, disposable kind that comes from external sources, and the kind that comes from within. They know that external knowledge can be easily gained while internal knowledge is exponentially deeper and more powerful."
    document.getElementById("zodiacInfo2").innerHTML =
      "Symbol: The Archer"
      "Element: Fire"
      "Ruling Planet: Jupiter"
  
  } else if (((inputedMonth == "December") && (inputedDay == "22" || inputedDay == "23" || inputedDay == "24" || inputedDay == "25" || inputedDay == "26" || inputedDay == "27" || inputedDay == "28" || inputedDay == "29" || inputedDay == "30" || inputedDay == "31")) || ((inputedMonth == "January") && (inputedDay == "1" || inputedDay == "2" || inputedDay == "3" || inputedDay == "4" || inputedDay == "5" || inputedDay == "6" || inputedDay == "7" || inputedDay == "8" || inputedDay == "9" || inputedDay == "10" || inputedDay == "11" || inputedDay == "12" || inputedDay == "13" || inputedDay == "14" || inputedDay == "15" || inputedDay == "16" || inputedDay == "17" || inputedDay == "18" || inputedDay == "19"))) {
    document.getElementById("zodiacName").innerHTML =
      "Capricorn!"
    document.getElementById("zodiacDate").innerHTML =
      "December 22 - January 19"
    document.getElementById("zodiacInfo1").innerHTML =
      "Capricorns are masters of discipline and the ultimate perfectionists. They can be so absorbed in their own inner thoughts that it becomes impossible to get them to look away from themselves. They are often called “workaholics” and are incredibly practical. From a young age, it is engraved upon them that their whole sense of worth and meaning is based on their ability to defend themselves. When they are in a position of power, they are most stable; when they have to adjust to someone else's schedule, they can become a little unhinged. Capricorns manage responsibility and they always appear to need to take it all on. Capricorns are like the team captain. But even as they lead the charge, they can feel like the loneliest people in the world. They wish to be completely independent because they are so scared of depending on others."
    document.getElementById("zodiacInfo2").innerHTML =
      "Symbol: The Sea Goat"
      "Element: Earth"
      "Ruling Planet: Saturn"
  
  } else if ((inputedMonth == "Month") || (inputedDay == "Day" )) {
    document.getElementById("zodiacName").innerHTML =
      "Please select your birthday in the selection boxes above..."
    document.getElementById("zodiacInfo1").innerHTML =
      ""
    document.getElementById("zodiacInfo2").innerHTML =
      ""
    
  } else {
    document.getElementById("zodiacName").innerHTML =
      "Something went wrong. Please try again."
  }
}
