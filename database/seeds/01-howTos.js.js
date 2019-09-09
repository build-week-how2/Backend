exports.seed = function(knex, Promise) {
  return knex("howTos").insert([
    {
      howTo_name: "How to Get White Clothes White Again",
      description:
        "Keeping white clothes white can be hard. Luckily, there are multiple ways you can soak your whites to pre-treat them and deal with stains, like using baking soda or a stain-fighting spray. When you wash your white clothes, always separate them from colored clothes. Use a little bit of vinegar along with your normal detergent for the best results."
    },
    {
      howTo_name: "How to Break in Your Doc Martens",
      description:
        "From factory and harbor workers to punks and goth rockers, Doc Martens have been a popular shoe choice since 1945. Comfortable and sturdy once broken in, they last forever and can be buffed to a mirror shine even after several years of wear. The only problem is that they can be cast-iron to break in, resulting in blisters, bruises, and lots of pain. By finding the right fit and starting slow with wearing your boots around the house for a couple of hours a day, you can minimize the pain it takes to break in these classic boots."
    }
  ]);
};
