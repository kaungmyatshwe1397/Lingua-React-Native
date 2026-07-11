import { Lesson } from "@/types/learning";

export const lessons: Lesson[] = [
  // ─── Japanese: Greetings ───────────────────────────────────
  {
    id: "ja-lesson-1",
    unitId: "ja-unit-1",
    languageCode: "ja",
    order: 1,
    title: "Hello in Japanese",
    xpReward: 10,
    estimatedDuration: 180,
    goals: [
      { description: "Learn basic greetings", target: 4, unit: "words" },
      { description: "Practice polite phrases", target: 2, unit: "phrases" },
    ],
    activities: [
      {
        id: "ja-act-1",
        type: "vocabulary",
        instruction: "Learn these common greetings",
        vocabulary: [
          {
            id: "ja-v-1",
            word: "こんにちは",
            translation: "Hello",
            pronunciation: "kon-ni-chi-wa",
            exampleSentence: "こんにちは、元気ですか？",
            exampleTranslation: "Hello, how are you?",
          },
          {
            id: "ja-v-2",
            word: "おはようございます",
            translation: "Good morning",
            pronunciation: "o-ha-yo-u go-zai-ma-su",
            exampleSentence: "おはようございます、先生。",
            exampleTranslation: "Good morning, teacher.",
          },
          {
            id: "ja-v-3",
            word: "こんばんは",
            translation: "Good evening",
            pronunciation: "kon-ban-wa",
            exampleSentence: "こんばんは、お元気ですか？",
            exampleTranslation: "Good evening, how are you?",
          },
          {
            id: "ja-v-4",
            word: "さようなら",
            translation: "Goodbye",
            pronunciation: "sa-yo-u-na-ra",
            exampleSentence: "さようなら、また明日。",
            exampleTranslation: "Goodbye, see you tomorrow.",
          },
        ],
      },
      {
        id: "ja-act-2",
        type: "phrase",
        instruction: "Learn useful introduction phrases",
        phrases: [
          {
            id: "ja-p-1",
            phrase: "はじめまして",
            translation: "Nice to meet you",
            pronunciation: "ha-ji-me-ma-shi-te",
            context: "Used when meeting someone for the first time",
          },
          {
            id: "ja-p-2",
            phrase: "よろしくお願いします",
            translation: "Please treat me well",
            pronunciation: "yo-ro-shi-ku o-ne-gai shi-ma-su",
            context: "Polite phrase used after introducing yourself",
          },
        ],
      },
      {
        id: "ja-act-3",
        type: "quiz",
        instruction: "Test your knowledge",
        quiz: {
          question: 'How do you say "Hello" in Japanese?',
          options: ["おはようございます", "こんにちは", "こんばんは", "さようなら"],
          correctIndex: 1,
          explanation: 'こんにちは (kon-ni-chi-wa) means "Hello" in Japanese.',
        },
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are a friendly Japanese teacher. Greet the student warmly, introduce yourself in simple Japanese, and help them practice saying basic greetings. Use a mix of Japanese and English. Keep it playful and encouraging.",
      topics: ["greetings", "introductions", "basic politeness"],
      targetDuration: 120,
      style: "playful",
    },
  },
  {
    id: "ja-lesson-2",
    unitId: "ja-unit-1",
    languageCode: "ja",
    order: 2,
    title: "Self Introduction",
    xpReward: 15,
    estimatedDuration: 240,
    goals: [
      { description: "Learn introduction phrases", target: 4, unit: "phrases" },
      { description: "Learn new vocabulary", target: 3, unit: "words" },
    ],
    activities: [
      {
        id: "ja-act-4",
        type: "vocabulary",
        instruction: "Learn words for introducing yourself",
        vocabulary: [
          {
            id: "ja-v-5",
            word: "わたし",
            translation: "I / me",
            pronunciation: "wa-ta-shi",
            exampleSentence: "わたしは学生です。",
            exampleTranslation: "I am a student.",
          },
          {
            id: "ja-v-6",
            word: "なまえ",
            translation: "Name",
            pronunciation: "na-ma-e",
            exampleSentence: "あなたの名前は？",
            exampleTranslation: "What is your name?",
          },
          {
            id: "ja-v-7",
            word: "がくせい",
            translation: "Student",
            pronunciation: "ga-ku-sei",
            exampleSentence: "わたしはがくせいです。",
            exampleTranslation: "I am a student.",
          },
        ],
      },
      {
        id: "ja-act-5",
        type: "matching",
        instruction: "Match the Japanese words to their English meanings",
        matchingPairs: [
          { id: "ja-m-1", source: "わたし", target: "I / me" },
          { id: "ja-m-2", source: "なまえ", target: "Name" },
          { id: "ja-m-3", source: "がくせい", target: "Student" },
          { id: "ja-m-4", source: "こんにちは", target: "Hello" },
        ],
      },
      {
        id: "ja-act-6",
        type: "quiz",
        instruction: "Test your introduction skills",
        quiz: {
          question: '"わたしはがくせいです" means...?',
          options: [
            "I am a teacher",
            "I am a student",
            "I am a name",
            "I am hungry",
          ],
          correctIndex: 1,
          explanation:
            "わたし (I) は (topic marker) がくせい (student) です (am).",
        },
      },
    ],
  },

  // ─── Japanese: Numbers ─────────────────────────────────────
  {
    id: "ja-lesson-3",
    unitId: "ja-unit-2",
    languageCode: "ja",
    order: 1,
    title: "Numbers 1-5",
    xpReward: 15,
    estimatedDuration: 300,
    goals: [
      { description: "Learn numbers 1-5", target: 5, unit: "numbers" },
      { description: "Practice counting", target: 3, unit: "exercises" },
    ],
    activities: [
      {
        id: "ja-act-7",
        type: "vocabulary",
        instruction: "Learn to count in Japanese",
        vocabulary: [
          {
            id: "ja-v-8",
            word: "いち",
            translation: "One (1)",
            pronunciation: "i-chi",
            exampleSentence: "りんごがひとつあります。",
            exampleTranslation: "There is one apple.",
          },
          {
            id: "ja-v-9",
            word: "に",
            translation: "Two (2)",
            pronunciation: "ni",
            exampleSentence: "猫がにひきいます。",
            exampleTranslation: "There are two cats.",
          },
          {
            id: "ja-v-10",
            word: "さん",
            translation: "Three (3)",
            pronunciation: "san",
            exampleSentence: "友達がさんにんいます。",
            exampleTranslation: "There are three friends.",
          },
          {
            id: "ja-v-11",
            word: "よん",
            translation: "Four (4)",
            pronunciation: "yon",
            exampleSentence: "四つの季節があります。",
            exampleTranslation: "There are four seasons.",
          },
          {
            id: "ja-v-12",
            word: "ご",
            translation: "Five (5)",
            pronunciation: "go",
            exampleSentence: "五分待ってください。",
            exampleTranslation: "Please wait five minutes.",
          },
        ],
      },
      {
        id: "ja-act-8",
        type: "matching",
        instruction: "Match the numbers",
        matchingPairs: [
          { id: "ja-m-5", source: "いち", target: "1" },
          { id: "ja-m-6", source: "に", target: "2" },
          { id: "ja-m-7", source: "さん", target: "3" },
          { id: "ja-m-8", source: "よん", target: "4" },
          { id: "ja-m-9", source: "ご", target: "5" },
        ],
      },
      {
        id: "ja-act-9",
        type: "quiz",
        instruction: "How do you say three in Japanese?",
        quiz: {
          question: "Which is the correct Japanese word for 3?",
          options: ["いち", "に", "さん", "よん"],
          correctIndex: 2,
          explanation: "さん (san) means three in Japanese.",
        },
      },
    ],
  },

  // ─── Korean: Greetings ─────────────────────────────────────
  {
    id: "ko-lesson-1",
    unitId: "ko-unit-1",
    languageCode: "ko",
    order: 1,
    title: "Hello in Korean",
    xpReward: 10,
    estimatedDuration: 180,
    goals: [
      { description: "Learn basic Korean greetings", target: 4, unit: "words" },
      { description: "Practice polite expressions", target: 2, unit: "phrases" },
    ],
    activities: [
      {
        id: "ko-act-1",
        type: "vocabulary",
        instruction: "Learn common Korean greetings",
        vocabulary: [
          {
            id: "ko-v-1",
            word: "안녕하세요",
            translation: "Hello (polite)",
            pronunciation: "an-nyeong-ha-se-yo",
            exampleSentence: "안녕하세요, 반갑습니다.",
            exampleTranslation: "Hello, nice to meet you.",
          },
          {
            id: "ko-v-2",
            word: "좋은 아침",
            translation: "Good morning",
            pronunciation: "jo-eun a-chim",
            exampleSentence: "좋은 아침이에요.",
            exampleTranslation: "It's a good morning.",
          },
          {
            id: "ko-v-3",
            word: "안녕히 가세요",
            translation: "Goodbye (to someone leaving)",
            pronunciation: "an-nyeong-hi ga-se-yo",
            exampleSentence: "안녕히 가세요, 내일 봐요.",
            exampleTranslation: "Goodbye, see you tomorrow.",
          },
          {
            id: "ko-v-4",
            word: "감사합니다",
            translation: "Thank you (formal)",
            pronunciation: "gam-sa-ham-ni-da",
            exampleSentence: "도와주셔서 감사합니다.",
            exampleTranslation: "Thank you for helping me.",
          },
        ],
      },
      {
        id: "ko-act-2",
        type: "matching",
        instruction: "Match the greetings",
        matchingPairs: [
          { id: "ko-m-1", source: "안녕하세요", target: "Hello" },
          { id: "ko-m-2", source: "좋은 아침", target: "Good morning" },
          { id: "ko-m-3", source: "감사합니다", target: "Thank you" },
          { id: "ko-m-4", source: "안녕히 가세요", target: "Goodbye" },
        ],
      },
      {
        id: "ko-act-3",
        type: "quiz",
        instruction: "Test your Korean greetings",
        quiz: {
          question: 'What does "감사합니다" mean?',
          options: ["Hello", "Goodbye", "Thank you", "Sorry"],
          correctIndex: 2,
          explanation: "감사합니다 (gam-sa-ham-ni-da) means Thank you in formal Korean.",
        },
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are a friendly Korean teacher. Greet the student in Korean, introduce yourself, and help them practice common greetings. Mix Korean and English. Be encouraging and playful. Use simple sentence patterns.",
      topics: ["greetings", "polite expressions", "farewells"],
      targetDuration: 120,
      style: "playful",
    },
  },

  // ─── Korean: Numbers ───────────────────────────────────────
  {
    id: "ko-lesson-2",
    unitId: "ko-unit-2",
    languageCode: "ko",
    order: 1,
    title: "Numbers 1-5",
    xpReward: 15,
    estimatedDuration: 240,
    goals: [
      { description: "Learn native Korean numbers", target: 5, unit: "numbers" },
      { description: "Match numbers to words", target: 5, unit: "exercises" },
    ],
    activities: [
      {
        id: "ko-act-4",
        type: "vocabulary",
        instruction: "Learn the native Korean numbers",
        vocabulary: [
          {
            id: "ko-v-5",
            word: "하나",
            translation: "One (1)",
            pronunciation: "ha-na",
            exampleSentence: "사과 하나 주세요.",
            exampleTranslation: "One apple, please.",
          },
          {
            id: "ko-v-6",
            word: "둘",
            translation: "Two (2)",
            pronunciation: "dul",
            exampleSentence: "둘 다 좋아요.",
            exampleTranslation: "Both are good.",
          },
          {
            id: "ko-v-7",
            word: "셋",
            translation: "Three (3)",
            pronunciation: "set",
            exampleSentence: "셋까지 세세요.",
            exampleTranslation: "Count to three.",
          },
          {
            id: "ko-v-8",
            word: "넷",
            translation: "Four (4)",
            pronunciation: "net",
            exampleSentence: "바퀴가 넷 있어요.",
            exampleTranslation: "There are four wheels.",
          },
          {
            id: "ko-v-9",
            word: "다섯",
            translation: "Five (5)",
            pronunciation: "da-seot",
            exampleSentence: "다섯 시에 만나요.",
            exampleTranslation: "Let's meet at five o'clock.",
          },
        ],
      },
      {
        id: "ko-act-5",
        type: "matching",
        instruction: "Match the Korean numbers",
        matchingPairs: [
          { id: "ko-m-5", source: "하나", target: "1" },
          { id: "ko-m-6", source: "둘", target: "2" },
          { id: "ko-m-7", source: "셋", target: "3" },
          { id: "ko-m-8", source: "넷", target: "4" },
          { id: "ko-m-9", source: "다섯", target: "5" },
        ],
      },
    ],
  },

  // ─── Spanish: Greetings ────────────────────────────────────
  {
    id: "es-lesson-1",
    unitId: "es-unit-1",
    languageCode: "es",
    order: 1,
    title: "Hello in Spanish",
    xpReward: 10,
    estimatedDuration: 180,
    goals: [
      { description: "Learn basic Spanish greetings", target: 4, unit: "words" },
      { description: "Practice introductions", target: 2, unit: "phrases" },
    ],
    activities: [
      {
        id: "es-act-1",
        type: "vocabulary",
        instruction: "Learn common Spanish greetings",
        vocabulary: [
          {
            id: "es-v-1",
            word: "Hola",
            translation: "Hello",
            pronunciation: "oh-la",
            exampleSentence: "¡Hola! ¿Cómo estás?",
            exampleTranslation: "Hello! How are you?",
          },
          {
            id: "es-v-2",
            word: "Buenos días",
            translation: "Good morning",
            pronunciation: "bwe-nos dee-as",
            exampleSentence: "Buenos días, señor.",
            exampleTranslation: "Good morning, sir.",
          },
          {
            id: "es-v-3",
            word: "Buenas noches",
            translation: "Good evening",
            pronunciation: "bwe-nas no-ches",
            exampleSentence: "Buenas noches, hasta mañana.",
            exampleTranslation: "Good evening, see you tomorrow.",
          },
          {
            id: "es-v-4",
            word: "Adiós",
            translation: "Goodbye",
            pronunciation: "a-dee-os",
            exampleSentence: "¡Adiós, amigo!",
            exampleTranslation: "Goodbye, friend!",
          },
        ],
      },
      {
        id: "es-act-2",
        type: "phrase",
        instruction: "Learn introduction phrases",
        phrases: [
          {
            id: "es-p-1",
            phrase: "Me llamo...",
            translation: "My name is...",
            pronunciation: "me ya-mo",
            context: "Used to introduce yourself",
          },
          {
            id: "es-p-2",
            phrase: "¿Cómo te llamas?",
            translation: "What is your name?",
            pronunciation: "ko-mo te ya-mas",
            context: "Used to ask someone their name",
          },
        ],
      },
      {
        id: "es-act-3",
        type: "quiz",
        instruction: "Test your Spanish",
        quiz: {
          question: 'How do you say "Good morning" in Spanish?',
          options: ["Hola", "Buenos días", "Buenas noches", "Adiós"],
          correctIndex: 1,
          explanation: "Buenos días means Good morning in Spanish.",
        },
      },
    ],
    aiTeacherPrompt: {
      systemPrompt:
        "You are an energetic Spanish teacher. Greet the student with enthusiasm, introduce yourself in Spanish, and help them practice greetings. Mix Spanish and English. Be warm and encouraging.",
      topics: ["greetings", "introductions", "farewells"],
      targetDuration: 120,
      style: "playful",
    },
  },

  // ─── Spanish: Colors ───────────────────────────────────────
  {
    id: "es-lesson-2",
    unitId: "es-unit-2",
    languageCode: "es",
    order: 1,
    title: "Colors in Spanish",
    xpReward: 15,
    estimatedDuration: 240,
    goals: [
      { description: "Learn 5 colors", target: 5, unit: "words" },
      { description: "Match colors to Spanish words", target: 5, unit: "exercises" },
    ],
    activities: [
      {
        id: "es-act-4",
        type: "vocabulary",
        instruction: "Learn the colors in Spanish",
        vocabulary: [
          {
            id: "es-v-5",
            word: "rojo",
            translation: "Red",
            pronunciation: "ro-ho",
            exampleSentence: "La manzana es roja.",
            exampleTranslation: "The apple is red.",
          },
          {
            id: "es-v-6",
            word: "azul",
            translation: "Blue",
            pronunciation: "a-zool",
            exampleSentence: "El cielo es azul.",
            exampleTranslation: "The sky is blue.",
          },
          {
            id: "es-v-7",
            word: "verde",
            translation: "Green",
            pronunciation: "ber-de",
            exampleSentence: "La hierba es verde.",
            exampleTranslation: "The grass is green.",
          },
          {
            id: "es-v-8",
            word: "amarillo",
            translation: "Yellow",
            pronunciation: "a-ma-ri-yo",
            exampleSentence: "El sol es amarillo.",
            exampleTranslation: "The sun is yellow.",
          },
          {
            id: "es-v-9",
            word: "negro",
            translation: "Black",
            pronunciation: "ne-gro",
            exampleSentence: "El gato es negro.",
            exampleTranslation: "The cat is black.",
          },
        ],
      },
      {
        id: "es-act-5",
        type: "matching",
        instruction: "Match the colors",
        matchingPairs: [
          { id: "es-m-1", source: "rojo", target: "Red" },
          { id: "es-m-2", source: "azul", target: "Blue" },
          { id: "es-m-3", source: "verde", target: "Green" },
          { id: "es-m-4", source: "amarillo", target: "Yellow" },
          { id: "es-m-5", source: "negro", target: "Black" },
        ],
      },
      {
        id: "es-act-6",
        type: "quiz",
        instruction: "What color is the sky?",
        quiz: {
          question: 'What is "blue" in Spanish?',
          options: ["rojo", "azul", "verde", "amarillo"],
          correctIndex: 1,
          explanation: "azul means blue in Spanish.",
        },
      },
    ],
  },

  // ─── French: Greetings ─────────────────────────────────────
  {
    id: "fr-lesson-1",
    unitId: "fr-unit-1",
    languageCode: "fr",
    order: 1,
    title: "Hello in French",
    xpReward: 10,
    estimatedDuration: 180,
    goals: [
      { description: "Learn basic French greetings", target: 4, unit: "words" },
      { description: "Practice polite phrases", target: 2, unit: "phrases" },
    ],
    activities: [
      {
        id: "fr-act-1",
        type: "vocabulary",
        instruction: "Learn common French greetings",
        vocabulary: [
          {
            id: "fr-v-1",
            word: "Bonjour",
            translation: "Hello / Good morning",
            pronunciation: "bon-zhoor",
            exampleSentence: "Bonjour, comment allez-vous?",
            exampleTranslation: "Hello, how are you?",
          },
          {
            id: "fr-v-2",
            word: "Bonsoir",
            translation: "Good evening",
            pronunciation: "bon-swahr",
            exampleSentence: "Bonsoir, madame.",
            exampleTranslation: "Good evening, madam.",
          },
          {
            id: "fr-v-3",
            word: "Au revoir",
            translation: "Goodbye",
            pronunciation: "oh ruh-vwahr",
            exampleSentence: "Au revoir, à bientôt!",
            exampleTranslation: "Goodbye, see you soon!",
          },
          {
            id: "fr-v-4",
            word: "Merci",
            translation: "Thank you",
            pronunciation: "mehr-see",
            exampleSentence: "Merci beaucoup!",
            exampleTranslation: "Thank you very much!",
          },
        ],
      },
      {
        id: "fr-act-2",
        type: "matching",
        instruction: "Match the French greetings",
        matchingPairs: [
          { id: "fr-m-1", source: "Bonjour", target: "Hello" },
          { id: "fr-m-2", source: "Bonsoir", target: "Good evening" },
          { id: "fr-m-3", source: "Au revoir", target: "Goodbye" },
          { id: "fr-m-4", source: "Merci", target: "Thank you" },
        ],
      },
      {
        id: "fr-act-3",
        type: "quiz",
        instruction: "Test your French",
        quiz: {
          question: 'What does "Merci" mean?',
          options: ["Hello", "Goodbye", "Thank you", "Please"],
          correctIndex: 2,
          explanation: "Merci means Thank you in French.",
        },
      },
    ],
  },

  // ─── French: Numbers ───────────────────────────────────────
  {
    id: "fr-lesson-2",
    unitId: "fr-unit-2",
    languageCode: "fr",
    order: 1,
    title: "Numbers 1-5",
    xpReward: 15,
    estimatedDuration: 240,
    goals: [
      { description: "Learn numbers 1-5 in French", target: 5, unit: "numbers" },
      { description: "Match numbers to words", target: 5, unit: "exercises" },
    ],
    activities: [
      {
        id: "fr-act-4",
        type: "vocabulary",
        instruction: "Learn to count in French",
        vocabulary: [
          {
            id: "fr-v-5",
            word: "un",
            translation: "One (1)",
            pronunciation: "uhn",
            exampleSentence: "J'ai un chat.",
            exampleTranslation: "I have one cat.",
          },
          {
            id: "fr-v-6",
            word: "deux",
            translation: "Two (2)",
            pronunciation: "duh",
            exampleSentence: "Il y a deux pommes.",
            exampleTranslation: "There are two apples.",
          },
          {
            id: "fr-v-7",
            word: "trois",
            translation: "Three (3)",
            pronunciation: "twah",
            exampleSentence: "Trois amis viennent.",
            exampleTranslation: "Three friends are coming.",
          },
          {
            id: "fr-v-8",
            word: "quatre",
            translation: "Four (4)",
            pronunciation: "katr",
            exampleSentence: "Quatre saisons dans l'année.",
            exampleTranslation: "Four seasons in a year.",
          },
          {
            id: "fr-v-9",
            word: "cinq",
            translation: "Five (5)",
            pronunciation: "sank",
            exampleSentence: "Cinq minutes, s'il vous plaît.",
            exampleTranslation: "Five minutes, please.",
          },
        ],
      },
      {
        id: "fr-act-5",
        type: "matching",
        instruction: "Match the numbers",
        matchingPairs: [
          { id: "fr-m-5", source: "un", target: "1" },
          { id: "fr-m-6", source: "deux", target: "2" },
          { id: "fr-m-7", source: "trois", target: "3" },
          { id: "fr-m-8", source: "quatre", target: "4" },
          { id: "fr-m-9", source: "cinq", target: "5" },
        ],
      },
    ],
  },

  // ─── Chinese: Greetings ────────────────────────────────────
  {
    id: "zh-lesson-1",
    unitId: "zh-unit-1",
    languageCode: "zh",
    order: 1,
    title: "Hello in Mandarin",
    xpReward: 10,
    estimatedDuration: 180,
    goals: [
      { description: "Learn basic Mandarin greetings", target: 4, unit: "words" },
      { description: "Practice polite expressions", target: 2, unit: "phrases" },
    ],
    activities: [
      {
        id: "zh-act-1",
        type: "vocabulary",
        instruction: "Learn common Mandarin greetings",
        vocabulary: [
          {
            id: "zh-v-1",
            word: "你好",
            translation: "Hello",
            pronunciation: "nǐ hǎo",
            exampleSentence: "你好，你好吗？",
            exampleTranslation: "Hello, how are you?",
          },
          {
            id: "zh-v-2",
            word: "早上好",
            translation: "Good morning",
            pronunciation: "zǎo shàng hǎo",
            exampleSentence: "早上好，老师。",
            exampleTranslation: "Good morning, teacher.",
          },
          {
            id: "zh-v-3",
            word: "谢谢",
            translation: "Thank you",
            pronunciation: "xiè xie",
            exampleSentence: "谢谢你！",
            exampleTranslation: "Thank you!",
          },
          {
            id: "zh-v-4",
            word: "再见",
            translation: "Goodbye",
            pronunciation: "zài jiàn",
            exampleSentence: "再见，明天见。",
            exampleTranslation: "Goodbye, see you tomorrow.",
          },
        ],
      },
      {
        id: "zh-act-2",
        type: "matching",
        instruction: "Match the greetings",
        matchingPairs: [
          { id: "zh-m-1", source: "你好", target: "Hello" },
          { id: "zh-m-2", source: "早上好", target: "Good morning" },
          { id: "zh-m-3", source: "谢谢", target: "Thank you" },
          { id: "zh-m-4", source: "再见", target: "Goodbye" },
        ],
      },
      {
        id: "zh-act-3",
        type: "quiz",
        instruction: "Test your Mandarin",
        quiz: {
          question: 'How do you say "Thank you" in Mandarin?',
          options: ["你好", "早上好", "谢谢", "再见"],
          correctIndex: 2,
          explanation: "谢谢 (xiè xie) means Thank you in Mandarin.",
        },
      },
    ],
  },

  // ─── Chinese: Numbers ──────────────────────────────────────
  {
    id: "zh-lesson-2",
    unitId: "zh-unit-2",
    languageCode: "zh",
    order: 1,
    title: "Numbers 1-5",
    xpReward: 15,
    estimatedDuration: 240,
    goals: [
      { description: "Learn numbers 1-5 in Mandarin", target: 5, unit: "numbers" },
      { description: "Match numbers to words", target: 5, unit: "exercises" },
    ],
    activities: [
      {
        id: "zh-act-4",
        type: "vocabulary",
        instruction: "Learn to count in Mandarin",
        vocabulary: [
          {
            id: "zh-v-5",
            word: "一",
            translation: "One (1)",
            pronunciation: "yī",
            exampleSentence: "我有一个苹果。",
            exampleTranslation: "I have one apple.",
          },
          {
            id: "zh-v-6",
            word: "二",
            translation: "Two (2)",
            pronunciation: "èr",
            exampleSentence: "有两只猫。",
            exampleTranslation: "There are two cats.",
          },
          {
            id: "zh-v-7",
            word: "三",
            translation: "Three (3)",
            pronunciation: "sān",
            exampleSentence: "三个人来了。",
            exampleTranslation: "Three people came.",
          },
          {
            id: "zh-v-8",
            word: "四",
            translation: "Four (4)",
            pronunciation: "sì",
            exampleSentence: "四个季节。",
            exampleTranslation: "Four seasons.",
          },
          {
            id: "zh-v-9",
            word: "五",
            translation: "Five (5)",
            pronunciation: "wǔ",
            exampleSentence: "五点见。",
            exampleTranslation: "See you at five.",
          },
        ],
      },
      {
        id: "zh-act-5",
        type: "matching",
        instruction: "Match the numbers",
        matchingPairs: [
          { id: "zh-m-5", source: "一", target: "1" },
          { id: "zh-m-6", source: "二", target: "2" },
          { id: "zh-m-7", source: "三", target: "3" },
          { id: "zh-m-8", source: "四", target: "4" },
          { id: "zh-m-9", source: "五", target: "5" },
        ],
      },
    ],
  },

  // ─── German: Greetings ─────────────────────────────────────
  {
    id: "de-lesson-1",
    unitId: "de-unit-1",
    languageCode: "de",
    order: 1,
    title: "Hello in German",
    xpReward: 10,
    estimatedDuration: 180,
    goals: [
      { description: "Learn basic German greetings", target: 4, unit: "words" },
      { description: "Practice introductions", target: 2, unit: "phrases" },
    ],
    activities: [
      {
        id: "de-act-1",
        type: "vocabulary",
        instruction: "Learn common German greetings",
        vocabulary: [
          {
            id: "de-v-1",
            word: "Hallo",
            translation: "Hello",
            pronunciation: "ha-lo",
            exampleSentence: "Hallo, wie geht es dir?",
            exampleTranslation: "Hello, how are you?",
          },
          {
            id: "de-v-2",
            word: "Guten Morgen",
            translation: "Good morning",
            pronunciation: "goo-ten mor-gen",
            exampleSentence: "Guten Morgen, Herr Müller.",
            exampleTranslation: "Good morning, Mr. Müller.",
          },
          {
            id: "de-v-3",
            word: "Tschüss",
            translation: "Goodbye",
            pronunciation: "chuess",
            exampleSentence: "Tschüss, bis morgen!",
            exampleTranslation: "Goodbye, see you tomorrow!",
          },
          {
            id: "de-v-4",
            word: "Danke",
            translation: "Thank you",
            pronunciation: "dan-keh",
            exampleSentence: "Danke schön!",
            exampleTranslation: "Thank you very much!",
          },
        ],
      },
      {
        id: "de-act-2",
        type: "matching",
        instruction: "Match the German greetings",
        matchingPairs: [
          { id: "de-m-1", source: "Hallo", target: "Hello" },
          { id: "de-m-2", source: "Guten Morgen", target: "Good morning" },
          { id: "de-m-3", source: "Tschüss", target: "Goodbye" },
          { id: "de-m-4", source: "Danke", target: "Thank you" },
        ],
      },
      {
        id: "de-act-3",
        type: "quiz",
        instruction: "Test your German",
        quiz: {
          question: 'What does "Danke" mean?',
          options: ["Hello", "Goodbye", "Thank you", "Please"],
          correctIndex: 2,
          explanation: "Danke means Thank you in German.",
        },
      },
    ],
  },

  // ─── German: Numbers ───────────────────────────────────────
  {
    id: "de-lesson-2",
    unitId: "de-unit-2",
    languageCode: "de",
    order: 1,
    title: "Numbers 1-5",
    xpReward: 15,
    estimatedDuration: 240,
    goals: [
      { description: "Learn numbers 1-5 in German", target: 5, unit: "numbers" },
      { description: "Match numbers to words", target: 5, unit: "exercises" },
    ],
    activities: [
      {
        id: "de-act-4",
        type: "vocabulary",
        instruction: "Learn to count in German",
        vocabulary: [
          {
            id: "de-v-5",
            word: "eins",
            translation: "One (1)",
            pronunciation: "ayns",
            exampleSentence: "Ich habe einen Hund.",
            exampleTranslation: "I have one dog.",
          },
          {
            id: "de-v-6",
            word: "zwei",
            translation: "Two (2)",
            pronunciation: "tsvai",
            exampleSentence: "Es gibt zwei Katzen.",
            exampleTranslation: "There are two cats.",
          },
          {
            id: "de-v-7",
            word: "drei",
            translation: "Three (3)",
            pronunciation: "drai",
            exampleSentence: "Drei Freunde kommen.",
            exampleTranslation: "Three friends are coming.",
          },
          {
            id: "de-v-8",
            word: "vier",
            translation: "Four (4)",
            pronunciation: "feer",
            exampleSentence: "Vier Jahreszeiten.",
            exampleTranslation: "Four seasons.",
          },
          {
            id: "de-v-9",
            word: "fünf",
            translation: "Five (5)",
            pronunciation: "fuenf",
            exampleSentence: "Fünf Minuten bitte.",
            exampleTranslation: "Five minutes please.",
          },
        ],
      },
      {
        id: "de-act-5",
        type: "matching",
        instruction: "Match the numbers",
        matchingPairs: [
          { id: "de-m-5", source: "eins", target: "1" },
          { id: "de-m-6", source: "zwei", target: "2" },
          { id: "de-m-7", source: "drei", target: "3" },
          { id: "de-m-8", source: "vier", target: "4" },
          { id: "de-m-9", source: "fünf", target: "5" },
        ],
      },
    ],
  },
];

export const getLessonsByUnit = (unitId: string): Lesson[] =>
  lessons
    .filter((lesson) => lesson.unitId === unitId)
    .sort((a, b) => a.order - b.order);

export const getLessonsByLanguage = (languageCode: string): Lesson[] =>
  lessons
    .filter((lesson) => lesson.languageCode === languageCode)
    .sort((a, b) => a.order - b.order);

export const getLessonById = (id: string): Lesson | undefined =>
  lessons.find((lesson) => lesson.id === id);
