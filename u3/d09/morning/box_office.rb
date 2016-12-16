movie_ratings = "pg-thirteen,pg,r,pg,pg-thirteen,pg-thirteen,pg-thirteen,r,r,r,r,pg-thirteen,r,pg-thirteen,r,r,r,r,r,r,pg-thirteen,r,pg-thirteen,pg-thirteen,pg,r,r,pg,pg".split(",")
puts movie_ratings



movie_titles = "the hunger games: mockingjay - part 1|penguins of madagascar|horrible bosses 2|big hero 6|interstellar|dumb and dumber to|the theory of everything|gone girl|the pyramid|birdman|nightcrawler|st. vincent|fury|beyond the lights|wild|foxcatcher|the homesman|whiplash|john wick|the equalizer|guardians of the galaxy|the judge|the maze runner|ouija|alexander and the terrible, horrible, no good, very bad day|rosewater|hector and the search for happiness|the book of life|the boxtrolls".split('|')

puts movie_titles

two_movie_scores = "65%, 76%*71%, 68%*34%, 60%*89%, 94%*73%, 87%*26%, 49%*81%, 84%*88%, 89%*7%, 39%*94%, 86%*95%, 87%*76%, 82%*78%, 88%*84%, 83%*92%, 80%*86%, 77%*79%, 53%*96%, 96%*85%, 82%*61%, 81%*90%, 94%*47%, 76%*63%, 73%*7%, 29%*62%, 65%*74%, 75%*36%, 67%*82%, 82%*75%, 68%".split('*')
puts two_movie_scores

capitalize_movies = movie_title.map! do |movie|
  movie.split(" ").map(&:capitalize).join(" ")
end


capitalized_movies = movie_title.each do |x|
  title = x.split(" ").each{ |y| y.capitalize!}
  title = title.join(" ")
  x.gsub!(x, title)
# movie_list = [] << { title: title}
end

puts capitalized_movies

movie_hash = capitalized_movies.map do |movie|
  {title: movie}
end

puts movie_hash

scores_hash = scores.map do |score|
  {score: score}
end

puts scores_hash

titles_and_scores = movie_hash.each_with_index.map do |movie, index|
  {title: movie[:title], score: scores_hash[index][:score]}
end

puts titles_and_scores





