-- Seed data ported 1:1 from mockServer/db.json so the live DB starts
-- with the same recipes/collections/meal plans developers already see.
-- Run after schema.sql, on an empty database (ids are hardcoded to match).

insert into recipes (id, name) values
  (1, 'Classic Chocolate Chip Cookies'),
  (2, 'Spaghetti Carbonara'),
  (3, 'Chicken Alfredo Pasta'),
  (4, 'Homemade Margherita Pizza'),
  (5, 'Grilled Salmon with Lemon and Garlic'),
  (6, 'Classic Beef Lasagna'),
  (7, 'Creamy Chicken Alfredo'),
  (8, 'Vegetable Stir-Fry'),
  (9, 'Classic Beef Burgers');
select setval(pg_get_serial_sequence('recipes','id'), (select max(id) from recipes));

insert into recipe_ingredients (recipe_id, amount, name, order_index) values
  (1, '3 1/4 cups', 'all-purpose flour', 0),
  (1, '1/2 tsp', 'baking soda', 1),
  (1, '1 cup', 'butter, softened', 2),
  (1, '3/4 cup', 'granulated sugar', 3),
  (1, '3/4 cup', 'packed brown sugar', 4),
  (1, '1 tsp', 'vanilla extract', 5),
  (1, '2', 'eggs', 6),
  (1, '2 cups', 'semisweet chocolate chips', 7),
  (2, '8 oz', 'spaghetti', 0),
  (2, '6 slices', 'bacon, chopped', 1),
  (2, '3', 'eggs', 2),
  (2, '3/4 cup', 'grated Parmesan cheese', 3),
  (2, '1/2 cup', 'heavy cream', 4),
  (2, '1/2 tsp', 'salt', 5),
  (2, '1/4 tsp', 'black pepper', 6),
  (2, '1/4 cup', 'chopped fresh parsley', 7),
  (3, '8 oz', 'fettuccine', 0),
  (3, '2 cups', 'cooked chicken, chopped', 1),
  (3, '2 cups', 'heavy cream', 2),
  (3, '1/2 cup', 'butter', 3),
  (3, '3/4 cup', 'grated Parmesan cheese', 4),
  (3, '1/2 tsp', 'salt', 5),
  (3, '1/4 tsp', 'black pepper', 6),
  (3, '1/4 tsp', 'garlic powder', 7),
  (4, '1 lb', 'pizza dough', 0),
  (4, '1/2 cup', 'tomato sauce', 1),
  (4, '8 oz', 'fresh mozzarella cheese, sliced', 2),
  (4, '1/4 cup', 'fresh basil leaves', 3),
  (4, '2 tbsp', 'olive oil', 4),
  (4, '1/2 tsp', 'salt', 5),
  (4, '1/4 tsp', 'black pepper', 6),
  (5, '4', 'salmon fillets', 0),
  (5, '2 tbsp', 'olive oil', 1),
  (5, '2 cloves', 'garlic, minced', 2),
  (5, '1 tsp', 'lemon zest', 3),
  (5, '2 tbsp', 'lemon juice', 4),
  (5, '1/4 cup', 'chopped fresh parsley', 5),
  (5, '1/2 tsp', 'salt', 6),
  (5, '1/4 tsp', 'black pepper', 7),
  (6, '9', 'lasagna noodles', 0),
  (6, '1 lb', 'ground beef', 1),
  (6, '1/2 cup', 'chopped onion', 2),
  (6, '2 cloves', 'garlic, minced', 3),
  (6, '1 can (28 oz)', 'crushed tomatoes', 4),
  (6, '1 tsp', 'dried basil', 5),
  (6, '1 tsp', 'dried oregano', 6),
  (6, '1/2 tsp', 'salt', 7),
  (6, '1/4 tsp', 'black pepper', 8),
  (6, '2 cups', 'ricotta cheese', 9),
  (6, '1 cup', 'shredded mozzarella cheese', 10),
  (6, '1/2 cup', 'grated Parmesan cheese', 11),
  (7, '8 oz', 'fettuccine pasta', 0),
  (7, '2 cups', 'cooked chicken, diced', 1),
  (7, '1/2 cup', 'butter', 2),
  (7, '2 cups', 'heavy cream', 3),
  (7, '1 cup', 'grated Parmesan cheese', 4),
  (7, '1/4 tsp', 'ground black pepper', 5),
  (7, '1/2 tsp', 'salt', 6),
  (7, '2 cloves', 'garlic, minced', 7),
  (7, '1/4 cup', 'chopped fresh parsley', 8),
  (8, '2 cups', 'broccoli florets', 0),
  (8, '1 cup', 'sliced carrots', 1),
  (8, '1 cup', 'sliced bell peppers', 2),
  (8, '1 cup', 'snow peas', 3),
  (8, '1/2 cup', 'sliced mushrooms', 4),
  (8, '2 cloves', 'garlic, minced', 5),
  (8, '1/4 cup', 'soy sauce', 6),
  (8, '1 tbsp', 'sesame oil', 7),
  (8, '1 tbsp', 'cornstarch', 8),
  (8, '2 tbsp', 'water', 9),
  (8, '2 tbsp', 'vegetable oil', 10),
  (8, '2 cups', 'cooked rice, for serving', 11),
  (9, '1 lb', 'ground beef', 0),
  (9, '1', 'egg', 1),
  (9, '1/4 cup', 'bread crumbs', 2),
  (9, '1/4 cup', 'chopped onion', 3),
  (9, '1 clove', 'garlic, minced', 4),
  (9, '1 tbsp', 'Worcestershire sauce', 5),
  (9, '1/2 tsp', 'salt', 6),
  (9, '1/4 tsp', 'black pepper', 7),
  (9, '4', 'hamburger buns, split and toasted', 8);

insert into recipe_instructions (recipe_id, step_number, instruction) values
  (1, 1, 'Preheat the oven to 375°F.'),
  (1, 2, 'In a small bowl, combine flour and baking soda; set aside.'),
  (1, 3, 'In a large bowl, beat the butter, granulated sugar, brown sugar, and vanilla extract until creamy.'),
  (1, 4, 'Add eggs, one at a time, beating well after each addition.'),
  (1, 5, 'Gradually beat in the flour mixture.'),
  (1, 6, 'Stir in the chocolate chips.'),
  (1, 7, 'Drop by rounded tablespoon onto ungreased baking sheets.'),
  (1, 8, 'Bake for 9 to 11 minutes or until golden brown.'),
  (1, 9, 'Cool on baking sheets for 2 minutes; remove to wire racks to cool completely.'),
  (2, 1, 'Cook spaghetti according to package directions; drain, reserving 1/2 cup pasta water.'),
  (2, 2, 'In a large skillet, cook bacon over medium heat until crisp; remove with a slotted spoon to paper towels.'),
  (2, 3, 'In a small bowl, whisk together eggs, Parmesan cheese, cream, salt, and pepper.'),
  (2, 4, 'Add cooked spaghetti to skillet; toss to combine.'),
  (2, 5, 'Remove from heat; quickly stir in egg mixture, tossing constantly to coat.'),
  (2, 6, 'Add reserved pasta water, 1 tablespoon at a time, until desired consistency is reached.'),
  (2, 7, 'Sprinkle with bacon and parsley before serving.'),
  (3, 1, 'Cook fettuccine according to package directions; drain.'),
  (3, 2, 'In a large skillet, melt butter over medium heat.'),
  (3, 3, 'Stir in cream, Parmesan cheese, salt, pepper, and garlic powder.'),
  (3, 4, 'Cook and stir until heated through.'),
  (3, 5, 'Add cooked chicken and cooked fettuccine to skillet; toss to combine.'),
  (3, 6, 'Serve immediately, garnished with additional Parmesan cheese and parsley if desired.'),
  (4, 1, 'Preheat the oven to 475°F.'),
  (4, 2, 'Roll out the pizza dough on a floured surface into a 12-inch circle.'),
  (4, 3, 'Spread the tomato sauce evenly over the dough, leaving a 1/2-inch border.'),
  (4, 4, 'Arrange the mozzarella slices on top of the sauce.'),
  (4, 5, 'Scatter the basil leaves over the cheese.'),
  (4, 6, 'Drizzle the olive oil over the pizza and season with salt and pepper.'),
  (4, 7, 'Bake for 10-12 minutes or until the crust is golden brown and the cheese is melted and bubbly.'),
  (4, 8, 'Slice and serve hot.'),
  (5, 1, 'Preheat the grill to medium-high heat.'),
  (5, 2, 'In a small bowl, whisk together olive oil, garlic, lemon zest, lemon juice, parsley, salt, and pepper.'),
  (5, 3, 'Brush the salmon fillets with the lemon-garlic mixture.'),
  (5, 4, 'Grill the salmon for 4-5 minutes per side or until the fish flakes easily with a fork.'),
  (5, 5, 'Serve immediately, garnished with additional lemon slices and parsley if desired.'),
  (6, 1, 'Preheat the oven to 375°F.'),
  (6, 2, 'Cook lasagna noodles according to package directions; drain.'),
  (6, 3, 'In a large skillet, cook ground beef, onion, and garlic over medium heat until meat is no longer pink; drain.'),
  (6, 4, 'Stir in crushed tomatoes, basil, oregano, salt, and pepper.'),
  (6, 5, 'In a separate bowl, combine ricotta cheese, mozzarella cheese, and Parmesan cheese.'),
  (6, 6, 'Spread 1 cup meat sauce in an ungreased 9x13-inch baking dish.'),
  (6, 7, 'Layer with three noodles, 1 1/2 cups meat sauce, and cheese mixture.'),
  (6, 8, 'Repeat layers twice.'),
  (6, 9, 'Bake, uncovered, for 25-30 minutes or until heated through.'),
  (6, 10, 'Let stand for 10 minutes before cutting.'),
  (7, 1, 'Cook fettuccine pasta according to package instructions; drain and set aside.'),
  (7, 2, 'In a large skillet, melt butter over medium heat.'),
  (7, 3, 'Add minced garlic and cook until fragrant, about 1 minute.'),
  (7, 4, 'Stir in heavy cream, Parmesan cheese, salt, and black pepper.'),
  (7, 5, 'Cook, stirring constantly, until the sauce thickens, about 5 minutes.'),
  (7, 6, 'Add cooked chicken to the sauce and cook until heated through.'),
  (7, 7, 'Toss cooked pasta with the sauce until well coated.'),
  (7, 8, 'Serve hot, garnished with chopped parsley.'),
  (8, 1, 'In a small bowl, whisk together soy sauce, sesame oil, cornstarch, and water to make the sauce.'),
  (8, 2, 'Heat vegetable oil in a large skillet or wok over medium-high heat.'),
  (8, 3, 'Add minced garlic and stir-fry for 30 seconds.'),
  (8, 4, 'Add broccoli, carrots, bell peppers, snow peas, and mushrooms to the skillet.'),
  (8, 5, 'Stir-fry for 4-5 minutes or until vegetables are tender-crisp.'),
  (8, 6, 'Pour the sauce over the vegetables and cook for an additional 2 minutes, stirring constantly.'),
  (8, 7, 'Serve hot over cooked rice.'),
  (9, 1, 'In a large bowl, combine ground beef, egg, bread crumbs, chopped onion, minced garlic, Worcestershire sauce, salt, and black pepper.'),
  (9, 2, 'Mix until well combined.'),
  (9, 3, 'Shape mixture into four patties.'),
  (9, 4, 'Grill patties over medium-high heat for 4-5 minutes on each side or until no longer pink in the center.'),
  (9, 5, 'Serve burgers on toasted buns with desired toppings.');

insert into collections (id, name) values
  (201, 'Thai Cuisine'),
  (202, 'Italian Cuisine'),
  (203, 'Mexican Cuisine'),
  (204, 'American Cuisine'),
  (205, 'Chinese Cuisine'),
  (206, 'Japanese Cuisine'),
  (207, 'Korean Cuisine');
select setval(pg_get_serial_sequence('collections','id'), (select max(id) from collections));

insert into collection_recipes (collection_id, recipe_id, order_index) values
  (201, 1, 0),
  (201, 2, 1),
  (201, 3, 2),
  (202, 4, 0),
  (202, 5, 1),
  (202, 6, 2),
  (204, 7, 0),
  (204, 8, 1),
  (204, 9, 2);

insert into meal_plans (id, name, length, time_unit) values
  (1, 'Weekly Meal Plan', 7, 'days'),
  (2, 'Quick and Easy', 3, 'days');
select setval(pg_get_serial_sequence('meal_plans','id'), (select max(id) from meal_plans));

do $$
declare
  new_day_id bigint;
begin
  insert into meal_plan_days (meal_plan_id, day_number) values (1, 1) returning id into new_day_id;
  insert into meal_plan_day_recipes (day_id, recipe_id, order_index) values (new_day_id, 1, 0);
  insert into meal_plan_day_recipes (day_id, recipe_id, order_index) values (new_day_id, 2, 1);
  insert into meal_plan_days (meal_plan_id, day_number) values (1, 2) returning id into new_day_id;
  insert into meal_plan_day_recipes (day_id, recipe_id, order_index) values (new_day_id, 2, 0);
  insert into meal_plan_day_recipes (day_id, recipe_id, order_index) values (new_day_id, 4, 1);
  insert into meal_plan_day_recipes (day_id, recipe_id, order_index) values (new_day_id, 6, 2);
  insert into meal_plan_days (meal_plan_id, day_number) values (1, 3) returning id into new_day_id;
  insert into meal_plan_day_recipes (day_id, recipe_id, order_index) values (new_day_id, 3, 0);
  insert into meal_plan_days (meal_plan_id, day_number) values (1, 4) returning id into new_day_id;
  insert into meal_plan_day_recipes (day_id, recipe_id, order_index) values (new_day_id, 4, 0);
  insert into meal_plan_day_recipes (day_id, recipe_id, order_index) values (new_day_id, 1, 1);
  insert into meal_plan_day_recipes (day_id, recipe_id, order_index) values (new_day_id, 2, 2);
  insert into meal_plan_days (meal_plan_id, day_number) values (1, 5) returning id into new_day_id;
  insert into meal_plan_day_recipes (day_id, recipe_id, order_index) values (new_day_id, 5, 0);
  insert into meal_plan_day_recipes (day_id, recipe_id, order_index) values (new_day_id, 5, 1);
  insert into meal_plan_day_recipes (day_id, recipe_id, order_index) values (new_day_id, 5, 2);
  insert into meal_plan_days (meal_plan_id, day_number) values (1, 6) returning id into new_day_id;
  insert into meal_plan_day_recipes (day_id, recipe_id, order_index) values (new_day_id, 6, 0);
  insert into meal_plan_day_recipes (day_id, recipe_id, order_index) values (new_day_id, 2, 1);
  insert into meal_plan_days (meal_plan_id, day_number) values (1, 7) returning id into new_day_id;
  insert into meal_plan_day_recipes (day_id, recipe_id, order_index) values (new_day_id, 7, 0);
  insert into meal_plan_day_recipes (day_id, recipe_id, order_index) values (new_day_id, 4, 1);
  insert into meal_plan_day_recipes (day_id, recipe_id, order_index) values (new_day_id, 2, 2);
  insert into meal_plan_days (meal_plan_id, day_number) values (2, 1) returning id into new_day_id;
  insert into meal_plan_day_recipes (day_id, recipe_id, order_index) values (new_day_id, 8, 0);
  insert into meal_plan_day_recipes (day_id, recipe_id, order_index) values (new_day_id, 2, 1);
  insert into meal_plan_days (meal_plan_id, day_number) values (2, 2) returning id into new_day_id;
  insert into meal_plan_day_recipes (day_id, recipe_id, order_index) values (new_day_id, 9, 0);
  insert into meal_plan_day_recipes (day_id, recipe_id, order_index) values (new_day_id, 3, 1);
  insert into meal_plan_days (meal_plan_id, day_number) values (2, 3) returning id into new_day_id;
  insert into meal_plan_day_recipes (day_id, recipe_id, order_index) values (new_day_id, 1, 0);
  insert into meal_plan_day_recipes (day_id, recipe_id, order_index) values (new_day_id, 2, 1);
end $$;

insert into events (id, start_date, meal_plan_id) values
  (401, '2024-03-26', 2),
  (402, '2024-03-18', 1);
select setval(pg_get_serial_sequence('events','id'), (select max(id) from events));

