/* mochi interpreter */
!function(sith) {
  var aroma = sith.chroma
  var anime = sith.requestAnimationFrame
  var hype = document.documentElement
  var form = document.getElementById("morf")
  var moof = form.moof
  var bite = form.bite
  var woof = form.woof
  var numbers = /^\d+$/
  var letters = /^[a-z]+$/i
  var waitup = []
  var names = [
    "aliceblue",
    "antiquewhite",
    "aqua",
    "aquamarine",
    "azure",
    "beige",
    "bisque",
    "black",
    "blanchedalmond",
    "blue",
    "blueviolet",
    "brown",
    "burlywood",
    "cadetblue",
    "chartreuse",
    "chocolate",
    "coral",
    "cornflowerblue",
    "cornsilk",
    "crimson",
    "cyan",
    "darkblue",
    "darkcyan",
    "darkgoldenrod",
    "darkgray",
    "darkgreen",
    "darkgrey",
    "darkkhaki",
    "darkmagenta",
    "darkolivegreen",
    "darkorange",
    "darkorchid",
    "darkred",
    "darksalmon",
    "darkseagreen",
    "darkslateblue",
    "darkslategray",
    "darkslategrey",
    "darkturquoise",
    "darkviolet",
    "deeppink",
    "deepskyblue",
    "dimgray",
    "dimgrey",
    "dodgerblue",
    "firebrick",
    "floralwhite",
    "forestgreen",
    "fuchsia",
    "gainsboro",
    "ghostwhite",
    "gold",
    "goldenrod",
    "gray",
    "green",
    "greenyellow",
    "grey",
    "honeydew",
    "hotpink",
    "indianred",
    "indigo",
    "ivory",
    "khaki",
    "lavender",
    "lavenderblush",
    "lawngreen",
    "lemonchiffon",
    "lightblue",
    "lightcoral",
    "lightcyan",
    "lightgoldenrodyellow",
    "lightgray",
    "lightgreen",
    "lightgrey",
    "lightpink",
    "lightsalmon",
    "lightseagreen",
    "lightskyblue",
    "lightslategray",
    "lightslategrey",
    "lightsteelblue",
    "lightyellow",
    "lime",
    "limegreen",
    "linen",
    "magenta",
    "maroon",
    "mediumaquamarine",
    "mediumblue",
    "mediumorchid",
    "mediumpurple",
    "mediumseagreen",
    "mediumslateblue",
    "mediumspringgreen",
    "mediumturquoise",
    "mediumvioletred",
    "midnightblue",
    "mintcream",
    "mistyrose",
    "moccasin",
    "navajowhite",
    "navy",
    "oldlace",
    "olive",
    "olivedrab",
    "orange",
    "orangered",
    "orchid",
    "palegoldenrod",
    "palegreen",
    "paleturquoise",
    "palevioletred",
    "papayawhip",
    "peachpuff",
    "peru",
    "pink",
    "plum",
    "powderblue",
    "purple",
    "rebeccapurple",
    "red",
    "rosybrown",
    "royalblue",
    "saddlebrown",
    "salmon",
    "sandybrown",
    "seagreen",
    "seashell",
    "sienna",
    "silver",
    "skyblue",
    "slateblue",
    "slategray",
    "slategrey",
    "snow",
    "springgreen",
    "steelblue",
    "tan",
    "teal",
    "thistle",
    "tomato",
    "turquoise",
    "violet",
    "wheat",
    "white",
    "whitesmoke",
    "yellow",
    "yellowgreen"
  ]
  
  function named(s) {
    s = s.toLowerCase()
    return 0 <= names.indexOf(s)
  }

  function fresh(e, v) {
    if (v != e.value) e.value = v
  }

  function verse(k, v) {
    hype.style.setProperty(k, v)
  }
  
  function tape(rave) {
    switch (rave += "") {
      case "--tape-play":
      case "--tape-pink": return "#fbbfff"
      case "--tape-loud":
      case "--tape-yellow": return "#eee833"
      case "--tape-luvu":
      case "--tape-green": return "#44f477"   
      case "--tape-bluv": 
      case "--tape-blue": return "#11dff1"
      case "--tape-blaq": return "#0e0e0e"
      case "--tape-black": return "#090909"
      case "--tape-watt": return "#e0e0e0"
      case "--tape-white": return "#f5f5f5"
      default: return rave
    }
  }
  
  function enhance(v) {
    var tv = v.trim()
    
    if (letters.test(tv)) return named(tv) ? tv : waitup
    if (numbers.test(tv)) return waitup
    
    switch (tv) {
      case "#eco": return "#ec0"
      case "#eel": return "#ee1"
      case "#led": return "#1ed"
      case "#del": return "#de1"
      default: return tape(tv)
    }
  }

  function chorus() {
    var moom = enhance(moof.value)
    var woow = enhance(woof.value)
    
    if (moom === waitup || !aroma.valid(moom)) return
    if (woow === waitup || !aroma.valid(woow)) return
    
    var romeo = aroma.contrast(moom, woow).toFixed(2) 
    
    anime(function() {
      verse("--moof", moom)
      verse("--woof", woow)
      fresh(moof, moom)
      fresh(woof, woow)
      fresh(bite, romeo)
    })
  }

  chorus()

  form.oninput = chorus
  form.onchange = chorus
  form.onsubmit = chorus
}(this)
