/* eslint quotes: off*/
const test = QUnit.test;

QUnit.module('sort list');

const Cantu =
{
    "age": 28,
    "firstName": "Cantu",
    "lastName": "Sullivan",
    "favoriteFruit": "banana"
};

const Pruitt =
{
    "age": 32,
    firstName: 'Pruitt',
    "lastName": "Montgomery",
    "favoriteFruit": "apple"
};
const George =
{
    "age": 28,
    "firstName": "George",
    "lastName": "Nicholson",
    "favoriteFruit": "strawberry"
};


const contacts = [Cantu, Pruitt, George];

test('sort by first name', assert => {
    //arrange
    const sortOptions = {
        property: 'firstName'
    };


    //act
    const sorted = sortList(contacts, sortOptions);

    //assert
    assert.deepEqual(sorted[Cantu, George, Pruitt]);


});

function sortList(contacts, sortOptions) {
    const property = sortOptions.property;

    return contacts.slice().sort((a, b) => {
        if(a[property] > b[property]) {
            return 1;
        }
        else if(b[property] > a[property]) {
            return -1;
        }
        return 0;
    });
}