let a = [
      {name: 'Igor', app: 'google'},
      {name: 'Barsik', app: 'Budka'},
      {name: 'Kushka', app: 'Krugka'},
      {name: 'Valya', app: 'Kalya'}
];

function code(n,p){
      let s = a[n-1];
      console.log(s[p]);
}

code(1, 'name');

//prompt('which of 4?'), prompt("name || app ?")
