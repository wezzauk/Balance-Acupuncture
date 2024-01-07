function showTreatingMeridian(sickMeridian) {
  printSickMeridian(treatingMeridians[sickMeridian].name);

  document.querySelector('.js-s1').innerHTML = `${treatingMeridians[sickMeridian].s1}`;
  document.querySelector('.js-s2').innerHTML = `${treatingMeridians[sickMeridian].s2}`;
  document.querySelector('.js-s3').innerHTML = `${treatingMeridians[sickMeridian].s3}`;
  document.querySelector('.js-s4').innerHTML = `${treatingMeridians[sickMeridian].s4}`;
  document.querySelector('.js-s5').innerHTML = `${treatingMeridians[sickMeridian].s5}`;
}

function printSickMeridian(sickMeridian) {
  document.querySelector('.js-sick-meridian').innerHTML = `Sick Meridian: ${sickMeridian}`;
}



const treatingMeridians = {
  lung: {
    name: 'Lung',
    s1: 'Spleen',
    s2: 'Bladder',
    s3: 'Large Intestine',
    s4: 'Bladder',
    s5: 'Liver'
  },
  largeIntestine: {
    name: 'Large Intestine',
    s1: 'Stomach',
    s2: 'Liver',
    s3: 'Lung',
    s4: 'Kidney',
    s5: 'Stomach'
  },
  spleen: {
    name: 'Spleen',
    s1: 'Lung',
    s2: 'Small Intestine',
    s3: 'Stomach',
    s4: 'Triple Burner',
    s5: 'Heart'
  },
  stomach: {
    name: 'Stomach',
    s1: 'Large Intestine',
    s2: 'Pericardium',
    s3: 'Spleen',
    s4: 'Pericardium',
    s5: 'Large Intestine'
  },
  heart: {
    name: 'Heart',
    s1: 'Kidney',
    s2: 'Gallbladder',
    s3: 'Small Intestine',
    s4: 'Gallbladder',
    s5: 'Spleen'
  },
  smallIntestine: {
    name: 'Small Intestine',
    s1: 'Bladder',
    s2: 'Spleen',
    s3: 'Heart',
    s4: 'Liver',
    s5: 'Bladder'
  },
  kidney: {
    name: 'Kidney',
    s1: 'Heart',
    s2: 'Triple Burner',
    s3: 'Bladder',
    s4: 'Large Intestine',
    s5: 'Pericardium'
  },
  bladder: {
    name: 'Bladder',
    s1: 'Small Intestine',
    s2: 'Lung',
    s3: 'Kidney',
    s4: 'Lung',
    s5: 'Small Intestine'
  },
  pericardium: {
    name: 'Pericardium',
    s1: 'Liver',
    s2: 'Stomach',
    s3: 'Triple Burner',
    s4: 'Stomach',
    s5: 'Kidney'
  },
  tripleBurner: {
    name: 'Triple Burner',
    s1: 'Gallbladder',
    s2: 'Kidney',
    s3: 'Pericardium',
    s4: 'Spleen',
    s5: 'Gallbladder'
  },
  liver: {
    name: 'Liver',
    s1: 'Pericardium',
    s2: 'Large Intestine',
    s3: 'Gallbladder',
    s4: 'Small Intestine',
    s5: 'Lung'
  },
  gallbladder: {
    name: 'Gallbladder',
    s1: 'Triple Burner',
    s2: 'Heart',
    s3: 'Liver',
    s4: 'Heart',
    s5: 'Triple Burner'
  }
}
