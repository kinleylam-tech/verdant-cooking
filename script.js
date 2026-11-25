const recipes = [
  {
    meal: "breakfast",
    cuisine: "American",
    name: "Tomato and Spinach Eggs",
    description: "Soft eggs with warm tomatoes and spinach, served with toast.",
    whyItWorks: "Eggs cook quickly, and tomato and spinach add fresh flavor to toast.",
    lighterSwap: "Use a little less oil in the pan and add extra spinach.",
    time: "15 min",
    servings: 1,
    calories: 310,
    protein: 19,
    carbs: 29,
    fat: 13,
    tags: ["Easy", "Vegetarian"],
    ingredients: ["2 eggs", "1 small tomato", "1 handful spinach", "1 slice whole-grain toast"],
    substitutions: [["eggs", "firm tofu scramble"], ["spinach", "chopped kale"]],
    light: true,
    steps: [
      "Wash your hands. Rinse the tomato and spinach. Ask an adult to help with chopping and the stove.",
      "Toast the bread and set it on a plate.",
      "Warm the chopped tomato in a pan, then add the spinach until it wilts.",
      "Add the eggs and stir until they are fully cooked with no runny parts.",
      "Spoon the eggs and vegetables onto the toast and serve warm."
    ]
  },
  {
    meal: "breakfast",
    cuisine: "American",
    name: "Banana Peanut Butter Oats",
    description: "A cozy bowl of oats topped with banana and peanut butter.",
    whyItWorks: "Oats soften into a warm base, while banana brings natural sweetness.",
    lighterSwap: "Try a little less peanut butter or use unsweetened milk.",
    time: "10 min",
    servings: 1,
    calories: 350,
    protein: 12,
    carbs: 55,
    fat: 11,
    tags: ["Easy", "Vegetarian"],
    ingredients: ["½ cup rolled oats", "1 cup milk", "½ banana", "1 tbsp peanut butter"],
    substitutions: [["milk", "unsweetened oat milk"], ["peanut butter", "sunflower seed butter"]],
    light: false,
    steps: [
      "Wash your hands and gather the ingredients.",
      "Add the oats and milk to a microwave-safe bowl. Leave plenty of room so it cannot bubble over.",
      "Microwave on high for 1 minute, then stir. Continue in 30-second bursts until thick and soft, usually 1–2 more minutes. Ask an adult for help with the hot bowl.",
      "Slice the banana and add it on top with the peanut butter.",
      "Let the oats stand for 2 minutes before eating."
    ]
  },
  {
    meal: "breakfast",
    cuisine: "American",
    name: "Berry Yogurt Bowl",
    description: "Creamy yogurt with berries, crunchy oats, and a little honey.",
    whyItWorks: "Yogurt, berries, and oats combine creamy, fruity, and crunchy textures.",
    lighterSwap: "Use plain yogurt and skip the honey for a less-sweet bowl.",
    time: "5 min",
    servings: 1,
    calories: 280,
    protein: 16,
    carbs: 42,
    fat: 6,
    tags: ["No cooking", "Vegetarian"],
    ingredients: ["¾ cup plain yogurt", "½ cup berries", "¼ cup rolled oats", "1 tsp honey"],
    substitutions: [["plain yogurt", "unsweetened soy yogurt"], ["honey", "maple syrup"]],
    light: true,
    steps: [
      "Wash your hands and rinse the berries.",
      "Spoon the yogurt into a bowl.",
      "Add the berries and rolled oats.",
      "Drizzle with honey and enjoy."
    ]
  },
  {
    meal: "lunch",
    cuisine: "Italian",
    name: "Lentil and Roasted Tomato Soup",
    description: "Roasting the tomatoes first gives this thick, hearty soup a rich flavor.",
    whyItWorks: "Roasting deepens tomato flavor, and lentils make the soup hearty.",
    lighterSwap: "Use a little less olive oil or choose low-sodium broth.",
    time: "40 min",
    servings: 4,
    calories: 260,
    protein: 15,
    carbs: 42,
    fat: 5,
    tags: ["Vegan", "High fibre"],
    ingredients: ["800 g ripe tomatoes", "1 onion", "2 garlic cloves", "150 g red lentils", "750 ml vegetable broth", "1 tbsp olive oil"],
    substitutions: [["red lentils", "canned white beans"], ["vegetable broth", "water with a little extra seasoning"]],
    light: true,
    steps: [
      "Wash your hands and rinse the tomatoes. Ask an adult to help with the oven, knife, and hot pan.",
      "Heat the oven to 220°C (425°F). Cut the tomatoes in half, place them on a tray, and roast for about 20 minutes.",
      "Chop the onion and garlic with adult help. Warm the olive oil in a pot over medium heat and cook for 4–5 minutes, until the onion is translucent.",
      "Add the lentils, roasted tomatoes, and broth. Bring to a gentle boil, then simmer until the lentils are soft, about 15 minutes.",
      "Take the pot off the heat and let it stand for 5 minutes. With an adult, blend carefully, or leave it chunky, then serve."
    ]
  },
  {
    meal: "lunch",
    cuisine: "Mexican",
    name: "Chicken and Avocado Wrap",
    description: "A fresh wrap with chicken, avocado, lettuce, and a squeeze of lime.",
    whyItWorks: "Cooked chicken, creamy avocado, and crisp lettuce make a fresh wrap.",
    lighterSwap: "Add extra lettuce and choose a whole-grain tortilla.",
    time: "20 min",
    servings: 2,
    calories: 390,
    protein: 29,
    carbs: 39,
    fat: 13,
    tags: ["Easy"],
    ingredients: ["2 small tortillas", "150 g cooked chicken breast", "½ avocado", "1 cup lettuce", "½ lime"],
    substitutions: [["chicken", "cooked black beans"], ["lettuce", "baby spinach"]],
    light: true,
    steps: [
      "Wash your hands and rinse the lettuce. Use fully cooked chicken. If starting with raw chicken, ask an adult to cook it to 74°C (165°F) and use a separate board.",
      "Slice the chicken and avocado. Ask an adult to help with the knife.",
      "Lay the tortillas flat and add lettuce, chicken, and avocado.",
      "Squeeze lime over the filling, fold the sides in, and roll each wrap.",
      "Cut in half and serve."
    ]
  },
  {
    meal: "lunch",
    cuisine: "Mexican",
    name: "Chickpea and Cucumber Salad",
    description: "A crunchy, lemony salad that is quick to mix together.",
    whyItWorks: "Chickpeas and crunchy vegetables make a quick, no-cook meal.",
    lighterSwap: "Use a little less olive oil and add more cucumber.",
    time: "10 min",
    servings: 2,
    calories: 320,
    protein: 13,
    carbs: 48,
    fat: 9,
    tags: ["Vegan", "No cooking"],
    ingredients: ["1 can chickpeas", "½ cucumber", "1 cup cherry tomatoes", "1 tbsp olive oil", "½ lemon"],
    substitutions: [["chickpeas", "canned white beans"], ["lemon", "lime"]],
    light: true,
    steps: [
      "Wash your hands and rinse the vegetables.",
      "Drain and rinse the chickpeas in a colander.",
      "Chop the cucumber and tomatoes. Ask an adult to help with the knife.",
      "Mix the chickpeas and vegetables in a bowl.",
      "Add olive oil and lemon juice, stir, and serve."
    ]
  },
  {
    meal: "dinner",
    cuisine: "Italian",
    name: "Tomato Basil Pasta",
    description: "A simple pasta dinner with juicy tomatoes and fresh basil.",
    whyItWorks: "Tomatoes and basil make a simple sauce that coats the pasta.",
    lighterSwap: "Add extra tomatoes and use a smaller sprinkle of cheese.",
    time: "25 min",
    servings: 2,
    calories: 430,
    protein: 15,
    carbs: 70,
    fat: 9,
    tags: ["Easy", "Vegetarian"],
    ingredients: ["180 g pasta", "2 tomatoes", "1 cup loosely packed fresh basil", "1 tsp olive oil", "2 tbsp grated cheese"],
    substitutions: [["pasta", "whole-wheat pasta"], ["fresh basil", "fresh parsley"]],
    light: false,
    steps: [
      "Wash your hands and rinse the tomatoes and basil. Ask an adult to help with the stove and chopping.",
      "Cook the pasta in a pot of boiling water, following the packet directions. Drain it with adult help.",
      "Chop the tomatoes and cook them in a pan with the olive oil over medium heat for 6–8 minutes, stirring until they collapse into a chunky sauce.",
      "Tear in the basil, then stir the tomato mixture through the pasta.",
      "Top with grated cheese and serve warm."
    ]
  },
  {
    meal: "dinner",
    cuisine: "Japanese",
    name: "Chicken Teriyaki Rice Bowl",
    description: "Chicken, broccoli, and rice with a quick soy and honey sauce.",
    whyItWorks: "Rice and broccoli pair with chicken in a quick, savory sauce.",
    lighterSwap: "Use reduced-sodium soy sauce and add more broccoli.",
    time: "30 min",
    servings: 2,
    calories: 490,
    protein: 36,
    carbs: 57,
    fat: 12,
    tags: ["Easy"],
    ingredients: ["150 g uncooked rice", "300 g chicken breast", "1 cup broccoli", "2 tbsp soy sauce", "1 tbsp honey"],
    substitutions: [["chicken", "firm tofu"], ["soy sauce", "low-sodium tamari"]],
    light: false,
    steps: [
      "Wash your hands. Ask an adult to help prepare raw chicken and use the stove.",
      "Cook the rice following the packet directions.",
      "Cut the chicken into 2 cm pieces on a separate board. With adult help, cook in a pan for 6–8 minutes, stirring, until the thickest piece reaches 74°C (165°F).",
      "Steam or boil the broccoli for 4–5 minutes, until a fork goes through the stems easily.",
      "Mix the soy sauce and honey, pour over the cooked chicken, and serve with rice and broccoli."
    ]
  },
  {
    meal: "dinner",
    cuisine: "Chinese",
    name: "Tofu and Vegetable Stir-Fry",
    description: "Golden tofu and colorful vegetables served over warm rice.",
    whyItWorks: "Tofu browns in the pan while the vegetables cook alongside it.",
    lighterSwap: "Use reduced-sodium soy sauce and add extra vegetables.",
    time: "25 min",
    servings: 2,
    calories: 420,
    protein: 22,
    carbs: 54,
    fat: 13,
    tags: ["Vegan", "Vegetarian"],
    ingredients: ["200 g firm tofu", "1 cup broccoli", "1 carrot", "150 g rice", "1 tbsp soy sauce", "1 tsp neutral oil", "1 tbsp water"],
    substitutions: [["tofu", "cooked edamame"], ["broccoli", "bok choy"]],
    light: true,
    steps: [
      "Wash your hands and rinse the vegetables. Ask an adult to help with chopping and the stove.",
      "Cook the rice following the packet directions.",
      "Cut the tofu into cubes and pat it dry with a clean towel.",
      "Warm the measured teaspoon of oil in a pan over medium heat. Add tofu and cook for 6–8 minutes, turning the cubes until golden on several sides.",
      "Add sliced carrot and broccoli with 1 tablespoon of water. Stir-fry for 4–5 minutes, until the broccoli is bright green and fork-tender. Add soy sauce and serve over rice."
    ]
  }
];

function makeRecipe(cuisine, meal, name, description, time, nutrition, light, ingredients, substitutions, steps) {
  return {
    cuisine,
    meal,
    name,
    description,
    time,
    servings: 2,
    calories: nutrition[0],
    protein: nutrition[1],
    carbs: nutrition[2],
    fat: nutrition[3],
    tags: [light ? "Lighter choice" : "Everyday meal"],
    ingredients,
    substitutions,
    steps,
    light,
    whyItWorks: description
  };
}

const uniqueRecipes = [
  makeRecipe("Chinese", "dinner", "Egg Fried Rice", "A quick pan of rice with egg, peas, carrots, and gentle ginger flavor.", "20 min", [390, 16, 58, 10], false,
    ["2 cups cooked rice", "2 eggs", "½ cup peas", "1 carrot, diced", "1 tbsp low-sodium soy sauce", "1 tsp grated ginger"],
    [["eggs", "200 g firm tofu"], ["peas", "finely chopped green beans"]],
    ["Wash your hands and prepare the vegetables with an adult's help.", "Scramble the eggs in a warm pan over medium heat until fully set, then move them to a plate.", "Cook the carrot and peas in a pan over medium heat for 4–5 minutes, stirring, until the carrot is fork-tender; stir in the ginger for 30 seconds.", "Add the cooked rice and egg; stir-fry for 3–4 minutes until steaming hot throughout.", "Serve warm. Use leftover rice that was cooled and refrigerated within 2 hours."]),
  makeRecipe("Chinese", "lunch", "Chicken Chow Mein", "Soft noodles tossed with chicken, cabbage, and a mild soy-ginger sauce.", "25 min", [460, 28, 57, 12], false,
    ["180 g chow mein noodles", "200 g chicken breast, sliced", "1 cup shredded cabbage", "1 carrot, sliced", "2 tbsp low-sodium soy sauce", "1 tsp grated ginger"],
    [["chicken", "200 g firm tofu"], ["cabbage", "thinly sliced bok choy"]],
    ["Wash your hands and ask an adult to help slice the chicken and use the stove.", "Cook the noodles following the package directions, then drain them with adult help.", "Cook the chicken in a pan, stirring, until the thickest piece reaches 74°C (165°F).", "Add cabbage, carrot, ginger, and soy sauce; stir-fry for 4–5 minutes until the vegetables soften.", "Toss in the noodles for 1–2 minutes until hot, then serve."]),
  makeRecipe("Chinese", "dinner", "Mild Mapo Tofu Rice Bowl", "Soft tofu and mushrooms simmered in a mild savory sauce over rice.", "30 min", [420, 22, 54, 13], true,
    ["200 g firm tofu, cubed", "1 cup sliced mushrooms", "1 cup cooked rice", "½ cup low-sodium vegetable broth", "1 tbsp mild bean sauce", "1 tsp cornstarch mixed with water"],
    [["mild bean sauce", "low-sodium soy sauce"], ["mushrooms", "finely chopped eggplant"]],
    ["Wash your hands and rinse the mushrooms.", "Warm the broth and mild bean sauce in a pan with an adult's help.", "Add the tofu and mushrooms, then simmer gently for 5–7 minutes until the mushrooms soften and everything is hot.", "Stir in the cornstarch mixture and cook for 1–2 minutes until the sauce thickens.", "Spoon over warm rice and serve."]),
  makeRecipe("Chinese", "dinner", "Shrimp and Broccoli Stir-Fry", "Shrimp and broccoli cooked quickly with garlic and served with rice.", "25 min", [430, 29, 48, 12], true,
    ["200 g peeled shrimp", "1½ cups broccoli florets", "1 cup cooked rice", "1 garlic clove, minced", "1 tbsp low-sodium soy sauce", "1 tsp oil"],
    [["shrimp", "200 g chicken pieces"], ["broccoli", "snap peas"]],
    ["Wash your hands and ask an adult to prepare the shrimp and use the hot pan.", "Steam the broccoli for 4–5 minutes until bright green and just tender.", "Cook the shrimp with garlic, turning once, until opaque and firm throughout.", "Add soy sauce and broccoli; stir for 1 minute until hot.", "Serve over cooked rice."]),
  makeRecipe("Chinese", "breakfast", "Ginger Congee with Egg", "A soft rice porridge topped with a fully cooked egg and fresh ginger.", "35 min", [330, 14, 48, 8], true,
    ["½ cup rice", "3 cups water or low-sodium broth", "2 eggs", "1 tsp grated ginger", "1 spring onion, sliced"],
    [["eggs", "sliced cooked tofu"], ["spring onion", "chives"]],
    ["Wash your hands and rinse the rice.", "With an adult, bring the rice and water to a gentle simmer. Cook uncovered for 25–30 minutes, stirring every few minutes, until the grains break down and the porridge is creamy.", "Cook the eggs in a separate pan until fully set, with no runny parts.", "Spoon the congee into bowls and top with egg, ginger, and spring onion.", "Let it cool for 3–5 minutes before eating."]),
  makeRecipe("Chinese", "lunch", "Beef and Broccoli Noodles", "A noodle bowl with tender beef strips and broccoli in a simple sauce.", "30 min", [480, 29, 58, 14], false,
    ["180 g noodles", "200 g beef strips", "1 cup broccoli florets", "1 tbsp low-sodium soy sauce", "1 tsp cornstarch", "1 tsp oil"],
    [["beef", "200 g firm tofu"], ["noodles", "cooked rice"]],
    ["Wash your hands and ask an adult to prepare the beef and hot pan.", "Cook the noodles following the package directions.", "Cook the beef with adult help until it reaches 63°C (145°F), then let it rest for 3 minutes.", "Steam broccoli, then stir it into the pan with soy sauce and cornstarch mixed with water.", "Toss with noodles and serve hot."]),

  makeRecipe("Mexican", "breakfast", "Huevos Rancheros", "Warm tortillas topped with eggs, beans, and a quick tomato salsa.", "20 min", [390, 19, 44, 14], true,
    ["2 small corn tortillas", "2 eggs", "½ cup black beans", "1 tomato, diced", "2 tbsp mild salsa", "1 tbsp chopped cilantro"],
    [["eggs", "sliced avocado"], ["black beans", "pinto beans"]],
    ["Wash your hands and rinse the tomato and cilantro.", "Warm the beans and salsa in a small pan over medium heat for 3–4 minutes, stirring.", "Ask an adult to cook the eggs until fully set, with no runny parts.", "Warm the tortillas in a dry pan for about 30 seconds per side with adult help.", "Top tortillas with beans, eggs, tomato, and cilantro."]),
  makeRecipe("Mexican", "lunch", "Chicken Fajita Tacos", "Chicken strips with sweet peppers tucked into soft corn tortillas.", "25 min", [440, 31, 47, 13], false,
    ["200 g chicken breast, sliced", "1 bell pepper, sliced", "½ onion, sliced", "4 small corn tortillas", "1 tsp mild fajita seasoning", "½ lime"],
    [["chicken", "cooked pinto beans"], ["bell pepper", "zucchini strips"]],
    ["Wash your hands and ask an adult to help slice raw chicken and use the stove.", "Cook the chicken with fajita seasoning until the thickest pieces reach 74°C (165°F).", "Add the pepper and onion; cook for 4–5 minutes, stirring, until just tender.", "Warm the tortillas and squeeze lime over the filling.", "Fill the tortillas and serve."]),
  makeRecipe("Mexican", "dinner", "Black Bean and Sweet Potato Chili", "A mild, thick chili with black beans, sweet potato, and tomatoes.", "35 min", [360, 16, 63, 6], true,
    ["1 can black beans, rinsed", "1 small sweet potato, diced", "1 cup crushed tomatoes", "½ cup corn", "1 cup low-sodium broth", "½ tsp mild chili powder"],
    [["black beans", "kidney beans"], ["sweet potato", "diced potato"]],
    ["Wash your hands and ask an adult to cut the sweet potato into 1 cm cubes.", "Put the sweet potato, tomatoes, broth, and chili powder in a pot.", "Ask an adult to bring it to a gentle simmer; cover and cook for 12–15 minutes until a fork goes through the potato easily.", "Stir in the beans and corn and simmer for 3–4 minutes until steaming hot.", "Serve warm."]),
  makeRecipe("Mexican", "lunch", "Cheese and Spinach Quesadilla", "A crisp tortilla filled with melted cheese and tender spinach.", "15 min", [370, 18, 38, 17], false,
    ["2 large flour tortillas", "½ cup grated cheese", "1 cup chopped spinach", "¼ cup salsa", "1 tsp oil"],
    [["spinach", "finely chopped zucchini"], ["cheese", "plant-based grated cheese"]],
    ["Wash your hands and rinse the spinach.", "Warm the spinach in a pan over medium heat for 1–2 minutes, until wilted, then set it aside.", "Add cheese and spinach to one tortilla and cover with the second.", "Ask an adult to cook it in a pan lightly greased with the measured teaspoon of oil over medium-low heat for 2–3 minutes per side, until golden and the cheese melts.", "Cut into wedges and serve with salsa."]),
  makeRecipe("Mexican", "dinner", "Chicken Enchilada Rice Bowl", "Rice and chicken served with a mild tomato sauce, corn, and cheese.", "30 min", [470, 32, 58, 12], false,
    ["1 cup cooked rice", "200 g cooked chicken, shredded", "½ cup mild enchilada sauce", "½ cup corn", "¼ cup grated cheese", "½ cup shredded lettuce"],
    [["chicken", "cooked black beans"], ["corn", "diced zucchini"]],
    ["Wash your hands and shred fully cooked chicken with clean utensils.", "Warm the enchilada sauce and corn in a pan.", "Add the chicken and cook until steaming hot.", "Spoon over rice and top with cheese and lettuce.", "Serve warm."]),
  makeRecipe("Mexican", "lunch", "Avocado Corn Tostadas", "Crunchy baked tortillas topped with beans, corn, and avocado.", "20 min", [350, 12, 49, 12], true,
    ["2 corn tortillas", "½ cup black beans", "½ cup corn", "½ avocado, diced", "½ lime", "¼ cup shredded lettuce"],
    [["black beans", "refried pinto beans"], ["avocado", "plain yogurt"]],
    ["Wash your hands and ask an adult to heat the oven to 200°C (400°F).", "Place the tortillas on a tray and bake for 8–10 minutes, turning once with adult help, until crisp.", "Warm the beans and corn in a small pan for 3–4 minutes, stirring until steaming hot.", "Spread beans over the crisp tortillas and add corn, avocado, and lettuce.", "Finish with lime juice and serve."]),

  makeRecipe("Italian", "breakfast", "Spinach and Tomato Frittata", "Eggs baked with spinach and tomatoes for an easy slice-and-share breakfast.", "25 min", [320, 22, 16, 19], true,
    ["4 eggs", "1 cup baby spinach", "1 tomato, diced", "¼ cup grated cheese", "1 tsp olive oil"],
    [["eggs", "¾ cup chickpea flour mixed with water"], ["spinach", "chopped kale"]],
    ["Wash your hands and ask an adult to heat the oven to 190°C (375°F) and help with the knife.", "Warm the spinach and tomato in an oven-safe pan with olive oil for 2–3 minutes, until the spinach wilts.", "Beat the eggs, pour them into the pan, and sprinkle on cheese.", "With adult help, bake for 12–15 minutes until the center is fully set and no liquid egg remains.", "Let it stand for 5 minutes, then slice and serve."]),
  makeRecipe("Italian", "lunch", "Minestrone Vegetable Soup", "A tomato broth with beans, small pasta, and vegetables.", "35 min", [340, 16, 58, 6], true,
    ["½ cup small pasta", "1 can white beans, rinsed", "1 carrot, diced", "1 celery stalk, diced", "1 cup crushed tomatoes", "3 cups low-sodium broth"],
    [["white beans", "chickpeas"], ["small pasta", "small rice-shaped pasta"]],
    ["Wash your hands and ask an adult to help chop the vegetables.", "Bring broth and tomatoes to a gentle simmer in a pot.", "Add carrot and celery and simmer for 5–7 minutes until they begin to soften.", "Stir in pasta and cook following its package directions; add beans for the final 3 minutes.", "Check that everything is steaming hot and serve."]),
  makeRecipe("Italian", "dinner", "Mushroom Risotto", "Creamy rice stirred slowly with mushrooms and a little cheese.", "40 min", [430, 14, 66, 12], false,
    ["¾ cup arborio rice", "1 cup sliced mushrooms", "3 cups warm low-sodium broth", "¼ onion, diced", "2 tbsp grated parmesan", "1 tsp olive oil"],
    [["mushrooms", "diced zucchini"], ["parmesan", "grated hard cheese"]],
    ["Wash your hands and ask an adult to help with the hot stove.", "Cook the onion and mushrooms in olive oil over medium heat for 4–5 minutes, until softened.", "Add the rice and stir for 1 minute to coat the grains.", "Add warm broth ½ cup at a time, stirring often and waiting for each addition to absorb; continue for about 20–25 minutes until the rice is creamy and tender.", "Stir in parmesan and serve hot."]),
  makeRecipe("Italian", "lunch", "Caprese Toast", "Toasted bread layered with tomato, mozzarella, and fresh basil.", "10 min", [330, 16, 38, 13], true,
    ["2 thick slices whole-grain bread", "1 tomato, sliced", "60 g mozzarella", "4 basil leaves", "1 tsp olive oil"],
    [["mozzarella", "fresh ricotta"], ["basil", "fresh oregano"]],
    ["Wash your hands and rinse the tomato and basil.", "Toast the bread for 2–3 minutes, until the edges are crisp.", "Top each slice with tomato and mozzarella.", "Add basil and the measured teaspoon of olive oil.", "Serve right away."]),
  makeRecipe("Italian", "dinner", "Eggplant Parmesan Bake", "Soft eggplant baked with tomato sauce and a golden cheese topping.", "40 min", [420, 20, 44, 19], false,
    ["1 small eggplant, sliced", "1 cup tomato sauce", "½ cup grated mozzarella", "¼ cup breadcrumbs", "1 tsp olive oil", "1 tbsp chopped parsley"],
    [["eggplant", "sliced zucchini"], ["mozzarella", "plant-based grated cheese"]],
    ["Wash your hands and ask an adult to heat the oven to 200°C (400°F) and slice the eggplant into 1 cm rounds.", "Brush eggplant slices with the measured oil and bake for about 20 minutes, turning once, until a fork goes through easily.", "Layer the slices with tomato sauce in a baking dish.", "Add breadcrumbs and cheese, then bake for 12–15 minutes until the cheese is melted and the sauce bubbles at the edges.", "Let it stand for 5 minutes, then top with parsley."]),
  makeRecipe("Italian", "dinner", "Chicken Pesto Pasta", "Pasta tossed with chicken, spinach, and a small spoonful of pesto.", "30 min", [490, 35, 57, 14], false,
    ["180 g pasta", "200 g chicken breast, cubed", "1 cup baby spinach", "1 tbsp pesto", "1 tbsp grated parmesan"],
    [["chicken", "cooked white beans"], ["pesto", "olive oil with chopped basil"]],
    ["Wash your hands and ask an adult to prepare chicken and use the stove.", "Cook pasta following its package directions.", "Cook chicken in a separate pan until it reaches 74°C (165°F).", "Stir spinach and pesto through the drained pasta until the spinach wilts.", "Add chicken and parmesan, then serve."]),

  makeRecipe("Japanese", "breakfast", "Tamagoyaki Rice Plate", "A softly layered Japanese-style omelette served with rice and cucumber.", "20 min", [360, 18, 48, 10], true,
    ["3 eggs", "1 cup cooked rice", "½ cucumber, sliced", "1 tsp low-sodium soy sauce", "1 tsp oil"],
    [["eggs", "firm tofu scramble"], ["cucumber", "thinly sliced carrot"]],
    ["Wash your hands and rinse the cucumber.", "Beat the eggs with soy sauce.", "Ask an adult to help cook thin egg layers in a lightly oiled pan, rolling each layer as it sets.", "Slice the fully cooked omelette.", "Serve with warm rice and cucumber."]),
  makeRecipe("Japanese", "lunch", "Vegetable Udon Soup", "Thick udon noodles in a mild broth with mushrooms and bok choy.", "25 min", [340, 12, 62, 5], true,
    ["180 g udon noodles", "1 cup sliced mushrooms", "1 cup chopped bok choy", "3 cups low-sodium broth", "1 tbsp low-sodium soy sauce"],
    [["udon noodles", "rice noodles"], ["bok choy", "baby spinach"]],
    ["Wash your hands and rinse the vegetables.", "Ask an adult to bring broth and soy sauce to a gentle simmer.", "Add mushrooms and simmer for 3–4 minutes, until softened.", "Add udon and bok choy and cook for the noodle package time, until the noodles are tender and the greens are wilted.", "Serve hot in bowls."]),
  makeRecipe("Japanese", "dinner", "Miso Salmon Rice Bowl", "Salmon with a mild miso glaze served with rice and broccoli.", "30 min", [500, 33, 54, 16], false,
    ["200 g salmon fillet", "1 tbsp mild miso", "1 cup cooked rice", "1 cup broccoli florets", "1 tsp honey"],
    [["salmon", "firm tofu"], ["miso", "low-sodium soy sauce"]],
    ["Wash your hands and ask an adult to heat the oven to 200°C (400°F) and handle the raw fish.", "Mix miso and honey, then brush it over the salmon.", "Bake with adult help for about 12–15 minutes, depending on thickness, until the center reaches 63°C (145°F) or flakes easily.", "Steam broccoli for 4–5 minutes, until fork-tender.", "Serve salmon and broccoli over rice."]),
  makeRecipe("Japanese", "lunch", "Edamame Onigiri", "Rice triangles with a savory edamame filling and a crisp seaweed wrap.", "30 min", [350, 13, 64, 5], true,
    ["1 cup short-grain rice", "½ cup shelled edamame", "2 nori sheets", "1 tsp low-sodium soy sauce", "1 tsp sesame seeds"],
    [["edamame", "mashed green peas"], ["nori", "thin cucumber ribbons"]],
    ["Wash your hands and cook the rice following its package directions.", "Heat edamame until steaming and lightly mash it with soy sauce.", "Let the rice cool until safe to handle.", "With clean, damp hands, shape rice around the filling into small triangles.", "Wrap with nori, sprinkle with sesame, and serve."]),
  makeRecipe("Japanese", "dinner", "Yakisoba with Cabbage", "Pan-fried noodles with cabbage, carrot, and a mild savory sauce.", "25 min", [430, 14, 70, 10], false,
    ["180 g yakisoba noodles", "1 cup shredded cabbage", "1 carrot, cut into thin strips", "1 tbsp low-sodium soy sauce", "1 tsp oil", "1 tsp sesame seeds"],
    [["yakisoba noodles", "whole-wheat noodles"], ["cabbage", "thinly sliced bok choy"]],
    ["Wash your hands and ask an adult to help cut the vegetables.", "Prepare noodles according to the package directions and drain with adult help.", "Heat the measured teaspoon of oil in a pan. Stir-fry cabbage and carrot for 4–5 minutes, until just tender.", "Add noodles and soy sauce; toss for 2–3 minutes until steaming hot.", "Sprinkle with sesame seeds and serve."]),
  makeRecipe("Japanese", "lunch", "Miso Tofu Soup", "A gentle miso broth with tofu, spinach, and soft noodles.", "20 min", [330, 17, 47, 8], true,
    ["150 g soft tofu, cubed", "3 cups low-sodium broth", "1 tbsp mild miso", "1 cup baby spinach", "100 g noodles"],
    [["soft tofu", "shelled edamame"], ["spinach", "chopped bok choy"]],
    ["Wash your hands and ask an adult to help with the hot pot.", "Cook noodles separately following their package directions.", "Warm broth gently; stir in miso until dissolved.", "Add tofu and cook gently until hot, then stir in spinach until wilted.", "Divide noodles into bowls and pour soup over them."]),

  makeRecipe("Indian", "breakfast", "Masala Omelette", "An omelette with tomato, onion, and mild warming spices.", "15 min", [300, 20, 18, 16], true,
    ["3 eggs", "½ tomato, diced", "¼ onion, diced", "¼ tsp mild cumin", "1 tsp oil", "2 slices toast"],
    [["eggs", "chickpea flour batter"], ["toast", "small whole-grain flatbread"]],
    ["Wash your hands and ask an adult to help chop vegetables.", "Beat eggs with cumin.", "Cook tomato and onion in a pan over medium heat for 3–4 minutes, until softened.", "Pour in the eggs and cook with adult help until fully set, with no runny egg remaining.", "Serve with warm toast."]),
  makeRecipe("Indian", "lunch", "Chana Masala", "Chickpeas simmered with tomatoes and mild spices, served with rice.", "30 min", [410, 18, 68, 8], true,
    ["1 can chickpeas, rinsed", "1 cup crushed tomatoes", "½ onion, diced", "½ tsp mild garam masala", "1 cup cooked rice", "½ cup water"],
    [["chickpeas", "white beans"], ["rice", "whole-grain flatbread"]],
    ["Wash your hands and ask an adult to help chop the onion.", "Cook onion in a pot over medium heat for 4–5 minutes, stirring until translucent.", "Stir in tomatoes and garam masala and simmer for 5 minutes.", "Add chickpeas and water; simmer uncovered for 8–10 minutes, stirring occasionally, until the sauce thickens.", "Serve with rice."]),
  makeRecipe("Indian", "dinner", "Red Lentil Dal", "Red lentils cooked until soft with tomato, turmeric, and cumin.", "35 min", [390, 21, 64, 6], true,
    ["¾ cup red lentils, rinsed", "1 tomato, diced", "½ tsp turmeric", "¼ tsp cumin", "3 cups water", "¼ cup extra water if needed", "1 cup cooked rice"],
    [["red lentils", "yellow split lentils"], ["rice", "whole-grain flatbread"]],
    ["Wash your hands and rinse lentils in a sieve.", "Ask an adult to bring lentils, water, tomato, turmeric, and cumin to a boil.", "Lower the heat and simmer, stirring often, until the lentils are soft, about 20–25 minutes.", "If the dal becomes too thick, stir in the measured ¼ cup of water and simmer for 1 minute.", "Serve with rice."]),
  makeRecipe("Indian", "dinner", "Aloo Gobi", "Potatoes and cauliflower cooked with gentle spices until tender.", "35 min", [360, 10, 64, 8], true,
    ["2 potatoes, diced", "2 cups cauliflower florets", "½ cup crushed tomatoes", "½ tsp mild curry powder", "½ cup water", "1 cup cooked rice"],
    [["cauliflower", "broccoli florets"], ["potatoes", "sweet potato"]],
    ["Wash your hands and ask an adult to help cut the vegetables.", "Warm curry powder and tomatoes in a covered pan.", "Add potatoes, cauliflower, and water.", "Cover and simmer, stirring carefully, until vegetables are tender.", "Serve over cooked rice."]),
  makeRecipe("Indian", "dinner", "Paneer Tikka Rice Bowl", "Paneer and peppers baked with a mild yogurt-spice coating.", "35 min", [460, 24, 52, 17], false,
    ["200 g paneer, cubed", "1 bell pepper, cut into pieces", "½ cup plain yogurt", "½ tsp mild tikka seasoning", "1 cup cooked rice"],
    [["paneer", "firm tofu"], ["plain yogurt", "unsweetened soy yogurt"]],
    ["Wash your hands and ask an adult to heat the oven.", "Mix yogurt and tikka seasoning, then coat paneer and pepper.", "Thread onto skewers or spread on a lined tray with adult help.", "Bake until the pepper softens and paneer is hot.", "Serve with rice."]),
  makeRecipe("Indian", "lunch", "Vegetable Biryani", "Fragrant rice layered with peas, carrots, and mild spices.", "35 min", [420, 12, 78, 8], false,
    ["1 cup basmati rice", "½ cup peas", "1 carrot, diced", "¼ onion, sliced", "½ tsp mild biryani spice", "2 cups water"],
    [["basmati rice", "brown rice"], ["peas", "green beans"]],
    ["Wash your hands and rinse the rice.", "Ask an adult to soften the onion in a pot.", "Add rice, carrot, peas, spices, and water.", "Cover and cook gently until rice is tender and water is absorbed.", "Fluff with a fork and serve."]),

  makeRecipe("American", "breakfast", "Blueberry Oat Pancakes", "Soft pancakes made with oats and blueberries for a cozy breakfast.", "25 min", [380, 15, 58, 10], false,
    ["1 cup rolled oats", "1 egg", "¾ cup milk", "½ cup blueberries", "1 tsp baking powder", "1 tsp oil"],
    [["milk", "unsweetened oat milk"], ["blueberries", "chopped strawberries"]],
    ["Wash your hands and rinse the berries.", "Blend oats into a flour with adult help.", "Mix oat flour, egg, milk, and baking powder into a batter; fold in berries.", "Ask an adult to cook small pancakes in a lightly oiled pan for 2–3 minutes per side, until golden and cooked through.", "Serve warm."]),
  makeRecipe("American", "dinner", "Turkey Burger Plate", "A turkey patty served with lettuce, tomato, and roasted potato wedges.", "40 min", [490, 34, 48, 17], false,
    ["250 g ground turkey", "2 whole-grain buns", "1 tomato, sliced", "2 lettuce leaves", "2 small potatoes", "½ tsp garlic powder"],
    [["ground turkey", "mashed black beans"], ["whole-grain buns", "lettuce cups"]],
    ["Wash your hands and ask an adult to heat the oven to 220°C (425°F) and prepare the raw turkey.", "Cut potatoes into wedges and roast for 25–30 minutes, turning after 15 minutes, until golden and fork-tender.", "Shape the turkey into two equal patties about 2 cm thick. With adult help, cook in a pan over medium heat for 5–6 minutes per side until the centers reach 74°C (165°F).", "Toast the buns and add lettuce and tomato.", "Serve patties with potato wedges."]),
  makeRecipe("American", "dinner", "Three Bean Chili", "A mild pot of kidney beans, black beans, and pinto beans with tomatoes.", "35 min", [370, 19, 66, 6], true,
    ["½ cup kidney beans, rinsed", "½ cup black beans, rinsed", "½ cup pinto beans, rinsed", "1 cup crushed tomatoes", "½ bell pepper, diced", "½ tsp mild chili powder"],
    [["kidney beans", "white beans"], ["bell pepper", "diced zucchini"]],
    ["Wash your hands and ask an adult to help chop the pepper.", "Warm the pepper in a pot until it begins to soften.", "Add all three beans, tomatoes, chili powder, and half a cup of water.", "Simmer gently, stirring occasionally, until thick and hot.", "Serve in bowls."]),
  makeRecipe("American", "lunch", "Tomato Soup and Grilled Cheese", "A warm tomato soup with a crisp cheese sandwich for dipping.", "25 min", [440, 19, 48, 20], false,
    ["1 cup tomato soup", "4 slices whole-grain bread", "2 slices cheddar cheese", "1 tsp butter", "½ cup milk"],
    [["cheddar", "mozzarella"], ["milk", "unsweetened oat milk"]],
    ["Ask an adult to warm the soup slowly in a pot, stirring often, until steaming hot.", "Place cheese between two slices of bread.", "Ask an adult to toast the sandwich in a pan over medium-low heat, using the measured teaspoon of butter, for 3–4 minutes per side until golden and the cheese melts.", "Pour soup into bowls and let it cool to a safe eating temperature.", "Cut the sandwich and serve with soup."]),
  makeRecipe("American", "lunch", "Broccoli Baked Potato", "A fluffy baked potato topped with broccoli and a little melted cheese.", "55 min", [390, 16, 66, 10], true,
    ["2 medium potatoes", "1 cup broccoli florets", "¼ cup grated cheddar", "2 tbsp plain yogurt", "1 tsp olive oil"],
    [["cheddar", "plant-based grated cheese"], ["plain yogurt", "unsweetened soy yogurt"]],
    ["Wash the potatoes and ask an adult to heat the oven to 220°C (425°F).", "Rub the potatoes with the measured teaspoon of olive oil, prick them with a fork, and bake for 45–55 minutes until a fork reaches the center easily.", "Steam broccoli for 4–5 minutes, until fork-tender.", "With adult help, split the hot potatoes and fill them with broccoli and cheese.", "Top with yogurt and serve."])
];

const additionalRecipes = [
  makeRecipe("Chinese", "dinner", "Beef and Pepper Rice Plate", "Tender beef and sweet peppers served over fluffy rice.", "30 min", [470, 29, 55, 13], false,
    ["200 g beef strips", "1 cup uncooked rice", "1 red bell pepper, sliced", "1 tbsp low-sodium soy sauce", "1 tsp oil"],
    [["beef", "firm tofu"], ["bell pepper", "sliced zucchini"]],
    ["Wash your hands and ask an adult to prepare the beef and use the stove.", "Cook the rice following its package directions.", "Cook the beef in a pan with adult help until it reaches 63°C (145°F), then let it rest for 3 minutes.", "Add the pepper and soy sauce; cook for 4–5 minutes until the pepper softens.", "Serve the beef and peppers over rice."]),
  makeRecipe("Chinese", "breakfast", "Scallion Pancakes with Cucumber", "Crisp savory pancakes with scallions and cool cucumber slices.", "25 min", [350, 12, 49, 11], false,
    ["1 cup all-purpose flour", "½ cup water", "2 scallions, thinly sliced", "½ cucumber, sliced", "1 tsp oil"],
    [["scallions", "chives"], ["all-purpose flour", "whole-wheat flour"]],
    ["Wash your hands and rinse the vegetables.", "Mix flour and water into a soft dough; ask an adult to help if it feels sticky.", "Fold in the scallions and shape the dough into two flat pancakes.", "Ask an adult to pan-cook them in the measured teaspoon of oil over medium heat for 3–4 minutes per side, until golden and cooked through.", "Cool for 2 minutes and serve with cucumber."]),
  makeRecipe("Chinese", "lunch", "Tomato and Egg Noodle Soup", "A gentle broth with noodles, tomato, and fully cooked ribbons of egg.", "25 min", [390, 17, 58, 9], true,
    ["150 g noodles", "2 eggs", "2 tomatoes, chopped", "3 cups low-sodium vegetable broth", "1 scallion, sliced"],
    [["eggs", "cubed firm tofu"], ["vegetable broth", "water with a little low-sodium seasoning"]],
    ["Wash your hands and ask an adult to help with the hot pot.", "Cook noodles following their package directions and set aside.", "Simmer tomatoes in the broth for 8–10 minutes, until they soften and begin to break down.", "Slowly stir beaten eggs into the simmering broth until fully cooked, with no liquid egg remaining.", "Add the noodles, top with scallion, and serve hot."]),
  makeRecipe("Chinese", "dinner", "Steamed Ginger Fish with Bok Choy", "Mild white fish is steamed with ginger and served with tender greens.", "30 min", [360, 32, 38, 8], true,
    ["2 white fish fillets", "1 cup uncooked rice", "2 cups chopped bok choy", "1 tsp grated ginger", "1 tbsp low-sodium soy sauce"],
    [["white fish", "salmon fillets"], ["bok choy", "baby spinach"]],
    ["Wash your hands and ask an adult to prepare the raw fish.", "Cook the rice following its package directions.", "Place fish and ginger in a covered steamer with adult help; steam for about 8–10 minutes, depending on thickness, until the center reaches 63°C (145°F) and the fish flakes easily.", "Steam the bok choy for 3–4 minutes until tender.", "Drizzle the fish with soy sauce and serve with rice and greens."]),
  makeRecipe("Chinese", "breakfast", "Sweet Corn and Egg Congee", "Creamy rice porridge topped with sweet corn and a fully cooked egg.", "35 min", [340, 15, 52, 7], true,
    ["½ cup rice", "3 cups low-sodium vegetable broth", "½ cup corn", "2 eggs", "1 scallion, sliced"],
    [["corn", "peas"], ["eggs", "cubed firm tofu"]],
    ["Wash your hands and rinse the rice.", "Ask an adult to simmer rice and broth uncovered for 25–30 minutes, stirring every few minutes, until the grains break down and the porridge is creamy.", "Stir in the corn and simmer for 3–4 minutes until hot.", "Cook the eggs in a separate pan until fully set, with no runny parts.", "Spoon congee into bowls and top with egg and scallion."]),

  makeRecipe("Mexican", "breakfast", "Green Salsa Chilaquiles", "Crisp tortilla pieces softened in mild green salsa and topped with eggs.", "20 min", [390, 18, 48, 14], false,
    ["4 corn tortillas, cut into triangles", "½ cup mild green salsa", "2 eggs", "¼ cup grated cheese", "1 tbsp plain yogurt"],
    [["green salsa", "mild red salsa"], ["eggs", "½ cup black beans"]],
    ["Wash your hands and ask an adult to heat the oven to 200°C (400°F) and help cut the tortillas.", "Arrange tortilla pieces on a tray and bake for 8–10 minutes, turning once, until crisp.", "Warm the salsa in a pan over medium heat, then stir in the tortilla pieces for 1 minute.", "Cook the eggs in a separate pan until fully set, with no runny parts.", "Top with cheese and yogurt, then serve."]),
  makeRecipe("Mexican", "lunch", "Sopa de Fideo", "A cozy tomato soup with toasted short noodles and mild seasoning.", "30 min", [350, 12, 59, 7], true,
    ["120 g short vermicelli noodles", "1 cup crushed tomatoes", "4 cups low-sodium vegetable broth", "¼ onion, chopped", "1 tsp oil"],
    [["vermicelli", "small pasta"], ["vegetable broth", "water with low-sodium seasoning"]],
    ["Wash your hands and ask an adult to help with the stove.", "Warm the oil in a pot and gently toast the noodles for 2–3 minutes until lightly golden.", "Add the tomato and broth carefully with adult help.", "Simmer for the noodle package time, stirring occasionally, until the noodles are tender.", "Let the soup stand for 5 minutes and serve." ]),
  makeRecipe("Mexican", "lunch", "Calabacitas Corn Tacos", "Zucchini and sweet corn cooked with tomato and tucked into warm tortillas.", "25 min", [330, 11, 51, 9], true,
    ["2 small zucchini, diced", "½ cup corn", "1 tomato, chopped", "4 corn tortillas", "¼ cup grated cheese"],
    [["zucchini", "yellow summer squash"], ["corn", "diced bell pepper"]],
    ["Wash your hands and ask an adult to help chop the vegetables.", "Warm zucchini in a pan until it begins to soften.", "Add corn and tomato, then cook until everything is tender.", "Warm the tortillas with adult help.", "Fill the tortillas with vegetables and sprinkle with cheese."]),
  makeRecipe("Mexican", "dinner", "Chicken Pozole Verde", "A mild tomatillo broth with hominy and cooked chicken.", "40 min", [410, 30, 48, 10], false,
    ["200 g cooked chicken, shredded", "1 can hominy, rinsed", "1 cup mild green salsa", "3 cups low-sodium chicken broth", "½ cup shredded cabbage"],
    [["chicken", "cooked pinto beans"], ["hominy", "sweet corn"]],
    ["Wash your hands and rinse the hominy and cabbage.", "Ask an adult to bring broth and green salsa to a gentle simmer.", "Stir in hominy and simmer for 5 minutes.", "Add cooked chicken and heat until the thickest pieces reach 74°C (165°F) and the soup is steaming throughout.", "Serve with shredded cabbage on top."]),
  makeRecipe("Mexican", "dinner", "Baked Chicken Tamale Pie", "A mild chicken and bean filling baked under a soft cornmeal topping.", "45 min", [450, 28, 57, 12], false,
    ["1 cup cooked chicken, shredded", "½ cup black beans, rinsed", "1 cup mild salsa", "½ cup cornmeal", "½ cup milk", "¼ cup grated cheese"],
    [["chicken", "cooked pinto beans"], ["milk", "unsweetened oat milk"]],
    ["Ask an adult to heat the oven to 190°C (375°F) and prepare the chicken.", "Mix chicken, beans, and salsa in an oven-safe dish.", "Stir cornmeal and milk together and spread it evenly over the filling.", "Ask an adult to bake for 20–25 minutes until the topping is set and lightly golden and the center reaches 74°C (165°F).", "Sprinkle cheese on top, let it stand for 5 minutes, and serve."]),

  makeRecipe("Italian", "breakfast", "Ricotta Lemon Pancakes", "Soft lemon-scented pancakes served with berries and creamy ricotta.", "25 min", [390, 17, 52, 12], false,
    ["1 cup flour", "½ cup ricotta", "1 egg", "½ cup milk", "1 tsp lemon zest", "½ cup berries"],
    [["ricotta", "plain thick yogurt"], ["milk", "unsweetened oat milk"]],
    ["Wash your hands and rinse the berries.", "Mix flour, ricotta, egg, milk, and lemon zest into a smooth batter.", "Ask an adult to cook small pancakes in a lightly oiled pan until cooked through.", "Turn each pancake with adult help and cook the other side.", "Serve with berries."]),
  makeRecipe("Italian", "lunch", "Panzanella Bread Salad", "Toasted bread soaks up tomato juices with cucumber, basil, and a light dressing.", "20 min", [340, 11, 52, 10], true,
    ["2 cups day-old bread cubes", "2 tomatoes, chopped", "½ cucumber, chopped", "6 basil leaves", "1 tbsp olive oil", "1 tsp vinegar"],
    [["day-old bread", "toasted bread"], ["basil", "fresh parsley"]],
    ["Wash your hands and ask an adult to heat the oven to 190°C (375°F).", "Spread bread cubes on a tray and toast for 8–10 minutes, turning once, until crisp.", "Chop the tomato and cucumber with adult help.", "Mix vegetables with olive oil, vinegar, and torn basil.", "Fold in the bread and let it sit for 5 minutes before serving."]),
  makeRecipe("Italian", "dinner", "Gnocchi with Sage and Peas", "Pillowy potato gnocchi tossed with peas, sage, and a little parmesan.", "25 min", [430, 15, 69, 10], false,
    ["300 g potato gnocchi", "1 cup peas", "6 sage leaves", "1 tbsp butter", "2 tbsp grated parmesan"],
    [["peas", "chopped green beans"], ["butter", "olive oil"]],
    ["Wash your hands and ask an adult to help with the boiling water.", "Cook gnocchi following its package directions and drain with adult help.", "Warm butter in a pan over medium heat and cook the sage leaves for 30 seconds.", "Add peas and cook for 3–4 minutes until tender and hot.", "Toss with gnocchi and parmesan, then serve."]),
  makeRecipe("Italian", "dinner", "Creamy Polenta with Mushroom Ragù", "Soft corn polenta topped with mushrooms simmered in tomato sauce.", "35 min", [410, 14, 63, 11], true,
    ["½ cup quick-cooking polenta", "2 cups sliced mushrooms", "1 cup crushed tomatoes", "2½ cups low-sodium broth", "1 tbsp grated parmesan"],
    [["mushrooms", "diced zucchini"], ["parmesan", "grated hard cheese"]],
    ["Wash your hands and ask an adult to help with the hot stove.", "Simmer mushrooms and crushed tomatoes in a covered pan for 8–10 minutes until the mushrooms are tender.", "Ask an adult to slowly whisk polenta into simmering broth.", "Stir the polenta for the package cooking time, until thick and smooth.", "Spoon mushroom sauce over polenta and finish with parmesan."]),
  makeRecipe("Italian", "lunch", "White Bean Bruschetta", "Toasted bread topped with lemony white beans, tomato, and parsley.", "15 min", [330, 15, 48, 8], true,
    ["1 can white beans, rinsed", "2 tomatoes, chopped", "4 slices whole-grain bread", "1 tbsp olive oil", "½ lemon", "1 tbsp chopped parsley"],
    [["white beans", "chickpeas"], ["parsley", "fresh basil"]],
    ["Wash your hands and rinse the tomatoes and parsley.", "Ask an adult to toast the bread.", "Mash half the beans with olive oil and lemon juice.", "Stir in the remaining beans, tomato, and parsley.", "Spoon the mixture onto toast and serve."]),

  makeRecipe("Japanese", "breakfast", "Okonomiyaki Cabbage Pancake", "A savory cabbage pancake with egg and a mild tangy topping.", "25 min", [370, 16, 46, 12], false,
    ["2 cups finely shredded cabbage", "2 eggs", "½ cup flour", "⅓ cup water", "1 tbsp mild okonomiyaki sauce"],
    [["cabbage", "shredded zucchini"], ["okonomiyaki sauce", "mild barbecue sauce"]],
    ["Wash your hands and ask an adult to help shred the cabbage.", "Mix cabbage, eggs, flour, and water into a thick batter.", "Ask an adult to cook the batter in a lightly oiled pan over medium-low heat for 4–5 minutes until golden underneath.", "With adult help, flip and cook for another 4–5 minutes until golden and the egg is fully set.", "Add the measured tablespoon of sauce and serve."]),
  makeRecipe("Japanese", "lunch", "Cold Soba Edamame Salad", "Buckwheat noodles tossed with edamame, cucumber, and a sesame dressing.", "20 min", [380, 17, 61, 8], true,
    ["150 g soba noodles", "½ cup shelled edamame", "½ cucumber, thinly sliced", "1 tsp sesame oil", "1 tbsp low-sodium soy sauce"],
    [["soba noodles", "whole-wheat spaghetti"], ["edamame", "green peas"]],
    ["Wash your hands and rinse the cucumber.", "Cook the soba noodles following the package directions, then cool under cold water.", "Heat the edamame until steaming and let it cool.", "Mix sesame oil and soy sauce, then toss with noodles, edamame, and cucumber.", "Serve chilled."]),
  makeRecipe("Japanese", "dinner", "Chicken Katsu with Cabbage", "Crisp oven-baked chicken with shredded cabbage and rice.", "40 min", [480, 34, 55, 13], false,
    ["2 chicken cutlets", "½ cup panko breadcrumbs", "1 egg, beaten", "1 cup uncooked rice", "1 cup shredded cabbage"],
    [["chicken", "thick firm tofu"], ["panko breadcrumbs", "whole-wheat breadcrumbs"]],
    ["Wash your hands and ask an adult to prepare raw chicken and heat the oven.", "Cook rice following its package directions.", "Dip chicken in egg, then breadcrumbs; place it on a lined tray.", "Ask an adult to bake until crisp and cooked to 74°C (165°F).", "Slice with adult help and serve with cabbage and rice."]),
  makeRecipe("Japanese", "lunch", "Japanese Curry Sweet Potato", "Sweet potato and chickpeas simmered in a mild Japanese-style curry sauce.", "35 min", [390, 13, 69, 8], true,
    ["1 large sweet potato, diced", "1 cup chickpeas, rinsed", "1 small onion, chopped", "2 cups low-sodium vegetable broth", "1 tbsp mild Japanese curry powder"],
    [["chickpeas", "white beans"], ["sweet potato", "diced potato"]],
    ["Wash your hands and ask an adult to help chop the vegetables.", "Warm onion in a pot over medium heat for 4–5 minutes until translucent.", "Add sweet potato, broth, and mild curry powder.", "Cover and simmer with adult help for 12–15 minutes until a fork goes through the potato easily.", "Stir in chickpeas and simmer for 3 minutes until hot, then serve."]),
  makeRecipe("Japanese", "dinner", "Salmon Onigiri Plate", "Hand-shaped rice triangles filled with salmon and served with cucumber.", "35 min", [420, 25, 55, 9], false,
    ["1 cup short-grain rice", "150 g cooked salmon, flaked", "1 nori sheet", "½ cucumber, sliced", "1 tsp low-sodium soy sauce"],
    [["salmon", "flaked cooked tofu"], ["nori", "thin cucumber ribbons"]],
    ["Wash your hands and ask an adult to cook the rice and salmon safely. If starting with raw salmon, cook it to 63°C (145°F) before flaking.", "Flake the cooked salmon and mix it with the measured teaspoon of soy sauce.", "Let rice cool until it is safe to handle, but do not leave it at room temperature for more than 2 hours.", "With clean, damp hands, shape rice around salmon into small triangles.", "Wrap with nori and serve with cucumber."]),

  makeRecipe("Indian", "breakfast", "Vegetable Poha", "Flattened rice cooked with peas, peanuts, and a squeeze of lemon.", "20 min", [350, 11, 58, 9], true,
    ["2 cups thick poha (flattened rice)", "½ cup peas", "2 tbsp chopped peanuts", "½ lemon", "1 tsp oil", "¼ tsp mild turmeric"],
    [["poha", "cooked rice"], ["peanuts", "roasted pumpkin seeds"]],
    ["Wash your hands and rinse poha briefly in a sieve.", "Ask an adult to warm oil and turmeric in a pan over medium heat for 30 seconds.", "Add peas and 2 tablespoons of water; cover and cook for 3–4 minutes until tender.", "Stir in poha and peanuts for 2–3 minutes until hot and soft.", "Squeeze lemon over the top and serve."]),
  makeRecipe("Indian", "lunch", "Lemon Rice with Peanuts", "Fluffy rice flavored with lemon, peas, and crunchy roasted peanuts.", "20 min", [390, 12, 65, 10], true,
    ["2 cups cooked rice", "½ cup peas", "2 tbsp roasted peanuts", "1 lemon", "¼ tsp mild turmeric", "1 tsp oil"],
    [["peanuts", "roasted pumpkin seeds"], ["peas", "diced carrot"]],
    ["Wash your hands and ask an adult to warm the pan.", "Heat oil and turmeric, then add peas and cook for 3–4 minutes until tender.", "Stir in the cooked rice for 3–4 minutes until hot throughout.", "Turn off the heat and add lemon juice and peanuts.", "Mix gently and serve warm."]),
  makeRecipe("Indian", "dinner", "Palak Paneer", "Paneer cubes served in a mild, creamy spinach sauce.", "35 min", [430, 24, 43, 18], false,
    ["200 g paneer, cubed", "3 cups spinach", "½ cup plain yogurt", "1 small tomato, chopped", "¼ tsp mild cumin"],
    [["paneer", "firm tofu"], ["plain yogurt", "unsweetened soy yogurt"]],
    ["Wash your hands and rinse the spinach.", "Ask an adult to cook spinach and tomato in a covered pan over medium-low heat for 5–6 minutes, until the spinach wilts and tomato softens.", "Blend the spinach mixture with adult help and let it cool for 5 minutes.", "Stir in yogurt and cumin, then add paneer and warm gently for 3–4 minutes without boiling.", "Serve hot with rice or flatbread."]),
  makeRecipe("Indian", "lunch", "Tandoori Cauliflower Wrap", "Roasted cauliflower with mild yogurt seasoning wrapped in warm flatbread.", "35 min", [370, 14, 57, 9], true,
    ["2 cups cauliflower florets", "½ cup plain yogurt", "½ tsp mild tandoori seasoning", "2 whole-grain flatbreads", "½ cucumber, sliced"],
    [["cauliflower", "broccoli florets"], ["plain yogurt", "unsweetened soy yogurt"]],
    ["Wash your hands and ask an adult to heat the oven to 220°C (425°F).", "Mix yogurt and seasoning, then coat the cauliflower evenly.", "With adult help, roast cauliflower for 20–25 minutes, turning once, until fork-tender and lightly golden.", "Warm the flatbreads following their package directions and slice the cucumber.", "Fill each flatbread with cauliflower and cucumber."]),
  makeRecipe("Indian", "dinner", "Tomato Coconut Fish Curry", "White fish simmers gently in a mild tomato and coconut sauce.", "30 min", [420, 31, 39, 15], false,
    ["2 white fish fillets, cut into pieces", "1 cup crushed tomatoes", "½ cup light coconut milk", "½ tsp mild curry powder", "1 cup uncooked rice"],
    [["white fish", "firm tofu"], ["light coconut milk", "plain yogurt"]],
    ["Wash your hands and ask an adult to handle the raw fish.", "Cook rice following its package directions.", "Warm tomatoes, coconut milk, and curry powder in a pan.", "Add fish with adult help and simmer gently until it flakes easily.", "Serve the curry over rice."]),

  makeRecipe("American", "breakfast", "Apple Cinnamon French Toast", "Warm French toast topped with soft cinnamon apples.", "25 min", [390, 17, 58, 10], false,
    ["4 slices whole-grain bread", "2 eggs", "½ cup milk", "1 apple, thinly sliced", "¼ tsp cinnamon"],
    [["milk", "unsweetened oat milk"], ["apple", "pear"]],
    ["Wash your hands and ask an adult to help slice the apple.", "Put apple slices, cinnamon, and 2 tablespoons of water in a pan. Cover and cook for 5–7 minutes until soft.", "Whisk eggs and milk in a shallow bowl.", "Dip bread in the egg mixture and ask an adult to cook it over medium heat for 2–3 minutes per side, until golden and the egg is fully set.", "Top with warm apples and serve."]),
  makeRecipe("American", "lunch", "Corn and Potato Chowder", "A creamy soup with sweet corn, potatoes, and mild herbs.", "35 min", [380, 13, 61, 10], true,
    ["2 potatoes, diced", "1 cup corn", "½ onion, chopped", "2 cups low-sodium vegetable broth", "½ cup milk", "½ tsp dried thyme"],
    [["milk", "unsweetened oat milk"], ["corn", "peas"]],
    ["Wash your hands and ask an adult to cut the potatoes into 1 cm cubes.", "Simmer potatoes, onion, thyme, and broth in a pot for 12–15 minutes until a fork goes through the potatoes easily.", "Mash a few potato pieces to thicken the soup.", "Stir in corn and milk; warm gently for 3–4 minutes without boiling.", "Let it stand for 5 minutes and serve."]),
  makeRecipe("American", "dinner", "Barbecue Chicken Sandwich", "Shredded chicken in a mild barbecue sauce with crunchy slaw.", "25 min", [450, 31, 52, 12], false,
    ["200 g cooked chicken, shredded", "2 whole-grain buns", "¼ cup mild barbecue sauce", "1 cup shredded cabbage", "2 tbsp plain yogurt"],
    [["chicken", "cooked jackfruit"], ["plain yogurt", "mayonnaise"]],
    ["Wash your hands and shred fully cooked chicken with clean utensils.", "Warm chicken with barbecue sauce until steaming hot.", "Mix cabbage and yogurt in a small bowl for a quick slaw.", "Toast buns with adult help if you like.", "Fill buns with chicken and slaw."]),
  makeRecipe("American", "dinner", "Baked Macaroni and Cheese", "A comforting pasta bake with a creamy cheese sauce and crisp topping.", "40 min", [470, 20, 64, 15], false,
    ["180 g elbow macaroni", "1 cup milk", "1 cup grated cheddar", "1 tbsp flour", "¼ cup breadcrumbs"],
    [["cheddar", "mozzarella"], ["milk", "unsweetened oat milk"]],
    ["Ask an adult to help cook and drain macaroni following the package directions.", "Whisk flour and milk in a pan with adult help until smooth and thick.", "Stir in cheddar until melted, then mix with the macaroni.", "Spoon into an oven-safe dish and add breadcrumbs.", "Ask an adult to bake until the top is lightly golden."]),
  makeRecipe("American", "lunch", "Salmon Cakes with Cucumber Slaw", "Golden salmon patties served with a cool, crunchy cucumber slaw.", "30 min", [430, 26, 42, 16], false,
    ["1 can salmon, drained", "1 egg", "½ cup breadcrumbs", "½ cucumber, grated", "¼ cup plain yogurt", "1 tsp lemon juice"],
    [["salmon", "canned chickpeas"], ["plain yogurt", "unsweetened soy yogurt"]],
    ["Wash your hands and ask an adult to check the canned salmon for bones.", "Mix salmon, egg, and breadcrumbs; shape into four equal patties.", "Ask an adult to pan-cook patties over medium heat for 3–4 minutes per side until golden and the center reaches 71°C (160°F).", "Mix cucumber, yogurt, and lemon juice in a bowl.", "Serve salmon cakes with cucumber slaw."]),
  makeRecipe("American", "dessert", "Banana Split", "Banana halves with vanilla ice cream, strawberries, chocolate sauce, whipped cream, and cherries.", "10 min", [490, 7, 78, 20], false,
    ["2 bananas", "4 small scoops vanilla ice cream (about 2 cups)", "½ cup sliced strawberries", "2 tbsp chocolate sauce", "2 tbsp whipped cream", "2 maraschino cherries"],
    [["strawberries", "sliced peaches"], ["vanilla ice cream", "dairy-free vanilla ice cream"]],
    ["Wash your hands and rinse the strawberries. Ask an adult to help slice them.", "Peel the bananas, slice each one lengthwise, and arrange the halves in two bowls.", "Place two small scoops of vanilla ice cream between the banana halves in each bowl.", "Divide the strawberries, chocolate sauce, and whipped cream between the bowls; finish each with a cherry.", "Serve right away."]),
  makeRecipe("Chinese", "dessert", "Mango Coconut Sago", "Chilled tapioca pearls with ripe mango and creamy coconut milk.", "45 min", [280, 3, 43, 11], false,
    ["¼ cup small tapioca pearls", "1 ripe mango, peeled and diced", "½ cup coconut milk", "1 tbsp sugar", "3 cups water"],
    [["mango", "diced ripe peach"], ["coconut milk", "dairy milk"]],
    ["Wash your hands and ask an adult to help with the boiling water.", "Bring the water to a boil in a pot. Add the tapioca pearls and cook following the package directions, stirring often, until the pearls are mostly translucent.", "Turn off the heat, cover the pot for 5 minutes, then drain and rinse the pearls under cool water. If the package gives different cooking directions, follow its directions.", "Stir the coconut milk and sugar together until the sugar dissolves, then mix in the cooled pearls and mango.", "Divide between two bowls and chill for at least 20 minutes before serving."]),
  makeRecipe("Chinese", "dessert", "Sweet Red Bean Soup", "A gently sweet warm dessert made with soft adzuki beans.", "20 min", [250, 10, 43, 3], false,
    ["1 can (about 400 g) adzuki beans, drained and rinsed", "1½ cups water", "1 tbsp sugar", "1 tsp cornstarch mixed with 1 tbsp cold water"],
    [["adzuki beans", "canned red kidney beans"], ["sugar", "maple syrup"]],
    ["Wash your hands and ask an adult to help with the stove.", "Add the rinsed beans and water to a saucepan and bring to a gentle simmer over medium heat.", "Simmer uncovered for 10 minutes, stirring occasionally; mash a few beans against the side of the pan to thicken the soup.", "Stir in the sugar and cornstarch mixture, then simmer for 1–2 minutes until slightly thickened.", "Let the soup cool for 5 minutes before serving warm, or chill it for a cold dessert."]),
  makeRecipe("Mexican", "dessert", "Arroz con Leche", "Creamy cinnamon rice pudding, served warm or chilled.", "45 min", [330, 10, 55, 8], false,
    ["½ cup uncooked white rice, rinsed", "2 cups water", "2 cups milk", "2 tbsp sugar", "1 cinnamon stick", "¼ tsp ground cinnamon"],
    [["milk", "unsweetened oat milk"], ["white rice", "short-grain rice"]],
    ["Wash your hands and ask an adult to help with the stove.", "Add the rinsed rice, water, and cinnamon stick to a saucepan. Bring to a boil, then lower the heat and simmer uncovered for 15 minutes, stirring occasionally, until most of the water is absorbed.", "Pour in the milk and add the sugar. Simmer gently for 20–25 minutes, stirring every 2–3 minutes, until the rice is tender and the pudding is creamy.", "Remove the cinnamon stick with adult help and stir in the ground cinnamon.", "Serve warm, or cool promptly and refrigerate for at least 2 hours before serving cold."]),
  makeRecipe("Mexican", "dessert", "Strawberry Lime Paletas", "Bright strawberry and lime ice pops made with just a little added sweetness.", "4 hr 10 min", [110, 1, 27, 0], false,
    ["2 cups hulled strawberries", "2 tbsp lime juice", "2 tbsp water", "1 tbsp sugar"],
    [["strawberries", "diced ripe mango"], ["sugar", "honey"]],
    ["Wash your hands and rinse the strawberries. Ask an adult to help remove the leafy tops.", "Add strawberries, lime juice, water, and sugar to a blender. Blend for 30–45 seconds until smooth, using adult help with the blender.", "Pour the mixture into four ice-pop molds, leaving about 1 cm of space at the top for expansion.", "Insert the sticks and freeze for at least 4 hours, until completely solid.", "Run the outside of each mold under warm water for 10–15 seconds to release the paletas, then serve."]),
  makeRecipe("Italian", "dessert", "Lemon Ricotta Berry Cups", "A cool ricotta cream with fresh berries and a bright lemon flavor.", "10 min", [270, 13, 30, 11], false,
    ["1 cup ricotta", "1 tbsp honey", "1 tsp finely grated lemon zest", "1 tsp lemon juice", "1 cup mixed berries", "2 plain biscuits, crushed"],
    [["ricotta", "plain thick yogurt"], ["honey", "maple syrup"]],
    ["Wash your hands and rinse the berries; ask an adult to help zest and juice the lemon.", "Stir the ricotta, honey, lemon zest, and lemon juice in a bowl until smooth.", "Divide the ricotta mixture between two small cups.", "Top each cup with half the berries and crushed biscuit.", "Chill for 10 minutes if you prefer a firmer dessert, then serve."]),
  makeRecipe("Italian", "dessert", "Baked Pears with Amaretti", "Soft baked pears topped with crisp almond cookies and a little honey.", "35 min", [260, 4, 45, 8], false,
    ["2 ripe pears, halved and cored", "2 amaretti biscuits, crushed", "1 tbsp honey", "2 tbsp water", "¼ tsp ground cinnamon"],
    [["pears", "apples"], ["amaretti biscuits", "plain shortbread biscuits"]],
    ["Ask an adult to heat the oven to 190°C (375°F) and help halve and core the pears.", "Place the pear halves cut-side up in a small baking dish and pour the water around them.", "Drizzle the honey over the pears, sprinkle with cinnamon, and cover the dish loosely with foil.", "Ask an adult to bake for 20 minutes, then uncover and bake for 8–10 minutes more, until a fork slides easily into the pears.", "Cool for 5 minutes, divide the crushed amaretti over the pears, and serve."]),
  makeRecipe("Japanese", "dessert", "Japanese Strawberry Fruit Sandwich", "Soft bread filled with lightly sweetened cream and strawberries.", "20 min", [310, 5, 35, 17], false,
    ["4 slices soft sandwich bread", "½ cup cold heavy whipping cream", "1 tbsp sugar", "6 small strawberries, hulled and dried"],
    [["strawberries", "kiwi slices"], ["heavy whipping cream", "dairy-free whipping cream"]],
    ["Wash your hands and rinse the strawberries, then dry them completely with a clean towel.", "With an adult's help, beat the cold cream and sugar in a chilled bowl until it forms firm peaks, about 2–3 minutes.", "Spread a thick layer of cream over two slices of bread. Arrange three strawberries in a straight diagonal line on each slice.", "Cover each with another bread slice and gently press the edges together. Wrap each sandwich and chill for 15 minutes.", "With adult help, cut each sandwich diagonally through the strawberry centers and serve."]),
  makeRecipe("Japanese", "dessert", "Japanese Dorayaki", "Two soft honey pancakes sandwiching a sweet red bean filling.", "30 min", [340, 9, 62, 7], false,
    ["1 egg", "2 tbsp sugar", "1 tbsp honey", "½ cup all-purpose flour", "¼ tsp baking powder", "2 tbsp water", "¼ cup sweet red bean paste", "1 tsp oil"],
    [["sweet red bean paste", "thick chocolate spread"], ["honey", "maple syrup"]],
    ["Wash your hands. Ask an adult to help measure the ingredients and use the stove.", "Whisk the egg, sugar, and honey in a bowl until blended. Add the flour and baking powder and stir just until smooth; rest the batter for 10 minutes.", "Stir the water into the batter. Lightly oil a nonstick pan and warm it over low-medium heat.", "Spoon the batter into four small pancakes. Cook for about 1½ minutes, until bubbles appear and the edges look set, then flip with adult help and cook for 30–45 seconds until the centers are cooked through.", "Spread red bean paste on two pancakes and top with the remaining pancakes to make two sandwiches. Let them cool for 5 minutes before serving."]),
  makeRecipe("Indian", "dessert", "Cardamom Rice Kheer", "Slow-simmered rice pudding scented with cardamom and raisins.", "45 min", [320, 10, 52, 8], false,
    ["¼ cup basmati rice, rinsed", "3 cups milk", "2 tbsp sugar", "¼ tsp ground cardamom", "1 tbsp raisins"],
    [["milk", "unsweetened oat milk"], ["raisins", "chopped dates"]],
    ["Wash your hands and ask an adult to help with the stove.", "Add the rinsed rice and milk to a heavy saucepan. Bring just to a simmer over medium heat, stirring so the milk does not scorch.", "Lower the heat and simmer uncovered for 30–35 minutes, stirring every 2–3 minutes, until the rice is very soft and the milk has thickened.", "Stir in the sugar, cardamom, and raisins; cook for 2 more minutes until the sugar dissolves.", "Serve warm, or cool promptly and refrigerate for at least 2 hours before serving cold."]),
  makeRecipe("Indian", "dessert", "Mango Shrikhand", "A chilled, creamy yogurt dessert flavored with mango and cardamom.", "10 min", [220, 12, 32, 5], false,
    ["1 cup thick plain Greek yogurt", "½ cup ripe mango puree", "1 tbsp honey", "¼ tsp ground cardamom", "1 tbsp chopped pistachios"],
    [["mango", "peach puree"], ["pistachios", "chopped almonds"]],
    ["Wash your hands and ask an adult to help peel and cut the mango, if using fresh fruit.", "Stir the yogurt, mango puree, honey, and cardamom together until evenly blended.", "Divide the mixture between two bowls and cover them.", "Chill for at least 30 minutes so the flavors combine.", "Sprinkle with pistachios just before serving."]),
  makeRecipe("American", "dessert", "American Berry Oat Crisp", "Warm berries under a golden oat topping, served after a short cool-down.", "35 min", [300, 5, 48, 10], false,
    ["1½ cups mixed berries, fresh or frozen", "1 tsp cornstarch", "1 tsp sugar", "¼ cup rolled oats", "2 tbsp all-purpose flour", "1 tbsp brown sugar", "1 tbsp melted butter"],
    [["mixed berries", "diced apples"], ["butter", "melted coconut oil"]],
    ["Ask an adult to heat the oven to 190°C (375°F).", "Put the berries in a small oven-safe dish. Sprinkle with cornstarch and sugar, then stir gently to coat.", "In a separate bowl, mix the oats, flour, and brown sugar. Stir in the melted butter until small crumbs form.", "Sprinkle the oat mixture evenly over the berries. Ask an adult to bake for 22–25 minutes, until the topping is golden and the fruit is bubbling at the edges.", "Let the crisp cool for at least 10 minutes before serving; the fruit will be very hot."]),
];

const proteinCoverageRecipes = [
  makeRecipe("American", "breakfast", "Tofu Scramble Breakfast Hash", "Crisp potatoes with a gentle tofu scramble and sweet peppers.", "30 min", [390, 21, 48, 13], true,
    ["200 g firm tofu, crumbled", "2 potatoes, diced", "½ bell pepper, chopped", "¼ tsp mild turmeric", "1 tsp oil", "2 tbsp water"],
    [["tofu", "scrambled eggs"], ["bell pepper", "chopped tomato"]],
    ["Wash your hands and ask an adult to cut the potatoes into 1 cm cubes.", "Ask an adult to cook potatoes in a covered pan with 2 tablespoons of water for 10–12 minutes, stirring once, until fork-tender.", "Crumble tofu into a bowl and stir in turmeric.", "Add pepper and tofu to the pan; cook for 4–5 minutes until hot and the pepper softens.", "Serve the scramble with the potatoes."]),
  makeRecipe("American", "lunch", "Crispy Tofu Lettuce Cups", "Golden tofu and crunchy vegetables tucked into cool lettuce leaves.", "25 min", [360, 20, 42, 12], true,
    ["200 g firm tofu, cubed", "8 large lettuce leaves", "1 carrot, grated", "1 cup cooked rice", "1 tbsp low-sodium soy sauce"],
    [["tofu", "cooked chickpeas"], ["lettuce", "cabbage leaves"]],
    ["Wash your hands and rinse the lettuce and carrot.", "Ask an adult to cook tofu cubes in a pan over medium heat for 6–8 minutes, turning until golden on several sides.", "Add soy sauce and carrot and cook for 2–3 minutes until hot.", "Spoon rice and tofu mixture into lettuce leaves.", "Fold the leaves around the filling and serve."]),
  makeRecipe("American", "dinner", "Beef and Barley Stew", "A filling stew with tender beef, barley, carrots, and a mild herb broth.", "55 min", [450, 31, 57, 11], false,
    ["250 g beef stew pieces", "½ cup pearl barley", "1 carrot, diced", "3 cups low-sodium beef broth", "½ tsp dried thyme"],
    [["beef", "mushrooms"], ["pearl barley", "brown rice"]],
    ["Wash your hands and ask an adult to cut beef into 2 cm pieces and handle the hot pot.", "Add beef and broth to a pot and bring to a gentle simmer with adult help.", "Stir in barley, carrot, and thyme.", "Cover and simmer gently for 45–50 minutes, stirring every 15 minutes, until the beef is fork-tender and reaches at least 63°C (145°F), and the barley is soft.", "Take the pot off the heat and let it stand for 3 minutes before serving."]),
  makeRecipe("American", "dinner", "Stuffed Bell Peppers with Beef and Rice", "Bell peppers baked with a savory beef, tomato, and rice filling.", "45 min", [430, 27, 49, 14], false,
    ["2 bell peppers, halved", "200 g lean ground beef", "1 cup cooked rice", "½ cup crushed tomatoes", "¼ cup grated cheddar"],
    [["ground beef", "cooked lentils"], ["cheddar", "mozzarella"]],
    ["Ask an adult to heat the oven and help cut the peppers.", "Cook beef in a pan with adult help until it reaches 71°C (160°F).", "Mix beef with rice and crushed tomatoes.", "Fill pepper halves and ask an adult to bake until the peppers soften.", "Add cheese and bake until melted; cool before serving."]),
  makeRecipe("American", "lunch", "Chicken Noodle Soup", "A warm bowl of chicken, egg noodles, carrots, and celery in broth.", "35 min", [390, 27, 48, 9], true,
    ["200 g cooked chicken, shredded", "120 g egg noodles", "1 carrot, sliced", "1 celery stalk, sliced", "4 cups low-sodium chicken broth"],
    [["chicken", "cooked white beans"], ["egg noodles", "rice noodles"]],
    ["Wash your hands and ask an adult to prepare the vegetables and hot pot.", "Bring broth, carrot, and celery to a gentle simmer and cook for 5–7 minutes until the vegetables begin to soften.", "Add noodles and cook following the package directions.", "Stir in cooked chicken and heat until the thickest pieces reach 74°C (165°F).", "Let the soup stand for 5 minutes and serve." ]),

  makeRecipe("Italian", "dinner", "Lemon Herb Tofu with Creamy Polenta", "Pan-seared tofu with lemon and herbs served over soft polenta.", "35 min", [420, 23, 49, 14], true,
    ["200 g firm tofu, sliced", "½ cup quick-cooking polenta", "2 cups low-sodium vegetable broth", "½ lemon", "1 tbsp chopped parsley", "1 tsp neutral oil"],
    [["tofu", "white beans"], ["parsley", "fresh basil"]],
    ["Wash your hands and ask an adult to help with the hot stove.", "Ask an adult to whisk polenta into simmering broth and cook for the package time, stirring until thick.", "Heat 1 teaspoon of oil in a pan over medium heat. Cook tofu for 3–4 minutes per side until golden.", "Add lemon juice and parsley to the tofu.", "Serve tofu over warm polenta."]),
  makeRecipe("Italian", "lunch", "Baked Tofu Caprese", "Tomatoes, basil, and mozzarella baked over tofu for a warm Caprese-style dish.", "30 min", [390, 27, 24, 21], true,
    ["200 g firm tofu, sliced", "2 tomatoes, sliced", "½ cup mozzarella", "6 basil leaves", "1 tsp olive oil"],
    [["tofu", "thick slices of eggplant"], ["mozzarella", "plant-based cheese"]],
    ["Wash your hands and ask an adult to heat the oven.", "Place tofu and tomato slices in a small baking dish.", "Drizzle lightly with olive oil and add mozzarella.", "Ask an adult to bake until the cheese melts and tofu is hot.", "Top with torn basil and serve."]),
  makeRecipe("Italian", "dinner", "Italian Beef Meatballs with Polenta", "Beef meatballs in tomato sauce served with soft polenta.", "40 min", [490, 29, 48, 19], false,
    ["250 g lean ground beef", "1 egg", "¼ cup breadcrumbs", "1 cup tomato sauce", "½ cup quick-cooking polenta"],
    [["ground beef", "cooked lentils"], ["breadcrumbs", "certified gluten-free breadcrumbs"]],
    ["Wash your hands and ask an adult to heat the oven.", "Mix beef, egg, and breadcrumbs, then shape into small meatballs.", "Ask an adult to bake meatballs until they reach 71°C (160°F).", "Warm tomato sauce in a pan and add the cooked meatballs.", "Prepare polenta following its package directions and serve with meatballs."]),
  makeRecipe("Italian", "dinner", "Slow-Cooked Beef Ragu", "Tender beef simmered in tomato sauce and served over pasta.", "90 min", [510, 34, 58, 16], false,
    ["250 g beef stew pieces", "180 g pasta", "1 cup crushed tomatoes", "½ onion, chopped", "1 cup low-sodium beef broth"],
    [["beef", "mushrooms"], ["pasta", "gluten-free pasta"]],
    ["Ask an adult to cut beef into 2 cm pieces and use the stove.", "Simmer beef, tomato, onion, and broth in a covered pot over low heat for 60–70 minutes, stirring occasionally, until fork-tender and at least 63°C (145°F).", "Cook pasta following its package directions during the final 15 minutes.", "Take the pot off the heat and let the beef rest in the sauce for 3 minutes, then shred it carefully and stir it back in.", "Spoon sauce over drained pasta and serve."]),
  makeRecipe("Italian", "dinner", "Chicken Parmesan with Spaghetti", "Oven-baked chicken with tomato sauce and melted cheese over spaghetti.", "40 min", [520, 37, 57, 17], false,
    ["2 chicken cutlets", "½ cup breadcrumbs", "1 egg, beaten", "180 g spaghetti", "½ cup tomato sauce", "¼ cup mozzarella"],
    [["chicken", "thick eggplant slices"], ["spaghetti", "gluten-free spaghetti"]],
    ["Ask an adult to heat the oven and prepare raw chicken safely.", "Dip chicken in egg and breadcrumbs, then place on a lined tray.", "Ask an adult to bake until chicken reaches 74°C (165°F).", "Add tomato sauce and mozzarella; bake until cheese melts.", "Cook spaghetti following the package directions and serve with chicken."]),

  makeRecipe("Mexican", "dinner", "Tofu Mole Enchiladas", "Tofu and beans wrapped in corn tortillas with a mild chocolate-and-tomato mole sauce.", "40 min", [440, 23, 56, 14], false,
    ["200 g firm tofu, cubed", "4 corn tortillas", "½ cup black beans, rinsed", "¾ cup mild mole sauce", "¼ cup grated cheese"],
    [["tofu", "cooked chicken"], ["black beans", "pinto beans"]],
    ["Ask an adult to heat the oven and warm the mole sauce.", "Cook tofu cubes in a pan until lightly golden.", "Mix tofu with black beans and spoon into warm corn tortillas.", "Place rolled tortillas in a baking dish and cover with mole sauce.", "Ask an adult to bake until hot, then add cheese."]),
  makeRecipe("Mexican", "lunch", "Tofu Ranchero Stuffed Peppers", "Bell peppers filled with tofu, beans, and tomato for a hearty lunch.", "40 min", [370, 22, 43, 12], true,
    ["2 bell peppers, halved", "200 g firm tofu, crumbled", "½ cup pinto beans, rinsed", "½ cup chopped tomatoes", "¼ tsp mild cumin"],
    [["tofu", "cooked lentils"], ["pinto beans", "black beans"]],
    ["Ask an adult to heat the oven to 190°C (375°F) and help cut the peppers.", "Warm tofu, beans, tomatoes, and cumin in a pan over medium heat for 4–5 minutes.", "Spoon the filling into the pepper halves.", "Ask an adult to bake for 25–30 minutes until the peppers are tender and the filling is steaming hot.", "Let the peppers stand for 5 minutes and serve."]),
  makeRecipe("Mexican", "dinner", "Carne Asada Rice Bowl", "Grilled-style beef strips with rice, beans, and fresh tomato salsa.", "35 min", [490, 32, 58, 14], false,
    ["200 g beef strips", "1 cup uncooked rice", "½ cup black beans, rinsed", "1 tomato, diced", "½ lime"],
    [["beef", "portobello mushroom"], ["black beans", "pinto beans"]],
    ["Wash your hands and ask an adult to prepare the beef and use the stove.", "Cook rice following its package directions.", "Ask an adult to cook beef strips until they reach 63°C (145°F), then let them rest for 3 minutes.", "Warm the beans and mix tomato with lime juice.", "Serve beef with rice, beans, and fresh tomato salsa."]),
  makeRecipe("Mexican", "dinner", "Beef Enchiladas with Red Sauce", "Soft corn tortillas filled with beef and topped with a mild red sauce.", "40 min", [470, 29, 52, 16], false,
    ["200 g lean ground beef", "4 corn tortillas", "¾ cup mild red enchilada sauce", "¼ cup grated cheese", "½ cup chopped lettuce"],
    [["ground beef", "cooked black beans"], ["cheese", "plant-based grated cheese"]],
    ["Ask an adult to heat the oven and cook the beef until it reaches 71°C (160°F).", "Warm tortillas so they are easy to roll.", "Fill tortillas with beef and place them seam-side down in a baking dish.", "Cover with enchilada sauce and cheese; ask an adult to bake until hot.", "Top with lettuce and serve."]),

  makeRecipe("Japanese", "dinner", "Miso-Glazed Tofu with Eggplant", "Tofu and eggplant are roasted with a mild miso glaze and served with rice.", "35 min", [410, 23, 49, 13], true,
    ["200 g firm tofu, cubed", "1 small eggplant, cubed", "1 tbsp mild miso paste", "1 cup uncooked rice", "1 tsp honey", "1 tbsp water"],
    [["tofu", "cubed tempeh"], ["eggplant", "zucchini"]],
    ["Ask an adult to heat the oven to 200°C (400°F) and help cut the eggplant into 2 cm cubes.", "Cook rice following its package directions.", "Mix miso and honey with 1 tablespoon of water.", "Toss tofu and eggplant in the glaze and roast with adult help for 20–25 minutes, stirring once, until the eggplant is fork-tender.", "Serve over rice."]),
  makeRecipe("Japanese", "dinner", "Sukiyaki Beef and Vegetables", "Beef, tofu, mushrooms, and greens simmered in a mild savory broth.", "35 min", [460, 32, 42, 17], false,
    ["200 g beef strips", "150 g firm tofu, cubed", "1 cup sliced mushrooms", "1 cup chopped napa cabbage", "2 cups low-sodium broth"],
    [["beef", "chicken pieces"], ["napa cabbage", "bok choy"]],
    ["Wash your hands and ask an adult to prepare the beef and hot pot.", "Bring broth to a gentle simmer with adult help.", "Add beef and cook until it reaches 63°C (145°F); let it rest for 3 minutes before serving.", "Add tofu, mushrooms, and cabbage; simmer for 5–7 minutes until the vegetables soften and everything is hot.", "Serve in bowls with rice if you like."]),
  makeRecipe("Japanese", "lunch", "Beef Curry Udon", "Thick udon noodles in a mild curry broth with tender beef and carrots.", "30 min", [480, 26, 63, 13], false,
    ["150 g udon noodles", "150 g beef strips", "1 carrot, sliced", "3 cups low-sodium broth", "1 tbsp mild Japanese curry powder"],
    [["beef", "firm tofu"], ["udon noodles", "rice noodles"]],
    ["Wash your hands and ask an adult to help with the hot pot.", "Cook udon following its package directions.", "Simmer carrot and curry powder in broth for 5–7 minutes until the carrot softens.", "Ask an adult to cook beef in the broth until it reaches 63°C (145°F), then let it rest for 3 minutes.", "Add udon, heat through, and serve."]),

  makeRecipe("Chinese", "lunch", "Chicken and Sweet Corn Soup", "A mild broth with chicken, corn, and ribbons of fully cooked egg.", "25 min", [340, 26, 35, 9], true,
    ["200 g cooked chicken, shredded", "1 cup corn", "4 cups low-sodium chicken broth", "2 eggs, beaten", "1 tsp cornstarch mixed with water"],
    [["chicken", "firm tofu"], ["corn", "peas"]],
    ["Ask an adult to warm broth and corn in a pot; simmer for 3–4 minutes.", "Stir in the cornstarch mixture for 1 minute until the soup thickens slightly.", "Slowly pour in beaten eggs while an adult stirs the simmering soup; cook until no raw egg remains.", "Add cooked chicken and heat until the thickest pieces reach 74°C (165°F).", "Let it stand for 5 minutes before serving."]),

  makeRecipe("Indian", "dinner", "Tofu Saag", "Tofu cubes served in a gentle spinach sauce with rice.", "35 min", [400, 25, 45, 13], true,
    ["200 g firm tofu, cubed", "3 cups spinach", "½ cup plain yogurt", "½ tsp mild cumin", "1 cup uncooked rice"],
    [["tofu", "paneer"], ["plain yogurt", "unsweetened soy yogurt"]],
    ["Wash your hands and rinse the spinach.", "Cook rice following its package directions.", "Ask an adult to wilt spinach in a covered pan, then blend carefully.", "Stir cumin and yogurt into the spinach; add tofu and warm gently.", "Serve the saag over rice."]),
  makeRecipe("Indian", "lunch", "Tofu Kofta Curry", "Soft tofu and chickpea-flour dumplings served in a mild tomato curry.", "40 min", [430, 22, 53, 14], true,
    ["200 g firm tofu, mashed", "¼ cup chickpea flour", "1 cup crushed tomatoes", "½ tsp mild curry powder", "1 cup cooked rice"],
    [["tofu", "cooked chickpeas"], ["chickpea flour", "rice flour"]],
    ["Wash your hands and ask an adult to help with the hot stove.", "Mix tofu with chickpea flour and shape into small balls.", "Ask an adult to bake the tofu balls until firm and lightly golden.", "Warm tomatoes and curry powder in a pan, then add the tofu balls.", "Serve the curry with rice."]),
  makeRecipe("Indian", "dinner", "Mild Keema Matar", "Ground beef and peas simmered with tomato and gentle spices.", "35 min", [460, 30, 48, 16], false,
    ["200 g lean ground beef", "1 cup peas", "1 cup crushed tomatoes", "¼ tsp mild cumin", "1 cup uncooked rice"],
    [["ground beef", "cooked lentils"], ["peas", "diced carrots"]],
    ["Ask an adult to cook the rice following its package directions and help with the beef and hot pan.", "Cook beef with cumin, breaking it into small pieces, until it reaches 71°C (160°F).", "Stir in tomatoes and simmer gently for 8–10 minutes until the sauce thickens.", "Add peas and cook for 3–4 minutes until hot and tender.", "Serve over the rice."]),
  makeRecipe("Indian", "dinner", "Kerala-Inspired Beef and Potato Curry", "Beef and potatoes simmered in a mild coconut and tomato sauce.", "60 min", [480, 29, 45, 20], false,
    ["200 g beef stew pieces, cut into 2 cm cubes", "2 potatoes, diced", "½ cup light coconut milk", "½ cup crushed tomatoes", "½ tsp mild curry powder", "½ cup water"],
    [["beef", "chickpeas"], ["light coconut milk", "plain yogurt"]],
    ["Ask an adult to prepare the beef and help with the hot pot.", "Add beef and the measured ½ cup of water to a covered pot; simmer gently for 30 minutes.", "Add potatoes, tomatoes, coconut milk, and curry powder.", "Cover and simmer with adult help for 20–25 minutes until the beef is fork-tender and reaches at least 63°C (145°F), and a fork easily pierces the potatoes.", "Take the pot off the heat and let it stand for 3 minutes before serving warm with rice."]),
  makeRecipe("Chinese", "dinner", "Beef and Snow Pea Rice Bowl", "Lean beef and crisp snow peas served with brown rice and ginger.", "25 min", [410, 27, 51, 10], true,
    ["150 g lean beef strips", "1 cup cooked brown rice", "1½ cups snow peas", "1 carrot, thinly sliced", "1 tsp low-sodium soy sauce", "1 tsp grated ginger"],
    [["beef", "firm tofu"], ["snow peas", "green beans"]],
    ["Wash your hands and ask an adult to prepare the beef and use the stove.", "Warm the cooked brown rice following its package directions.", "With adult help, cook the beef in a pan until it reaches 63°C (145°F), then let it rest for 3 minutes.", "Add the snow peas, carrot, ginger, and soy sauce; stir-fry for 3–4 minutes until the vegetables are tender-crisp.", "Serve the beef and vegetables over the brown rice."]),
  makeRecipe("Indian", "dinner", "Lean Beef and Cauliflower Curry Bowl", "Lean beef, cauliflower, and peas simmered in a mild tomato curry.", "30 min", [420, 28, 51, 11], true,
    ["150 g lean ground beef", "1½ cups cauliflower florets", "½ cup peas", "½ cup crushed tomatoes", "½ tsp mild curry powder", "2 tbsp water", "1 cup cooked brown rice"],
    [["beef", "cooked lentils"], ["cauliflower", "diced zucchini"]],
    ["Wash your hands and ask an adult to help with the beef and stove.", "Warm the cooked brown rice following its package directions.", "Cook the ground beef in a pan with adult help until it reaches 71°C (160°F).", "Stir in the cauliflower, peas, tomatoes, curry powder, and 2 tablespoons of water.", "Cover and simmer for 8–10 minutes until the cauliflower is fork-tender, then serve over rice."]),
  makeRecipe("Mexican", "lunch", "Lime Chicken and Black Bean Bowl", "Chicken, black beans, and crunchy lettuce with lime and mild salsa.", "25 min", [420, 35, 54, 8], true,
    ["150 g chicken breast", "1 cup cooked brown rice", "½ cup black beans, rinsed", "1 cup shredded lettuce", "2 tbsp mild salsa", "½ lime"],
    [["chicken", "cooked pinto beans"], ["black beans", "cooked lentils"]],
    ["Wash your hands and ask an adult to prepare the raw chicken and use the stove.", "Warm the brown rice and rinsed beans until steaming.", "Cook the chicken with adult help until it reaches 74°C (165°F).", "Slice the cooked chicken with adult help and place it over the rice and beans.", "Top with lettuce, salsa, and a squeeze of lime."]),
  makeRecipe("Japanese", "dinner", "Chicken and Cabbage Miso Soup", "A gentle miso broth with chicken, cabbage, mushrooms, and rice.", "30 min", [380, 31, 45, 8], true,
    ["150 g chicken breast, thinly sliced", "3 cups low-sodium broth", "1 cup shredded cabbage", "½ cup sliced mushrooms", "1 tbsp mild miso", "1 cup cooked rice"],
    [["chicken", "firm tofu"], ["cabbage", "baby spinach"]],
    ["Wash your hands and ask an adult to prepare the chicken and use the stove.", "Bring the broth to a gentle simmer in a pot with adult help.", "Add the chicken and cook until it reaches 74°C (165°F).", "Stir in the cabbage, mushrooms, and miso; simmer until the vegetables are tender.", "Serve the soup with warm cooked rice."]),
  makeRecipe("Indian", "dinner", "Chicken Biryani", "Chicken and fragrant basmati rice cooked together with mild spices.", "45 min", [490, 32, 66, 10], false,
    ["200 g chicken pieces", "1 cup basmati rice", "1½ cups water", "½ onion, sliced", "½ cup plain yogurt", "½ tsp mild biryani spice"],
    [["chicken", "firm tofu"], ["basmati rice", "brown rice"]],
    ["Wash your hands and ask an adult to prepare raw chicken safely.", "Rinse rice and soak it in a bowl of water for 10 minutes; drain. Meanwhile, an adult can soften the onion in a pot for 4–5 minutes.", "Add chicken and biryani spice; cook until the thickest piece reaches 74°C (165°F).", "Stir in rice, yogurt, and 1½ cups water; cover and simmer gently for 12–15 minutes until rice is tender and the liquid is absorbed.", "Fluff carefully and serve hot."]),
  makeRecipe("Indian", "lunch", "Tandoori Chicken Skewers", "Mild yogurt-marinated chicken roasted with peppers and served with rice.", "35 min", [440, 35, 42, 13], false,
    ["200 g chicken breast, cubed", "½ cup plain yogurt", "½ tsp mild tandoori seasoning", "1 bell pepper, chopped", "1 cup uncooked rice"],
    [["chicken", "paneer cubes"], ["plain yogurt", "unsweetened soy yogurt"]],
    ["Ask an adult to heat the oven and prepare raw chicken safely.", "Mix yogurt and seasoning, then coat the chicken and pepper.", "Thread onto skewers with adult help or spread on a lined tray.", "Bake until chicken reaches 74°C (165°F) and pepper is tender.", "Serve with rice."])
];

const mainIngredients = {
  egg: { name: "eggs", ingredient: "3 eggs", cook: "Ask an adult to help cook the eggs until fully set.", calories: 140, protein: 12, carbs: 1, fat: 10 },
  tofu: { name: "tofu", ingredient: "200 g firm tofu, cubed", cook: "Cook the tofu until golden and hot.", calories: 145, protein: 16, carbs: 4, fat: 9 },
  chicken: { name: "chicken", ingredient: "200 g chicken breast, cut into pieces", cook: "Ask an adult to cook the chicken until it reaches 74°C (165°F).", calories: 165, protein: 31, carbs: 0, fat: 4 },
  edamame: { name: "edamame", ingredient: "1 cup shelled edamame", cook: "Heat the edamame until steaming hot.", calories: 95, protein: 9, carbs: 7, fat: 4 },
  shrimp: { name: "shrimp", ingredient: "200 g peeled shrimp", cook: "Ask an adult to cook the shrimp until opaque and safely cooked through.", calories: 100, protein: 24, carbs: 0, fat: 1 },
  beef: { name: "beef", ingredient: "200 g beef strips", cook: "Ask an adult to cook the beef to a safe temperature for its cut.", calories: 175, protein: 26, carbs: 0, fat: 8 },
  mushrooms: { name: "mushrooms", ingredient: "200 g sliced mushrooms", cook: "Cook the mushrooms until soft and steaming hot.", calories: 25, protein: 3, carbs: 4, fat: 0 },
  blackBeans: { name: "black beans", ingredient: "1 cup cooked black beans, rinsed", cook: "Heat the beans until steaming hot.", calories: 115, protein: 8, carbs: 20, fat: 1 },
  pintoBeans: { name: "pinto beans", ingredient: "1 cup cooked pinto beans, rinsed", cook: "Heat the beans until steaming hot.", calories: 120, protein: 8, carbs: 22, fat: 1 },
  turkey: { name: "turkey", ingredient: "200 g turkey pieces", cook: "Ask an adult to cook the turkey until it reaches 74°C (165°F).", calories: 155, protein: 30, carbs: 0, fat: 4 },
  whiteBeans: { name: "white beans", ingredient: "1 cup cooked white beans, rinsed", cook: "Heat the beans until steaming hot.", calories: 120, protein: 8, carbs: 22, fat: 1 },
  chickpeas: { name: "chickpeas", ingredient: "1 cup cooked chickpeas, rinsed", cook: "Heat the chickpeas until steaming hot.", calories: 135, protein: 7, carbs: 22, fat: 2 },
  lentils: { name: "lentils", ingredient: "1 cup cooked lentils", cook: "Heat the lentils until steaming hot.", calories: 115, protein: 9, carbs: 20, fat: 1 },
  salmon: { name: "salmon", ingredient: "200 g salmon, cut into pieces", cook: "Ask an adult to cook the salmon until it is safely cooked through.", calories: 205, protein: 22, carbs: 0, fat: 13 },
  paneer: { name: "paneer", ingredient: "200 g paneer, cubed", cook: "Cook the paneer until golden and hot.", calories: 160, protein: 12, carbs: 4, fat: 12 },
  kidneyBeans: { name: "kidney beans", ingredient: "1 cup cooked kidney beans, rinsed", cook: "Heat the beans until steaming hot.", calories: 115, protein: 8, carbs: 20, fat: 1 },
  corn: { name: "corn", ingredient: "1 cup cooked corn", cook: "Heat the corn until steaming hot.", calories: 75, protein: 3, carbs: 17, fat: 1 }
};

const vegetableIngredients = {
  bokChoy: { name: "bok choy", ingredient: "1 cup chopped bok choy" },
  broccoli: { name: "broccoli", ingredient: "1 cup broccoli florets" },
  carrots: { name: "carrots", ingredient: "1 medium carrot, thinly sliced" },
  cabbage: { name: "cabbage", ingredient: "1 cup shredded cabbage" },
  snowPeas: { name: "snow peas", ingredient: "1 cup snow peas" },
  bellPeppers: { name: "bell peppers", ingredient: "1 bell pepper, sliced" },
  spinach: { name: "spinach", ingredient: "1 cup spinach" },
  zucchini: { name: "zucchini", ingredient: "1 small zucchini, sliced" },
  tomatoes: { name: "tomatoes", ingredient: "1 cup chopped tomatoes" },
  onion: { name: "onion", ingredient: "1 small onion, sliced" },
  corn: { name: "corn", ingredient: "1 cup corn" },
  peas: { name: "peas", ingredient: "1 cup peas" },
  cauliflower: { name: "cauliflower", ingredient: "1 cup cauliflower florets" },
  potatoes: { name: "potatoes", ingredient: "1 small potato, diced" },
  eggplant: { name: "eggplant", ingredient: "1 cup diced eggplant" },
  greenBeans: { name: "green beans", ingredient: "1 cup chopped green beans" },
  asparagus: { name: "asparagus", ingredient: "1 cup chopped asparagus" }
};

const recipeBases = {
  rice: { name: "rice", ingredient: "1 cup uncooked rice", step: "Cook the rice following its package directions.", calories: 170, protein: 3, carbs: 37, fat: 0 },
  brownRice: { name: "brown rice", ingredient: "1 cup uncooked brown rice", step: "Cook the brown rice following its package directions.", calories: 170, protein: 4, carbs: 36, fat: 1 },
  noodles: { name: "noodles", ingredient: "180 g noodles", step: "Cook the noodles following their package directions.", calories: 190, protein: 7, carbs: 38, fat: 1 },
  pasta: { name: "pasta", ingredient: "180 g pasta", step: "Cook the pasta following its package directions.", calories: 185, protein: 7, carbs: 38, fat: 1 },
  tortillas: { name: "tortillas", ingredient: "4 small tortillas", step: "Warm the tortillas in a dry pan with an adult's help.", calories: 130, protein: 4, carbs: 25, fat: 3 },
  flatbread: { name: "flatbread", ingredient: "2 small flatbreads", step: "Warm the flatbreads following their package directions.", calories: 150, protein: 5, carbs: 29, fat: 2 },
  oats: { name: "oats", ingredient: "1 cup rolled oats", step: "Cook the oats following the package directions. Ask an adult for help with hot bowls.", calories: 150, protein: 5, carbs: 27, fat: 3 },
  toast: { name: "toast", ingredient: "4 slices whole-grain bread", step: "Toast the bread and set it aside.", calories: 140, protein: 6, carbs: 24, fat: 2 },
  potatoes: { name: "potatoes", ingredient: "2 medium potatoes, diced", step: "Ask an adult to help cook the potatoes until tender.", calories: 160, protein: 4, carbs: 36, fat: 0 }
};

const cuisineProfiles = [
  {
    name: "Chinese",
    meals: { breakfast: "Savory Breakfast Bowl", lunch: "Noodle Bowl", dinner: "Ginger Rice Bowl" },
    mains: ["egg", "tofu", "chicken", "edamame", "shrimp", "beef", "mushrooms"],
    vegetables: ["bokChoy", "broccoli", "carrots", "cabbage", "snowPeas", "bellPeppers", "spinach", "zucchini"],
    bases: { breakfast: ["rice", "brownRice"], lunch: ["noodles", "rice"], dinner: ["rice", "noodles"] },
    sauce: { ingredient: "2 tbsp low-sodium soy sauce and 1 tsp grated ginger", name: "soy and ginger", calories: 20, protein: 2, carbs: 2, fat: 0 }
  },
  {
    name: "Mexican",
    meals: { breakfast: "Breakfast Taco Plate", lunch: "Burrito Bowl", dinner: "Taco Bowl" },
    mains: ["egg", "blackBeans", "chicken", "pintoBeans", "tofu", "turkey", "corn"],
    vegetables: ["tomatoes", "bellPeppers", "onion", "zucchini", "spinach", "carrots", "cabbage", "peas"],
    bases: { breakfast: ["tortillas", "rice"], lunch: ["rice", "tortillas"], dinner: ["rice", "tortillas"] },
    sauce: { ingredient: "2 tbsp mild salsa and 1 tsp lime juice", name: "mild salsa and lime", calories: 15, protein: 0, carbs: 3, fat: 0 }
  },
  {
    name: "Italian",
    meals: { breakfast: "Tomato Breakfast Toast", lunch: "Tuscan Grain Bowl", dinner: "Pasta Bowl" },
    mains: ["egg", "whiteBeans", "chicken", "mushrooms", "chickpeas", "tofu", "lentils"],
    vegetables: ["tomatoes", "spinach", "zucchini", "broccoli", "bellPeppers", "carrots", "peas", "eggplant"],
    bases: { breakfast: ["toast", "flatbread"], lunch: ["pasta", "brownRice"], dinner: ["pasta", "rice"] },
    sauce: { ingredient: "½ cup tomato sauce and a pinch of dried basil", name: "tomato and basil", calories: 30, protein: 1, carbs: 6, fat: 0 }
  },
  {
    name: "Japanese",
    meals: { breakfast: "Rice Breakfast Bowl", lunch: "Noodle Bowl", dinner: "Donburi Bowl" },
    mains: ["egg", "tofu", "chicken", "edamame", "salmon", "mushrooms", "shrimp"],
    vegetables: ["bokChoy", "broccoli", "carrots", "cabbage", "spinach", "snowPeas", "zucchini", "greenBeans"],
    bases: { breakfast: ["rice", "brownRice"], lunch: ["noodles", "rice"], dinner: ["rice", "noodles"] },
    sauce: { ingredient: "1 tbsp low-sodium soy sauce and 1 tsp sesame seeds", name: "soy and sesame", calories: 25, protein: 1, carbs: 2, fat: 1 }
  },
  {
    name: "Indian",
    meals: { breakfast: "Spiced Breakfast Bowl", lunch: "Chickpea Bowl", dinner: "Curry Bowl" },
    mains: ["egg", "chickpeas", "lentils", "paneer", "tofu", "chicken", "kidneyBeans"],
    vegetables: ["tomatoes", "spinach", "peas", "carrots", "cauliflower", "bellPeppers", "potatoes", "zucchini"],
    bases: { breakfast: ["flatbread", "rice"], lunch: ["rice", "flatbread"], dinner: ["rice", "flatbread"] },
    sauce: { ingredient: "½ cup tomato sauce and 1 tsp mild curry powder", name: "mild curry tomato sauce", calories: 30, protein: 1, carbs: 6, fat: 0 }
  },
  {
    name: "American",
    meals: { breakfast: "Breakfast Skillet", lunch: "Garden Grain Bowl", dinner: "Comfort Bowl" },
    mains: ["egg", "chicken", "turkey", "blackBeans", "tofu", "mushrooms", "chickpeas"],
    vegetables: ["tomatoes", "spinach", "broccoli", "carrots", "corn", "zucchini", "bellPeppers", "greenBeans"],
    bases: { breakfast: ["oats", "toast"], lunch: ["brownRice", "toast"], dinner: ["rice", "pasta"] },
    sauce: { ingredient: "1 tsp garlic and 1 tbsp lemon juice", name: "garlic and lemon", calories: 10, protein: 0, carbs: 2, fat: 0 }
  }
];

const originalRecipeFamilies = {
  Chinese: [
    { name: "Fried Rice", meal: "dinner", method: "friedRice", base: "rice" },
    { name: "Ginger Breakfast Rice", meal: "breakfast", method: "bowl", base: "rice" },
    { name: "Chow Mein", meal: "lunch", method: "noodles", base: "noodles" },
    { name: "Ginger Noodle Soup", meal: "lunch", method: "soup", base: "noodles" },
    { name: "Sesame Stir-Fry", meal: "dinner", method: "stirFry", base: "rice" },
    { name: "Bok Choy Rice Bowl", meal: "lunch", method: "bowl", base: "rice" },
    { name: "Congee Bowl", meal: "breakfast", method: "congee", base: "rice" },
    { name: "Garlic Noodle Bowl", meal: "dinner", method: "noodles", base: "noodles" }
  ],
  Mexican: [
    { name: "Breakfast Taco Skillet", meal: "breakfast", method: "skillet", base: "potatoes" },
    { name: "Bean Breakfast Tacos", meal: "breakfast", method: "tacos", base: "tortillas" },
    { name: "Black Bean Burrito Bowl", meal: "lunch", method: "bowl", base: "rice" },
    { name: "Chicken Fajita Tacos", meal: "dinner", method: "tacos", base: "tortillas" },
    { name: "Salsa Rice Bowl", meal: "lunch", method: "bowl", base: "rice" },
    { name: "Mild Bean Chili", meal: "dinner", method: "soup", base: "rice" },
    { name: "Vegetable Quesadilla Plate", meal: "lunch", method: "tacos", base: "tortillas" },
    { name: "Taco Rice Bowl", meal: "dinner", method: "bowl", base: "rice" }
  ],
  Italian: [
    { name: "Breakfast Bruschetta", meal: "breakfast", method: "toast", base: "toast" },
    { name: "Tuscan Bean Soup", meal: "lunch", method: "soup", base: "rice" },
    { name: "Tomato Basil Pasta", meal: "dinner", method: "pasta", base: "pasta" },
    { name: "Mushroom Rice Bowl", meal: "lunch", method: "bowl", base: "rice" },
    { name: "Pesto Pasta Bowl", meal: "dinner", method: "pasta", base: "pasta" },
    { name: "Egg and Spinach Toast", meal: "breakfast", method: "toast", base: "toast" },
    { name: "Lentil Tomato Soup", meal: "lunch", method: "soup", base: "rice" },
    { name: "Stuffed Pepper Bowl", meal: "dinner", method: "bowl", base: "rice" }
  ],
  Japanese: [
    { name: "Tamago Rice Bowl", meal: "breakfast", method: "bowl", base: "rice" },
    { name: "Miso Noodle Soup", meal: "lunch", method: "soup", base: "noodles" },
    { name: "Teriyaki Rice Bowl", meal: "dinner", method: "bowl", base: "rice" },
    { name: "Yakisoba Noodles", meal: "dinner", method: "noodles", base: "noodles" },
    { name: "Vegetable Udon Bowl", meal: "lunch", method: "noodles", base: "noodles" },
    { name: "Onigiri-Inspired Bowl", meal: "lunch", method: "bowl", base: "rice" },
    { name: "Miso Breakfast Rice", meal: "breakfast", method: "congee", base: "rice" },
    { name: "Sesame Vegetable Stir-Fry", meal: "dinner", method: "stirFry", base: "rice" }
  ],
  Indian: [
    { name: "Masala Breakfast Bowl", meal: "breakfast", method: "bowl", base: "rice" },
    { name: "Chana Masala Bowl", meal: "lunch", method: "curry", base: "rice" },
    { name: "Dal Rice Bowl", meal: "dinner", method: "curry", base: "rice" },
    { name: "Paneer Tomato Curry", meal: "dinner", method: "curry", base: "flatbread" },
    { name: "Vegetable Biryani Bowl", meal: "dinner", method: "biryani", base: "rice" },
    { name: "Spiced Egg Toast", meal: "breakfast", method: "toast", base: "toast" },
    { name: "Lentil Soup Bowl", meal: "lunch", method: "soup", base: "rice" },
    { name: "Saag Rice Bowl", meal: "lunch", method: "curry", base: "rice" }
  ],
  American: [
    { name: "Potato Breakfast Hash", meal: "breakfast", method: "skillet", base: "potatoes" },
    { name: "Breakfast Egg Toast", meal: "breakfast", method: "toast", base: "toast" },
    { name: "Chicken Wrap", meal: "lunch", method: "wrap", base: "tortillas" },
    { name: "Turkey Chili Bowl", meal: "dinner", method: "soup", base: "rice" },
    { name: "Tomato Garden Pasta", meal: "lunch", method: "pasta", base: "pasta" },
    { name: "Black Bean Bowl", meal: "lunch", method: "bowl", base: "rice" },
    { name: "Vegetable Rice Bowl", meal: "dinner", method: "bowl", base: "rice" },
    { name: "Chicken Comfort Bowl", meal: "dinner", method: "bowl", base: "rice" }
  ]
};

function createGeneratedRecipes() {
  const generated = [];
  const meals = ["breakfast", "lunch", "dinner"];
  const groupCount = cuisineProfiles.length * meals.length;
  const generatedCount = 1000 - recipes.length;
  const recipesPerGroup = Math.floor(generatedCount / groupCount);
  const extraRecipes = generatedCount % groupCount;
  let groupIndex = 0;

  cuisineProfiles.forEach((cuisine) => {
    meals.forEach((meal) => {
      const count = recipesPerGroup + Number(groupIndex < extraRecipes);

      for (let variant = 0; variant < count; variant += 1) {
        const main = mainIngredients[cuisine.mains[Math.floor(variant / 8)]];
        const vegetable = vegetableIngredients[cuisine.vegetables[variant % 8]];
        const baseOptions = cuisine.bases[meal];
        const base = recipeBases[baseOptions[(variant + groupIndex) % baseOptions.length]];
        const sauce = cuisine.sauce;
        const calories = main.calories + vegetableCalories(vegetable) + base.calories + sauce.calories;

        generated.push({
          meal,
          cuisine: cuisine.name,
          name: `${cuisine.name} ${cuisine.meals[meal]} with ${main.name} and ${vegetable.name}`,
          description: `A ${cuisine.name} ${meal} idea with ${main.name} and ${vegetable.name}, served with ${base.name}.`,
          whyItWorks: `${main.name} and ${vegetable.name} bring different flavors and textures to this ${meal} idea.`,
          lighterSwap: `Use a little less ${sauce.name} and add an extra handful of ${vegetable.name}.`,
          time: meal === "breakfast" ? "15 min" : meal === "lunch" ? "25 min" : "30 min",
          servings: 2,
          calories,
          protein: main.protein + 2 + base.protein + sauce.protein,
          carbs: main.carbs + 6 + base.carbs + sauce.carbs,
          fat: main.fat + base.fat + sauce.fat,
          tags: ["Recipe variation"],
          ingredients: [main.ingredient, vegetable.ingredient, base.ingredient, sauce.ingredient],
          steps: [
            "Wash your hands and rinse the vegetables. Ask an adult to help with chopping and hot pans.",
            base.step,
            main.cook,
            `Add the ${vegetable.name} and ${sauce.name}. Cook the vegetables until tender, stirring carefully.`,
            `Serve the ${main.name} and vegetables with the ${base.name}.`
          ],
          generated: true
        });
      }

      groupIndex += 1;
    });
  });

  return generated;
}

function createOriginalCuisineRecipes() {
  return cuisineProfiles.flatMap((cuisine) =>
    originalRecipeFamilies[cuisine.name].flatMap((family, familyIndex) =>
      Array.from({ length: 5 }, (_, variant) => {
        const mainKey = cuisine.mains[(familyIndex + variant) % cuisine.mains.length];
        const main = mainIngredients[mainKey];
        const vegetable = vegetableIngredients[cuisine.vegetables[familyIndex]];
        const base = recipeBases[family.base];
        const sauce = cuisine.sauce;
        const calories = main.calories + vegetableCalories(vegetable) + base.calories + sauce.calories;
        const ingredients = [main.ingredient, vegetable.ingredient, base.ingredient, sauce.ingredient];
        const steps = createOriginalRecipeSteps(family, main, vegetable, base, sauce);

        if (family.method === "soup" || family.method === "congee") {
          ingredients.push("1 cup low-sodium vegetable broth");
        }

        return {
          meal: family.meal,
          cuisine: cuisine.name,
          name: `${cuisine.name} ${family.name} with ${main.name} and ${vegetable.name}`,
          description: `An original ${cuisine.name} recipe idea with ${main.name} and ${vegetable.name}.`,
          whyItWorks: `${main.name} and ${vegetable.name} bring different flavors and textures to this ${family.name.toLowerCase()}.`,
          lighterSwap: `Use a little less ${sauce.name} and add an extra handful of ${vegetable.name}.`,
          time: family.method === "soup" || family.method === "congee" || family.method === "curry" ? "30 min" : "20 min",
          servings: 2,
          calories,
          protein: main.protein + 2 + base.protein + sauce.protein,
          carbs: main.carbs + 6 + base.carbs + sauce.carbs,
          fat: main.fat + base.fat + sauce.fat,
          tags: ["Original recipe idea"],
          ingredients,
          steps,
          original: true
        };
      })
    )
  );
}

function createOriginalRecipeSteps(family, main, vegetable, base, sauce) {
  const prep = "Wash your hands and rinse the vegetables. Ask an adult to help with chopping and hot pans.";
  const vegetablesAndSauce = `Add the ${vegetable.name} and ${sauce.name}. Cook the vegetables until tender, stirring carefully.`;

  switch (family.method) {
    case "friedRice":
      return [
        prep,
        base.step,
        main.cook,
        vegetablesAndSauce,
        `Add the cooked ${base.name} and stir until everything is steaming hot.`
      ];
    case "noodles":
    case "pasta":
      return [
        prep,
        base.step,
        main.cook,
        vegetablesAndSauce,
        `Toss the cooked ${base.name} with the pan ingredients and serve hot.`
      ];
    case "soup":
      return [
        prep,
        base.step,
        main.cook,
        "Ask an adult to warm the vegetable broth in a pot.",
        `Add the vegetables, sauce, and cooked ${base.name}. Simmer until everything is hot.`
      ];
    case "congee":
      return [
        prep,
        "Ask an adult to simmer the rice with vegetable broth until soft and creamy.",
        main.cook,
        vegetablesAndSauce,
        "Spoon the rice and toppings into bowls and serve warm."
      ];
    case "curry":
      return [
        prep,
        base.step,
        main.cook,
        `Warm the ${vegetable.name} and ${sauce.name} in a pan with a splash of water.`,
        `Add the cooked ${main.name}, heat everything through, and serve with ${base.name}.`
      ];
    case "tacos":
    case "wrap":
      return [
        prep,
        base.step,
        main.cook,
        vegetablesAndSauce,
        `Fill the warm ${base.name} with the cooked ingredients and serve.`
      ];
    case "toast":
      return [
        prep,
        base.step,
        main.cook,
        vegetablesAndSauce,
        `Spoon the warm ingredients over the ${base.name} and serve.`
      ];
    case "skillet":
      return [
        prep,
        base.step,
        main.cook,
        vegetablesAndSauce,
        `Stir the cooked ${base.name} into the pan and serve warm.`
      ];
    case "biryani":
      return [
        prep,
        base.step,
        main.cook,
        vegetablesAndSauce,
        `Fold the cooked ${base.name} into the pan and serve.`
      ];
    case "stirFry":
    case "bowl":
    default:
      return [
        prep,
        base.step,
        main.cook,
        vegetablesAndSauce,
        `Serve the ${main.name} and vegetables over the ${base.name}.`
      ];
  }
}

function vegetableCalories() {
  return 25;
}

function getDietaryTags(recipe) {
  const ingredients = recipe.ingredients.map((ingredient) => ingredient.toLowerCase());
  const containsMeatOrFish = ingredients.some((ingredient) =>
    /\b(beef|chicken|turkey|pork|bacon|ham|sausage|lamb|goat|fish|salmon|shrimp|prawns|tuna|anchovies|oyster sauce|fish sauce)\b/.test(ingredient)
  );
  const containsGluten = ingredients.some((ingredient) => {
    if (/\bcorn tortillas?\b|\b(chickpea|gram|rice|corn) flour\b/.test(ingredient)) {
      return false;
    }

    return /\b(wheat|barley|rye|bulgur|couscous|semolina|flour|bread|pasta|noodles?|udon|soba|panko|breadcrumbs?|flatbread|oats?|soy sauce|miso|bean sauce|mole sauce|enchilada sauce|barbecue sauce|gnocchi|tortillas?)\b/.test(ingredient);
  });
  const dietaryTags = [];

  if (!containsMeatOrFish) dietaryTags.push("vegetarian");
  if (!containsGluten) dietaryTags.push("gluten-free");
  return dietaryTags;
}

const recipeCatalog = [
  ...recipes,
  ...uniqueRecipes,
  ...additionalRecipes,
  ...proteinCoverageRecipes
].map((recipe) => ({
  ...recipe,
  dietaryTags: getDietaryTags(recipe)
}));

const hero = document.querySelector(".hero");
const recipeFinder = document.querySelector("#recipe-finder");
const searchInput = document.querySelector("#recipe-search");
const recipeDialog = document.querySelector("#recipe-dialog");
const dialogContent = document.querySelector("#dialog-content");
const closeDialog = document.querySelector("#close-dialog");
const fridgeDialog = document.querySelector("#fridge-dialog");
const fridgeSearchInput = document.querySelector("#fridge-search");
const fridgeIngredientList = document.querySelector("#fridge-ingredients");
const fridgeSelectedList = document.querySelector("#fridge-selected");
const fridgeCount = document.querySelector("#fridge-count");
const openFridge = document.querySelector("#open-fridge");
const closeFridge = document.querySelector("#close-fridge");
const clearFridge = document.querySelector("#clear-fridge");
const doneFridge = document.querySelector("#done-fridge");
const cuisineStorageKey = "recipeCuisine";
const mealStorageKey = "recipeMeal";
const lightStorageKey = "recipeLightOnly";
const fridgeStorageKey = "fridgeIngredients";
const dietaryStorageKey = "recipeDietaryFilters";
const cuisineFilters = Array.from(document.querySelectorAll(".cuisine-filter"));
const mealFilters = Array.from(document.querySelectorAll(".meal-filter"));
const dietaryFilters = Array.from(document.querySelectorAll(".dietary-filter"));
const dietaryFilterOptions = ["vegetarian", "gluten-free"];
const lightFilter = document.querySelector("#light-filter");
const recipeCount = document.querySelector("#recipe-count");
const savedCuisine = localStorage.getItem(cuisineStorageKey) || "all";
const savedDietaryFilters = JSON.parse(localStorage.getItem(dietaryStorageKey) || "[]");
let activeDietaryFilters = new Set(
  Array.isArray(savedDietaryFilters)
    ? savedDietaryFilters.filter((filter) => dietaryFilterOptions.includes(filter))
    : []
);
const fridgeIngredientOptions = Array.from(new Set([
  ...Object.values(mainIngredients).map((ingredient) => ingredient.name),
  ...Object.values(vegetableIngredients).map((ingredient) => ingredient.name),
  ...Object.values(recipeBases).map((base) => base.name),
  "avocado", "banana", "basil", "berries", "cheese", "cucumber", "garlic",
  "honey", "lettuce", "lemon", "lime", "milk", "olive oil", "peanut butter",
  "pesto", "plain yogurt", "tomato", "vegetable broth", "rice", "eggs", "peas",
  "carrot", "chicken", "cabbage", "tofu", "mushrooms", "shrimp", "broccoli",
  "beef", "spinach", "tortillas", "black beans", "sweet potato", "corn",
  "pasta", "salmon", "edamame", "noodles", "lentils", "cauliflower", "potatoes",
  "yogurt", "paneer", "oats", "blueberries", "turkey", "kidney beans", "bread",
  "onion", "bell pepper", "celery", "mozzarella", "soy sauce", "ginger"
])).sort();
const fridgeIngredientCategories = [
  {
    name: "Protein",
    ingredients: new Set([
      "beef", "black beans", "chicken", "chickpeas", "edamame", "eggs", "kidney beans",
      "lentils", "milk", "mozzarella", "paneer", "peanut butter", "pinto beans", "plain yogurt",
      "salmon", "shrimp", "tofu", "turkey", "white beans", "yogurt", "cheese"
    ])
  },
  {
    name: "Vegetables",
    ingredients: new Set([
      "asparagus", "bell pepper", "bell peppers", "bok choy", "broccoli", "cabbage", "carrot",
      "carrots", "cauliflower", "celery", "cucumber", "eggplant", "garlic", "green beans",
      "lettuce", "mushrooms", "onion", "peas", "snow peas", "spinach", "tomato", "tomatoes",
      "zucchini"
    ])
  },
  {
    name: "Carbs",
    ingredients: new Set([
      "brown rice", "corn", "flatbread", "noodles", "oats", "pasta", "potatoes", "rice",
      "sweet potato", "toast", "tortillas", "bread"
    ])
  }
];
const savedFridgeIngredients = JSON.parse(localStorage.getItem(fridgeStorageKey) || "[]");
const selectedFridgeIngredients = new Set(
  Array.isArray(savedFridgeIngredients)
    ? savedFridgeIngredients.filter((ingredient) => fridgeIngredientOptions.includes(ingredient))
    : []
);
let activeCuisine = ["all", "Asian", "Chinese", "Mexican", "Italian", "Japanese", "Indian", "American"].includes(savedCuisine)
  ? savedCuisine
  : "all";
const savedMeal = localStorage.getItem(mealStorageKey) || "all";
let activeMeal = ["all", "breakfast", "lunch", "dinner", "dessert"].includes(savedMeal) ? savedMeal : "all";
let lightOnly = localStorage.getItem(lightStorageKey) === "true";

function normalizeIngredient(value) {
  return value
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => {
      if (word.endsWith("ies")) return `${word.slice(0, -3)}y`;
      if (word.endsWith("oes")) return word.slice(0, -2);
      if (word.endsWith("s") && !word.endsWith("ss")) return word.slice(0, -1);
      return word;
    })
    .join(" ");
}

function getFridgeMatchCount(recipe) {
  const recipeIngredients = recipe.ingredients.map((ingredient) => normalizeIngredient(ingredient).split(" "));
  return Array.from(selectedFridgeIngredients).filter((selected) => {
    const selectedWords = normalizeIngredient(selected).split(" ");
    return recipeIngredients.some((words) =>
      words.some((_, index) =>
        selectedWords.every((word, offset) => words[index + offset] === word)
      )
    );
  }).length;
}

function renderRecipes(searchText = searchInput.value) {
  const search = searchText.trim().toLowerCase();
  const visibleRecipes = recipeCatalog.filter((recipe) => {
    const searchableText = `${recipe.name} ${recipe.description} ${recipe.cuisine} ${recipe.ingredients.join(" ")} ${recipe.tags.join(" ")} ${recipe.dietaryTags.join(" ")}`
      + (selectedFridgeIngredients.size === 0 ? ` ${recipe.substitutions.flat().join(" ")}` : "");
    const matchesSearch = searchableText
      .toLowerCase()
      .includes(search);
    const matchesCuisine = activeCuisine === "all"
      || (activeCuisine === "Asian" && ["Chinese", "Japanese", "Indian"].includes(recipe.cuisine))
      || recipe.cuisine === activeCuisine;
    const matchesMeal = activeMeal === "all" || recipe.meal === activeMeal;
    const matchesLight = !lightOnly || recipe.light;
    const matchesFridge = selectedFridgeIngredients.size === 0 || getFridgeMatchCount(recipe) > 0;
    const matchesDietary = Array.from(activeDietaryFilters).every((filter) => recipe.dietaryTags.includes(filter));
    return matchesSearch && matchesCuisine && matchesMeal && matchesLight && matchesFridge && matchesDietary;
  }).sort((first, second) => getFridgeMatchCount(second) - getFridgeMatchCount(first));

  document.querySelectorAll(".meal-grid").forEach((container) => {
    container.replaceChildren();
  });

  visibleRecipes.forEach((recipe) => {
    const container = document.querySelector(`#${recipe.meal}-recipes`);
    const card = document.createElement("article");
    card.className = "meal-card";
    card.innerHTML = `
      <p class="meal-card-label">${recipe.cuisine} · ${recipe.time}${recipe.light ? " · Lighter choice" : ""}</p>
      <h3>${recipe.name}</h3>
      <p>${recipe.description}</p>
      ${recipe.dietaryTags.length ? `<p class="meal-card-dietary">${recipe.dietaryTags.map((tag) => tag === "gluten-free" ? "Gluten-free" : "Vegetarian").join(" · ")}</p>` : ""}
      ${selectedFridgeIngredients.size > 0 ? `<p class="fridge-match-note">Matches ${getFridgeMatchCount(recipe)} food${getFridgeMatchCount(recipe) === 1 ? "" : "s"} you selected</p>` : ""}
      <button class="read-recipe-button" type="button">Read recipe <span aria-hidden="true">→</span></button>
    `;
    card.querySelector("button").addEventListener("click", () => openRecipe(recipe));
    container.appendChild(card);
  });

  document.querySelectorAll(".meal-grid").forEach((container) => {
    if (container.childElementCount === 0) {
      const emptyMessage = document.createElement("p");
      emptyMessage.className = "no-recipes";
      emptyMessage.textContent = search
        ? "No matches here. Try a different food."
        : "No recipes in this meal for the selected cuisine.";
      container.appendChild(emptyMessage);
    }
  });

  const activeFilters = [
    activeMeal !== "all" ? activeMeal : "",
    activeCuisine !== "all" ? activeCuisine : "",
    lightOnly ? "lighter choices" : "",
    ...Array.from(activeDietaryFilters)
  ].filter(Boolean);
  recipeCount.textContent = `Showing ${visibleRecipes.length} ${visibleRecipes.length === 1 ? "recipe" : "recipes"}`
    + (activeFilters.length ? ` · ${activeFilters.join(" · ")}` : "")
    + (selectedFridgeIngredients.size > 0 ? " · using your foods" : "");
  cuisineFilters.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.cuisine === activeCuisine));
  });
  mealFilters.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.meal === activeMeal));
  });
  dietaryFilters.forEach((button) => {
    button.setAttribute("aria-pressed", String(activeDietaryFilters.has(button.dataset.dietary)));
  });
  lightFilter.setAttribute("aria-pressed", String(lightOnly));
  document.body.dataset.cuisine = ["all", "Asian"].includes(activeCuisine) ? "" : activeCuisine;
}

function formatIngredientName(ingredient) {
  return ingredient.replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function saveFridgeSelection() {
  localStorage.setItem(fridgeStorageKey, JSON.stringify(Array.from(selectedFridgeIngredients)));
  fridgeCount.textContent = `${selectedFridgeIngredients.size} selected`;
  clearFridge.disabled = selectedFridgeIngredients.size === 0;
  renderRecipes(searchInput.value);
}

function renderFridgeIngredients(searchText = "") {
  const search = searchText.trim().toLowerCase();
  fridgeIngredientList.replaceChildren();

  const categories = [
    ...fridgeIngredientCategories.map(({ name }) => ({ name, ingredients: [] })),
    { name: "Other", ingredients: [] }
  ];

  fridgeIngredientOptions
    .filter((ingredient) => ingredient.includes(search))
    .forEach((ingredient) => {
      const categoryName = fridgeIngredientCategories.find(({ ingredients }) => ingredients.has(ingredient))?.name
        || "Other";
      categories.find(({ name }) => name === categoryName).ingredients.push(ingredient);
    });

  categories
    .filter(({ ingredients }) => ingredients.length > 0)
    .forEach(({ name, ingredients }) => {
      const category = document.createElement("section");
      category.className = "fridge-ingredient-category";
      const heading = document.createElement("h3");
      heading.textContent = name;
      const options = document.createElement("div");
      options.className = "fridge-ingredient-options";

      ingredients.forEach((ingredient) => {
        const option = document.createElement("button");
        option.className = "fridge-ingredient-option";
        option.type = "button";
        option.textContent = formatIngredientName(ingredient);
        option.setAttribute("aria-pressed", String(selectedFridgeIngredients.has(ingredient)));
        option.addEventListener("click", () => {
          if (selectedFridgeIngredients.has(ingredient)) {
            selectedFridgeIngredients.delete(ingredient);
          } else {
            selectedFridgeIngredients.add(ingredient);
          }
          saveFridgeSelection();
          renderFridgeIngredients(fridgeSearchInput.value);
          renderFridgeSelection();
        });
        options.appendChild(option);
      });

      category.append(heading, options);
      fridgeIngredientList.appendChild(category);
    });

  if (fridgeIngredientList.childElementCount === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "fridge-empty";
    emptyMessage.textContent = "No ingredients found. Try another search.";
    fridgeIngredientList.appendChild(emptyMessage);
  }
}

function renderFridgeSelection() {
  fridgeSelectedList.replaceChildren();

  if (selectedFridgeIngredients.size === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "fridge-empty";
    emptyMessage.textContent = "No foods selected yet.";
    fridgeSelectedList.appendChild(emptyMessage);
    return;
  }

  selectedFridgeIngredients.forEach((ingredient) => {
    const chip = document.createElement("button");
    chip.className = "fridge-selected-chip";
    chip.type = "button";
    chip.textContent = `${formatIngredientName(ingredient)} ×`;
    chip.setAttribute("aria-label", `Remove ${ingredient}`);
    chip.addEventListener("click", () => {
      selectedFridgeIngredients.delete(ingredient);
      saveFridgeSelection();
      renderFridgeIngredients(fridgeSearchInput.value);
      renderFridgeSelection();
    });
    fridgeSelectedList.appendChild(chip);
  });
}

function openRecipe(recipe) {
  const videoSearch = new URLSearchParams({
    search_query: `${recipe.name} easy recipe`
  });

  dialogContent.innerHTML = `
    <p class="recipe-detail-label">${recipe.meal} · ${recipe.cuisine}</p>
    <h2>${recipe.name}</h2>
    <p class="recipe-detail-description">${recipe.description}</p>
    <div class="recipe-meta" aria-label="Recipe details">
      <span>${recipe.time}</span>
      <span>${recipe.servings} servings</span>
      <span>Easy</span>
      <span>About ${recipe.calories} kcal</span>
    </div>
    <div class="recipe-tags">${recipe.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
    <div class="recipe-detail-layout">
      <div class="recipe-main-column">
        <section class="recipe-ingredients" aria-labelledby="ingredients-title">
          <h3 id="ingredients-title">Ingredients</h3>
          <p>For ${recipe.servings} ${recipe.servings === 1 ? "serving" : "servings"}</p>
          <ul>${recipe.ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("")}</ul>
        </section>
        <section class="recipe-instructions" aria-labelledby="instructions-title">
          <h3 id="instructions-title">Method</h3>
          <ol>${recipe.steps.map((step) => `<li>${step}</li>`).join("")}</ol>
        </section>
      </div>
      <aside class="recipe-sidebar" aria-label="Nutrition and recipe notes">
        <section class="recipe-nutrition" aria-label="Estimated nutrition per serving">
          <p>Per serving</p>
          <strong>${recipe.calories}</strong><span> kcal</span>
          <dl>
            <div><dt>Protein</dt><dd>${recipe.protein} g</dd></div>
            <div><dt>Carbs</dt><dd>${recipe.carbs} g</dd></div>
            <div><dt>Fat</dt><dd>${recipe.fat} g</dd></div>
          </dl>
          <small>Nutrition is an estimate.</small>
        </section>
        <section class="recipe-note-card" aria-labelledby="why-title">
          <h3 id="why-title">Why it works</h3>
          <p>${recipe.whyItWorks}</p>
        </section>
        <section class="recipe-note-card recipe-swap-card" aria-labelledby="substitutions-title">
          <h3 id="substitutions-title">Possible substitutes</h3>
          <ul class="recipe-substitutions">${recipe.substitutions.map(([ingredient, substitute]) => `<li><strong>${ingredient}</strong> → ${substitute}</li>`).join("")}</ul>
        </section>
      </aside>
    </div>
    <div class="recipe-resource-actions">
      <a class="recipe-video-link" href="https://www.youtube.com/results?${videoSearch.toString()}"
        target="_blank" rel="noopener noreferrer">Find a YouTube video <span aria-hidden="true">↗</span></a>
      <button id="shopping-list-toggle" class="recipe-action-button" type="button"
        aria-expanded="false" aria-controls="shopping-list">Make a shopping list</button>
      <button id="find-nearby-stores" class="recipe-action-button" type="button">Find nearby supermarkets</button>
    </div>
    <p class="video-note">This opens YouTube search results. Pick a video that matches the ingredients and steps.</p>
    <section id="shopping-list" class="shopping-list" aria-labelledby="shopping-list-title" hidden>
      <h3 id="shopping-list-title">Shopping list for ${recipe.name}</h3>
      <p>Tick the ingredients you still need. Your list is saved on this device.</p>
      <ul>${recipe.ingredients.map((ingredient, index) => `
        <li><label><input class="shopping-list-checkbox" type="checkbox" data-index="${index}"><span>${ingredient}</span></label></li>
      `).join("")}</ul>
    </section>
    <p class="map-privacy-note">Your browser may ask to use your location. Opening the map shares it with Google Maps.</p>
    <p id="nearby-store-status" class="nearby-store-status" role="status" aria-live="polite"></p>
    <a id="nearby-store-map" class="nearby-store-map" target="_blank" rel="noopener noreferrer" hidden>
      Open nearby supermarkets in Google Maps <span aria-hidden="true">↗</span>
    </a>
  `;

  const shoppingListButton = dialogContent.querySelector("#shopping-list-toggle");
  const shoppingList = dialogContent.querySelector("#shopping-list");
  shoppingListButton.addEventListener("click", () => {
    shoppingList.hidden = !shoppingList.hidden;
    shoppingListButton.setAttribute("aria-expanded", String(!shoppingList.hidden));
    shoppingListButton.textContent = shoppingList.hidden ? "Make a shopping list" : "Hide shopping list";
  });

  dialogContent.querySelectorAll(".shopping-list-checkbox").forEach((checkbox, index) => {
    const storageKey = `recipeShoppingList:${encodeURIComponent(recipe.name)}:${index}`;
    checkbox.checked = localStorage.getItem(storageKey) === "true";
    checkbox.addEventListener("change", () => {
      localStorage.setItem(storageKey, String(checkbox.checked));
    });
  });

  const nearbyStoreButton = dialogContent.querySelector("#find-nearby-stores");
  const nearbyStoreStatus = dialogContent.querySelector("#nearby-store-status");
  const nearbyStoreMap = dialogContent.querySelector("#nearby-store-map");
  nearbyStoreButton.addEventListener("click", () => {
    nearbyStoreMap.hidden = true;
    if (!navigator.geolocation) {
      nearbyStoreStatus.textContent = "Location is not available in this browser.";
      return;
    }

    nearbyStoreButton.disabled = true;
    nearbyStoreStatus.textContent = "Waiting for your browser's location permission...";
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const mapSearch = new URLSearchParams({
          api: "1",
          query: `supermarkets near ${coords.latitude},${coords.longitude}`
        });
        nearbyStoreMap.href = `https://www.google.com/maps/search/?${mapSearch.toString()}`;
        nearbyStoreMap.hidden = false;
        nearbyStoreButton.disabled = false;
        nearbyStoreStatus.textContent = "Nearby supermarkets are ready. Open the map to see results.";
      },
      (error) => {
        const locationErrors = {
          1: "Location permission was denied. Allow it in your browser settings to find nearby supermarkets.",
          2: "Your location could not be found. Check that location services are available and try again.",
          3: "The location request took too long. Please try again."
        };
        nearbyStoreButton.disabled = false;
        nearbyStoreStatus.textContent = locationErrors[error.code] || "We couldn't get your location. Please try again.";
      },
      { enableHighAccuracy: false, maximumAge: 0, timeout: 10000 }
    );
  });

  recipeDialog.showModal();
}

localStorage.removeItem("recipeSearch");
localStorage.removeItem("fridgeSearch");
searchInput.value = "";
fridgeSearchInput.value = "";
fridgeCount.textContent = `${selectedFridgeIngredients.size} selected`;
clearFridge.disabled = selectedFridgeIngredients.size === 0;
renderFridgeIngredients(fridgeSearchInput.value);
renderFridgeSelection();
renderRecipes(searchInput.value);

document.querySelectorAll('a[href="#recipe-finder"]').forEach((link) => {
  link.addEventListener("click", () => {
    hero.hidden = true;
    recipeFinder.hidden = false;
  });
});

searchInput.addEventListener("input", () => {
  renderRecipes(searchInput.value);
});

cuisineFilters.forEach((button) => {
  button.addEventListener("click", () => {
    activeCuisine = button.dataset.cuisine;
    localStorage.setItem(cuisineStorageKey, activeCuisine);
    renderRecipes(searchInput.value);
  });
});

mealFilters.forEach((button) => {
  button.addEventListener("click", () => {
    activeMeal = button.dataset.meal;
    localStorage.setItem(mealStorageKey, activeMeal);
    renderRecipes(searchInput.value);
  });
});

dietaryFilters.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.dietary;
    if (activeDietaryFilters.has(filter)) {
      activeDietaryFilters.delete(filter);
    } else {
      activeDietaryFilters.add(filter);
    }
    localStorage.setItem(dietaryStorageKey, JSON.stringify(Array.from(activeDietaryFilters)));
    renderRecipes(searchInput.value);
  });
});

lightFilter.addEventListener("click", () => {
  lightOnly = !lightOnly;
  localStorage.setItem(lightStorageKey, String(lightOnly));
  renderRecipes(searchInput.value);
});

fridgeSearchInput.addEventListener("input", () => {
  renderFridgeIngredients(fridgeSearchInput.value);
});

openFridge.addEventListener("click", () => fridgeDialog.showModal());
closeFridge.addEventListener("click", () => fridgeDialog.close());
doneFridge.addEventListener("click", () => fridgeDialog.close());
clearFridge.addEventListener("click", () => {
  selectedFridgeIngredients.clear();
  saveFridgeSelection();
  renderFridgeIngredients(fridgeSearchInput.value);
  renderFridgeSelection();
});
fridgeDialog.addEventListener("click", (event) => {
  if (event.target === fridgeDialog) fridgeDialog.close();
});

closeDialog.addEventListener("click", () => recipeDialog.close());
recipeDialog.addEventListener("click", (event) => {
  if (event.target === recipeDialog) recipeDialog.close();
});
