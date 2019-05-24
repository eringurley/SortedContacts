import Component from './Component.js';


class Sort extends Component {




    render(){
        const form = this.renderDOM()
        form.addEventListener('submit', event => {
            const formData=new FormData(form)
            const sortOptions ={
                property: formData.get('property'),
                direction: parseInt(formData.get('direcrion'))
            });
        form.addEventListener('input', () => {
    
        })
        renderTemplate(){
            return /*html*/ `
            <form class="sort"> 
            Sort On 
                <select name="property">
                    <option value="name">Name</option></select>
            Direction
            
         <form>
        }
    };