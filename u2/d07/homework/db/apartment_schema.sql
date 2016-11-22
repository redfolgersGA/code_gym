-- Put apartment schema here

CREATE SCHEMA realty_schema;

CREATE TABLE buildings (id serial PRIMARY KEY, name varchar(50), address text, num_floors integer);

CREATE TABLE doormen(id serial PRIMARY KEY, name text, experience integer, shift text, building_id serial references buildings(id));

CREATE TABLE apartments(id serial PRIMARY KEY, floor integer, name text, price money, sqft integer, bedrooms integer, bathrooms integer, building_id serial references buildings(id));

CREATE TABLE tenants(id serial PRIMARY KEY, name text, age integer, gender text, apartment_id serial references apartments(id));
