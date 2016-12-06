wine_cellar = [
  { :label => "Rutherford Hill", :type => "Chardonnay", :color => "red" },
  { :label => "Nina Veneto", :type => "Pinot Grigio", :color => "white" },
  { :label => "Wairau River", :type => "Sauvignon Blanc", :color => "white" },
  { :label => "Tangley Oaks", :type => "Merlot", :color => "red" },
  { :label => "Chimney Rock", :type => "cabernet Sauvignon", :color => "red" },
  { :label => "Sanford", :type => "Pinot Noir", :color => "red" },
  { :label => "Alderbrook", :type => "Pinot Noir", :color => "red" },
  { :label => "Colavita", :type => "Pinot Noir", :color => "red" },
  { :label => "Markham", :type => "Chardonnay", :color => "white" },
  { :label => "Angeline", :type => "Pinot Noir", :color => "red" }
]

#1
saved_for_special_occasion = "A #{wine_cellar[2][:type]} from #{wine_cellar[2][:label]}."
#2
swill = "A #{wine_cellar[3][:type]} from #{wine_cellar[3][:label]}."
#3
wine_cellar[0][:color] = "white"
#4
wine_cellar.push ({
  label: "titz",
  type: "Boxed",
  color: "reddish"
#5
retrieves_random_wine_for_party = wine_cellar.shuffle.pop
