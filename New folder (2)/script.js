var meals = [
    {
        title: "Smoked BBQ Beef Brisket",
        subtitle: "Slow-cooked tender beef in smoky barbecue sauce",
        image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=80",
        rating: 4.8,
        reviews: 856,
        prepTime: 20,
        cookTime: 300,
        servings: 6,
        difficulty: "Medium",
        region: "American",
        alertTitle: "Extended Preparation Time",
        alertText: "This recipe requires slow cooking. Plan accordingly!",
        ingredients: [
            "2 kg beef brisket",
            "1 cup BBQ sauce",
            "1/2 cup apple cider vinegar",
            "2 tablespoons brown sugar",
            "1 tablespoon smoked paprika",
            "1 tablespoon garlic powder",
            "Burger buns",
            "Coleslaw for serving"
        ],
        instructions: [
            "Mix paprika, garlic powder, brown sugar, salt and pepper. Rub all over beef.",
            "Place beef in slow cooker with apple cider vinegar and 1/2 cup water.",
            "Cook on low for 8 hours until meat is very tender.",
            "Remove beef and shred with two forks. Discard excess fat.",
            "Return shredded beef to slow cooker, mix with BBQ sauce."
        ],
        nutrition: {
            calories: "620 kcal",
            protein: "48g",
            carbs: "52g",
            fat: "22g",
            fiber: "3g",
            sodium: "1180mg"
        },
        tips: [
            "Use quality meat for best results - it stays moist.",
            "Let meat rest before shredding for juicier results.",
            "Make your own BBQ sauce for better flavor.",
            "Leftovers freeze well for up to 3 months."
        ]
    },
    {
        title: "Classic Egyptian Koshary",
        subtitle: "A comforting bowl of rice, lentils, pasta, and spicy tomato sauce",
        image: "https://www.chocolatesandchai.com/wp-content/uploads/2023/02/Egyptian-Koshari-7.jpg.webp",
        rating: 4.9,
        reviews: 1250,
        prepTime: 30,
        cookTime: 45,
        servings: 4,
        difficulty: "Medium",
        region: "Egyptian",
        alertTitle: "Multi-Step Preparation",
        alertText: "Requires managing multiple pots simultaneously.",
        ingredients: [
            "1 cup brown lentils",
            "1 cup short-grain rice",
            "1 cup elbow macaroni",
            "2 large crispy fried onions",
            "2 cups tomato sauce",
            "1 tbsp cumin"
        ],
        instructions: [
            "Boil lentils until tender, then drain and set aside.",
            "Cook rice with a pinch of salt until fluffy.",
            "Boil macaroni pasta until al dente.",
            "Prepare spicy tomato sauce with garlic and vinegar.",
            "Layer rice, macaroni, lentils, sauce, and crispy onions."
        ],
        nutrition: {
            calories: "450 kcal",
            protein: "15g",
            carbs: "85g",
            fat: "8g",
            fiber: "12g",
            sodium: "600mg"
        },
        tips: [
            "Fry onions slowly on medium heat to make them extra crispy.",
            "Add a dash of vinegar to the sauce for authentic taste.",
            "Prepare chili oil separately for spice lovers."
        ]
    },
    {
        title: "Creamy Alfredo Pasta",
        subtitle: "Fettuccine tossed in a rich butter and parmesan cream sauce",
        image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=800&q=80",
        rating: 4.6,
        reviews: 420,
        prepTime: 10,
        cookTime: 15,
        servings: 2,
        difficulty: "Easy",
        region: "Italian",
        alertTitle: "Serve Immediately",
        alertText: "Alfredo sauce thickens quickly as it cools down!",
        ingredients: [
            "250g fettuccine pasta",
            "1/2 cup unsalted butter",
            "1 cup heavy cream",
            "1 cup freshly grated Parmesan cheese",
            "1 clove garlic, minced"
        ],
        instructions: [
            "Boil pasta in salted water until al dente.",
            "Melt butter and sauté garlic for 1 minute.",
            "Pour in heavy cream and simmer for 3 minutes.",
            "Stir in Parmesan cheese until completely melted.",
            "Toss pasta in sauce and serve hot."
        ],
        nutrition: {
            calories: "850 kcal",
            protein: "22g",
            carbs: "45g",
            fat: "65g",
            fiber: "2g",
            sodium: "750mg"
        },
        tips: [
            "Always use freshly grated Parmesan cheese.",
            "Save pasta water to adjust sauce thickness.",
            "Add grilled chicken or shrimp for protein."
        ]
    }
];


var generateBtn = document.getElementById("generateBtn");
var recipeImageSide = document.getElementById("recipeImageSide");
var ratingBadge = document.getElementById("ratingBadge");
var prepTime = document.getElementById("prepTime");
var cookTime = document.getElementById("cookTime");
var servings = document.getElementById("servings");
var tagDifficulty = document.getElementById("tagDifficulty");
var tagRegion = document.getElementById("tagRegion");
var recipeTitle = document.getElementById("recipeTitle");
var recipeSubtitle = document.getElementById("recipeSubtitle");
var alertTitle = document.getElementById("alertTitle");
var alertDesc = document.getElementById("alertDesc");

var ingredientsList = document.getElementById("ingredientsList");
var instructionsList = document.getElementById("instructionsList");
var nutritionGrid = document.getElementById("nutritionGrid");
var tipsList = document.getElementById("tipsList");


var tabIngredients = document.getElementById("tabIngredients");
var tabInstructions = document.getElementById("tabInstructions");
var tabNutrition = document.getElementById("tabNutrition");
var tabTips = document.getElementById("tabTips");


function showTab(tabName) {
    
    tabIngredients.className = "tab";
    tabInstructions.className = "tab";
    tabNutrition.className = "tab";
    tabTips.className = "tab";

    
    ingredientsList.style.display = "none";
    instructionsList.style.display = "none";
    nutritionGrid.style.display = "none";
    tipsList.style.display = "none";

    
    if (tabName === "ingredients") {
        tabIngredients.className = "tab active";
        ingredientsList.style.display = "flex";
    } else if (tabName === "instructions") {
        tabInstructions.className = "tab active";
        instructionsList.style.display = "flex";
    } else if (tabName === "nutrition") {
        tabNutrition.className = "tab active";
        nutritionGrid.style.display = "grid";
    } else if (tabName === "tips") {
        tabTips.className = "tab active";
        tipsList.style.display = "flex";
    }
}


function getRandomMeal() {
   
    var randomIndex = Math.floor(Math.random() * meals.length);
    var selectedMeal = meals[randomIndex];

    
    recipeImageSide.style.backgroundImage = "url('" + selectedMeal.image + "')";
    ratingBadge.innerHTML = '<i class="fa-solid fa-star"></i> ' + selectedMeal.rating + ' <span>(' + selectedMeal.reviews + ' reviews)</span>';

    prepTime.innerHTML = selectedMeal.prepTime + " min";
    cookTime.innerHTML = selectedMeal.cookTime + " min";
    servings.innerHTML = selectedMeal.servings + " people";

    tagDifficulty.innerHTML = selectedMeal.difficulty;
    tagRegion.innerHTML = selectedMeal.region;

    recipeTitle.innerHTML = selectedMeal.title;
    recipeSubtitle.innerHTML = selectedMeal.subtitle;

    alertTitle.innerHTML = selectedMeal.alertTitle;
    alertDesc.innerHTML = selectedMeal.alertText;

   
    var ingredientsHTML = "";
    for (var i = 0; i < selectedMeal.ingredients.length; i++) {
        ingredientsHTML += '<li><span class="step-num">' + (i + 1) + '</span> ' + selectedMeal.ingredients[i] + '</li>';
    }
    ingredientsList.innerHTML = ingredientsHTML;

   
    var instructionsHTML = "";
    for (var j = 0; j < selectedMeal.instructions.length; j++) {
        instructionsHTML += '<li><span class="inst-num">' + (j + 1) + '</span> <span>' + selectedMeal.instructions[j] + '</span></li>';
    }
    instructionsList.innerHTML = instructionsHTML;

    var nut = selectedMeal.nutrition;
    nutritionGrid.innerHTML = 
        '<div class="nutrition-card"><div class="nut-left"><div class="nut-icon icon-cal"><i class="fa-solid fa-fire"></i></div><span class="nut-label">Calories</span></div><span class="nut-value">' + nut.calories + '</span></div>' +
        '<div class="nutrition-card"><div class="nut-left"><div class="nut-icon icon-pro"><i class="fa-solid fa-dumbbell"></i></div><span class="nut-label">Protein</span></div><span class="nut-value">' + nut.protein + '</span></div>' +
        '<div class="nutrition-card"><div class="nut-left"><div class="nut-icon icon-car"><i class="fa-solid fa-wheat-awn"></i></div><span class="nut-label">Carbohydrates</span></div><span class="nut-value">' + nut.carbs + '</span></div>' +
        '<div class="nutrition-card"><div class="nut-left"><div class="nut-icon icon-fat"><i class="fa-solid fa-droplet"></i></div><span class="nut-label">Fat</span></div><span class="nut-value">' + nut.fat + '</span></div>' +
        '<div class="nutrition-card"><div class="nut-left"><div class="nut-icon icon-fib"><i class="fa-solid fa-seedling"></i></div><span class="nut-label">Fiber</span></div><span class="nut-value">' + nut.fiber + '</span></div>' +
        '<div class="nutrition-card"><div class="nut-left"><div class="nut-icon icon-sod"><i class="fa-solid fa-cube"></i></div><span class="nut-label">Sodium</span></div><span class="nut-value">' + nut.sodium + '</span></div>';


    var tipsHTML = "";
    for (var k = 0; k < selectedMeal.tips.length; k++) {
        tipsHTML += '<li><i class="fa-solid fa-circle-check"></i> <span>' + selectedMeal.tips[k] + '</span></li>';
    }
    tipsList.innerHTML = tipsHTML;
}

generateBtn.addEventListener("click", getRandomMeal);


getRandomMeal();