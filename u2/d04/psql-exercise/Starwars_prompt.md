# Starwars!

1. Display all the Jedis in the database. 

2. There is a disturbance in the force. The Jedi with red lightsabers have been temped by the dark side. They gather together. Display all the jedi with red lightsabers.

A: SELECT * FROM jedis WHERE lightsaber_color = 'red'; 

3. The Jedi with red lightsabers attack and assainate the Jedi who posess green lightsabers. Delete all the jedi with green lightsabers.

A: DELETE FROM jedis WHERE lightsaber_color = 'green';

4. Yoda hears of this disturbance in the force. He decides they must fight back. He gathers all Jedi with blue lightsaber. He trains them in a special Jedi way, doubling their years of experience instantly. Update the blue lightsaber Jedis to double their years training. 

A: UPDATE jedis SET years_training = years_training * 2 WHERE lightsaber_color = 'blue';

5. The red lightsaber Jedi hear this and attack quickly again- delete all Jedi with orange lightsabers. 

A: DELETE FROM jedis WHERE lightsaber_color = 'orange';

6. Yoda is worried. He gathers all the Jedi he can find. He trains all of them and converts them to blue lightsabers. Update teal, black and purple to double their experience and change their lightsaber color. 

A: UPDATE jedis SET lightsaber_color = 'blue' WHERE lightsaber_color = 'purple';
A: UPDATE jedis SET lightsaber_color = 'blue' WHERE lightsaber_color = 'black';
A: UPDATE jedis SET lightsaber_color = 'blue' WHERE lightsaber_color = 'teal';
A: UPDATE jedis SET years_training = years_training * 2  WHERE lightsaber_color = 'blue';


7. WAR!@!!!!!@# Casualties are high. Anyone with less than 25 years training didn't make it. :( Remove all Jedi with less than 25 years of training. 

A: DELETE FROM jedis WHERE years_training < 25;
A: SELECT * FROM jedis;

8. Who is left?
