/* mochi interpreter */
!function(sith) {
  var aroma = sith.chroma
  var anime = sith.requestAnimationFrame
  var hype = document.documentElement
  var form = document.getElementById("morf")
  var moof = form.moof
  var bite = form.bite
  var woof = form.woof

  function fresh(e, v) {
    v = v || 0
    if (v != e.value) e.value = v
  }

  function verse(k, v) {
    hype.style.setProperty(k, v)
  }

  function chorus() {
    var moof = form.moof.value
    var woof = form.woof.value
    var romeo = aroma.contrast(moof, woof).toFixed(2)
    anime(function() {
      verse("--moof", moof)
      verse("--woof", woof)
      fresh(bite, romeo)
    })
  }

  chorus()

  form.oninput = chorus
  form.onchange = chorus
  form.onsubmit = chorus
}(this)
