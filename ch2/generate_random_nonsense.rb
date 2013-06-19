File.open("random_nonsense.txt", "w") do |file|
  words = %w{This is a bunch of random nonsense.}

  file << words.join(" ")
  file << ' '

  10000.times do
    file << words.sample
    file << ' '
  end
end
