/********************
 * HELPER FUNCTIONS *
 ********************/
const makeDino = (newSpecies, newPeriod, newDiet, newExtinct = false) => {

  const newDino = {
    species: newSpecies,
    period: newPeriod,
    carnivore: newDiet,
    extinct: newExtinct,
  }

  return newDino

}

const makeSingular = (dino) => {
  if (dino.species.endsWith('us')){
    empty = dino.species.slice(0, -2);
  }else {
    empty = dino.species;
  }
  const newSpecies = {
    species: empty,
    period: dino.period,
    carnivore: dino.carnivore,
    extinct: dino.extinct,
  }
  return  newSpecies
}

const truncateSpecies = (dinoObj) => {
  let same = "";
if(dinoObj.species.length > 8){
same = dinoObj.species.slice(0, 7) + "...";
}else {
  same = dinoObj.species
  
} 
    
    let newDino = {
      species: same,
      period: dinoObj.period,
      carnivore: dinoObj.carnivore,
      extinct: dinoObj.extinct,
    }
    return newDino

}

const truncateDinos = (dinos) => {
  return dinos.map(truncateSpecies)
}

const makeAllExtinct = (dinos) => {
  let newDenos = [...dinos]
  return newDenos.filter(make)
}

const singularizeDinos = (dinos) => {
  return dinos.map(makeSingular)
}







/***********************
 * IS FUNCTIONS *
 **********************/
const isHerbavore = (them) => {
  return (them.carnivore === false)
  }

const isCarnivore = (dino) => {
  return dino.carnivore
}

const isExtinct = (anotherParam) => {
  return anotherParam.extinct
}

const isTriassic = (givenDino) => {
  return givenDino.period === 'Triassic'
}
const isJurassic = (givenDino) => {
  return givenDino.period === 'Jurassic'
}

const isCretaceous = (givenDino) => {
  return givenDino.period === 'Cretaceous'
}




/***********************
 * ITERATION FUNCTIONS *
 **********************/
// const singularizeDinos = (dinos) => {
//   const newDinos = dinos.map(makeSingular)}

const carnivoresOnly = (deno) => {
  return deno.filter(isCarnivore)
}

const herbivoresOnly = (deno) => {
  return deno.filter(isHerbavore)
}

const makeExtinct = (deno) => {
  const newDino = makeDino(deno.species, deno.period, deno.carnivore, deno.extinct = true)
  return newDino
}

const extinctOnly = (extinctDinos) => {
  return extinctDinos.filter(isExtinct)
}

const notExtinct = () => {
  
}

const triassicOnly = (deno) => {
  return deno.filter(isTriassic)
}

const notTriassic = () => {
  
}


/*********************************
 * TEST SETUP CODE - DON'T TOUCH!*
 ********************************/

  if (typeof makeDino === 'undefined') {
    makeDino = undefined
  }

  if (typeof makeSingular === 'undefined') {
    makeSingular = undefined
  }

  if (typeof truncateSpecies === 'undefined') {
    truncateSpecies = undefined
  }

  if (typeof makeExtinct === 'undefined') {
    makeExtinct = undefined
  }

  if (typeof isCarnivore === 'undefined') {
    isCarnivore = undefined
  }

  if (typeof isExtinct === 'undefined') {
    isExtinct = undefined
  }

  if (typeof isTriassic === 'undefined') {
    isTriassic = undefined
  }

  if (typeof isJurassic === 'undefined') {
    isJurassic = undefined
  }

  if (typeof isCretaceous === 'undefined') {
    isCretaceous = undefined
  }

  if (typeof isFirstAlphabeticallyBySpecies === 'undefined') {
    isFirstAlphabeticallyBySpecies = undefined
  }

  if (typeof extinctIsLast === 'undefined') {
    extinctIsLast = undefined
  }

  if (typeof carnivoreIsFirst === 'undefined') {
    carnivoreIsFirst = undefined
  }

  if (typeof isInPeriodOrder === 'undefined') {
    isInPeriodOrder = undefined
  }

  if (typeof singularizeDinos === 'undefined') {
    singularizeDinos = undefined
  }

  if (typeof truncateDinos === 'undefined') {
    truncateDinos = undefined
  }

  if (typeof makeAllExtinct === 'undefined') {
    makeAllExtinct = undefined
  }

  if (typeof carnivoresOnly === 'undefined') {
    carnivoresOnly = undefined
  }

  if (typeof herbivoresOnly === 'undefined') {
    herbivoresOnly = undefined
  }

  if (typeof extinctOnly === 'undefined') {
    extinctOnly = undefined
  }

  if (typeof notExtinct === 'undefined') {
    notExtinct = undefined
  }

  if (typeof triassicOnly === 'undefined') {
    triassicOnly = undefined
  }

  if (typeof notTriassic === 'undefined') {
    notTriassic = undefined
  }

  if (typeof bySpecies === 'undefined') {
    bySpecies = undefined
  }

  if (typeof byExtinctLast === 'undefined') {
    byExtinctLast = undefined
  }

  if (typeof byCarnivoresFirst === 'undefined') {
    byCarnivoresFirst = undefined
  }

  if (typeof byPeriod === 'undefined') {
    byPeriod = undefined
  }



module.exports = {
  makeDino,
  makeSingular,
  truncateSpecies,
  makeExtinct,
  isCarnivore,
  isExtinct,
  isTriassic,
  isJurassic,
  isCretaceous,
  isFirstAlphabeticallyBySpecies,
  extinctIsLast,
  carnivoreIsFirst,
  isInPeriodOrder,
  singularizeDinos,
  truncateDinos,
  makeAllExtinct,
  carnivoresOnly,
  herbivoresOnly,
  extinctOnly,
  notExtinct,
  triassicOnly,
  notTriassic,
  bySpecies,
  byExtinctLast,
  byCarnivoresFirst,
  byPeriod,
}
