let back = document.getElementById('back');
back.addEventListener('click', () => {
    window.location.href = "";
})

//Count users
var users = localStorage.length;
console.log(users);

//Add user
var increment = function(id){
    key = JSON.stringify(users+1);
    value = JSON.stringify(id);
    localStorage.setItem(key, value);
}

//Get values from local storage
var getValues = function() {
    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;
    while ( i-- ) {
        values.push( JSON.parse(localStorage.getItem(keys[i])) );
    }
    return values;
}

//Count ratings mean
var mean = list => list.reduce((prev, curr) => prev + curr, 0) / list.length;
var ratings = mean(getValues());