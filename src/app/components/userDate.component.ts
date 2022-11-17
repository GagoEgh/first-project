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
    color = "#";
    users = [
        {
            name: 'Babken',
            color:this.color
        },
        {
            name: 'Valod',
            color:this.color
        },
        {
            name: 'Hrach',
            color:this.color
        },
        {
            name: 'Ono',
            color:this.color
        }

    ]

    changeColor(index: number):void {
        this.color = "#";
        let random = Math.random().toString(16).slice(2,8);
        this.color+=random;
        this.users[index].color = this.color;
    }

    deleteUser(index: number): void {
        this.users.splice(index, 1);
    }

}