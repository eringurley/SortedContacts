import Component from './Component.js';

class TableHeader extends Component {
    render() {
        const tableHead = this.renderDOM();
        const onSort = this.props.onSort;
        const buttons = tableHead.querySelectorAll('button');

        const propertyArray = ['firstName, lastName, favoriteFruit, age'];

        for(let i = 0; i < buttons.length; i++) {
            const currentButton = buttons[i];
            currentButton.addEventListener('click', () => {
                onSort({ property: propertyArray[i] });
            });
        }
        
        // const firstNameButton = buttons[0];
        // const lastNameButton = buttons[1];
        // const ageButton = buttons[2];
        // const favoriteFruit = buttons[3];
        
        // firstNameButton.addEventListener('click', () => {
        //     onSort({ property: 'firstName'});
        // });

    }

    renderTemplate() {
        return /*html*/ `
            <thead>
            <tr>
                <th><button>First Name: </button></th>
                <th><button>Last Name: </button></th>
                <th><button>Age: </button></th>
                <th><button>Favorite Fruit: </button></th>
            </tr>
            </thead>
        `;
    }
}

export default TableHeader;