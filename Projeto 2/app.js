let data = [
    {
        name: 'eunbi',
        age: '25'
    },
    {
        name: 'sakura',
        age: '25'
    },
    {
        name: 'minju',
        age: '20'
    },
    {
        name: 'chayeon',
        age: '24'
    },
    {
        name: 'yuri',
        age: '22'
    },
    {
        name: 'yena',
        age: '21'
    },
    {
        name: 'yujim',
        age:'19'
    },
];

const info = document.querySelector('#info');

let details = data.map(function(item){
    return '<div>' + 'Nome: ' + item.name + ' Idade: ' + item.age + '</div>';
});

info.innerHTML = details.join('\n');