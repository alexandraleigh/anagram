describe('isAnagram', function() {
   it("is true if the stings are anagrams", function() {
    isAnagram("Tom Marvolo Riddle", "I am Lord Voldemort").should.equal(true);
  });
     it("is false if the strings are not anagrams", function() {
    isAnagram("cat", "dog").should.equal(false);
  });
});