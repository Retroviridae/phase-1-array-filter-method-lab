// const result = drivers.filter(drivers => drivers.length > 3);

let findMatching = (drivers, condition) => {
    return drivers.filter(drivers => drivers.toLowerCase() == condition.toLowerCase())
    // let result = drivers.filter(drivers => drivers.toLowerCase() == condition.toLowerCase())
    // return result
}
let fuzzyMatch = (drivers, condition) => {
    return drivers.filter(drivers => drivers.slice(0,condition.length) === condition)
    // cond1 = 'Sa';
    // const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']
    // console.log(fuzzyMatch(drivers, cond1))
}

let matchName = (drivers,condition) => {
    return drivers.filter(drivers => drivers.name === condition)
}

const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];
 cond1= 'Bobby'
console.log(matchName(drivers,cond1));