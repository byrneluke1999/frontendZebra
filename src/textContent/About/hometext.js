//in order to keep the javaScript files as concise and clear as possible, any and all text across the application is written here.
//This file is imported and the individual pieces of text can be accesssed.

const content = {
  placeholderText: `The zebra puzzle is a well-known logic puzzle. Many versions of the puzzle exist, 
  including a version published in Life International
  magazine on December 17, 1962. The March 25, 1963, issue of Life
  contained the solution and the names of several hundred successful
  solvers from around the world. The puzzle is often called Einstein's
  Puzzle or Einstein's Riddle because it is said to have been invented by
  Albert Einstein as a boy; it is also sometimes attributed to Lewis
  Carroll. However, there is no known evidence for Einstein's or Carroll's
  authorship and the Life International version of the puzzle mentions
  brands of cigarette, such as Kools, that did not exist during Carroll's
  lifetime or Einstein's boyhood. The Zebra puzzle has been used as a
  benchmark in the evaluation of computer algorithms for solving
  constraint satisfaction problems.`,

  rule1: `1. There are 5 houses.`,
  rule2: `2. The Englishman lives in the red house.`,
  rule3: `3. The spaniard owns the dog.`,
  rule4: `4. Coffee is drunk in the green house.`,
  rule5: `5. The Ukrainian drinks tea.`,
  rule6: `6. The green house is immediately to the right of the ivory house.`,
  rule7: `7. The Old Gold smoker owns snails.`,
  rule8: `8. Kools are smoked in the yellow house.`,
  rule9: `9. Milk is drunk in the middle house.`,
  rule10: `10. The Norwegian lives in the first house.`,
  rule11: `11. The man who smokes Chesterfields lives in the house next to the man with the fox.`,
  rule12: `12. Kools are smoked in a house next to the house where the horse is kept.`,
  rule13: `13. The Lucky Strike smoker drinks orange juice.`,
  rule14: `14. The Japanese smokes Parliaments.`,
  rule15: `15. The Norwegian lives next to the blue house.`,

  about: `This web application serves as a portal for understanding the zebra uzzle. As part of my Final Year Project I developed a backend and frontend
   application that solves the zebra puzzle, as it is specified on Wikapedia. The backend solves the puzzle, parses the required data and stores it in a JSON 
   format, which the frontend makes use of by running a simulation demonstrating how a solution is reached. `,
  about2:
    "The Zebra Puzzle: The benchmark in solving constraint satisfaction problems.",
  about3: `After spending time understanding constraint satisfaction problems, I designed this frontend application to visualise how The Zebra Puzzle
  is solved. Clicking the button below (or the 'Simulation' tab) will direct you to the simulation, where there are instructions on how it works. For more
  information on The Zebra Puzzle, what it is, the constraints for example use the arrows to the left and right of the screen to move to the next slide.`,

  puzzleDesc: `The Zebra Puzzle is a constraint satisfaction problem. The idea is that there are five houses, aligned one by one, each with five attributes:
   Pet, Drink, Colour, Smoke, Nationality. Each attribute has five possible values, but an attribute may only contain one of those values. The puzzle has fifteen
   constraints which limit the values that attributes can contain. A solution is arrived at when every attribute is assigned a value satisfying the constraints. Those
    constraints can be seen on the next slide. Note that each rule contains a snippet of information, concerning the attributes listed.`,

  //steps to understanding how simulation works
  step1: `Below is a button to commence the simulation and a titlebar with information on the current constraint.`,
  step2: `Clicking the button will commence the simulation and a row of five houses, the street, will appear.`,
  step3: `Clicking the
  button again will apply the next constraint. Continue clicking for newer streets to render as constraints are applied.`,
  step4: ` Clicking on each house will individually show the associated attribute values
  at that constraint application.`,
  step5: `When the button appears disabled the simulation has ended and scrolling to the bottom of the page will show the solution.`,
  step6: `Whenever branching occurs, ie. there are multiple possibilities for the assignment of values to attributes, the constraint title bar
  will be labelled with the constraint and some number referring to how many branches there are at this application of a constraint. Scrolling 
  back up the page you can compare the possibile assignment of values to attributes.`,
  email: `If for some reason, this app is not functioning as it should (the server hosting the backend may have switched off accidentally), please contact
  me at byrnel38@tcd.ie`,

  linkText: `Below the github repositories with the code for the front- & back ends are linked.`,

  //constraint ordering
  orderingC: `The ordering of constraints is integral in reducing the run time of the program solving this problem and in reducing the time spent finding
  a solution. Two simulations can be foudn on this website, which solve the puzzle according to two different orders of constraints. The onn optimal ordering is the default ordering, as they are seen on the previous slide. The optimal
  ordering was found through testing (detaiing in the report accompanying this project): it is [1,9,10,15,6,2,4,8,12,3,5,13,14,7,11]. Comparing 
  the two simulations, the drastic difference in time taken to solve the puzzle can be seen. `,

  //attribute-vals
  petVals: `Pet: zebra, dog, fox, horse, snail`,
  drinkVaks: `Drink: coffee, milk, tea, orange juice, water`,
  colorVals: `Colour: red, blue, green, yellow, ivory`,
  smokeVals: `Smoke: Old Gold, Parliaments, Kools, Chesterfields, Lucky Strike`,
  natVals: `Nationality: English, Spanish, Ukranian, Japanese, Norwegian`,

  //key
  title: `Abbreviated attribute values stand for the following:`,
  attrKey: `dri = drink | col = color | smo = smoke | nat = nationality | pet = pet`,
  smokeKey: `koo = kools | luc = Lucky Strike | che = Chesterfields | old = Old Gold | par = Parliaments`,
  drinkKey: `mil = milk | ora = orange juice | cof = coffee | tea = tea | wat = water`,
  petKey: `dog = dog | zebra = zebra | fox = fox | hor = horse | sna = snail`,
  natKey: `eng = English | spa = Spanish | nor = Norwegian | jap = Japanese | ukr = Ukranian`,
  colorKey: `red = red | blu = blue | gre =  green | ivo = ivory | yel = yellow`,
};

export default content;
