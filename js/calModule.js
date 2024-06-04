import {  BtnsDiv } from "./VarsModule.js";
export class CalMod {

    btnArr = [
        { value: 0, nam: '0' },
        { value: 1, nam: '1' },
        { value: 2, nam: '2' },
        { value: 3, nam: '3' },
        { value: 4, nam: '4' },
        { value: 5, nam: '5' },
        { value: 6, nam: '6' },
        { value: 7, nam: '7' },
        { value: 8, nam: '8' },
        { value: 9, nam: '9' },
        { value: '+', nam: '+' },
        { value: '-', nam: '-' },
        { value: '*', nam: '*' },
        { value: '/', nam: '/' },
        { value: '', nam: '=' },
        { value: '', nam: 'Del' },
    ]

    DisplayBtns() {
        let btnss = '';
        for (let i = 0; i < this.btnArr.length; i++) {
            btnss += `
            <button class="btn"  value="${this.btnArr[i].value}">${this.btnArr[i].nam}</button>
            `
        }
        
        BtnsDiv.innerHTML = btnss;
    }
}
