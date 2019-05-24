import Component from './Component.js';

class TableRow extends Component { 
    // render() {
    // };
    
    
    renderTemplate() {
        const contact = this.props.contact;
        return /*html*/ `
            <tr>
                <td>${contact.firstName}</td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        `;
    }
}
export default TableRow;