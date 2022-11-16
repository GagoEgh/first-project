import { Component } from "@angular/core";

interface Color<T> {
    [key: string]: any
}

@Component({
    selector: 'app-userDate',
    templateUrl: './userDate.component.html',
    styleUrls: ["./userDate.component.css"]
})
export class UserDate {
    users = [
        {
            name: 'Babken',
            colorBg: <Color<boolean>>{
                "red": false,
                "blue": false,
                "green": false,
                "gold": false
            }
        },
        {
            name: 'Valod',
            colorBg: <Color<boolean>>{
                "red": false,
                "blue": false,
                "green": false,
                "gold": false,
            }
        },
        {
            name: 'Hrach',
            colorBg: <Color<boolean>>{
                "red": false,
                "blue": false,
                "green": false,
                "gold": false,
            }
        },
        {
            name: 'Ono',
            colorBg: <Color<boolean>>{
                "red": false,
                "blue": false,
                "green": false,
                "gold": false,
            }
        }

    ]

    changeColor(index: number):void {

        let keys = Object.keys(this.users[index].colorBg);
        let i = Math.floor(Math.random() * keys.length);
        this.users[index].colorBg[keys[i]] = true;

        for (let k = 0; k < this.users.length; k++) {
            if(!this.users[k].colorBg[keys[i]]){
                delete this.users[k].colorBg[keys[i]]
            }
            
        }
    }

    deleteUser(index: number): void {
        this.users.splice(index, 1);
    }

}