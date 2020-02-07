import { Component, OnInit,Input, Output } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { SearchCriteriaComponent } from '../search-criteria/search-criteria.component';
import { EventEmitter } from 'events';
 

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 recipes;
  


  constructor(private Recipe : RecipeService) { }
  userInput : any
  
   
  ngOnInit() {
    

  }
  onSubmit({userInput, calories,vegetarian,vegan, treenuts}){
    console.log('getting recipes');
    return this.Recipe.getRecipes(userInput,calories,vegetarian,vegan, treenuts).subscribe((data:any) => this.recipes = data.hits)

    
  }
  

}
