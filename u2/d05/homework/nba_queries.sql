-- TIPS (KEYWORDS)
-- * WHERE
-- * ORDER BY
-- * LIMIT
-- * AVG


-- select all new york knick players
SELECT * FROM players = 'NYK';

-- select all players on indiana pacers that are under age 26

SELECT * FROM players WHERE team = 'IND' AND age < '26';

--select all from players order by points ascending

SELECT * FROM players ORDER BY points ASC;

-- Name and Points per game (points/games), for the players with the top 20 points per game.
        -- selects column points and column games from players table
SELECT points, games FROM players;

