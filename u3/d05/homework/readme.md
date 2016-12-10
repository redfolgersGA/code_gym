## Straight CURDin'

![image](http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2013/3/13/1363190066646/Best-Farmhouse-Cheese-Ins-008.jpg)

You all already know how to CRUD. Tonight, you learn to *CURD* (takes off sunglasses).

#### Completion

Please finish through __Part 8__. As always: more is cheddar; havarti living is best.

#### Part 1: Setup

Create a new Rails app using the following command:

```bash
rails new straight_curdin
```

Now to set up your database of `cheeses`

To create the database, run:

`rails db:create`

To create a table of cheeses, you need to run:

`rails generate migration CreateCheeses`

This'll create your migration file. Your cheeses should have the following attributes:

- name - string
- milk_type - string
- description - string
- image_url - string

After this migration file is complete, run it:

`rails db:migrate`

Now, you have to create the model for your cheeses. In `app/models`, create a `cheese.rb` file. In it create your `Cheese` class and have it inherit from `ActiveRecord::Base`.

Time to seed some test data! Copy the contents of `straight_curdin_seeds.rb` into your `db/seeds.rb` file.

Now you can run the seeds with:

`rails db:seed`

NOTE: The seeds rely on an ActiveRecord class, and will fail if you haven't written your models.

Now in your `config/routes.rb` file, call the `resource` method to auto generate all of your cheese resource routes. You're now ready to start CURD'in.

#### Part 2: The Great Hall of Cheeses

Fulfill the following specification:

- GET requests to '/' should forward to `/cheeses`, and should have a heading that says, "The Great Hall of Cheeses", followed by an unordered list of links to cheeses, i.e. `/cheeses/1`, `/cheeses/2`, `/cheeses/3`, and so on.

#### Part 3: "One Cheese at a Time, Bruh!"
- GET requests to `/cheeses/1` should display the `name`, `milk_type`, `description`, and image (via `image_url`) of the cheese with the id of 1, while GET requests to `/cheeses/7` should display the information of the cheese with the id of 7.

#### Part 4: Putting the C in "CURD"

Fulfill the following specification:

- GET requests to `/cheeses/new` should take the visitor to a form for creating a new cheese.
- When the user submits the form, a new cheese is created in the database, and the user is redirected to The Great Hall of Cheeses. If all has gone according to plan, the newly created cheese should will show up in the list.
- Use form helpers to generate your forms

#### Part 5: Eat the Cheese, You Fool

Head back to the template for The Great Hall of Cheeses. Update it using form helpers so that each cheese has a button beside it that says "Eat This Cheese", and clicking on that button removes the appropriate cheese from the database. The user should then be redirected to The Great Hall of Cheeses. If all has gone according to plan, the cheese you chose to destroy will not show up on the list.

#### Part 6: If Rocky Can Change, and the Soviet Hordes Can Change, So Can Cheese

Head back to the cheese's "show" template, and add a link to `/cheeses/THE_ID_OF_THE_CHEESE_IN_QUESTION/edit`. Clicking this link should take you to a `form_for` editing the information for a particular cheese. The form's fields should be pre-populated with the values of the cheese. When the user submits this form, the changes to the cheese should be persisted to the database, and the user should be redirected to that cheese's "show" page. If all has gone according to plan, the changes you made to the cheese will be reflected on the cheese's show page.

#### Part 7: Welcome to the Limburger Zone

We want to add a column for `stank_level` to our `Cheeses` table. It should be an integer with a default value of 0. Generate and run the migration to make this happen. What happened to the original cheese data? Update your routes to reflect this change.

#### Part 8: Countries of Origin

We have all of these cheeses, but haven't been keeping track of their Countries!
Write a new migration & model to store `Countries` and use the Rails console to seed some countries into the database.

Given the notion that all countries have many cheeses, and that all cheeses belong to a country, write the rails migration to update the `Cheeses` table to include the `country_id`. Update your cheese views to show each cheese's country of origin. If they don't have any your edit route should allow you to change their values.

#### Part 9: Enforcing the Golden Roule

Visiting the `/countries` route should give me a view of the entire list of countries in the database. And visiting each individual country's page should yield a list of that country's cheeses.

#### Part 10: Doublet Down

From the `/countries/cheeses/CHEESE_IN_QUESTION` route, one should be able to get the description of that particular cheese, ONLY if it actually originates from that country.

#### SUPER Bonus

Fulfill the following specification:

#### Cheesemonger's Choice

GET requests to `/cheesemongers_choice` should display the information of a randomly selected cheese.

#### Moldin' it Down

Update the cheese's "show" page with a "Mold!" button. when the user clicks the button, it should increment the cheese's `stank_level` in the database and redirect to the cheese's show page.

#### Add a Vignotte

Style the pages!

#### Wait just a Minute

Add the following methods to the `Cheese` model:

- .cow? - returns true if the cheese is from cow milk, false otherwise
- .goat? - returns true if the cheese is from goat milk, false otherwise
- .stanky? - returns true if stank_level is above 4, false otherwise
