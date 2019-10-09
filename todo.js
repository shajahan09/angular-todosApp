// JavaScript Document
var app = angular.module('myApp',[]);

app.controller('myCtrl',function($scope){
				var todos=[];				 
				$scope.todos = todos;			 
				$scope.addTodo = function(){
					$scope.todos.push({
							name: $scope.todoName,		  
							isComplete:	false	  
									  });
									}				 
								 
								 });