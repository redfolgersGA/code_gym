

CREATE TABLE houses (id serial PRIMARY KEY, name text, img_url text);

CREATE TABLE students (id serial PRIMARY KEY, fname text, lname text, image text, house_id serial references houses(id));
