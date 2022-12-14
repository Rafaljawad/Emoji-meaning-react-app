const emojiInfo = [
  {
    id: 1,
    name: "Grinning Face",
    meaning: "conveys general pleasure and good cheer or humor.",
    emoji: "ð",
  },
  {
    id: 2,
    name: "Grinning Face with Smiling Eyes",
    meaning:
      "A yellow face with smiling eyes and a broad, open smile, showing upper teeth and tongue on some platforms. Often conveys general happiness and good-natured amusement.",
    emoji: "ð",
  },
  {
    id: 3,
    name: "Winking Face",
    meaning:
      "A yellow face with a slight smile or open mouth shown winking, usually its left eye. May signal a joke, flirtation, hidden meaning, or general positivity. Tone varies, including playful, affectionate, suggestive, or ironic.",
    emoji: "ð",
  },
  {
    id: 4,
    name: "Smiling Face with Halo",
    meaning:
      "A yellow face with smiling eyes, closed smile, and halo, usually blue, overhead. Often represents angels, prayers, and blessings. May also convey angelic behavior, e.g., doing good deeds",
    emoji: "ð",
  },
  {
    id: 5,
    name: "Smiling Face",
    meaning:
      "A classic smiley. A yellow face with a modest smile, rosy cheeks, and soft, closed eyes. Many platforms, including Apple, feature relaxed eyebrows. Conveys a wide range of warm, positive feelings, including love, happiness, and gratitude",
    emoji: "ð",
  },
  {
    id: 6,
    name: " Zany Face",
    meaning:
      "A yellow face with its head tilted, its tongue hanging out of a big grin, and wide eyes in a wild, cockeyed expression. Generally used to express silliness.Commonly represents acting goofy, having fun, and partying and is usually used in a positive manner. May be used in reference to someone or something that is off-kilter.",
    emoji: "ðĪŠ",
  },
  {
    id: 7,
    name: "Thinking Face",
    meaning:
      "A yellow face with furrowed eyebrows looking upwards with thumb and index finger resting on its chin. Intended to show a person pondering or deep in thought. Often used to question or scorn something or someone, as if saying Hmm, I don't know about that. Tone varies, including earnest, playful, puzzled, skeptical, and mocking.",
    emoji: "ðĪ",
  },
  {
    id: 8,
    name: "Zipper-Mouth Face",
    meaning:
      "A yellow face with simple, open eyes and a closed zipper for a mouth. Meaning widely varies, but commonly conveys a secret or that someone will keep one (e.g., My lips are sealed). May also be used to tell someone to stop talking (e.g., Zip it! or Iâll shut up now).",
    emoji: "ðĪ",
  },
  {
    id: 9,
    name: "  Neutral Face",
    meaning:
      "A yellow face with simple, open eyes and a flat, closed mouth. Intended to depict a neutral sentiment but often used to convey mild irritation and concern or a deadpan sense of humor.",
    emoji: "ð",
  },
  {
    id: 10,
    name: "Shushing Face",
    meaning:
      "A yellow face placing an index finger over pursed lips, as if issuing Shh! or Shush! for silence. Some platforms feature raised eyebrows. Appleâs design suggests the face is tilting back slightly.  May convey silence, quiet, secrecy, and discreetness. May also create a sense of buzz and anticipation, e.g., an exclusive sneak peek or news scoop.",
    emoji: "ðĪŦ",
  },
  {
    id: 11,
    name: "Face with Rolling Eyes",
    meaning:
      "A yellow face with a small, closed mouth, flat or frowning, rolling its large, white eyes upwards. As with the gesture of an eye-roll, commonly conveys moderate disdain, disapproval, frustration, or boredom",
    emoji: "ð",
  },

  {
    id: 12,
    name: "Face with Medical Mask",
    meaning:
      "A yellow face wearing a white surgical mask, as used by health workers in hospitals as well as the general public during a pandemic. May be worn to avoid sickness or spreading airborne diseases.",
    emoji: "ð·",
  },
  {
    id: 13,
    name: "Sleeping Face",
    meaning:
      "A yellow face with eyes closed and mouth letting out three, cartoon-styled Zzzâs overhead to indicate it's sound asleep. The Zzzâs appear blue or purple across most platforms. May also represent boredom (slang, snooze).",
    emoji: "ðī",
  },
  {
    id: 14,
    name: "Lying Face",
    meaning:
      "A yellow face with raised eyebrows, enlarged eyes, slight frown, and long nose, indicating itâs telling a lie in the manner of Pinocchio. Like that character, Facebook's design features a wooden nose.",
    emoji: "ðĪĨ",
  },

  {
    id: 15,
    name: " Nauseated Face",
    meaning:
      "A sickly-green face with concerned eyes and puffed, often red cheeks, as if holding back vomit. May represent physical illness or general disgust",
    emoji: "ðĪĒ",
  },
  {
    id: 16,
    name: "Sneezing Face",
    meaning:
      "A yellow face with scrunched, X-shaped eyes sneezing or blowing its nose into a white tissue, as if from a cold or allergies. Often depicted with a crumpled-looking mouth.",
    emoji: "ðĪ§",
  },
  {
    id: 17,
    name: "Hot Face",
    meaning:
      "A reddish-orange face with furrowed eyebrows, tongue stuck out, and beads of sweat, as if overheated from high temperatures. Number and position of sweat droplets vary by platforms",
    emoji: "ðĨĩ",
  },
  {
    id: 18,
    name: " Cold Face",
    meaning:
      "An icy-blue face with gritted teeth usually depicted with icicles clinging to its cheeks or jaw, as if frozen from extreme cold",
    emoji: "ðĨķ",
  },

  {
    id: 19,
    name: " Face Vomiting",
    meaning:
      "A yellow face with scrunched, X-shaped eyes spewing bright-green vomit. May represent physical illness or disgust, more intensely so than ðĪĒ Nauseated Face.",
    emoji: "ðĪŪ",
  },
  {
    id: 20,
    name: "Worried Face",
    meaning:
      "A yellow face with open eyes, raised or furrowed eyebrows, and a broad frown. May convey a variety of moderately sad or tense emotions, including concern, anxiety, alarm, disappointment, and unhappiness",
    emoji: "ð",
  },
  {
    id: 21,
    name: " Partying Face",
    meaning:
      "A yellow face with a party hat blowing a party horn as confetti floats around its head. Used for celebrating joyous occasions (such as New Year's Eve or World Emoji Day) and enjoying good times more generally.",
    emoji: "ðĨģ",
  },

  {
    id: 22,
    name: "  Astonished Face",
    meaning:
      "A yellow face with open eyes, raised eyebrows, and an open mouth, as if gasping in shock or surprise. Often depicted showing its upper teeth. May convey a wide range of emotions, including awe, amazement, admiration, disbelief, excitement, or concern.",
    emoji: "ðē",
  },
  {
    id: 23,
    name: "Fearful Face",
    meaning:
      "A face with small, open eyes, open frown, raised eyebrows, and a pale blue forehead, as if experiencing a cold flash. Samsungâs design shows upper teeth and tongue.",
    emoji: "ðĻ",
  },
  {
    id: 24,
    name: "Face Screaming in Fear",
    meaning:
      "A yellow face screaming in fear, depicted by wide, white eyes, a long, open mouth, hands pressed on cheeks, and a pale blue forehead, as if it has lost its color.While intended to represent horror and fright, it commonly conveys such feelings as shock, awe, disbelief, and intense excitement, as a screaming fan.",
    emoji: "ðą",
  },
];
export default emojiInfo;
