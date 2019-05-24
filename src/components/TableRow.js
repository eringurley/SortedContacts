import Component from './Component.js';

class TableRow extends Component { 
    // render() {
    // };
    
    
    renderTemplate() {
        const contact = this.props.contact;
        return /*html*/ `
            <tr>
                <td>${contact.firstName}</td>
                <td>${contact.lastName}</td>
                <td>${contact.age}</td>
                <td>${contact.favoriteFruit}</td>
            </tr>
        `;
    }
}
export default TableRow;