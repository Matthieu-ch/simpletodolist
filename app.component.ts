import { isNgTemplate } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simpletodolist';
  list: any[]=[]; // n'importe quelle liste
  onAddTask(item:string) : void { //méthode pour ajouter à la liste
    this.list.push({id:this.list.length,name : item}) // ajoute à la fin de la laiste la tâche
    
  }
  onRemoveTask(id: number) : void{ //méthode pour retirer l'élement de la liste
    this.list=this.list.filter(item=>item.id!==id);//
  
    
  }
/** /
  *onEditTask(item:string,id : number){          bouton modifier peu au point
    *this.onRemoveTask(id)
    *this.onAddTask(item)
    *
    *
  *}*/
  }
