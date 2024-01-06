const treatingMeridians = {
  lung: {
    s1: 'Spleen',
    s2: 'Bladder',
    s3: 'Large Intestine',
    s4: 'Bladder',
    s5: 'Liver'
  },
  largeIntestine: {
    s1: 'Stomach',
    s2: 'Liver',
    s3: 'Lung',
    s4: 'Kidney',
    s5: 'Stomach'
  },
  spleen: {
    s1: 'Lung',
    s2: 'Small Intestine',
    s3: 'Stomach',
    s4: 'Triple Burner',
    s5: 'Heart'
  },
  stomach: {
    s1: 'Large Intestine',
    s2: 'Pericardium',
    s3: 'Spleen',
    s4: 'Pericardium',
    s5: 'Large Intestine'
  },
  heart: {
    s1: 'Kidney',
    s2: 'Gallbladder',
    s3: 'Small Intestine',
    s4: 'Gallbladder',
    s5: 'Spleen'
  },
  smallIntestine: {
    s1: 'Bladder',
    s2: 'Spleen',
    s3: 'Heart',
    s4: 'Liver',
    s5: 'Bladder'
  },
  kidney: {
    s1: 'Heart',
    s2: 'Triple Burner',
    s3: 'Bladder',
    s4: 'Large Intestine',
    s5: 'Pericardium'
  },
  bladder: {
    s1: 'Small Intestine',
    s2: 'Lung',
    s3: 'Kidney',
    s4: 'Lung',
    s5: 'Small Intestine'
  },
  pericardium: {
    s1: 'Liver',
    s2: 'Stomach',
    s3: 'Triple Burner',
    s4: 'Stomach',
    s5: 'Kidney'
  },
  tripleBurner: {
    s1: 'Gallbladder',
    s2: 'Kidney',
    s3: 'Pericardium',
    s4: 'Spleen',
    s5: 'Gallbladder'
  },
  liver: {
    s1: 'Pericardium',
    s2: 'Large Intestine',
    s3: 'Gallbladder',
    s4: 'Small Intestine',
    s5: 'Lung'
  },
  gallbladder: {
    s1: 'Triple Burner',
    s2: 'Heart',
    s3: 'Liver',
    s4: 'Heart',
    s5: 'Triple Burner'
  }
}

function showTreatingMeridian(sickMeridian) {
  document.querySelector('.js-s1').innerHTML = `System 1: ${treatingMeridians[sickMeridian].s1}`;
  document.querySelector('.js-s2').innerHTML = `System 2: ${treatingMeridians[sickMeridian].s2}`;
  document.querySelector('.js-s3').innerHTML = `System 3: ${treatingMeridians[sickMeridian].s3}`;
  document.querySelector('.js-s4').innerHTML = `System 4: ${treatingMeridians[sickMeridian].s4}`;
  document.querySelector('.js-s5').innerHTML = `System 5: ${treatingMeridians[sickMeridian].s5}`;
}
