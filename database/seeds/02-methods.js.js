exports.seed = function(knex, Promise) {
  return knex("methods").insert([
    {
      method_name: "Using a pre-soak to keep whites bright",
      description:
        "Dissolve baking soda in warm water for a whitening, deodorizing treatment. Use 1 cup (180 grams) of baking soda and mix it with 4 litres (1.1 US gal) of warm water. Use a plastic tub, washbasin, or something similar that is large enough to hold your clothes. Soak your white clothes in the baking soda mixture for about 8 hours before washing them as you normally would"
    },
    {
      method_name:
        "Put on a thick pair of socks and pull on the laced-up boots",
      description:
        "Wearing thick socks with Doc Martens will cause them to widen out and break in a little faster. They also help protect your feet from blisters. Put the laces back in your boots and tie them tightly"
    }
  ]);
};
