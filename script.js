const recipes = [
  { id: "green-goddess-bowl", title: "Green Goddess Chicken Bowl", description: "Golden chicken, crisp greens and a cool, herb-flecked yogurt dressing.", image: "photo-1512621776951-a57141f2eefd", ingredients: ["chicken", "greek yogurt", "spinach", "rice", "lemon", "cucumber"], instructions: ["Cook the rice according to the package directions; fluff and set aside.", "Season and sear the chicken in a warm skillet until golden and cooked through.", "Stir Greek yogurt with lemon juice, chopped herbs, salt and a splash of water.", "Layer rice, spinach and sliced chicken in a bowl. Finish with dressing and cucumber."], calories: 520, protein: 42, carbs: 54, fat: 14, cookingTime: 28, difficulty: "Easy", mealType: "dinner", dietaryTags: ["high protein", "gluten-free" ] },
  { id: "avocado-egg-toast", title: "Avocado & Jammy Egg Toast", description: "A bright, satisfying breakfast with creamy avocado and a little chilli warmth.", image: "photo-1525351484163-7529414344d8", ingredients: ["eggs", "avocado", "bread", "lemon", "chili flakes"], instructions: ["Bring a small pan of water to a boil and cook the eggs for 7 minutes.", "Toast the bread until deeply golden.", "Mash avocado with lemon, salt and pepper; spread over the toast.", "Peel and halve the eggs, place on top and finish with chilli flakes."], calories: 390, protein: 19, carbs: 32, fat: 22, cookingTime: 12, difficulty: "Easy", mealType: "breakfast", dietaryTags: ["vegetarian", "high protein"] },
  { id: "tomato-lentil-soup", title: "Slow Sunday Tomato Lentils", description: "Comforting, gently spiced lentils with tomatoes and a bright, herby finish.", image: "photo-1547592180-85f173990554", ingredients: ["tomatoes", "lentils", "spinach", "onion", "garlic", "vegetable broth"], instructions: ["Soften diced onion and garlic in olive oil over a medium heat.", "Add chopped tomatoes, lentils, broth and a pinch of cumin.", "Simmer until the lentils are tender, adding water if the pot gets too thick.", "Fold in spinach until just wilted. Taste, season and serve with herbs."], calories: 345, protein: 20, carbs: 52, fat: 7, cookingTime: 38, difficulty: "Easy", mealType: "dinner", dietaryTags: ["vegan", "vegetarian", "gluten-free", "low calorie"] },
  { id: "yogurt-berry-bowl", title: "Honeyed Yogurt & Berry Bowl", description: "Thick Greek yogurt, juicy berries and toasted oats for a lovely start.", image: "photo-1490645935967-10de6ba17061", ingredients: ["greek yogurt", "berries", "oats", "honey", "almonds"], instructions: ["Toast the oats and almonds in a dry pan until fragrant.", "Spoon Greek yogurt into a bowl and swirl through a little honey.", "Add the berries and warm toasted oats.", "Finish with chopped almonds and another delicate thread of honey."], calories: 330, protein: 24, carbs: 38, fat: 10, cookingTime: 8, difficulty: "Easy", mealType: "breakfast", dietaryTags: ["vegetarian", "high protein", "gluten-free"] },
  { id: "chickpea-crunch-salad", title: "Crunchy Chickpea & Avocado Salad", description: "Crispy chickpeas, sweet tomatoes and creamy avocado in a citrus dressing.", image: "photo-1540420773420-3366772f4999", ingredients: ["chickpeas", "avocado", "tomatoes", "cucumber", "lemon", "parsley"], instructions: ["Pat the chickpeas dry, toss with olive oil and paprika, then roast until crisp.", "Chop the tomatoes, cucumber and avocado into generous pieces.", "Whisk lemon juice with olive oil, salt and pepper.", "Toss everything together with parsley and eat while the chickpeas are warm."], calories: 410, protein: 15, carbs: 48, fat: 19, cookingTime: 25, difficulty: "Easy", mealType: "lunch", dietaryTags: ["vegan", "vegetarian", "gluten-free", "low calorie"] },
  { id: "salmon-rice-plate", title: "Sesame Salmon Rice Plate", description: "Flaky salmon, tender rice and greens with a savoury sesame finish.", image: "photo-1467003909585-2f8a72700288", ingredients: ["salmon", "rice", "spinach", "soy sauce", "sesame seeds", "ginger"], instructions: ["Cook the rice and set aside, covered.", "Brush the salmon with soy sauce and grated ginger, then roast until just flaky.", "Wilt the spinach in a hot pan with a drop of oil.", "Serve salmon over rice with spinach and sesame seeds."], calories: 560, protein: 39, carbs: 56, fat: 18, cookingTime: 27, difficulty: "Medium", mealType: "dinner", dietaryTags: ["high protein", "gluten-free"] },
  { id: "spinach-feta-omelette", title: "Soft Spinach & Feta Omelette", description: "A tender fold of eggs, wilted spinach and salty, crumbled feta.", image: "photo-1525351484163-7529414344d8", ingredients: ["eggs", "spinach", "feta", "milk", "black pepper"], instructions: ["Whisk the eggs with a splash of milk and black pepper.", "Wilt the spinach in a small buttered skillet.", "Pour in the eggs and cook gently, nudging the edges in as they set.", "Scatter over feta, fold and slide onto a warm plate."], calories: 355, protein: 27, carbs: 8, fat: 24, cookingTime: 10, difficulty: "Easy", mealType: "breakfast", dietaryTags: ["vegetarian", "high protein", "low calorie", "gluten-free"] },
  { id: "lemon-chicken-skillet", title: "Lemon Chicken & Tomato Skillet", description: "One-pan chicken with juicy tomatoes, garlic and a squeeze of lemon.", image: "photo-1532550907401-a500c9a57435", ingredients: ["chicken", "tomatoes", "garlic", "lemon", "spinach", "olive oil"], instructions: ["Season the chicken and sear in a little olive oil until golden on both sides.", "Add garlic and tomatoes; cook until they begin to soften and release their juices.", "Cover and simmer until the chicken is cooked through.", "Fold in spinach, squeeze over lemon and serve straight from the pan."], calories: 430, protein: 46, carbs: 18, fat: 19, cookingTime: 32, difficulty: "Easy", mealType: "dinner", dietaryTags: ["high protein", "gluten-free", "low calorie"] },
  { id: "overnight-oats", title: "Pear & Cinnamon Overnight Oats", description: "Make-ahead oats with soft pear, cinnamon and a creamy spoonful of yogurt.", image: "photo-1517673132405-a56a62b18caf", ingredients: ["oats", "milk", "pear", "greek yogurt", "cinnamon", "maple syrup"], instructions: ["Stir oats, milk, cinnamon and maple syrup together in a jar.", "Cover and chill overnight, or for at least 4 hours.", "Dice the pear and stir half through the oats.", "Top with Greek yogurt and the remaining pear."], calories: 360, protein: 17, carbs: 59, fat: 8, cookingTime: 5, difficulty: "Easy", mealType: "breakfast", dietaryTags: ["vegetarian", "low calorie"] },
  { id: "rainbow-rice-wraps", title: "Rainbow Rice Paper Rolls", description: "Cool, crunchy vegetables wrapped up with herbs and a quick peanut dip.", image: "photo-1547592180-85f173990554", ingredients: ["rice paper", "carrot", "cucumber", "avocado", "mint", "peanut butter"], instructions: ["Slice the carrot, cucumber and avocado into thin strips.", "Whisk peanut butter with lime juice and warm water to make a dipping sauce.", "Dip one rice paper sheet in warm water until pliable.", "Fill with vegetables and mint, fold the sides in and roll tightly. Repeat."], calories: 290, protein: 9, carbs: 35, fat: 14, cookingTime: 25, difficulty: "Medium", mealType: "lunch", dietaryTags: ["vegan", "vegetarian", "gluten-free", "low calorie"] },
  { id: "turkey-lettuce-cups", title: "Ginger Turkey Lettuce Cups", description: "Savoury ginger turkey with cool lettuce, herbs and a little lime.", image: "photo-1547592180-85f173990554", ingredients: ["ground turkey", "lettuce", "ginger", "soy sauce", "lime", "green onion"], instructions: ["Brown the turkey in a hot pan, breaking it into small pieces.", "Add grated ginger and soy sauce; stir until fragrant and glossy.", "Separate and wash the lettuce leaves.", "Spoon turkey into the leaves and finish with lime and green onion."], calories: 320, protein: 34, carbs: 14, fat: 14, cookingTime: 18, difficulty: "Easy", mealType: "lunch", dietaryTags: ["high protein", "gluten-free", "low calorie"] },
  { id: "banana-oat-pancakes", title: "Banana Oat Morning Pancakes", description: "Naturally sweet little pancakes with golden edges and soft middles.", image: "photo-1528207776546-365bb710ee93", ingredients: ["banana", "eggs", "oats", "greek yogurt", "cinnamon", "berries"], instructions: ["Mash the banana with eggs, oats and a pinch of cinnamon.", "Rest the batter for 3 minutes so the oats soften.", "Cook small pancakes in a lightly oiled pan until golden on each side.", "Serve warm with Greek yogurt and fresh berries."], calories: 380, protein: 21, carbs: 52, fat: 10, cookingTime: 16, difficulty: "Easy", mealType: "breakfast", dietaryTags: ["vegetarian", "high protein", "gluten-free"] },
  { id: "roasted-veg-quinoa", title: "Roasted Garden Quinoa", description: "Warm quinoa with caramelised vegetables, lemon and a handful of herbs.", image: "photo-1512621776951-a57141f2eefd", ingredients: ["quinoa", "zucchini", "bell pepper", "chickpeas", "lemon", "parsley"], instructions: ["Heat the oven and chop the zucchini and pepper into bite-sized pieces.", "Toss vegetables with chickpeas, olive oil and salt; roast until golden.", "Simmer quinoa in salted water until tender, then fluff with a fork.", "Fold the roasted vegetables through with lemon and parsley."], calories: 455, protein: 18, carbs: 68, fat: 13, cookingTime: 35, difficulty: "Easy", mealType: "lunch", dietaryTags: ["vegan", "vegetarian", "gluten-free", "high protein"] },
  { id: "dark-chocolate-dates", title: "Almond Butter Chocolate Dates", description: "A small, sweet something with dark chocolate and a pinch of flaky salt.", image: "photo-1482049016688-2d3e1b311543", ingredients: ["dates", "almond butter", "dark chocolate", "almonds", "sea salt"], instructions: ["Split the dates lengthwise and remove the pits.", "Fill each date with a small spoonful of almond butter.", "Drizzle with melted dark chocolate.", "Scatter over chopped almonds and a tiny pinch of flaky salt; chill to set."], calories: 220, protein: 5, carbs: 31, fat: 11, cookingTime: 10, difficulty: "Easy", mealType: "snack", dietaryTags: ["vegan", "vegetarian", "gluten-free"] },
  { id: "cottage-cheese-peaches", title: "Peaches & Whipped Cottage Cheese", description: "Cool, cloud-soft cottage cheese with ripe peach and a little honey.", image: "photo-1490645935967-10de6ba17061", ingredients: ["cottage cheese", "peach", "honey", "walnuts", "mint"], instructions: ["Blend or whisk the cottage cheese until light and creamy.", "Slice the peach into wedges.", "Spoon the whipped cottage cheese into a shallow bowl and add the peach.", "Finish with honey, toasted walnuts and torn mint."], calories: 270, protein: 25, carbs: 28, fat: 9, cookingTime: 7, difficulty: "Easy", mealType: "snack", dietaryTags: ["vegetarian", "high protein", "gluten-free", "low calorie"] },
  { id: "mushroom-bean-toast", title: "Garlicky Mushroom & White Bean Toast", description: "Creamy white beans and earthy mushrooms piled onto crisp sourdough.", image: "photo-1525351484163-7529414344d8", ingredients: ["mushrooms", "white beans", "bread", "garlic", "spinach", "thyme"], instructions: ["Toast thick slices of bread until crisp.", "Brown sliced mushrooms in olive oil, then add garlic and thyme.", "Stir in white beans with a splash of broth and gently crush a few.", "Fold in spinach until wilted and pile the mixture over the toast."], calories: 420, protein: 19, carbs: 61, fat: 12, cookingTime: 22, difficulty: "Easy", mealType: "lunch", dietaryTags: ["vegan", "vegetarian", "high protein"] },
  { id: "coconut-chia-cups", title: "Coconut Chia Breakfast Cups", description: "A cool, creamy make-ahead cup with fruit and a gentle crunch.", image: "photo-1490645935967-10de6ba17061", ingredients: ["chia seeds", "coconut milk", "mango", "berries", "maple syrup", "coconut flakes"], instructions: ["Whisk chia seeds, coconut milk and maple syrup together.", "Let stand 10 minutes, whisk again, then cover and chill until thick.", "Dice the mango and gather the berries.", "Spoon the pudding into bowls and top with fruit and coconut flakes."], calories: 310, protein: 8, carbs: 37, fat: 17, cookingTime: 10, difficulty: "Easy", mealType: "dessert", dietaryTags: ["vegan", "vegetarian", "gluten-free", "low calorie"] },
  { id: "herby-tuna-white-beans", title: "Herby Tuna & White Bean Salad", description: "A pantry-friendly lunch with lemon, creamy beans and plenty of parsley.", image: "photo-1540420773420-3366772f4999", ingredients: ["tuna", "white beans", "lemon", "parsley", "red onion", "olive oil"], instructions: ["Drain the tuna and white beans.", "Finely slice the red onion and chop a generous handful of parsley.", "Whisk lemon juice with olive oil, salt and black pepper.", "Fold everything together gently and let it sit for 5 minutes before serving."], calories: 390, protein: 36, carbs: 32, fat: 13, cookingTime: 12, difficulty: "Easy", mealType: "lunch", dietaryTags: ["high protein", "gluten-free", "low calorie"] },
  { id: "stuffed-sweet-potato", title: "Smoky Stuffed Sweet Potato", description: "Fluffy sweet potato with spiced black beans and cooling yogurt.", image: "photo-1512621776951-a57141f2eefd", ingredients: ["sweet potato", "black beans", "greek yogurt", "lime", "cumin", "cilantro"], instructions: ["Roast the sweet potato until completely tender when pierced.", "Warm black beans with cumin, salt and a spoonful of water.", "Split the potato and fluff the centre with a fork.", "Top with beans, Greek yogurt, lime and cilantro."], calories: 425, protein: 19, carbs: 72, fat: 8, cookingTime: 45, difficulty: "Easy", mealType: "dinner", dietaryTags: ["vegetarian", "gluten-free", "high protein"] }
];

const suggestedIngredients = ["Chicken", "Eggs", "Greek yogurt", "Tomatoes", "Avocado", "Rice", "Spinach", "Lemon", "Oats", "Chickpeas", "Salmon", "Berries", "Feta", "Cucumber", "Banana", "Lentils", "Garlic", "Bread", "Mushrooms"];
const initialIngredients = ["Chicken", "Eggs", "Greek yogurt", "Tomatoes", "Avocado", "Rice", "Spinach"];
const state = {
  ingredients: [...initialIngredients],
  filters: { mealType: "any", diet: "any", time: "any", difficulty: "any" },
  results: [],
  saved: [],
  lastFocused: null,
  toastTimer: null,
  cookingMode: false
};

const elements = {
  ingredientForm: document.querySelector("#ingredient-form"), ingredientInput: document.querySelector("#ingredient-input"),
  chips: document.querySelector("#ingredient-chips"), ingredientTotal: document.querySelector("#ingredient-total"),
  quickAddList: document.querySelector("#quick-add-list"), suggestions: document.querySelector("#ingredient-suggestions"),
  generateButton: document.querySelector("#generate-button"), recipeGrid: document.querySelector("#recipe-grid"),
  resultCount: document.querySelector("#result-count"), feedback: document.querySelector("#results-feedback"),
  emptyState: document.querySelector("#empty-state"), emptyMessage: document.querySelector("#empty-message"),
  nearMatches: document.querySelector("#near-match-list"), savedGrid: document.querySelector("#saved-grid"),
  savedEmpty: document.querySelector("#saved-empty"), savedCount: document.querySelector("#nav-saved-count"),
  savedSectionCount: document.querySelector("#saved-section-count"), modal: document.querySelector("#recipe-modal"),
  modalPanel: document.querySelector(".recipe-modal"), modalContent: document.querySelector("#modal-content"),
  toast: document.querySelector("#toast")
};

function normalizeIngredient(value) {
  return value.trim().toLocaleLowerCase().replace(/\s+/g, " ");
}

function addIngredient(value = elements.ingredientInput.value) {
  const ingredient = value.trim().replace(/\s+/g, " ");
  if (!ingredient) return;
  const normalized = normalizeIngredient(ingredient);
  if (state.ingredients.some((item) => normalizeIngredient(item) === normalized)) {
    showToast(`${ingredient} is already in your kitchen.`);
    elements.ingredientInput.value = "";
    return;
  }
  state.ingredients.push(ingredient);
  elements.ingredientInput.value = "";
  renderIngredients();
  elements.ingredientInput.focus();
}

function removeIngredient(ingredient) {
  state.ingredients = state.ingredients.filter((item) => normalizeIngredient(item) !== normalizeIngredient(ingredient));
  renderIngredients();
}

function renderIngredients() {
  elements.chips.replaceChildren();
  state.ingredients.forEach((ingredient) => {
    const chip = document.createElement("span");
    chip.className = "ingredient-chip";
    const label = document.createElement("span");
    label.textContent = ingredient;
    const remove = document.createElement("button");
    remove.type = "button";
    remove.setAttribute("aria-label", `Remove ${ingredient}`);
    remove.textContent = "×";
    remove.addEventListener("click", () => removeIngredient(ingredient));
    chip.append(label, remove);
    elements.chips.append(chip);
  });
  elements.ingredientTotal.textContent = String(state.ingredients.length);
  renderQuickAdd();
}

function renderQuickAdd() {
  elements.quickAddList.replaceChildren();
  const present = new Set(state.ingredients.map(normalizeIngredient));
  suggestedIngredients.filter((item) => !present.has(normalizeIngredient(item))).slice(0, 8).forEach((ingredient) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "quick-add";
    button.textContent = `+ ${ingredient}`;
    button.addEventListener("click", () => addIngredient(ingredient));
    elements.quickAddList.append(button);
  });
}

function matchesFilters(recipe) {
  const { mealType, diet, time, difficulty } = state.filters;
  if (mealType !== "any" && recipe.mealType !== mealType) return false;
  if (diet !== "any" && !recipe.dietaryTags.includes(diet)) return false;
  if (time !== "any") {
    const limit = Number(time);
    if (limit === 15 && recipe.cookingTime >= 15) return false;
    if (limit === 30 && (recipe.cookingTime < 15 || recipe.cookingTime > 30)) return false;
    if (limit === 60 && (recipe.cookingTime <= 30 || recipe.cookingTime > 60)) return false;
  }
  return difficulty === "any" || recipe.difficulty === difficulty;
}

function scoreRecipe(recipe) {
  const pantry = new Set(state.ingredients.map(normalizeIngredient));
  const available = recipe.ingredients.filter((ingredient) => pantry.has(normalizeIngredient(ingredient)));
  const missing = recipe.ingredients.filter((ingredient) => !pantry.has(normalizeIngredient(ingredient)));
  return { recipe, available, missing, score: available.length / recipe.ingredients.length };
}

function generateRecipes() {
  if (state.ingredients.length === 0) {
    elements.ingredientInput.focus();
    showToast("Add an ingredient to get started.");
    return;
  }
  const label = elements.generateButton.querySelector("span:first-child");
  elements.generateButton.disabled = true;
  label.textContent = "Finding a little inspiration…";
  elements.feedback.textContent = "";
  window.setTimeout(() => {
    const ranked = recipes.map(scoreRecipe).filter((item) => item.available.length > 0 && item.missing.length <= 3)
      .sort((a, b) => b.available.length - a.available.length || a.missing.length - b.missing.length || a.recipe.cookingTime - b.recipe.cookingTime);
    const preferenceMatches = ranked.filter((item) => matchesFilters(item.recipe));
    const displayed = preferenceMatches.length ? preferenceMatches : ranked.slice(0, 6);
    state.results = displayed.slice(0, 6);
    elements.emptyState.hidden = true;
    renderRecipes(elements.recipeGrid, state.results, false);
    elements.resultCount.textContent = state.results.length ? `${state.results.length} ideas, made with your kitchen in mind.` : "A little more to work with could open up something lovely.";
    if (!preferenceMatches.length && ranked.length) {
      elements.feedback.textContent = "Nothing quite fits every preference, so here are the closest matches. Try easing one filter to explore more.";
    } else if (state.results.length) {
      elements.feedback.textContent = `${state.results[0].available.length} of ${state.results[0].recipe.ingredients.length} ingredients already at home in your closest match.`;
    }
    if (!state.results.length) renderEmptyState();
    elements.generateButton.disabled = false;
    label.textContent = "Create my recipe";
    document.querySelector("#discover").scrollIntoView({ behavior: "smooth", block: "start" });
  }, 520);
}

function renderEmptyState() {
  elements.emptyState.hidden = false;
  elements.nearMatches.replaceChildren();
  const ranked = recipes.map(scoreRecipe).filter((item) => item.available.length > 0)
    .sort((a, b) => b.available.length - a.available.length || a.missing.length - b.missing.length).slice(0, 3);
  if (!state.ingredients.length) {
    elements.emptyMessage.textContent = "Add one or two ingredients above and we’ll find you a lovely place to start.";
  } else if (!ranked.length) {
    elements.emptyMessage.textContent = "We couldn’t find a match just yet. Try a familiar staple such as eggs, tomatoes or rice.";
  } else {
    const best = ranked[0];
    elements.emptyMessage.textContent = `You already have ${best.available.length} of ${best.recipe.ingredients.length} ingredients for ${best.recipe.title}. Add ${best.missing.slice(0, 3).join(", ")} to bring it together.`;
  }
  ranked.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "near-match";
    button.textContent = `${item.recipe.title} · missing ${item.missing.slice(0, 3).join(", ")}`;
    button.addEventListener("click", () => openRecipe(item.recipe.id));
    elements.nearMatches.append(button);
  });
}

function createRecipeCard(item, index, isSaved = false) {
  const { recipe, available, missing } = item;
  const card = document.createElement("article");
  card.className = "recipe-card";
  card.style.animationDelay = `${Math.min(index * 65, 300)}ms`;
  const imageWrap = document.createElement("div");
  imageWrap.className = "recipe-image-wrap";
  const image = document.createElement("img");
  image.className = "recipe-image";
  image.src = `https://images.unsplash.com/${recipe.image}?auto=format&fit=crop&w=900&q=80`;
  image.alt = recipe.title;
  image.loading = "lazy";
  imageWrap.append(image);
  const indexTag = document.createElement("span");
  indexTag.className = "image-index";
  indexTag.textContent = String(index + 1).padStart(2, "0");
  imageWrap.append(indexTag);
  const save = document.createElement("button");
  save.type = "button";
  save.className = `save-button${isRecipeSaved(recipe.id) ? " is-saved" : ""}`;
  save.setAttribute("aria-label", `${isRecipeSaved(recipe.id) ? "Remove saved recipe" : "Save recipe"}: ${recipe.title}`);
  save.setAttribute("aria-pressed", String(isRecipeSaved(recipe.id)));
  save.textContent = isRecipeSaved(recipe.id) ? "♥" : "♡";
  save.addEventListener("click", () => isRecipeSaved(recipe.id) ? removeSavedRecipe(recipe.id) : saveRecipe(recipe.id));
  imageWrap.append(save);

  const body = document.createElement("div");
  body.className = "card-body";
  const tags = document.createElement("div");
  tags.className = "card-tags";
  [recipe.mealType, ...recipe.dietaryTags.slice(0, 2)].forEach((tag, tagIndex) => {
    const span = document.createElement("span");
    span.className = `tag${tagIndex ? " tag-muted" : ""}`;
    span.textContent = tag;
    tags.append(span);
  });
  const title = document.createElement("h3");
  title.className = "card-title";
  title.textContent = recipe.title;
  const description = document.createElement("p");
  description.className = "card-description";
  description.textContent = recipe.description;
  const stats = document.createElement("div");
  stats.className = "card-stats";
  [`${recipe.cookingTime} min`, `${recipe.calories} kcal`, `${recipe.protein}g protein`, recipe.difficulty].forEach((value) => {
    const span = document.createElement("span"); span.textContent = value; stats.append(span);
  });
  const match = document.createElement("div");
  match.className = "match-summary";
  available.forEach((ingredient) => {
    const span = document.createElement("span"); span.className = "match-ingredient"; span.textContent = `✓ ${ingredient}`; match.append(span);
  });
  if (missing.length) {
    const missingLine = document.createElement("span"); missingLine.className = "missing-line";
    missingLine.textContent = `Missing: ${missing.join(", ")}`; match.append(missingLine);
  } else {
    const readyLine = document.createElement("span"); readyLine.className = "missing-line"; readyLine.style.color = "var(--green)";
    readyLine.textContent = "You have everything"; match.append(readyLine);
  }
  const actions = document.createElement("div"); actions.className = "card-actions";
  const coverage = document.createElement("span"); coverage.className = "card-stats"; coverage.textContent = `${available.length} of ${recipe.ingredients.length} ingredients`;
  const view = document.createElement("button"); view.type = "button"; view.className = "view-recipe"; view.textContent = isSaved ? "Open recipe ↗" : "View recipe ↗";
  view.addEventListener("click", () => openRecipe(recipe.id));
  if (isSaved) {
    const remove = document.createElement("button"); remove.type = "button"; remove.className = "view-recipe"; remove.textContent = "Remove";
    remove.addEventListener("click", () => removeSavedRecipe(recipe.id)); actions.append(remove);
  } else actions.append(coverage);
  actions.append(view);
  body.append(tags, title, description, stats, match, actions);
  card.append(imageWrap, body);
  return card;
}

function renderRecipes(container, resultItems, isSaved = false) {
  container.replaceChildren();
  resultItems.forEach((item, index) => container.append(createRecipeCard(item, index, isSaved)));
}

function filterRecipes() {
  if (state.results.length) generateRecipes();
}

function loadSavedRecipes() {
  try {
    const stored = JSON.parse(localStorage.getItem("plate.savedRecipes") || "[]");
    state.saved = Array.isArray(stored) ? stored.filter((id) => recipes.some((recipe) => recipe.id === id)) : [];
  } catch {
    state.saved = [];
  }
  renderSavedRecipes();
}

function persistSavedRecipes() {
  try {
    localStorage.setItem("plate.savedRecipes", JSON.stringify(state.saved));
  } catch {
    showToast("Your browser couldn’t save this recipe just now.");
  }
}

function isRecipeSaved(recipeId) {
  return state.saved.includes(recipeId);
}

function saveRecipe(recipeId) {
  if (!isRecipeSaved(recipeId)) state.saved.push(recipeId);
  persistSavedRecipes();
  renderSavedRecipes();
  renderRecipes(elements.recipeGrid, state.results, false);
  showToast("Saved to your recipe box.");
  if (elements.modal.dataset.recipeId === recipeId) renderRecipeDetail(recipeId);
}

function removeSavedRecipe(recipeId) {
  state.saved = state.saved.filter((id) => id !== recipeId);
  persistSavedRecipes();
  renderSavedRecipes();
  renderRecipes(elements.recipeGrid, state.results, false);
  if (elements.modal.dataset.recipeId === recipeId) renderRecipeDetail(recipeId);
  showToast("Removed from your recipe box.");
}

function renderSavedRecipes() {
  const savedItems = state.saved.map((id) => recipes.find((recipe) => recipe.id === id)).filter(Boolean).map((recipe) => {
    const pantry = new Set(state.ingredients.map(normalizeIngredient));
    return { recipe, available: recipe.ingredients.filter((item) => pantry.has(normalizeIngredient(item))), missing: recipe.ingredients.filter((item) => !pantry.has(normalizeIngredient(item))) };
  });
  renderRecipes(elements.savedGrid, savedItems, true);
  elements.savedEmpty.hidden = savedItems.length > 0;
  elements.savedCount.textContent = String(savedItems.length);
  elements.savedSectionCount.textContent = `${savedItems.length} ${savedItems.length === 1 ? "saved recipe" : "saved recipes"}`;
}

function openRecipe(recipeId) {
  if (!recipes.some((recipe) => recipe.id === recipeId)) return;
  state.lastFocused = document.activeElement;
  state.cookingMode = false;
  elements.modal.dataset.recipeId = recipeId;
  renderRecipeDetail(recipeId);
  elements.modal.hidden = false;
  document.body.style.overflow = "hidden";
  elements.modalPanel.focus();
}

function renderRecipeDetail(recipeId) {
  const recipe = recipes.find((item) => item.id === recipeId);
  if (!recipe) return;
  const pantry = new Set(state.ingredients.map(normalizeIngredient));
  const ingredientMarkup = recipe.ingredients.map((ingredient) => {
    const available = pantry.has(normalizeIngredient(ingredient));
    return `<li class="${available ? "available" : "missing"}">${escapeHtml(ingredient)}${available ? "" : " · add this"}</li>`;
  }).join("");
  const instructionMarkup = recipe.instructions.map((instruction) => `<li>${escapeHtml(instruction)}</li>`).join("");
  const cookingMarkup = state.cookingMode ? `<p class="cooking-note">Cooking mode is on. Tap each step as you finish it.</p>` : "";
  elements.modalContent.innerHTML = `
    <div class="modal-hero"><img src="https://images.unsplash.com/${recipe.image}?auto=format&fit=crop&w=1400&q=85" alt="${escapeHtml(recipe.title)}"><span class="modal-hero-label">${escapeHtml(recipe.mealType)} · ${recipe.cookingTime} min</span></div>
    <div class="modal-details">
      <p class="eyebrow"><span class="eyebrow-line"></span> A Plate kitchen favourite</p>
      <h2 id="modal-title">${escapeHtml(recipe.title)}</h2>
      <p class="modal-description">${escapeHtml(recipe.description)}</p>
      <div class="modal-stats"><div class="nutrition-item"><strong>${recipe.calories}</strong><span>Calories</span></div><div class="nutrition-item"><strong>${recipe.protein}g</strong><span>Protein</span></div><div class="nutrition-item"><strong>${recipe.carbs}g</strong><span>Carbs</span></div><div class="nutrition-item"><strong>${recipe.fat}g</strong><span>Fat</span></div></div>
      <div class="modal-columns"><div><h3>Gather around</h3><ul class="ingredient-list">${ingredientMarkup}</ul></div><div><h3>Make it happen</h3>${cookingMarkup}<ol class="instruction-list">${instructionMarkup}</ol></div></div>
      <div class="modal-actions"><button type="button" class="button button-dark" id="modal-save">${isRecipeSaved(recipe.id) ? "♥ Saved" : "♡ Save recipe"}</button><button type="button" class="button button-outline" id="modal-cook">${state.cookingMode ? "Exit cooking mode" : "Cook this recipe"}</button><button type="button" class="view-recipe" id="modal-back">Back to recipes</button></div>
    </div>`;
  elements.modalContent.querySelector("#modal-save").addEventListener("click", () => isRecipeSaved(recipe.id) ? removeSavedRecipe(recipe.id) : saveRecipe(recipe.id));
  elements.modalContent.querySelector("#modal-cook").addEventListener("click", () => {
    state.cookingMode = !state.cookingMode;
    renderRecipeDetail(recipe.id);
    if (state.cookingMode) elements.modalContent.querySelectorAll(".instruction-list li").forEach((step) => step.addEventListener("click", () => step.classList.toggle("done")));
  });
  if (state.cookingMode) elements.modalContent.querySelectorAll(".instruction-list li").forEach((step) => step.addEventListener("click", () => step.classList.toggle("done")));
  elements.modalContent.querySelector("#modal-back").addEventListener("click", closeRecipe);
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
}

function closeRecipe() {
  elements.modal.hidden = true;
  document.body.style.overflow = "";
  if (state.lastFocused instanceof HTMLElement) state.lastFocused.focus();
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("is-visible");
  window.clearTimeout(state.toastTimer);
  state.toastTimer = window.setTimeout(() => elements.toast.classList.remove("is-visible"), 2400);
}

function handlePreferenceClick(event) {
  const button = event.target.closest("button[data-value]");
  if (!button) return;
  const group = button.closest(".option-row");
  const filterName = group.dataset.filter;
  group.querySelectorAll(".option").forEach((option) => {
    const active = option === button;
    option.classList.toggle("is-active", active);
    option.setAttribute("aria-pressed", String(active));
  });
  state.filters[filterName] = button.dataset.value;
  filterRecipes();
}

function initialise() {
  const validSuggestions = new Set(suggestedIngredients.map(normalizeIngredient));
  recipes.forEach((recipe) => recipe.ingredients.forEach((ingredient) => validSuggestions.add(normalizeIngredient(ingredient))));
  [...validSuggestions].sort().forEach((ingredient) => {
    const option = document.createElement("option");
    option.value = ingredient.replace(/\b\w/g, (letter) => letter.toLocaleUpperCase());
    elements.suggestions.append(option);
  });
  elements.ingredientForm.addEventListener("submit", (event) => { event.preventDefault(); addIngredient(); });
  document.querySelector("#clear-ingredients").addEventListener("click", () => { state.ingredients = []; renderIngredients(); });
  document.querySelectorAll(".option-row").forEach((group) => group.addEventListener("click", handlePreferenceClick));
  elements.generateButton.addEventListener("click", generateRecipes);
  document.querySelector("#modal-close").addEventListener("click", closeRecipe);
  elements.modal.addEventListener("click", (event) => { if (event.target === elements.modal) closeRecipe(); });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !elements.modal.hidden) closeRecipe();
    if (event.key === "Tab" && !elements.modal.hidden) {
      const focusable = [...elements.modalPanel.querySelectorAll("button:not(:disabled), a[href], [tabindex]:not([tabindex='-1'])")];
      const first = focusable[0]; const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });
  renderIngredients();
  loadSavedRecipes();
  generateRecipes();
}

initialise();