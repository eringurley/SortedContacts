/* eslint quotes: off*/
import sortList from '../src/sortList.js';

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
    "age": 29,
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

test('sort by age', assert => {
    //arrange
    const sortOptions = {
        property: 'age'
    };


    //act
    const sorted = sortList(contacts, sortOptions);

    //assert
    assert.deepEqual(sorted[George, Cantu, Pruitt]);

});

test('sort by fruit', assert => {
    //arrange
    const sortOptions = {
        property: 'favoriteFruit'
    };


    //act
    const sorted = sortList(contacts, sortOptions);

    //assert
    assert.deepEqual(sorted[Pruitt, Cantu, George]);

});