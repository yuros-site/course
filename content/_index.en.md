---
title: "Homepage"
module:
blocks:
    - model: 
        name: globe
        type: general
        pool: hero
      render:
        width: "wrap" 
        shift: "critical"
      datum:
        head: "Evolution Has Began"
        lead: "Humanity from the Sand to Biner Era"
    - model: 
        name: main
        type: default
        pool: story
      render:
        width: "wrap" 
        shift: "deffer"
      datum: 
        head: "Stories Arround"
        lead: "Tell Stories, Share Ideas"
---