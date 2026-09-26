// All roast + tip content lives here. No API calls, ever.
// Each entry: a funny roast line and one genuinely useful care tip.

export const roasts = [
  {
    problem: 'Yellow leaves',
    roast:
      "Those yellow leaves aren't 'autumn vibes,' babe. Your plant is waving tiny caution flags and you're out here calling it aesthetic.",
    tip: 'Yellowing lower leaves usually mean overwatering. Let the top 2 inches of soil dry out before watering again.',
  },
  {
    problem: 'Drooping',
    roast:
      "This plant is slumped over like it just read your group chat. Posture this bad should come with a chiropractor referral.",
    tip: 'Drooping with dry soil means thirst. Water deeply until it drains from the bottom, then empty the saucer.',
  },
  {
    problem: 'Leggy growth',
    roast:
      "It's grown three feet toward the window and two leaves total. That's not a plant, that's a hostage reaching for the exit.",
    tip: 'Long, stretched stems mean it needs more light. Move it closer to a bright window or add a grow light.',
  },
  {
    problem: 'Brown crispy tips',
    roast:
      "The leaf tips are so crispy I could serve them with guac. Did you water this with hand sanitizer?",
    tip: "Brown crispy tips often come from low humidity or tap-water minerals. Try filtered water and group plants together to raise humidity.",
  },
  {
    problem: 'Overwatering',
    roast:
      "The soil is wetter than a rom-com airport scene. Your plant isn't thirsty, it's drowning in your emotional support.",
    tip: 'Always use a pot with drainage holes, and water only when the top inch of soil is dry to the touch.',
  },
  {
    problem: 'Underwatering',
    roast:
      "The soil has cracks like a desert documentary. David Attenborough is narrating this plant's final days as we speak.",
    tip: 'If soil pulls away from the pot edges, bottom-water: set the pot in a tray of water for 20 minutes to rehydrate it evenly.',
  },
  {
    problem: 'Sunburn',
    roast:
      "Those bleached patches say it went to Cancún without SPF. It's not glowing, it's medically crispy.",
    tip: 'Pale or bleached spots mean too much direct sun. Move it a few feet back from the window or use a sheer curtain.',
  },
  {
    problem: 'Dust buildup',
    roast:
      "I've seen cleaner leaves in an abandoned Blockbuster. You could write 'wash me' on this thing with your finger.",
    tip: 'Dust blocks light. Wipe leaves gently with a damp cloth every few weeks so the plant can photosynthesize properly.',
  },
  {
    problem: 'Root bound',
    roast:
      "The roots are escaping through the drainage holes like it's a prison break. Your plant is living in a studio apartment it outgrew in 2019.",
    tip: 'Roots circling the pot or poking out the bottom? Repot into a container just 1 to 2 inches wider, in spring if possible.',
  },
  {
    problem: 'Pest spots',
    roast:
      "Those little dots aren't freckles, they're tenants. Your plant is running an unlicensed Airbnb for bugs.",
    tip: 'Check leaf undersides for pests. Isolate the plant and wipe leaves with diluted insecticidal soap or neem oil weekly.',
  },
  {
    problem: 'Fungus gnats',
    roast:
      "There's a tiny fly squadron doing laps around this pot. It's not a plant anymore, it's an airport.",
    tip: 'Fungus gnats love soggy soil. Let the soil dry out more between waterings and use yellow sticky traps to catch adults.',
  },
  {
    problem: 'Leaf drop',
    roast:
      "It's shedding leaves faster than I shed motivation on a Monday. Your plant is quietly quitting.",
    tip: 'Sudden leaf drop often follows a change in location or temperature. Keep it in one spot, away from drafts and heaters.',
  },
  {
    problem: 'Brown spots',
    roast:
      "These brown spots look like a leopard print nobody asked for. Fashion-forward? No. Fungus-forward? Possibly.",
    tip: 'Brown spots with yellow halos can signal fungal issues. Remove affected leaves and avoid getting water on the foliage.',
  },
  {
    problem: 'Curling leaves',
    roast:
      "The leaves are curling up like they're trying to avoid eye contact with you. Honestly, same.",
    tip: 'Curling leaves can mean heat stress or thirst. Check the soil and keep the plant away from radiators and hot windows.',
  },
  {
    problem: 'Mushy stems',
    roast:
      "The stem has the structural integrity of overcooked spaghetti. Al dente this is not.",
    tip: 'Soft, mushy stems near the soil mean rot. Cut away the mushy parts, repot in fresh dry soil, and water less often.',
  },
  {
    problem: 'Pale new growth',
    roast:
      "The new leaves are so pale they look like they've been living in a basement playing video games. Touch grass. Literally, you're a plant.",
    tip: 'Pale new growth often means it is hungry. Feed with a balanced, diluted liquid fertilizer monthly during spring and summer.',
  },
  {
    problem: 'White crust on soil',
    roast:
      "There's a white crust on the soil like someone salted the earth. Were you trying to season it?",
    tip: 'White crust is mineral or fertilizer buildup. Flush the pot with plenty of water, or scrape off the top layer of soil.',
  },
  {
    problem: 'Lopsided growth',
    roast:
      "It's leaning so hard to one side it looks like it's trying to eavesdrop on your neighbors.",
    tip: 'Rotate your plant a quarter turn every week or two so all sides get equal light and it grows evenly.',
  },
  {
    problem: 'Tiny pot, huge plant',
    roast:
      "This plant is wearing its pot like a toddler's shoe. It's giving 'I'm fine' while clearly not being fine.",
    tip: 'If it tips over easily or dries out in a day or two, it needs a bigger, heavier pot with fresh potting mix.',
  },
  {
    problem: 'Suspiciously perfect',
    roast:
      "It looks... healthy? Suspicious. Either this is plastic or you're a plant witch. I'm not ruling out either.",
    tip: "Doing great? Keep a simple routine: check soil moisture weekly, water only when needed, and don't move it around much.",
  },
]

export const loadingMessages = [
  'Consulting the plant elders…',
  'Sharpening my wit (and my pruning shears)…',
  'Judging your watering schedule…',
  'Counting the crispy leaves…',
  'Asking the fungus gnats for their opinion…',
  'Photosynthesizing some insults…',
  'Warming up the roast…',
]

// Pick a random index, avoiding the one we just showed.
export function pickRandomIndex(length, excludeIndex = -1) {
  if (length <= 1) return 0
  let index
  do {
    index = Math.floor(Math.random() * length)
  } while (index === excludeIndex)
  return index
}
